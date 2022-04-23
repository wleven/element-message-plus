import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.min.js",
      format: "cjs",
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
    },
    {
      file: "lib/index.umd.js",
      format: "umd",
      name:'MessageList'
    },
  ],
  plugins:[typescript()]
});
