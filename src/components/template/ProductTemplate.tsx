/**
 * @file ProductTemplate.tsx
 * @description Template component for the product page layout
 */

import { lazy, Suspense, useState } from "react";
import Layout from "../layout/Layout";
import Loading from "../molecules/Loading";
import ProductButton from "../molecules/ProductButton";
import ProductDescription from "../molecules/ProductDescription";
import ProductPrice from "../molecules/ProductPrice";
import ProductQuantity from "../molecules/ProductQuantity";

const Carousel = lazy(() => import("../molecules/CarouselImage"));
const GalleryDesktop = lazy(() => import("../organism/GalleryDesktop.tsx"));

/**
 * ProductTemplate component
 * @component
 * @description Renders the main product page layout including carousel, description, price, quantity selector and add to cart button
 *
 * @example
 * ```tsx
 * <ProductTemplate />
 * ```
 *
 * @returns {JSX.Element} A complete product page layout
 */
function ProductTemplate() {
  const [overlayGallery, setOverlayGallery] = useState<boolean>(false);
  return (
    <Layout>
      {/* Carousel */}
      <Suspense fallback={<Loading />}>
        <Carousel />

        <div className="lg:flex lg:items-center lg:gap-24 lg:px-10 lg:py-20">
          {/* Contenitore componente immagini */}
          <GalleryDesktop
            setOverlayGallery={setOverlayGallery}
            overlayGallery={overlayGallery}
          />

          <div className="flex-1 space-y-4 p-6">
            {/* Componente descrizione */}
            <ProductDescription />

            {/* Componente prezzo */}
            <ProductPrice />

            <div className="gap-4 space-y-4 lg:flex lg:h-12 lg:space-y-0">
              {/* Componente quantità */}
              <ProductQuantity />

              {/* Componente aggiungi al carrello */}
              <ProductButton />
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default ProductTemplate;
