import { User } from '../models/user.model';

export interface UserResponse {
  user: User;
  token: string;
}
