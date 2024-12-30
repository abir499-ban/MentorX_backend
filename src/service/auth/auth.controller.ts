import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post()

  async login(@Body() signInDto: SignInDTO) {
    if (!signInDto.email || !signInDto.password) throw new BadRequestException('Incomplete Log In payload')
    try {
      const signInResult = await this.authService.signin(signInDto.email, signInDto.password)
      return signInResult
    } catch (error) {
      return error
    }
    


  }

}
