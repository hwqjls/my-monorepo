/* Vite */
declare interface ViteEnv {
  VITE_ROUTER_MODE: 'hash' | 'history'
}

// 继承后就可以全局import.meta.env.引用到ViteEnv
interface ImportMetaEnv extends ViteEnv {
  __: unknown
}