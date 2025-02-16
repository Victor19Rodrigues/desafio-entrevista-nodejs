import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

const DUPLICATE_EMAIL_ERROR_CODE = 'ER_DUP_ENTRY';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsData: AuthCredentialsDto): Promise<void> {
    const { email, name, password } = authCredentialsData;

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, password: hashedPassword, name });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === DUPLICATE_EMAIL_ERROR_CODE) {
        throw new ConflictException('This email already exists');
      }

      throw new InternalServerErrorException();
    }
  }
}
