/**
 * @file useImageGallery.ts
 * @description Custom hook for managing image gallery state and navigation
 */

import { useState } from "react";

/**
 * Interface for the return value of useImageGallery
 * @interface ImageGalleryHook
 * @property {number} currentImage - Index of the currently displayed image
 * @property {number} direction - Direction of the animation (-1 for prev, 1 for next)
 * @property {Function} handleImage - Function to set current image by index
 * @property {Function} handlePrevImage - Function to navigate to previous image
 * @property {Function} handleNextImage - Function to navigate to next image
 */
interface ImageGalleryHook {
  currentImage: number;
  direction: number;
  handleImage: (index: number) => void;
  handlePrevImage: () => void;
  handleNextImage: () => void;
}

/**
 * Custom hook for managing image gallery functionality
 * @function useImageGallery
 * @description Manages state and navigation for an image gallery/carousel component
 *
 * @param {string[]} images - Array of image URLs to display in the gallery
 *
 * @returns {ImageGalleryHook} Object containing:
 * - Current image index
 * - Animation direction
 * - Functions for image navigation
 *
 * @example
 * ```tsx
 * const { currentImage, handleNextImage, handlePrevImage } = useImageGallery(images);
 *
 * return (
 *   <div>
 *     <img src={images[currentImage]} />
 *     <button onClick={handlePrevImage}>Previous</button>
 *     <button onClick={handleNextImage}>Next</button>
 *   </div>
 * );
 * ```
 */
export const useImageGallery = (images: string[]): ImageGalleryHook => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const handleImage = (index: number) => setCurrentImage(index);

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return {
    currentImage,
    direction,
    handleImage,
    handlePrevImage,
    handleNextImage,
  };
};
