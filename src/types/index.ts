export type ProductCategory = 'wigs' | 'ready-to-wear' | 'beauty' | 'custom';

export type WigType = 
  | 'Bone Straight'
  | 'Deep Wave / Curly'
  | 'Frontal HD Lace'
  | 'Pixie Cut Bob'
  | 'Glueless Braided'
  | 'Luxury Blonde & Colors'
  | 'Raw Virgin Bundles';

export type ReadyToWearCategory = 
  | 'Office Wear'
  | 'Gowns'
  | 'Casual Outfits';

export type BeautyCategory = 
  | 'Perfumes'
  | 'Creams'
  | 'Serums'
  | 'Cleansers';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  description: string;
  image: string;
  gallery?: string[];
  features: string[];
  sizes?: string[];
  defaultSize?: string;
  specs?: Record<string, string>;
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export interface InquiryItem {
  id: string;
  product: Product;
  selectedSize?: string;
  quantity: number;
  notes?: string;
}

export interface CustomAttireRequest {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  styleCategory: string;
  fabricChoice: string;
  colorPreference: string;
  occasion: string;
  targetDate?: string;
  sampleStyleName?: string;
  sampleStyleImage?: string;
  userUploadedImageUrl?: string;
  notes: string;
  unit: 'inches' | 'cm';
  measurements: {
    bust: string;
    underbust: string;
    waist: string;
    highHips: string;
    fullHips: string;
    shoulderToShoulder: string;
    sleeveLength: string;
    armCircumference: string;
    dressLength: string;
    trouserLength: string;
    inseam: string;
    neck: string;
  };
}
