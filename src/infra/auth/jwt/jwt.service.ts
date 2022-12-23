import { Auth } from '@application/entities/auth/auth';
import * as jwt from 'jsonwebtoken';

export class JwtService {
  validateToken(token: string): boolean {
    const isAuthorized = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

    return !!isAuthorized;
  }

  generateTokens(data: any): Auth {
    const accessToken = jwt.sign(data, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: 60 * 10,
    });
    const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: '1h',
    });

    const auth = new Auth({ accessToken, refreshToken });

    return auth;
  }
}
