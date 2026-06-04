/**
 * @file routes.tsx
 * @description Application routes configuration with lazy loading for documentation
 */

import Loading from "@/components/molecules/Loading";
import { Product } from "@/page/Product";
import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";

/**
 * Lazy loaded Documentation component
 * Only loaded when the /docs route is accessed
 */
const DocumentationLazy = lazy(
  () => import("@/components/pages/Documentation"),
);

/**
 * Application routes configuration
 * @type {RouteObject[]}
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/collections",
    element: <Product />,
  },
  {
    path: "/men",
    element: <Product />,
  },
  {
    path: "/women",
    element: <Product />,
  },
  {
    path: "/about",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Product />,
  },
  {
    path: "/docs",
    element: (
      <Suspense fallback={<Loading loadingName="documentation" />}>
        <DocumentationLazy />
      </Suspense>
    ),
  },
];
