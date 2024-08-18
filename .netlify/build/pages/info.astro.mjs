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
  "title": "Custom Pathname",
  "path": "Custom Pathname"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "custom-pathname",
    "text": "Custom Pathname"
  }, {
    "depth": 3,
    "slug": "setting-the-path",
    "text": "Setting the path"
  }, {
    "depth": 3,
    "slug": "setting-the-pathname-for-a-directory",
    "text": "Setting the pathname for a directory"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "custom-pathname",
      children: "Custom Pathname"
    }), "\n", createVNode(_components.p, {
      children: ["This is a page with a custom pathname. The path for this ", createVNode(_components.code, {
        children: ".mdx"
      }), " file is ", createVNode(_components.code, {
        children: "src/pages/info.mdx"
      }), ", however notice that the title of this page on the sidebar is ‘Custom Pathname’. This is because the ", createVNode(_components.code, {
        children: "path"
      }), " frontmatter field has been set to ‘Custom Pathname’. This page explains how to set it."]
    }), "\n", createVNode(_components.h3, {
      id: "setting-the-path",
      children: "Setting the path"
    }), "\n", createVNode(_components.p, {
      children: ["To set the name of the page in the sidebar, you can add a ", createVNode(_components.code, {
        children: "path"
      }), " key to the frontmatter of the ", createVNode(_components.code, {
        children: ".mdx"
      }), " file. The value of the ", createVNode(_components.code, {
        children: "path"
      }), " key will be the name of the page in the sidebar."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "path: 'Custom Pathname'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "setting-the-pathname-for-a-directory",
      children: "Setting the pathname for a directory"
    }), "\n", createVNode(_components.p, {
      children: ["To set the name of a directory in the sidebar, you need to title the directory accordingly. For example, the ", createVNode(_components.code, {
        children: "src/pages/more"
      }), " directory has been named ‘More’ in the sidebar."]
    }), "\n", createVNode(_components.p, {
      children: ["There is no special frontmatter required for directories. The name of the directory in the sidebar is the name of the directory in the ", createVNode(_components.code, {
        children: "src/pages"
      }), " directory."]
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

const url = "/info";
const file = "/Users/naainz/Documents/docs/src/pages/info.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/info.mdx";
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
