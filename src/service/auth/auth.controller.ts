import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

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



  @UseGuards(AuthGuard)
  @Get()
  getProfile(@Request() req) {
    return req.user;
  }

}
