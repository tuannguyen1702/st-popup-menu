/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface StPopupMenu {
      'delay': number;
      'target': string;
      'trigger': string;
    }
  }


    interface HTMLStPopupMenuElement extends StencilComponents.StPopupMenu, HTMLStencilElement {}

    var HTMLStPopupMenuElement: {
      prototype: HTMLStPopupMenuElement;
      new (): HTMLStPopupMenuElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'st-popup-menu': JSXElements.StPopupMenuAttributes;
    }
  }

  namespace JSXElements {

    export interface StPopupMenuAttributes extends HTMLAttributes {
      'delay'?: number;
      'target'?: string;
      'trigger'?: string;
    }
  }

  interface HTMLElementTagNameMap {
    'st-popup-menu': HTMLStPopupMenuElement
  }

  interface ElementTagNameMap {
    'st-popup-menu': HTMLStPopupMenuElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;