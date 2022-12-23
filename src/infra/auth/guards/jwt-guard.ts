import { InvalidCredentials } from '@application/use-cases/errors/invalid-credentials';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class JwtGuard extends JwtService implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    try {
      const request = context.switchToHttp().getRequest();

      const [, accessToken] = request.headers.authorization.split(' ');

      this.validateToken(accessToken);

      return true;
    } catch (error) {
      throw new InvalidCredentials();
    }
  }
}
