/**
 * Created by tedshaffer on 10/5/16.
 */
import { guid } from './utilities/utils';

// Actions
export const NEW_SIGN = 'NEW_SIGN';

export const baNewSign = (name, mode) => ({
    type: NEW_SIGN,
    id: guid(),
    payload: {
        name: name,
        videoMode: mode
    }
});

