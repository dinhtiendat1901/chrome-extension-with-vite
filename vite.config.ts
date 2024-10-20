import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import webExtension from "vite-plugin-web-extension";
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        webExtension({
            manifest: path.resolve('src/manifest.json'),
        }),
    ],
});
