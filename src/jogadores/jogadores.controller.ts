import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CriarJogadorDto } from '../jogadores/dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  public async criarAtualizarJogador(
    @Body() criaJogadorDto: CriarJogadorDto,
  ): Promise<void> {
    await this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
  }

  @Get()
  public async consultarJogadores(
    @Query('email') email: string,
  ): Promise<Jogador[] | Jogador> {
    if (email) {
      return await this.jogadoresService.consultarJogadoresPeloEmail(email);
    } else {
      return await this.jogadoresService.consultarTodosJogadores();
    }
  }

  @Delete()
  public async deletarJogador(@Query('email') email: string): Promise<void> {
    await this.jogadoresService.deletarJogador(email);
  }
}
