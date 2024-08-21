import { OfferPreview, RentType } from '../shared-types';

export const cards: OfferPreview[] = [
  {
    id: '1',
    title: 'House in countryside',
    type: 'room' as RentType,
    price: 230,
    previewImage: '/img/1.jpeg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'hotel' as RentType,
    price: 447,
    previewImage: '/img/2.jpeg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '3',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel' as RentType,
    price: 195,
    previewImage: '/img/3.jpeg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
  },
];
