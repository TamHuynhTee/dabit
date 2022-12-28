import { MONGOOSE_MODEL } from './mongoose.model';

export interface USER_MODEL extends MONGOOSE_MODEL {
  role: string;
  isEmailVerified: boolean;
  phone: string;
  email: string;
  name: string;
  favorites: Record<string, string>;
  chats: string[];
  rate_waits: string[];
  bills: string[];
  warning: string[];
  cart: string[];
  notifications: string[];
  gender?: string;
  birth?: string;
}
