import { RatingType } from './shared-types';

export const Setting = {
  OfferCount: 312,
};

export const RATINGS: RatingType[] = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good',
  },
  {
    value: '3',
    title: 'not bad',
  },
  {
    value: '2',
    title: 'badly',
  },
  {
    value: '1',
    title: 'terribly',
  },
];

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export const INSIDE_OFFERS = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

export const GALLERY_IMAGES: string[] = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg',
];

export const REVIEWS = [
  {
    id: 1,
    date: 'April 2019',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
];
