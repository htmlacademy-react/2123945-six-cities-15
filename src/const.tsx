export const Setting = {
  OfferCount: 312,
};

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

export const RatingNames: { [index: string]: string } = {
  '1': 'awful',
  '2': 'bad',
  '3': 'acceptable',
  '4': 'good',
  '5': 'amazing',
};
