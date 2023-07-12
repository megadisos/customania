import { generateNewPreferenceId, onError, onReady, onSubmit } from "./brickFunction";
import { getCustomizationObject, getInitializationObject, initMpAuthentication } from "./initialization";

export const MPLogic = {
    initMpAuthentication,
    onSubmit,
    onError,
    onReady,
    generateNewPreferenceId,
    getInitializationObject,
    getCustomizationObject
}