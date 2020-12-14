import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @Prop({ reflect: true }) bold: boolean;

  componentDidLoad() {
    console.log('[MyComponent] componendDidLoad');
  }

  render() {
    return (
      <Host class="item">
      <button class="btn customIEcss ">
        <slot/>
      </button>
      </Host>
    );
  }
}
