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
        if (data.watchlisted) {
          return {
            status: 'Access denied',
            message:
              'Your bvn has been blacklisted and will not be able to have an account on our platform, bey! ',
          };
        } else {
          return this.authService.createAccount({
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            phone: data.mobile,
            password: verifyTokenDto.password,
            bvn: data.bvn,
          });
        }
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
