export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phone: number;
  password: string;
  bvn: number;
  id: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  accountNumber: string;
  userLevel: 1 | 0;
}
