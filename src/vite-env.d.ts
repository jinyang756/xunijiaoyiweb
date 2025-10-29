/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_CUSTOM_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}