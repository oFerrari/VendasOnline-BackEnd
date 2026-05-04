import { Body, Controller, Get, Post } from '@nestjs/common';
import type { createUserDto } from './dtos/createUser.dto';

/* @Controller('user')
export class UserController {

    @Get()
    async getAllUsers(){
       return JSON.stringify({teste: 'ola mundo'});
    }
} */

@Controller('user')
export class UserController{
    @Post()
    async createUser(
        @Body() createUser: createUserDto 
    ){
        return {...createUser,
        password: 'undefined'
        }
    }
}