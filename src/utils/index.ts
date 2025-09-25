import { ELEMENT_SEPARATOR, MODIFIER_SEPARATOR } from "./constants";

// 传入页面名称
export const formatClassName = (path?: string) => {
  const base = path ? `${path}` : '';
  return function (block?: string | string[], other?: string | string[]) {
    // 如果没有传入path，就当不使用bem，直接返回对应的class
    if (!base) {
      return Array.isArray(block) ? block.join(' ') : block || '';
    }
    const blockClass = Array.isArray(block)
      ? block.length > 1
        ? `${block[0]}${MODIFIER_SEPARATOR}${block[1]}`
        : block[0] || ''
      : block;
    const otherClass = Array.isArray(other) ? other.join(' ') : other || '';
    return (
      (blockClass ? `${base}${ELEMENT_SEPARATOR}${blockClass}` : base) +
      (otherClass ? ` ${otherClass}` : '')
    );
  };
};

export const clsx = (...args: string[]) => {
  return args.join(' ');
};