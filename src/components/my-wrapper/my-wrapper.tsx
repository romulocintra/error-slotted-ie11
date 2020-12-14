import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-wrapper',
  styleUrl: 'my-wrapper.scss',
  shadow: true,
})
export class MyWrapper {
  @Element() el: HTMLElement;

  componentDidLoad() {
    console.log('[MyWrapper] componendDidLoad');
    // this.el
    //   .querySelector('my-component')
    //   .shadowRoot.querySelector('button')
    //   .setAttribute('style', 'font-size: 50px');
  }

  render() {
    return (
      <div class="container">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </div>
    );
  }
}
