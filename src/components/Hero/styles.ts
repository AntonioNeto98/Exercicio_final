import { styled } from "styled-components";
import { Cores } from "../../styles";

export const Card = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 50px auto;

`;

export const Produto = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${Cores.laranja};

    img {
    width: 100%;
    }
`;


export const Tag = styled.div`
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 16px;
  padding: 6px 4px;
`;
export const Desta = styled.div`
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  right: 60px;
  top: 0px;
  margin: 16px;
  padding: 6px 4px;
`;

export const Rodape = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;


    img {
    width: 20px
    }
`;

export const SubTitulo = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.laranja};
  margin: 8px;

    img {
      margin: 0 8px;
      text-align: center;
    }
`;

export const Descricao = styled.div`
  font-size: 14px;
  color: ${Cores.laranja};
  margin: 16px 8px;
`;

export const Botao = styled.div`
  width: 95px;
  display: flex;
  justify-content: center;
  margin: 8px;
  padding: 4px 6px;
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  font-weight: bold;
  cursor: pointer;
  
    a{
      text-decoration: none;
      color: ${Cores.branco};
    }
`;
