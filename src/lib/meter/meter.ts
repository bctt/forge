import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { setDefaultAria } from '../core/utils/a11y-utils';
import { METER_CONSTANTS, MeterDensity, MeterInnerShape, MeterShape, MeterStatus, MeterTheme } from './meter-constants';

import styles from './meter.scss';

export interface IMeterComponent extends LitElement {
  value: number;
  min: number;
  max: number;
  low: number | null | undefined;
  high: number | null | undefined;
  optimum: number | null | undefined;
  tickmarks: boolean;
  density: MeterDensity;
  shape: MeterShape;
  innerShape: MeterInnerShape;
  theme: MeterTheme;
  muted: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-meter': IMeterComponent;
  }
}

/**
 * @tag forge-meter
 *
 * @summary Meters display a scalar value within a defined range.
 *
 * @attribute {string} aria-valuetext - Defines a text alternative for the current value. Set this if it would be inaccurate to read the value as a percentage.
 *
 * @cssproperty --forge-meter-background - The background color of the meter.
 * @cssproperty --forge-meter-color - The color of the meter's bar.
 * @cssproperty --forge-meter-height - The block size of the meter.
 * @cssproperty --forge-meter-shape - The border radius of the meter.
 * @cssproperty --forge-meter-bar-inner-shape - The border radius of the meter's bar.
 * @cssproperty --forge-meter-tickmarks - The number of tickmarks to display.
 * @cssproperty --forge-meter-tickmark-opacity - The opacity of the tickmarks.
 * @cssproperty --forge-meter-transition-duration - The duration of transitions.
 * @cssproperty --forge-meter-transition-timing - The timing function of transitions.
 *
 * @csspart root - The root container element.
 * @csspart bar - The bar representing the value.
 */
@customElement(METER_CONSTANTS.elementName)
export class MeterComponent extends LitElement implements IMeterComponent {
  /* @ignore */
  public static styles = unsafeCSS(styles);
  public static formAssociated = true;

  /**
   * The current value of the meter.
   * @default 0
   * @attribute
   */
  @property({ type: Number, reflect: true }) public value: number = METER_CONSTANTS.numbers.DEFAULT_VALUE;
  /**
   * The minimum value of the meter.
   * @default 0
   * @attribute
   */
  @property({ type: Number, reflect: true }) public min: number = METER_CONSTANTS.numbers.DEFAULT_MIN;
  /**
   * The maximum value of the meter.
   * @default 1
   * @attribute
   */
  @property({ type: Number, reflect: true }) public max: number = METER_CONSTANTS.numbers.DEFAULT_MAX;
  /**
   * The low value threshold.
   * @default 0
   * @attribute
   */
  @property({ type: Number, reflect: true }) public low: number | null | undefined;
  /**
   * The high value threshold.
   * @default 1
   * @attribute
   */
  @property({ type: Number, reflect: true }) public high: number | null | undefined;
  /**
   * Indicates the region of the optimum value.
   * @default 1
   * @attribute
   */
  @property({ type: Number, reflect: true }) public optimum: number | null | undefined;
  /**
   * Whether to display tickmarks.
   * @default false
   * @attribute
   */
  @property({ type: Boolean, reflect: true }) public tickmarks = false;
  /**
   * The shape of the meter.
   * @default 'default'
   * @attribute
   */
  @property({ reflect: true }) public shape: MeterShape = 'default';
  /**
   * The shape of the bar.
   * @default 'default'
   * @attribute
   */
  @property({ reflect: true, attribute: 'inner-shape' }) public innerShape: MeterInnerShape = 'default';
  /**
   * The density of the meter.
   * @default 'medium'
   * @attribute
   */
  @property({ reflect: true }) public density: MeterDensity = 'medium';
  /**
   * The theme of the meter.
   * @default 'default'
   * @attribute
   */
  @property({ reflect: true }) public theme: MeterTheme = 'default';
  /**
   * Whether the theme is muted.
   * @default false
   * @attribute
   */
  @property({ type: Boolean, reflect: true }) public muted = false;

  /* @ignore */
  public get labels(): NodeList {
    return this._internals.labels;
  }

  /* @ignore */
  public get form(): HTMLFormElement | null {
    return this._internals.form;
  }

  @state() private _percentage = 0;
  @state() private _status: MeterStatus = 'optimal';
  @state() private _segmented = false;

  /* @ignore */
  private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  public connectedCallback(): void {
    super.connectedCallback();
    setDefaultAria(this, this._internals, {
      role: 'meter',
      ariaValueNow: `${this.value}`,
      ariaValueMin: `${this.min}`,
      ariaValueMax: `${this.max}`
    });
  }

  public willUpdate(changedProperties: PropertyValues<this>): void {
    const keys = Array.from(changedProperties.keys());
    if (keys.some(key => ['value', 'min', 'max', 'low', 'high', 'optimum'].includes(key.toString()))) {
      this._getStatus();
    }
    if (keys.some(key => ['low', 'high'].includes(key.toString()))) {
      this._getSegmented();
    }

    // Update default ARIA when the current, min, or max value changes.
    changedProperties.forEach((_, key) => {
      switch (key) {
        case 'value':
          setDefaultAria(this, this._internals, { ariaValueNow: `${this.value}` });
          break;
        case 'min':
          setDefaultAria(this, this._internals, { ariaValueMin: `${this.min}` });
          break;
        case 'max':
          setDefaultAria(this, this._internals, { ariaValueMax: `${this.max}` });
          break;
      }
    });
  }

  /* @internal */
  public render(): TemplateResult {
    return html`
      <div
        part="root"
        class=${classMap({
          'forge-meter': true,
          segmented: this._segmented,
          optimal: this._status === 'optimal',
          suboptimal: this._status === 'suboptimal',
          'least-optimal': this._status === 'least-optimal',
          lowest: this._percentage === 0,
          tickmarks: this.tickmarks
        })}>
        <div part="bar" class="bar" style=${styleMap({ '--percentage': this._percentage + '%' })}></div>
      </div>
    `;
  }

  /**
   * Determines the percentage of the meter that's filled and whether the value is optimal,
   * suboptimal, or least optimal.
   */
  private _getStatus(): void {
    const range = this.max - this.min;
    this._percentage = range ? ((this.value - this.min) / range) * 100 : 0;

    // Clamp the percentage between 0 and 100. Round to 3 decimal places to avoid floating point errors.
    this._percentage = +Math.max(0, Math.min(100, this._percentage)).toFixed(3);

    // Fallback to 0 if the percentage is NaN.
    if (isNaN(this._percentage)) {
      this._percentage = 0;
    }

    // Use working values in case the properties are not set.
    const low = this.low ?? this.min;
    const high = this.high ?? this.max;
    const optimum = this.optimum ?? this.max;

    // The region that contains the optimum value is optimal. A region is suboptimal if it
    // neighbors the optimal region and least-optimal otherwise.
    if (optimum < low) {
      this._status = this.value < low ? 'optimal' : this.value < high ? 'suboptimal' : 'least-optimal';
    } else if (optimum > high) {
      this._status = this.value > high ? 'optimal' : this.value > low ? 'suboptimal' : 'least-optimal';
    } else {
      this._status = this.value < low ? 'suboptimal' : this.value > high ? 'suboptimal' : 'optimal';
    }
  }

  /**
   * Determines whether low and high ranges are set. The meter is segmented if either the low or
   * high property is defined.
   *
   * When the meter is segmented the default or themed color scheme is replaced by semantic colors
   * corresponding to optimal, suboptimal, and least optimal values.
   */
  private _getSegmented(): void {
    this._segmented = this.low != null || this.high != null;
  }
}
