/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IndexPage {}
  interface WcCircleProgress {
    'progressAmount': string;
    'progressColor': string;
  }
}

declare global {


  interface HTMLIndexPageElement extends Components.IndexPage, HTMLStencilElement {}
  const HTMLIndexPageElement: {
    prototype: HTMLIndexPageElement;
    new (): HTMLIndexPageElement;
  };

  interface HTMLWcCircleProgressElement extends Components.WcCircleProgress, HTMLStencilElement {}
  const HTMLWcCircleProgressElement: {
    prototype: HTMLWcCircleProgressElement;
    new (): HTMLWcCircleProgressElement;
  };
  interface HTMLElementTagNameMap {
    'index-page': HTMLIndexPageElement;
    'wc-circle-progress': HTMLWcCircleProgressElement;
  }
}

declare namespace LocalJSX {
  interface IndexPage {}
  interface WcCircleProgress {
    'progressAmount'?: string;
    'progressColor'?: string;
  }

  interface IntrinsicElements {
    'index-page': IndexPage;
    'wc-circle-progress': WcCircleProgress;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'index-page': LocalJSX.IndexPage & JSXBase.HTMLAttributes<HTMLIndexPageElement>;
      'wc-circle-progress': LocalJSX.WcCircleProgress & JSXBase.HTMLAttributes<HTMLWcCircleProgressElement>;
    }
  }
}


