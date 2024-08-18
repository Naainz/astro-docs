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
  "title": "Get Started",
  "path": "Get Started"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "get-started",
    "text": "Get Started"
  }, {
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "running-the-project",
    "text": "Running the Project"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "get-started",
      children: "Get Started"
    }), "\n", createVNode(_components.p, {
      children: "You’re probably sat there wondering how to get started with this documentation site. Well, you’re in the right place! This page will guide you through the process of setting up your own documentation site using this template."
    }), "\n", createVNode(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.p, {
      children: "First things first, you’ll need to install the template. You can do this by running the following command:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://github.com/Naainz/astro-docs.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will clone the repository to your local machine. Once you’ve done that, you can navigate to the project directory and install the dependencies:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " astro-docs"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "running-the-project",
      children: "Running the Project"
    }), "\n", createVNode(_components.p, {
      children: "To run the astro.js webserver, you can use the following command:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dev"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will start the development server and you can view the site at ", createVNode(_components.a, {
        href: "http://localhost:4321",
        children: "http://localhost:4321"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "You may be thinking, “That’s great, but how do I add my own content?“. Well, it’s simple! Continue down the navigation, to the next page, and you’ll find out how to add your own content to this documentation site. Happy coding! 🚀"
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

const url = "/started";
const file = "/Users/naainz/Documents/docs/src/pages/started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/started.mdx";
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
