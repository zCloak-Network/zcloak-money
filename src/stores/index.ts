/**
 * 全局的一些状态管理Store
 */

import { makeAutoObservable, runInAction } from 'mobx';

export class StoreMobx {
  isMobile: boolean = false;

  private cleanupResizeListener: (() => void) | null = null;

  constructor() {
    makeAutoObservable(this);
    this.updateScreenSize();
    this.setupResizeListener();
  }

  private updateScreenSize = () => {
    const width = window.innerWidth;
    runInAction(() => {
      // 移动端的分界暂定768px，在tailwindcss中可以为>=768px的样式添加md:前缀
      this.isMobile = width < 768;
    });
  };

  private setupResizeListener = () => {
    // 使用防抖避免频繁更新
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdate = () => {
      timeoutId && clearTimeout(timeoutId);
      timeoutId = setTimeout(this.updateScreenSize, 16);
    };

    window.addEventListener('resize', debouncedUpdate);
    
    // 保存清理函数
    this.cleanupResizeListener = () => {
      window.removeEventListener('resize', debouncedUpdate);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  };

  dispose() {
    if (this.cleanupResizeListener) {
      this.cleanupResizeListener();
      this.cleanupResizeListener = null;
    }
  }
}

const GlobalStore = new StoreMobx();
export default GlobalStore;
