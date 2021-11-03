if (typeof globalThis === 'undefined' && typeof window !== 'undefined') {
  window.globalThis = window;
}
