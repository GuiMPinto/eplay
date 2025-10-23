class PedidoPerfil {
  descricao: string
  imagem: string
  sistema: string
  nomeJogo: string
  backgroundPedido: 'branca' | 'rosa'
  id: number

  constructor(
    id: number,
    descricao: string,
    imagem: string,
    sistema: string,
    backgroundPedido: 'branca' | 'rosa',
    nomeJogo: string
  ) {
    this.id = id
    this.descricao = descricao
    this.imagem = imagem
    this.sistema = sistema
    this.nomeJogo = nomeJogo
    this.backgroundPedido = backgroundPedido
  }
}

export default PedidoPerfil
