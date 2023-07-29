import { isAuthenticated, isValidToken, jwtVerification, login, logout, register } from "./authenticationTasks";
import { getLCToken, getLCUserId, getLCUsername } from "./getAuthData";

export const AuthLogic = {
    login,
    getLCUsername,
    getLCUserId,
    getLCToken,
    jwtVerification,
    isAuthenticated,
    isValidToken,
    logout,
    register
}