/**
 * Created by tedshaffer on 10/5/16.
 */
import { createStore, Store, applyMiddleware } from 'redux';

import bsdmReducer from '../src/reducers/index';

store = createStore(bsdmReducer, applyMiddleware(thunk));

const mediaObject1 = {path: '/testFiles/image1.jpg', mediaType: "image"};
const contentItem1 = { id: "", name: "ItemName1", type: "media", media: mediaObject1 };