import { Imagem } from "./styles"

import bannerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () =>
  <Imagem style={{backgroundImage: `url(${bannerImg})`}}>
    <img src={logo} alt="Efood" />
    <p>
    Viva experiências gastronômicas<br/> no conforto da sua casa
    </p>
  </Imagem>


export default Header
