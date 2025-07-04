declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";

  interface ESLintOptions {
    include?: string | string[];
    exclude?: string | string[];
    cache?: boolean;
    cacheLocation?: string;
    cacheStrategy?: "content" | "metadata";
    fix?: boolean;
    formatter?: string;
    lintDirtyModulesOnly?: boolean;
    emitWarning?: boolean;
    emitError?: boolean;
    failOnError?: boolean;
    failOnWarning?: boolean;
    quiet?: boolean;
    outputReport?: boolean;
    outputReportFile?: string;
  }

  function eslintPlugin(options?: ESLintOptions): Plugin;
  export default eslintPlugin;
}
