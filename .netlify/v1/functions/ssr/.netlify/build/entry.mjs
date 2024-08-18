import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_dl-mbL6I.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/creating.astro.mjs');
const _page2 = () => import('./pages/github.astro.mjs');
const _page3 = () => import('./pages/info.astro.mjs');
const _page4 = () => import('./pages/more/guide.astro.mjs');
const _page5 = () => import('./pages/more/secondary.astro.mjs');
const _page6 = () => import('./pages/more.astro.mjs');
const _page7 = () => import('./pages/sidebar.astro.mjs');
const _page8 = () => import('./pages/started.astro.mjs');
const _page9 = () => import('./pages/theme.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/creating.mdx", _page1],
    ["src/pages/github.mdx", _page2],
    ["src/pages/info.mdx", _page3],
    ["src/pages/more/guide.mdx", _page4],
    ["src/pages/more/secondary.mdx", _page5],
    ["src/pages/more/index.mdx", _page6],
    ["src/pages/sidebar.mdx", _page7],
    ["src/pages/started.mdx", _page8],
    ["src/pages/theme.mdx", _page9],
    ["src/pages/index.mdx", _page10]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "996a7eef-dbb0-42a1-809c-417de07919ee"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
