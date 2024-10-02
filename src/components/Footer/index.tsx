import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twistter from '../../assets/images/twitter.png';
import { FooterBaner, ListRedes, Redes, FooterLogo, Text } from './styles';

const Footer = () =>
  <FooterBaner>
    <FooterLogo>
    <img src={logo} alt="Efood" />
    </FooterLogo>
    <ListRedes>
      <Redes>
        <img src={instagram} alt="instagram" />
      </Redes>
      <Redes>
        <img src={facebook} alt="facebook" />
      </Redes>
      <Redes>
        <img src={twistter} alt="twistter" />
      </Redes>
    </ListRedes>
    <Text>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br/> dos produtos é toda do estabelecimento contratado.</Text>
  </FooterBaner>

  export default Footer