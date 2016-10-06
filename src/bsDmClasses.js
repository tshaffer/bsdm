/**
 * Created by tedshaffer on 10/5/16.
 */
import { guid } from './utilities/utils';

export class ContentItem {
    constructor(name, type, id) {
        this.name = name;
        this.type = type;
        this.id = guid();
    }
}

export class MediaObject {

    constructor(state) {
        this.path = state.path;
        this.mediaType = state.mediaType;
    }

    isEqual(other) {
        return this.path === other.path
            && this.mediaType === other.mediaType;
    }

    fileName() {
        return "";      // TODO
    }

    isAvailable() {
        return true;    // TODO
    }
}

export class MediaContentItem extends ContentItem {

    constructor(state) {
        super(state.name, "media", state.id);
        this.media = new MediaObject(state.media);
    }
}

export class Zone {

    get containerObject() {
        return {id: this.id, type: "Zone"};
    }

    constructor(state) {
        this.id = state.id;
        this.name = state.name;
        this.type = state.type;
        this.nonInteractive = state.nonInteractive;
        this.initialMediaStateId = state.initialMediaStateId;
    }
}

export class MediaState {

    // id: BaDmId;
    // name: string;
    // container: DmMediaStateContainer;
    // contentItem: DmContentItemState;

    constructor(state) {
        this.id = state.id;
        this.name = state.name;
        this.container = Object.assign({}, state.container);
        // this.contentItem = contentItemFactory(state.contentItemState);
        this.contentItem = new ContentItem(state.contentItemState.name, state.contentItemState.type, state.contentItemState.id);
    }
}


