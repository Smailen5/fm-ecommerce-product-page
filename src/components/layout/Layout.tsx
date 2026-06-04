/**
 * @file Layout.tsx
 * @description Main layout component providing consistent page structure
 */

import Navbar from "@/components/molecules/Navbar";

/**
 * @interface LayoutProps
 * @property {React.ReactNode} children - Content to be rendered within the layout
 */
type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Layout component
 * @component
 * @description Provides a consistent layout structure with navigation and main content area
 *
 * @example
 * ```tsx
 * <Layout>
 *   <h1>Page Content</h1>
 * </Layout>
 * ```
 *
 * @returns {JSX.Element} A structured page layout with navigation and content container
 */
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto lg:px-32">{children}</main>
    </div>
  );
}

export default Layout;
