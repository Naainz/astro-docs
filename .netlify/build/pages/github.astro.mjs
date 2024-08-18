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
  "title": "Github Links",
  "path": "GitHub Links"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "github-links",
    "text": "GitHub Links"
  }, {
    "depth": 3,
    "slug": "edits",
    "text": "Edits"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "github-links",
      children: "GitHub Links"
    }), "\n", createVNode(_components.p, {
      children: "On the sidebar, you can find a set of three buttons."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Questions? Give us feedback"
        }), ": This button will take you to the GitHub Issues page, with a pre-filled issue title. You can use this to ask questions, report bugs, or give feedback."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Edit this page on GitHub"
        }), ": This button will take you to the GitHub repository where the source code for this page is stored."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Scroll to top"
        }), ": This button will take you to the top of the page."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "edits",
      children: "Edits"
    }), "\n", createVNode(_components.p, {
      children: ["By default, the GitHub redirects will take you to the repository for this template ", createVNode(_components.code, {
        children: "https://github.com/Naainz/astro-docs"
      }), ". You can change this by updating the url in the ", createVNode(_components.code, {
        children: "src/components/Sidebar.astro"
      }), " file."]
    }), "\n", createVNode(_components.p, {
      children: ["Simply find and replace the link ", createVNode(_components.code, {
        children: "https://github.com/Naainz/astro-docs"
      }), " with your own repository link."]
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

const url = "/github";
const file = "/Users/naainz/Documents/docs/src/pages/github.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/github.mdx";
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
