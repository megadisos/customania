import { generateNewPreferenceId, onError, onReady, onSubmitBrick } from "./brickFunction";
import { initMpAuthentication } from "./initialization";

export const MPLogic = {
    initMpAuthentication,
    onSubmitBrick,
    onError,
    onReady,
    generateNewPreferenceId
}