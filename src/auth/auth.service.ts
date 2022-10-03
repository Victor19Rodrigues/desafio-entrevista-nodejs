import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  signUp(authCredentialsData: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsData);
  }

  async signIn(authCredentialsData: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsData;

    const user = await this.usersRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'sucess';
    }

    throw new UnauthorizedException('Please check your login credentials');
  }
}
