/**
 * Created by tedshaffer on 10/5/16.
 */
import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bsdmReducer from './src/reducers/index';

import { baNewSign, baAddZone, baAddMediaState } from './src/bsDmActions';
import { getZoneById } from './src/reducers/reducerZone';

let store = createStore(bsdmReducer, applyMiddleware(thunk));

const mediaObject1 = {path: '/testFiles/image1.jpg', mediaType: "image"};
console.log("mediaObject1");
console.log(mediaObject1);

const contentItem1 = { id: "", name: "ItemName1", type: "media", media: mediaObject1 };
console.log("contentItem1");
console.log(contentItem1);

store.dispatch(baNewSign('TestSign', "v1920x1080x60p"));

let state = store.getState();
console.log("state:");
console.log(state);

let zoneAction = store.dispatch(baAddZone('Zone1', "images"));
let zone1Id = zoneAction.id;

state = store.getState();
console.log("state:");
console.log(state);

let zone1 = getZoneById(store.getState(), {id: zone1Id});
console.log(zone1);

let zone1Container = zone1.containerObject;

let msAction = store.dispatch(baAddMediaState('State1', zone1Container, contentItem1));

state = store.getState();
console.log("state after adding media state:");
console.log(state);

