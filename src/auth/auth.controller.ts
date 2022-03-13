import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
<<<<<<< HEAD
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
=======
import { LocalAuthGuard } from 'src/guards/local-auth.guard'; 
>>>>>>> feature/secret_config_db

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
<<<<<<< HEAD

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
=======
}
>>>>>>> feature/secret_config_db
