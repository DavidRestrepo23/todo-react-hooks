import { SHOW_VALIDATION, HIDE_VALIDATION } from './actionTypes';

export function showValidation(msg) {
    return {
        type: SHOW_VALIDATION,
        msg
    }
}

export function hideValidation() {
    return {
        type: HIDE_VALIDATION
    }
}