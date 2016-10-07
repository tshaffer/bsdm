/**
 * Created by tedshaffer on 10/5/16.
 */
import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bsdmReducer from './src/reducers/index';

import { baNewSign, baAddZone, baUpdateZone, baAddMediaState, baAddEvent, baAddTransition } from './src/bsDmActions';
import { getZoneById } from './src/reducers/reducerZone';
import { getMediaStateById, getMediaStatesForZone } from './src/reducers/reducerMediaState';

let store = createStore(bsdmReducer, applyMiddleware(thunk));

const mediaObject1 = {path: '/testFiles/image1.jpg', mediaType: "image"};
console.log("mediaObject1");
console.log(mediaObject1);

const contentItem1 = { id: "", name: "ItemName1", type: "media", media: mediaObject1 };
console.log("contentItem1");
console.log(contentItem1);

const mediaObject2 = {path: '/testFiles/image2.jpg', mediaType: "image"};
const contentItem2 = { id: "", name: "ItemName2", type: "media", media: mediaObject2 };

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

zone1 = getZoneById(store.getState(), {id: zone1Id});
console.log(zone1);

state = store.getState();
// console.log("state after adding media state1:");
// console.log(state);

let mediaState1Id = msAction.id;

let mediaState1 = getMediaStateById(state, {id: mediaState1Id});
// console.log("mediaState1:");
// console.log(mediaState1);

state = store.getState();
zone1 = getZoneById(state, {id: zone1Id});

let zone1States = getMediaStatesForZone(state, {id: zone1Id});
// console.log("zone1States:");
// console.log(zone1States);

store.dispatch(baUpdateZone(zone1Id,{name:"Zone1x"}));
state = store.getState();
// console.log("state after adding updating zone:");
// console.log(state);

zone1 = getZoneById(store.getState(), {id: zone1Id});
// console.log("zone1:");
// console.log(zone1);

msAction = store.dispatch(baAddMediaState('State2', zone1Container, contentItem2));

state = store.getState();
// console.log("state after adding media state2:");
// console.log(state);

let mediaState2Id = msAction.id;
let mediaState2 = getMediaStateById(state, {id: mediaState2Id});
// console.log("mediaState2");
// console.log(mediaState2);

zone1States = getMediaStatesForZone(state, {id: zone1Id});
// console.log("zone1States after adding mediaState2:");
// console.log(zone1States);

// Make State 2 the initial state
store.dispatch(baUpdateZone(zone1Id,{initialMediaStateId:mediaState2.id}));
zone1 = getZoneById(store.getState(), {id: zone1Id});
// console.log("zone1:");
// console.log(zone1);

// Event added to State 2 (now the initial event)
let evAction = store.dispatch(baAddEvent('Timeout1',"Timer",mediaState2.id,{interval: 5}));
let eventId = evAction.id;

// Transition to State 1
store.dispatch(baAddTransition('Transition1',eventId,mediaState1.id));

state = store.getState();
// console.log("state after adding transition:");
// console.log(state);

