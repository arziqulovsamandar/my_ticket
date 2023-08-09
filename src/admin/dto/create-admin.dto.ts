export class CreateAdminDto {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: string;
  hashed_refresh_token: string;
}
