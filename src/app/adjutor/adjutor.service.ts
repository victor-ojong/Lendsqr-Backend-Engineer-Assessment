import { Injectable } from '@nestjs/common';
import { CreateAdjutorDto } from './dto/create-adjutor.dto';
import { VerifyTokenDto } from './dto/verify-adjuctor-token.dto';
import { AuthService } from '../user/authentication.service';

@Injectable()
export class AdjutorService {
  constructor(private readonly authService: AuthService) {}
  async initialize(createAdjutorDto: CreateAdjutorDto) {
    try {
      const url = `https://adjutor.lendsqr.com/v2/verification/bvn/${createAdjutorDto.bvn}`;

      const token = 'sk_live_S3WPw39YfccMoIW3qgUkMMmmmgJK6v0dWPCp6eM4';
      // token will be moved to .env file later

      console.log(createAdjutorDto.phone);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact: createAdjutorDto.phone }),
      });

      const data = await response.json();

      return {
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async verifyToken(verifyTokenDto: VerifyTokenDto, bvn: string) {
    if (!bvn) {
      return {
        status: 'fail',
        message: 'you have to initiate your bvn and phone number first',
      };
    }
    try {
      const url = `https://adjutor.lendsqr.com/v2/verification/bvn/${bvn}`;

      const token = 'sk_live_S3WPw39YfccMoIW3qgUkMMmmmgJK6v0dWPCp6eM4';
      // token will be moved to .env file later so its stored once
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: verifyTokenDto.otp }),
      });

      const data = await response.json();

      if (data.status) {
        if (data?.data?.watchlisted > 0) {
          return {
            status: 'Access denied!',
            message:
              'Your bvn has been blacklisted and will not be able to have an account on our platform, bey! ',
          };
        }

        if (data?.data?.watchlisted === 0) {
          const newUser = await this.authService.createAccount({
            firstName: data.data.first_name,
            lastName: data.data.last_name,
            email: data.data.email,
            phone: data.data.mobile,
            password: verifyTokenDto.password,
            bvn: data.data.bvn,
          });

          return {
            staus: 'success',
            message: 'Congratulations you have been onboarded sucessfully',
            ...newUser,
          };
        }
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}
