/*
 * @Author: zhuangyu
 * @Date: 2023-02-20 16:35:50
 * @LastEditors: zhuangyu
 * @LastEditTime: 2023-03-13 13:40:44
 * @Description: 一些描述
 */

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
declare module '*.webp';

declare module '*.svg?react' {
  import React from 'react';
  const content: React.FC<React.SVGAttributes<React.ReactSVGElement>>;
  export default content;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.lottie' {
  const src: string;
  export default src;
}

