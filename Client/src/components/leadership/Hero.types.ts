import type { GalleryImage } from "../../types";

export interface HeroProps {
  images?: GalleryImage[];
  title?: string;
}

type ImageColumnProps = {
  images: GalleryImage[];
};