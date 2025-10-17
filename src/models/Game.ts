class Game {
  categoria: string
  descricao: string
  imagem: string
  infos: string[]
  sistema: string
  nomeJogo: string
  id: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    imagem: string,
    infos: string[],
    sistema: string,
    nomeJogo: string
  ) {
    this.id = id
    this.categoria = categoria
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
    this.sistema = sistema
    this.nomeJogo = nomeJogo
  }
}

export default Game
