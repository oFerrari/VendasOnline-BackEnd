import { Body, Controller, Get, Post } from '@nestjs/common';
import type { createUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';


const mensagem = {texto: 'aplicação rodando porta 8080!'};
/* @Controller('user')
export class UserController {

    @Get()
    async getAllUsers(){
       return JSON.stringify({teste: 'ola mundo'});
    }
} */

@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService){}
    @Get()
     async getAllUsers(){
        return mensagem
    }
    @Post()
    async createUser(@Body() createUser: createUserDto ){
        return this.userService.createUser(createUser);
    }
}