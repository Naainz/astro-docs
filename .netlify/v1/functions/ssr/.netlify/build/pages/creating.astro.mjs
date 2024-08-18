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
  "path": "New Page"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "creating-a-new-page",
    "text": "Creating a new page"
  }, {
    "depth": 3,
    "slug": "creating-a-new-mdx-file",
    "text": "Creating a new .mdx file"
  }, {
    "depth": 3,
    "slug": "adding-the-page-to-the-sidebar",
    "text": "Adding the page to the sidebar"
  }, {
    "depth": 3,
    "slug": "nogui",
    "text": "NOGUI"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "creating-a-new-page",
      children: "Creating a new page"
    }), "\n", createVNode(_components.p, {
      children: ["You can create a new page by creating a new ", createVNode(_components.code, {
        children: ".mdx"
      }), " file in the ", createVNode(_components.code, {
        children: "src/pages"
      }), " directory.\nBy default, the name of the page in the sidebar will be the name of the ", createVNode(_components.code, {
        children: ".mdx"
      }), " file.\nYou can change this by reading the ", createVNode(_components.a, {
        href: "/info",
        children: "Custom Pathname"
      }), " page."]
    }), "\n", createVNode(_components.h3, {
      id: "creating-a-new-mdx-file",
      children: "Creating a new .mdx file"
    }), "\n", createVNode(_components.p, {
      children: ["To create a new page, you need to create a new ", createVNode(_components.code, {
        children: ".mdx"
      }), " file in the ", createVNode(_components.code, {
        children: "src/pages"
      }), " directory."]
    }), "\n", createVNode(_components.p, {
      children: ["If a GUI is unavailable, please scroll down to the ", createVNode(_components.a, {
        href: "#nogui",
        children: "NOGUI"
      }), " section."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Navigate to the ", createVNode(_components.code, {
          children: "src/pages"
        }), " directory."]
      }), "\n", createVNode(_components.li, {
        children: ["Create a new ", createVNode(_components.code, {
          children: ".mdx"
        }), " file."]
      }), "\n", createVNode(_components.li, {
        children: "Add the following frontmatter to the top of the file:"
      }), "\n"]
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
            children: "layout: '@layouts/Layout.astro'"
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
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: "Add your content below the frontmatter. This can be MDX, HTML, or a mix of both."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "adding-the-page-to-the-sidebar",
      children: "Adding the page to the sidebar"
    }), "\n", createVNode(_components.p, {
      children: ["To add the new page to the sidebar, you need to modify the ", createVNode(_components.code, {
        children: "src/config/sidebar.json"
      }), " file."]
    }), "\n", createVNode(_components.p, {
      children: ["Instructions on how to do this can be found on the ", createVNode(_components.a, {
        href: "/sidebar",
        children: "Sidebar"
      }), " page."]
    }), "\n", createVNode(_components.h3, {
      id: "nogui",
      children: "NOGUI"
    }), "\n", createVNode(_components.p, {
      children: ["If you are unable to use a GUI, you can create a new ", createVNode(_components.code, {
        children: ".mdx"
      }), " file using the command line."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Open a terminal."
      }), "\n", createVNode(_components.li, {
        children: "Navigate to the root directory of the project."
      }), "\n", createVNode(_components.li, {
        children: "Run the following command:"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " src/pages/page_name.mdx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["(Replace ", createVNode(_components.code, {
        children: "page_name"
      }), " with the name of your new page)"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["Open the new ", createVNode(_components.code, {
          children: ".mdx"
        }), " file using ", createVNode(_components.code, {
          children: "nano"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "nano"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " src/pages/page_name.mdx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: "Add the following frontmatter to the top of the file:"
      }), "\n"]
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
            children: "layout: '@layouts/Layout.astro'"
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
    }), "\n", createVNode(_components.ol, {
      start: "6",
      children: ["\n", createVNode(_components.li, {
        children: "Add your content below the frontmatter. This can be MDX, HTML, or a mix of both."
      }), "\n"]
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

const url = "/creating";
const file = "/Users/naainz/Documents/docs/src/pages/creating.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/creating.mdx";
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
