import { ChangeEvent } from 'react';
import { CITIES, SORTING_OPTIONS } from './const';

export type RentType = 'apartment' | 'room' | 'house' | 'hotel';

export type CardCitiesType = {
  name: string;
  location: LocationType;
};

export type CitiesType = {
  name: string;
  isActive: boolean;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CardsItemProps = {
  card: OfferPreview;
  className?: string;
  onMouseHover?: (arg?: OfferPreview | undefined) => void;
};

export type OfferPreview = Pick<
  OfferFull,
  | 'id'
  | 'title'
  | 'type'
  | 'price'
  | 'previewImage'
  | 'city'
  | 'location'
  | 'isFavorite'
  | 'isPremium'
  | 'rating'
>;

export type OfferFull = {
  id: string | number;
  title: string;
  type: string;
  price: number;
  city: CardCitiesType;
  location: LocationType;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating?: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
};

export type OptionItemProps = {
  optionName: (typeof SORTING_OPTIONS)[number];
  isActive: boolean;
};

export type FavouritesPageProps = Pick<
  OfferPreview,
  'title' | 'type' | 'price' | 'isPremium' | 'previewImage'
>;

export type FavouritesListProps = {
  cards: string[];
};

// export type FavoriteCardProps = {
//   card: OfferPreview;
// };

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro?: boolean;
};

export type ReviewItemType = {
  id: string | number;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type ReviewsItemProps = {
  review: ReviewItemType;
};

export type GalleryProps = {
  images: string[];
};

export type OfferInsideListProps = {
  insideOffers: string[];
};

export type RatingItemProps = {
  rating: RatingType;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

export type RatingType = {
  value: string;
  title: string;
};

// ПРОПСЫ В ПЕЙДЖАХ

// FavouritesPage
export type FavoritesScreenProps = {
  offers: OfferFull[];
};

// MainPage
export type MainPageScreenProps = {
  offerCount: number;
  offers?: OfferPreview[];
};

// MainEmpty
export type CityItemProps = {
  city: (typeof CITIES)[number];
};
