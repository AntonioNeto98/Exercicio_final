import styled from "styled-components";

import { Cores } from "../../styles";
import lixeira from '../../assets//images/lixeira.png';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
`;

export const CarrinhoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 2;

    Botao{
        width: 500px;
    }

    

    &.is-open {
        display: flex;
    }
`;

export const Sidebar = styled.div`
    width: 360px;
    background-color: ${Cores.laranja};
    padding: 40px 16px 0 16px;
    z-index: 2;
`;

export const Valores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${Cores.branco};
`;

export const Botao = styled.div`
    display: flex;
    justify-content: center;
    margin: 8px;
    padding: 4px 6px;
    background-color: ${Cores.laranjaClaro};
    color: ${Cores.laranja};
    font-weight: bold;
    cursor: pointer
`;

export const CartList = styled.ul`
    max-width: 100%;
    padding:0;
`;

export const CartItem = styled.li`
    width: 360px;
    height: 100px;
    display: flex;
    background-color: ${Cores.laranjaClaro};
    position: relative;
    margin-top: 16px;

    img {
        max-width: 90px;
        margin: 8px 8px 16px 8px;
    }
`;

export const Infos = styled.div`
    color: ${Cores.laranja};

    h3 {
        margin: 8px 8px 16px 8px;
    }

    span {
        padding: 8px 8px 31px 8px;
    }

    button {
        background-image: url(${lixeira});
        background-color: transparent;
        width: 16px;
        height: 16px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        border: none;
        cursor: pointer;
    }
`;

