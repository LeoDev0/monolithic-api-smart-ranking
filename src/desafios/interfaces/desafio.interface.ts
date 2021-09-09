import { Document } from 'mongoose';
import { Jogador } from '../../jogadores/interfaces/jogador.interface';
import { Partida } from './partida.interface';
import { DesafioStatus } from './enums/desafio-status.enum';

export interface Desafio extends Document {
  dataHoraDesafio: Date;
  status: DesafioStatus;
  dataHoraSolicitacao: Date;
  dataHoraResposta: Date;
  solicitante: Jogador;
  categoria: string;
  jogadores: Array<Jogador>;
  partida: Partida;
}
