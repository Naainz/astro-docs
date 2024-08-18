import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, g as renderComponent, F as Fragment, h as renderHead, i as renderSlot } from './astro/server_Ck6BVJK4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { readdirSync, statSync, readFileSync, existsSync } from 'fs';
import { join, basename } from 'path';
import matter from 'gray-matter';
/* empty css                            */

const order = [
	{
		items: [
			"index.mdx",
			"started.mdx",
			{
				name: "Author",
				redirect: "https://www.naai.nz"
			}
		]
	},
	{
		category: "Customization",
		items: [
			"theme.mdx",
			"sidebar.mdx",
			"github.mdx"
		]
	},
	{
		category: "Markdown Formatting",
		items: [
			{
				name: "MDX Documentation",
				redirect: "https://mdxjs.com/docs"
			},
			"creating.mdx",
			"info.mdx"
		]
	},
	{
		category: "Directories",
		items: [
			"more"
		]
	}
];
const sidebarConfig = {
	order: order
};

const $$Astro$4 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const pagesDir = new URL("../pages", import.meta.url).pathname;
  function isDirectory(path) {
    return statSync(path).isDirectory();
  }
  function getPageData(filePath, parentDir = "") {
    if (isDirectory(filePath)) return null;
    const fileContent = readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    const fileName = basename(filePath, ".mdx");
    const path = fileName === "index" ? `/${parentDir}` : `/${parentDir}${fileName}`;
    const name = data.path || (fileName === "index" ? parentDir.slice(0, -1) || "" : fileName).replace(/-/g, " ").replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    return { path, name, relativePath: join(parentDir, fileName + ".mdx") };
  }
  const currentPath = Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "");
  const categories = sidebarConfig.order.map((category) => {
    const categoryItems = category.items.map((fileOrDir) => {
      if (typeof fileOrDir === "object" && fileOrDir.redirect) {
        return {
          name: fileOrDir.name,
          redirect: fileOrDir.redirect
        };
      }
      const fullPath = join(pagesDir, fileOrDir);
      if (isDirectory(fullPath)) {
        const dirPath = `${fileOrDir}`;
        const indexFilePath = join(fullPath, "index.mdx");
        const dirFiles = readdirSync(fullPath).filter((file) => file.endsWith(".mdx") && file !== "index.mdx").map((file) => getPageData(join(fullPath, file), `${dirPath}/`)).filter(Boolean);
        return {
          name: getPageData(indexFilePath, `${dirPath}/`)?.name || dirPath.replace(/-/g, " ").replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          path: `/${dirPath}`,
          isDirectory: true,
          items: dirFiles
        };
      } else {
        return getPageData(fullPath);
      }
    }).filter(Boolean);
    return {
      name: category.category,
      items: categoryItems
    };
  });
  return renderTemplate`${maybeRenderHead()}<aside class="w-56 px-3 py-2 flex flex-col h-full fixed-sidebar"> <nav class="flex-1"> ${categories.map((category, index) => renderTemplate`<div${addAttribute(`space-y-2 ${index !== 0 ? "mt-10" : ""}`, "class")}${addAttribute(index, "key")}> ${category.name && renderTemplate`<h3 class="text-sm font-bold text-gray-600 dark:text-white pl-3"> ${category.name} </h3>`} ${category.items.map((link, linkIndex) => renderTemplate`<div${addAttribute(linkIndex, "key")}> ${link.redirect ? renderTemplate`<a${addAttribute(link.redirect, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`block px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-300 ${currentPath === link.redirect ? "bg-[#E0EFFF] text-[#004CA3]" : "text-[#6B7280] dark:text-[#A3A3A3] opacity-75 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800"} flex items-center justify-between`, "class")}> <span>${link.name}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l10-10M7 7h10v10"></path> </svg> </a>` : link.isDirectory ? renderTemplate`<div> <a${addAttribute(link.path, "href")} data-directory${addAttribute(`block px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-300 flex items-center justify-between ${currentPath.startsWith(link.path) ? "bg-[#E0EFFF] text-[#004CA3]" : "text-[#6B7280] dark:text-[#A3A3A3] opacity-75 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800"}`, "class")}> <span>${link.name}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> <div class="ml-4 mt-2 space-y-2 relative"> <div class="absolute left-[-10px] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div> ${link.items.map((subLink, subLinkIndex) => renderTemplate`<a${addAttribute(subLinkIndex, "key")}${addAttribute(subLink.path, "href")}${addAttribute(`block px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-300 ${currentPath === subLink.path ? "bg-[#E0EFFF] text-[#004CA3]" : "text-[#6B7280] dark:text-[#A3A3A3] opacity-75 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800"}`, "class")}> ${subLink.name} </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`block px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-300 ${currentPath === link.path ? "bg-[#E0EFFF] text-[#004CA3]" : "text-[#6B7280] dark:text-[#A3A3A3] opacity-75 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800"}`, "class")}> ${link.name} </a>`} </div>`)} </div>`)} </nav> <div class="mt-6 space-y-3 flex-1 flex flex-col justify-end"> <div onclick="handleFeedbackClick()" class="block text-sm cursor-pointer transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex justify-between items-center">
Questions? Give us feedback
<i class="fas fa-arrow-right"></i> </div> <div onclick="handleEditClick()" class="block text-sm cursor-pointer transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex justify-between items-center">
Edit this page on GitHub
<i class="fas fa-arrow-right"></i> </div> <div onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;" class="block text-sm cursor-pointer transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex justify-between items-center">
Scroll to top
<i class="fas fa-arrow-up"></i> </div> </div> </aside> `;
}, "/Users/naainz/Documents/docs/src/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$H1;
  const { children } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="mt-8 mb-4 text-3xl font-bold">${children}</h1><hr class="mb-8 border-gray-300 dark:border-gray-700">` })}`;
}, "/Users/naainz/Documents/docs/src/components/H1.astro", void 0);

const $$Astro$2 = createAstro();
const $$H2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$H2;
  const { children } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2 class="mt-8 mb-4 text-2xl font-semibold">${children}</h2><hr class="mb-8 border-gray-300 dark:border-gray-700">` })}`;
}, "/Users/naainz/Documents/docs/src/components/H2.astro", void 0);

const $$Astro$1 = createAstro();
const $$H3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$H3;
  const { children } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h3 class="mt-8 mb-4 text-xl font-semibold">${children}</h3><hr class="mb-8 border-gray-300 dark:border-gray-700">` })}`;
}, "/Users/naainz/Documents/docs/src/components/H3.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  function getFrontmatterName(filePath) {
    try {
      if (statSync(filePath).isDirectory()) {
        return "";
      }
      const fileContent = readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return data.path || "";
    } catch (error) {
      console.error(`Error reading frontmatter from ${filePath}:`, error);
      return "";
    }
  }
  const findPrevNext = (currentPath2, sidebarConfig2) => {
    let prev2 = null;
    let next2 = null;
    let prevName2 = "";
    let nextName2 = "";
    const pagesDir = new URL("../pages", import.meta.url).pathname;
    const pages = sidebarConfig2.order.flatMap(
      (category) => category.items.map((item) => {
        if (!item) return null;
        if (typeof item === "object" && item.redirect) {
          return null;
        }
        const path = typeof item === "string" ? item.replace(".mdx", "") : item.path.replace(".mdx", "");
        const fullPath = path === "index" ? "/" : `/${path}`;
        const itemPath = join(pagesDir, item);
        let name;
        let isDirectory = false;
        try {
          isDirectory = statSync(itemPath).isDirectory();
          if (typeof item === "string") {
            name = getFrontmatterName(itemPath) || item.replace(".mdx", "").replace(/-/g, " ").replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
          } else {
            name = item.name;
          }
        } catch (error) {
          console.error(`Error processing item: ${item}`, error);
          return null;
        }
        return { path: fullPath, name, isDirectory };
      }).filter(Boolean)
    );
    const currentIndex = pages.findIndex((page) => page.path === currentPath2);
    if (currentIndex > 0) {
      prev2 = pages[currentIndex - 1].path;
      prevName2 = pages[currentIndex - 1].name;
    }
    if (currentIndex < pages.length - 1 && !pages[currentIndex]?.isDirectory) {
      next2 = pages[currentIndex + 1].path;
      nextName2 = pages[currentIndex + 1].name;
    }
    return { prev: prev2, next: next2, prevName: prevName2, nextName: nextName2 };
  };
  const currentPath = Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "");
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    return readingTimeMinutes;
  }
  function getMarkdownContentAndReadingTime(filePath) {
    try {
      const fileContent = readFileSync(filePath, "utf8");
      const readingTime2 = calculateReadingTime(fileContent);
      return readingTime2;
    } catch (error) {
      console.error(`Error reading markdown content from ${filePath}:`, error);
      return null;
    }
  }
  let readingTime = null;
  if (currentPath) {
    const filePath = join(new URL("../pages", import.meta.url).pathname, `${currentPath}.mdx`);
    if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
      readingTime = getMarkdownContentAndReadingTime(filePath);
    }
  }
  const { prev, next, prevName, nextName } = findPrevNext(Astro2.url.pathname, sidebarConfig);
  const pageName = currentPath.split("/").pop().replace(".mdx", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const dirName = currentPath.includes("/") ? currentPath.split("/")[0] : null;
  const breadcrumb = [
    { name: "Documentation", path: "/" },
    dirName && {
      name: dirName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      path: `/${dirName}`
    },
    { name: pageName }
  ].filter(Boolean);
  return renderTemplate`<html lang="en" class="transition-colors duration-500" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title || "AstroDocs"}</title><link rel="stylesheet" href="/src/styles/global.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">${renderHead()}</head> <body class="bg-gray-100 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100 font-satoshi" data-astro-cid-sckkx6r4> <nav class="bg-white dark:bg-gray-800 shadow mb-4 transition-colors duration-500 py-4 fixed top-0 inset-x-0 z-50" data-astro-cid-sckkx6r4> <div class="container mx-auto px-4 flex justify-between items-center" data-astro-cid-sckkx6r4> <a href="/" class="text-2xl font-bold navbar-text" data-astro-cid-sckkx6r4>AstroDocs</a> <div class="flex items-center space-x-4" data-astro-cid-sckkx6r4> <a href="https://github.com/Naainz/astro-docs" target="_blank" data-astro-cid-sckkx6r4> <img src="/github-mark.svg" alt="GitHub Repository" style="height: 24px;" class="github-icon" data-astro-cid-sckkx6r4> </a> <button id="theme-toggle" class="hidden md:block focus:outline-none text-2xl" data-astro-cid-sckkx6r4> <i id="theme-toggle-icon" class="fas" data-astro-cid-sckkx6r4></i> </button> <button id="mobile-menu-toggle" class="hamburger-icon md:hidden focus:outline-none flex flex-col justify-center items-end p-2" data-astro-cid-sckkx6r4> <div class="w-6 h-0.5 bg-gray-900 dark:bg-white top-line mb-1.5" data-astro-cid-sckkx6r4></div> <div class="w-6 h-0.5 bg-gray-900 dark:bg-white middle-line mb-1.5" data-astro-cid-sckkx6r4></div> <div class="w-6 h-0.5 bg-gray-900 dark:bg-white bottom-line" data-astro-cid-sckkx6r4></div> </button> </div> </div> </nav> <div id="mobile-menu" class="dropdown-menu fixed top-0 inset-x-0 bg-white text-gray-900 hidden z-40 transform -translate-y-full transition-transform duration-500 pt-16 h-full dark:bg-gray-800 dark:text-white" data-astro-cid-sckkx6r4> <div class="p-4 h-full" data-astro-cid-sckkx6r4> <div id="sidebar-content" class="overflow-y-auto h-full" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Sidebar", $$Sidebar, { "data-astro-cid-sckkx6r4": true })} </div> <div class="flex items-center space-x-4 mt-4" data-astro-cid-sckkx6r4> <button id="mobile-theme-toggle" class="focus:outline-none text-2xl" data-astro-cid-sckkx6r4> <i id="mobile-theme-toggle-icon" class="fas" data-astro-cid-sckkx6r4></i> </button> </div> </div> </div> <div id="main-content" class="container mx-auto px-4 flex mt-24 transition-opacity duration-500" data-astro-cid-sckkx6r4> <aside class="hidden md:block w-64" data-astro-cid-sckkx6r4> <div id="sidebar-content" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Sidebar", $$Sidebar, { "data-astro-cid-sckkx6r4": true })} </div> </aside> <main id="content" class="flex-1 md:ml-6 prose dark:prose-invert max-w-none" data-astro-cid-sckkx6r4> <nav class="breadcrumb" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4> ${breadcrumb.map((crumb, index) => renderTemplate`<span${addAttribute(index, "key")} data-astro-cid-sckkx6r4> ${index > 0 && renderTemplate`<i class="fas fa-arrow-right breadcrumb-arrow" data-astro-cid-sckkx6r4></i>`} ${crumb.path ? renderTemplate`<a${addAttribute(crumb.path, "href")} data-astro-cid-sckkx6r4>${crumb.name}</a>` : renderTemplate`<span data-astro-cid-sckkx6r4>${crumb.name}</span>`} </span>`)} </div> ${readingTime && renderTemplate`<div class="reading-time" data-astro-cid-sckkx6r4> ${readingTime} minute${readingTime > 1 ? "s" : ""} </div>`} </nav> ${renderSlot($$result, $$slots["default"])} <hr class="my-6 border-t border-gray-200 dark:border-gray-700" data-astro-cid-sckkx6r4> <div class="nav-links" data-astro-cid-sckkx6r4> ${prev ? renderTemplate`<a${addAttribute(prev, "href")} data-astro-cid-sckkx6r4> <i class="fas fa-arrow-left" data-astro-cid-sckkx6r4></i><span data-astro-cid-sckkx6r4>${prevName}</span> </a>` : renderTemplate`<span data-astro-cid-sckkx6r4></span>`} ${next ? renderTemplate`<a${addAttribute(next, "href")} data-astro-cid-sckkx6r4> <span data-astro-cid-sckkx6r4>${nextName}</span> <i class="fas fa-arrow-right" data-astro-cid-sckkx6r4></i> </a>` : renderTemplate`<span data-astro-cid-sckkx6r4></span>`} </div> </main> </div>   </body> </html>`;
}, "/Users/naainz/Documents/docs/src/layouts/Layout.astro", void 0);

export { $$Layout as default };
