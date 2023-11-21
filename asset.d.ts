// eslint-disable-next-line prettier/prettier
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg?react' {
    import React = require('react');

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}