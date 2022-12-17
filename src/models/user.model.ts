import { MONGOOSE_MODEL } from './mongoose.model';

export interface USER_MODEL extends MONGOOSE_MODEL {
  role: 'user';
  isEmailVerified: boolean;
  phone: string;
  email: string;
  name: string;
  favorites: Record<string, string>;
}
