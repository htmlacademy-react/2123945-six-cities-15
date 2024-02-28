import { Cities, Options } from './const';

export type MainPageScreenProps = {
  offerCount: number;
};

export type CardItemProps = {
  card: CardItem;
};

export type CardItem = {
  id: number | string;
  title: string;
  type: RentType;
  price: number;
  previewImage: string;
  city: {
    name: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type RentType = 'apartment' | 'room' | 'house' | 'hotel';

export type CityItemProps = {
  city: typeof Cities[number];
}

export type OptionItemProps = {
  name: typeof Options[number];
  isActive: boolean;
}
