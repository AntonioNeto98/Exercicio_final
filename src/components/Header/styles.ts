import { styled } from 'styled-components';

import { Cores } from '../../styles';

export const Imagem = styled.div`
  width: 100%;
  height: 386px;

    img{
    display: block;
    width: 125px;
    margin: auto;
    padding: 40px
    }

    p {
    color: ${Cores.laranja};
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-top: 140px;
    }
`;

