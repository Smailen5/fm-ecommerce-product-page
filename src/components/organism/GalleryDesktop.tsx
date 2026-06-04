import OverlayGallery from "../molecules/OverlayGallery";
import ProductGallery from "./ProductGallery";

interface GalleryDesktopProps {
  setOverlayGallery: (overlay: boolean) => void;
  overlayGallery: boolean;
}

const GalleryDesktop = ({
  setOverlayGallery,
  overlayGallery,
}: GalleryDesktopProps) => {
  return (
    <>
      <div className="hidden w-1/2 flex-1 lg:block">
        <ProductGallery setIsOverlay={setOverlayGallery} />

        {/* Overlay */}
        <OverlayGallery
          overlay={overlayGallery}
          setOverlay={setOverlayGallery}
        />
      </div>
    </>
  );
};

export default GalleryDesktop;
