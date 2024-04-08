import { Injectable } from '@nestjs/common';
import { CreateAdjutorDto } from './dto/create-adjutor.dto';
import { VerifyTokenDto } from './dto/verify-adjuctor-token.dto';

@Injectable()
export class AdjutorService {
  async initialize(createAdjutorDto: CreateAdjutorDto) {
    try {
      const url = `https://adjutor.lendsqr.com/v2/verification/bvn/${createAdjutorDto.bvn}`;

      const token = 'sk_live_S3WPw39YfccMoIW3qgUkMMmmmgJK6v0dWPCp6eM4';
      // token will be moved to .env file later

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'contact', value: createAdjutorDto.phone }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      return data;
      // alternatively send just a mesage that otp has been sent to the number that is valid for 10 min and small instruction
    } catch (error) {
      throw error;
    }
  }

  async verifyToken(verifyTokenDto: VerifyTokenDto, bvn: string) {
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
        body: JSON.stringify({ key: 'otp', value: verifyTokenDto.otp }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      // create the user here and send back user object normal flow
      return data;
      // alternatively send just a mesage that otp has been sent to the number that is valid for 10 min and small instruction
    } catch (error) {
      throw error;
    }
  }
}
