/* empty css                                       */
import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from '../../chunks/astro/server_Ck6BVJK4.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CwZjYQy9.mjs';
import 'html-escaper';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('../../chunks/Layout_FUrQBvPJ.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "@layouts/Layout.astro",
  "path": "Secondary item"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "secondary-item",
    "text": "Secondary item"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "secondary-item",
      children: "Secondary item"
    }), "\n", createVNode(_components.p, {
      children: "This is just a placeholder page, it serves no purpose other than to demonstrate how to create a secondary page in a directory."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/more/secondary";
const file = "/Users/naainz/Documents/docs/src/pages/more/secondary.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/more/secondary.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
