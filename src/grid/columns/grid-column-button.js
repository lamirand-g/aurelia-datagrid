import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@inject(Element, Grid)
export class GridColumnButton {
  @bindable caption;
  @bindable class;
  @bindable heading;

  constructor(element, grid) {
    this.element = element;
    this.grid = grid;
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
  }

  attached() {
    this.button = this.element.getElementsByTagName('BUTTON')[0];
    this.button.addEventListener('click', this.handleButtonClick);
  }

  detached() {
    this.button.removeEventListener('click', this.handleButtonClick);
  }

  handleButtonClick = (event) => {
    let clickEvent = this.createCustomEvent('click', event);
    this.element.dispatchEvent(clickEvent);

    // TODO: For backwards compatibility: Remove in future version
    let buttonClickEvent = this.createCustomEvent('button-click', event);
    this.element.dispatchEvent(buttonClickEvent);
  }

  createCustomEvent(eventName, event) {
    let customEvent;

    if (window.CustomEvent) {
      customEvent = new CustomEvent(eventName, {
        detail: {
          value: event.value
        },
        bubbles: false
      });
    } else {
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(eventName, true, true, {value: event.val});
    }
    return customEvent;
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let config = this.grid.cssFrameworkConfiguration.buttonClass;

      this.class = config;
    }
  }
}
