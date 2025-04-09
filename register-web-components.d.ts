/* eslint-disable @typescript-eslint/no-namespace */
// create a file called "register-web-components.ts"
import { JSX as LocalJSX } from '@justifi/webcomponents/dist/loader';
import { HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
  Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
};

declare global {
  export namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> { }
  }
}