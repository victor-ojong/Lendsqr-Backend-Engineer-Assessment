import { Controller, Req, Post, Body, Session } from '@nestjs/common';
import { AdjutorService } from './adjutor.service';
import { CreateAdjutorDto } from './dto/create-adjutor.dto';
import { VerifyTokenDto } from './dto/verify-adjuctor-token.dto';

@Controller('adjutor')
export class AdjutorController {
  constructor(private readonly adjutorService: AdjutorService) {}

  @Post('/initialize')
  initialize(
    @Body() createAdjutorDto: CreateAdjutorDto,
    @Session() session: any,
  ) {
    session.bvn = createAdjutorDto.bvn;
    return this.adjutorService.initialize(createAdjutorDto);
  }

  @Post('/verify')
  verifyToken(@Body() verifyTokenDto: VerifyTokenDto, @Req() req: any) {
    // get Password and token
    return this.adjutorService.verifyToken(verifyTokenDto, req.session.bvn);
  }
}
