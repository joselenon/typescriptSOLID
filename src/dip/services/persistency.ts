import { PersistencyProtocol } from '../classes/interfaces/persistency';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }
}
