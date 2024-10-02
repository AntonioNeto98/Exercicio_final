import sushi from '../../assets/images/sushi.png';
import macarrao from '../../assets/images/macarrao.png';
import estrela from '../../assets/images/estrela.png';

import { Card, Desta, Rodape, Produto, Tag, SubTitulo, Descricao, Botao} from './styles'
import { Link } from 'react-router-dom';


const Hero = () =>
  <>
  <Card>
    <Produto>
      <img src={sushi} alt="sushi" />
    <Desta>Destaque da semana</Desta>
    <Tag>Japones</Tag>
    <Rodape>
      <SubTitulo>
        Hioki Sushi
      </SubTitulo>
      <SubTitulo>
        4,9
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.<br/>Experimente o Japão sem sair do lar com nosso delivery!
    </Descricao>
    <Botao>Saiba mais</Botao>
    </Produto>

    <Produto>
      <img src={macarrao} alt="macarrao" />
    <Tag>Italiana</Tag>
    <Rodape>
      <SubTitulo>
        La Dolce Vita Trattoria
      </SubTitulo>
      <SubTitulo>
        4,6
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!<br/> Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.<br/> Peça já!
    </Descricao>
    <Botao>
      <Link to="/cardapio">Saiba mais</Link>
    </Botao>
    </Produto>

    <Produto>
      <img src={macarrao} alt="macarrao" />
    <Tag>Italiana</Tag>
    <Rodape>
      <SubTitulo>
        La Dolce Vita Trattoria
      </SubTitulo>
      <SubTitulo>
        4,6
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!<br/> Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.<br/> Peça já!
    </Descricao>
    <Botao>
      <Link to="/cardapio">Saiba mais</Link>
    </Botao>
    </Produto>

    <Produto>
      <img src={macarrao} alt="macarrao" />
    <Tag>Italiana</Tag>
    <Rodape>
      <SubTitulo>
        La Dolce Vita Trattoria
      </SubTitulo>
      <SubTitulo>
        4,6
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!<br/> Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.<br/> Peça já!
    </Descricao>
    <Botao>
      <Link to="/cardapio">Saiba mais</Link>
    </Botao>
    </Produto>

    <Produto>
      <img src={macarrao} alt="macarrao" />
    <Tag>Italiana</Tag>
    <Rodape>
      <SubTitulo>
        La Dolce Vita Trattoria
      </SubTitulo>
      <SubTitulo>
        4,6
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!<br/> Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.<br/> Peça já!
    </Descricao>
    <Botao>
      <Link to="/cardapio">Saiba mais</Link>
    </Botao>
    </Produto>

    <Produto>
      <img src={macarrao} alt="macarrao" />
    <Tag>Italiana</Tag>
    <Rodape>
      <SubTitulo>
        La Dolce Vita Trattoria
      </SubTitulo>
      <SubTitulo>
        4,6
        <img src={estrela} alt="favorito" />
      </SubTitulo>
    </Rodape>
    <Descricao>
    A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!<br/> Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.<br/> Peça já!
    </Descricao>
    <Botao>
      <Link to="/cardapio">Saiba mais</Link>
    </Botao>
    </Produto>
  </Card>
  </>



export default Hero
