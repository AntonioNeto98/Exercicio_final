import styled from "styled-components";
import { Cores } from "../../styles";


export const Cardapio = styled.li`
    max-width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin: 50px auto;
    
`;

export const CardaProduto = styled.div`
    width: 320px;
    background-color: ${Cores.laranja};

    img {
        width: 304px;
        padding: 8px;
    }
`;

export const SubTitulo = styled.div`
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${Cores.laranjaClaro};
`;

export const Descricao = styled.div`
    padding: 8px;
    font-size: 14px;
    color: ${Cores.laranjaClaro}
`;

export const Botao = styled.div`
    margin: 8px;
    background-color: ${Cores.laranjaClaro};
    color: ${Cores.laranja};
    font-weight: bold;
    text-align: center;
    cursor: pointer
`;

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
    `;

export const ModalContainer = styled.div`
    background-color: ${Cores.laranja};
    position: relative;
    z-index: 1;


    header {
        position: relative;
        padding: 8px 0;

            img{
                position: absolute;
                right: 16px;
                top: 8px;
                width: 16px;
        }
    }
`;

export const ModalHero = styled.div`
display: flex;
margin: 0 32px;

    img{
    width: 290px;
    margin: 32px;
    }
`; 

export const ModalText = styled.div`
    color: ${Cores.branco};

    button {
    margin-bottom: 59px;
    color: ${Cores.laranja};
    font-weight: bold;
    padding: 4px 10px;
    text-align: center;
    cursor: pointer
    }
`;