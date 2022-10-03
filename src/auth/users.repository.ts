import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

const DUPLICATE_USERNAME_ERROR_CODE = 'ER_DUP_ENTRY';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsData: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsData;

    const user = this.create({ username, password });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === DUPLICATE_USERNAME_ERROR_CODE) {
        throw new ConflictException('Usernsame already exists');
      }

      throw new InternalServerErrorException();
    }
  }
}
