import { SHOW_ALERT, HIDE_ALERT } from './actionTypes';

export function showAlert(msg, category) {
    return {
        type: SHOW_ALERT,
        payload: {
            msg,
            category
        }
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}