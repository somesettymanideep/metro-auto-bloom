import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/metro-auto-bloom/assets/styles-CBhlPKEd.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Metro Cars Vijayawada" },
      { name: "description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
      { name: "author", content: "Metro Cars Vijayawada" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Metro Cars Vijayawada" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Metro Cars Vijayawada" },
      { name: "twitter:title", content: "Metro Cars Vijayawada" },
      { property: "og:description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
      { name: "twitter:description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dab9c9ed-c307-405c-93f9-2e6fe0f4354a/id-preview-9a262170--15dd8f31-bb9b-42d5-85e4-f894979353c6.lovable.app-1781000558570.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dab9c9ed-c307-405c-93f9-2e6fe0f4354a/id-preview-9a262170--15dd8f31-bb9b-42d5-85e4-f894979353c6.lovable.app-1781000558570.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./privacy-policy-ZU46nQF9.js");
const Route$1 = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Metro Cars Vijayawada"
    }, {
      name: "description",
      content: "Read the privacy policy for Metro Cars Vijayawada. Learn how we collect, use and protect your personal information."
    }, {
      property: "og:title",
      content: "Privacy Policy — Metro Cars Vijayawada"
    }, {
      property: "og:description",
      content: "How Metro Cars Vijayawada handles your data, cookies, and customer information."
    }],
    links: [{
      rel: "canonical",
      href: "/privacy-policy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DW6BZxhn.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada"
    }, {
      name: "description",
      content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available."
    }, {
      name: "keywords",
      content: "pre owned cars in vijayawada, used cars vijayawada, second hand cars vijayawada, buy used cars vijayawada, certified pre owned cars, used car dealer vijayawada, metro cars vijayawada"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      name: "author",
      content: "Metro Cars Vijayawada"
    }, {
      property: "og:title",
      content: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada"
    }, {
      property: "og:description",
      content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://metro-drive-vja.lovable.app/"
    }, {
      property: "og:site_name",
      content: "Metro Cars Vijayawada"
    }, {
      property: "og:locale",
      content: "en_IN"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada"
    }, {
      name: "twitter:description",
      content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available."
    }],
    links: [{
      rel: "canonical",
      href: "https://metro-drive-vja.lovable.app/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PrivacyPolicyRoute = Route$1.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  PrivacyPolicyRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
