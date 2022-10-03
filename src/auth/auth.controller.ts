import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsData: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsData);
  }

  @Post('/signin')
  signin(
    @Body() signInCredentialsData: SignInCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(signInCredentialsData);
  }
}
