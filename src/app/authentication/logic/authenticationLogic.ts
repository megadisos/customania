import { isAuthenticated, jwtVerification, login } from "./authenticationTasks";
import { getLCToken, getLCUserId, getLCUsername } from "./getAuthData";

export const AuthLogic = {
    login,
    getLCUsername,
    getLCUserId,
    getLCToken,
    jwtVerification,
    isAuthenticated
}