import { UsersRepositories } from '../repositories/UsersRepositories';

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ email, name, admin }: UserRequest) {
    const usersRepositories = new UsersRepositories();

    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = usersRepositories.create({
      name,
      email,
      admin,
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
