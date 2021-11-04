import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { collageReducer } from "../reducers/collageReducer";
import { bannersReducer } from "../reducers/bannerReducer";
import { cardsReducer } from "../reducers/cardsReducer";

const reducers = combineReducers({
  collage: collageReducer,
  banners: bannersReducer,
  cards: cardsReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
