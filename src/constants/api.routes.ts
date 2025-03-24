export enum BACKEND_ENDPOINTS {
  REGISTER = "/auth/register",
  LOGIN = "/auth/login",
  LOGOUT = "/auth/logout",
  CHECK_STATUS = "/auth/me",
  FORGOT_PASSWORD = "/auth/forgot-password",
  VERIFY_RESET_TOKEN = "/auth/verify-reset-token",
  CHANGE_PASSWORD = "/auth/change-password",
  ACTIVATE_ACCOUNT = "/auth/activate-account",
  UPDATE_PROFILE = "/users/update-data",
  UPLOAD_AVATAR = "/users/update-profile-picture",

  PASSWORDS_BASE = "/passwords",
  PASSWORDS_BY_ID = "/passwords/",

  SECURE_NOTES_BASE = "/secure-notes",
  SECURE_NOTES_BY_ID = "/secure-notes/",

  CARDS_BASE = "/cards",
  CARDS_BY_ID = "/cards/",

  SETTINGS_BASE = "/settings",
  SETTINGS_SECURITY = "/settings/security",
  SETTINGS_PROFILE = "/settings/profile",
}
