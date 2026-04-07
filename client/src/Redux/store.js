// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage/session";
// import { productListReducer, productReducer } from "./Reducers/Product";
// import {thunk} from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const rootReducer = combineReducers({
//   productListReducer,
//   productReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [thunk];

// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(...middlewares)
// );

// export const persistor = persistStore(store);




// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // ✅ FIXED
// import { productListReducer, productReducer } from "./Reducers/Product";
// import { thunk } from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const rootReducer = combineReducers({
//   productList: productListReducer,
//   product: productReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   applyMiddleware(thunk)
// );

// export const persistor = persistStore(store);
// export { store };


// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { productListReducer, productReducer } from "./Reducers/Product";
// import { thunk } from "redux-thunk";

// // ✅ Correct storage for Vite
// const storage = createWebStorage("local");

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const rootReducer = combineReducers({
//   productList: productListReducer,
//   product: productReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   applyMiddleware(thunk)
// );

// export const persistor = persistStore(store);
// export { store };


import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { productListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk";

// ✅ Manual storage fix (works in Vite)
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve(true);
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export { store };