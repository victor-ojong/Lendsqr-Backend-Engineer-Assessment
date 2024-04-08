export interface User {
  email?: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  bvn: string;
  id: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  accountNumber: string;
  userLevel: 1 | 0;
}
