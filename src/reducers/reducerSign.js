/**
 * Created by tedshaffer on 10/5/16.
 */
import { NEW_SIGN,  } from '../bsDmActions';

const createSignState =
    (id, name, videoMode) =>
        ({
            id: id,
            name: name,
            videoMode: videoMode
        });

const newSignState = createSignState("", "Untitled", "1920x1080x60p");

const signReducer = (state = newSignState, {type, id, payload} ) => {
    switch (type) {
        case NEW_SIGN:
            let {name, videoMode} = payload;
            return createSignState(id, name, videoMode);
    }
    return state;
};

export default signReducer;

