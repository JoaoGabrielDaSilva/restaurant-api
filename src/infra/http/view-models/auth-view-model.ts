import { Auth } from '@application/entities/auth/auth';

export class AuthViewModel {
  static toHTTP(auth: Auth) {
    return {
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken,
    };
  }
}
