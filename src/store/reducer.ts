import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getCards } from './action';
import { OfferPreview } from '../shared-types.ts';
import { cards } from '../mock-data/card-data.ts';

export type initialStateType = {
  city: string;
  cards: OfferPreview[];
};

const initialState: initialStateType = {
  city: 'Amsterdam',
  cards: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city.name;
    })

    .addCase(getCards, (state) => {
      state.cards = cards;
    });
});

export { reducer };
