import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcryptjs from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async signin(Email: string, password: string) {
        const user = await this.userService.findUser(Email)

        if (!user) throw new UnauthorizedException('Invalid Email')

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid)
            throw new UnauthorizedException('Wrong Password');

        const payload = {
            id: user._id,
            email: user.email
        }

        const token = await this.jwtService.signAsync(payload);
        
        return { access_token: token }

    }
}


