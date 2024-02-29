import { CITIES, OPTIONS } from './const';

export type MainPageScreenProps = {
  offerCount: number;
};

export type RentType = 'apartment' | 'room' | 'house' | 'hotel';

export type CardItemType = {
  id: number | string;
  title: string;
  type: RentType;
  price: number;
  previewImage: string;
  city?: {
    name: string;
  };
  isFavorite?: boolean;
  isPremium?: boolean;
  rating?: number;
};

export type CardsItemProps = {
  card: CardItemType;
};

export type CityItemProps = {
  city: (typeof CITIES)[number];
};

export type OptionItemProps = {
  name: (typeof OPTIONS)[number];
  isActive: boolean;
};

export type FavouritesPageProps = Pick<
  CardItemType,
  'title' | 'type' | 'price' | 'isPremium' | 'previewImage'
>;

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
