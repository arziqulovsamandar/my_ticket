import { Admin } from '../../models/admin.model';

export const adminStub = (): Partial<Admin> => {
  return {
    id: 1,
    name: 'user1',
    login: 'user1@gmail.com',
    hashed_password: '12344',
    is_active: true,
  };
};
