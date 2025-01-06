
import { BadRequestException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { extractToken } from 'src/lib/extractToken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Inside Logger Middleware');
    const Requestheader = req.headers;
    const token = await extractToken(Requestheader);
    if(!token){
        throw new UnauthorizedException()
    }
    next();
  }
}
