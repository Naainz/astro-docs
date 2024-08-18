/* empty css                                    */
import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from '../chunks/astro/server_Ck6BVJK4.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CwZjYQy9.mjs';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('../chunks/Layout_FUrQBvPJ.mjs')).default;
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
  "title": "Colors"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "theme",
    "text": "Theme"
  }, {
    "depth": 2,
    "slug": "colors",
    "text": "Colors"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "theme",
      children: "Theme"
    }), "\n", createVNode(_components.p, {
      children: "So you’re here to learn about themes, huh? Well, you’ve come to the right place. Themes are a way to customize the look and feel of your site. You can change the colors, fonts, and more. You can even create your own themes!"
    }), "\n", createVNode(_components.h2, {
      id: "colors",
      children: "Colors"
    }), "\n", createVNode(_components.p, {
      children: "One of the most common things people want to change about a website template, are the colors used."
    }), "\n", createVNode(_components.p, {
      children: "The colors currently being used in this template are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Primary: #004CA3, this is the main color used for links."
      }), "\n", createVNode(_components.li, {
        children: "Secondary: #E0EFFF, this is the color used for the selected sidebar item."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can change these colors by editing the ", createVNode(_components.code, {
        children: "src/components/Sidebar.astro"
      }), " file. Simply use the find and replace feature in your code editor to change the colors, simply by searching for the hex code and replacing it with your own."]
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

const url = "/theme";
const file = "/Users/naainz/Documents/docs/src/pages/theme.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/theme.mdx";
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
