import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  laboratorio: string;
  preco: number;
  foto: "https://assets.mypharma.com.br/mockups/generico-tarja-vermelha.jpg";
  categoria: Categoria | null;
}