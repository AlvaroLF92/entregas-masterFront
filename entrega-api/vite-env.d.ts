/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_USE_MOCK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
