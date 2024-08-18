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
  "title": "Index",
  "path": "Introduction"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "welcome-to-astrodocs",
    "text": "Welcome to AstroDocs"
  }, {
    "depth": 2,
    "slug": "tech-stack",
    "text": "Tech Stack"
  }, {
    "depth": 3,
    "slug": "astrojs-whats-that",
    "text": "Astro.js? What’s that?"
  }, {
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "welcome-to-astrodocs",
      children: "Welcome to AstroDocs"
    }), "\n", createVNode(_components.p, {
      children: "This is the documentation site for AstroDocs.\nAstroDocs is a simple and easy-to-use documentation template that can be used for any project. It is fully responsive and works on all devices."
    }), "\n", createVNode(_components.h2, {
      id: "tech-stack",
      children: "Tech Stack"
    }), "\n", createVNode(_components.p, {
      children: "This documentation template is built using the following technologies:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://astro.build/",
          children: "Astro.js"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://mdxjs.com/",
          children: "MDX"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://tailwindcss.com/",
          children: "Tailwind CSS"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "astrojs-whats-that",
      children: "Astro.js? What’s that?"
    }), "\n", createVNode(_components.p, {
      children: ["Astro.js is a lightweight JavaScript library that allows you to create documentation websites easily. It is simple to use and has a lot of features that can be used to create a beautiful and functional documentation website. You can find more information about Astro.js ", createVNode(_components.a, {
        href: "https://astro.build",
        children: "on their website"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.p, {
      children: "AstroDocs has many features that make it a great choice for your documentation needs:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Responsive design, works on all devices and screen sizes"
        }), "\n", createVNode(_components.li, {
          children: "Easy to use and highly customizable to fit your needs"
        }), "\n", createVNode(_components.li, {
          children: "Built with speed in mind, loads fast and is optimized for performance"
        }), "\n", createVNode(_components.li, {
          children: "Dark mode support, switch between light and dark mode with a click of a button"
        }), "\n", createVNode(_components.li, {
          children: "Syntax highlighting for code blocks, makes your code examples look great"
        }), "\n", createVNode(_components.li, {
          children: "Table of contents, automatically generated from your markdown files"
        }), "\n", createVNode(_components.li, {
          children: "Complete markdown support, write your documentation in markdown and Astro.js will take care of the rest."
        }), "\n", createVNode(_components.li, {
          children: "Footer and breadcrumb navigation, to help users navigate your documentation easily."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Anyway, to get started with AstroDocs, use the footer navigations to move forward or backward. You can also use the table of contents on the left! Enjoy! 🚀"
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

const url = "";
const file = "/Users/naainz/Documents/docs/src/pages/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/naainz/Documents/docs/src/pages/index.mdx";
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
