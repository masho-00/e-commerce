export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}
export interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}
export interface GalleryImage {
  id: number;
  image: string;
}