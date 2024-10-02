import styled from "styled-components";
import { Cores } from "../../styles";

export const CheckoutForm  = styled.form`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Cores.laranja};

    small {
        display: flex;
        margin-top: 8px;
        font-size: 16px;
    }
`;
export const CheckoutCont = styled.div`
    width: 500px;

    h3 {
        margin-left: 10px;
        font-size: 32px;
        color: ${Cores.laranjaClaro};
    }

    
`;

export const CheckList = styled.div`
    color: ${Cores.laranjaClaro};
    padding: 8px;

    label {
        display: flex;
        margin-bottom: 8px;
    }

    input {
        background-color: ${Cores.laranjaClaro};
        border: none;
        width: 480px;
        height: 32px;
    }

    
    
`;

export const CheckNumber = styled.ul`
    display: flex;
    padding: 0;
    padding: 0px 6px 0 8px;
    justify-content: space-between;
    list-style: none;
    margin: 0px;

    label {
        color: ${Cores.laranjaClaro};  
        margin-bottom: 8px;
    }

    input {
        display: flex;
        background-color: ${Cores.laranjaClaro};
        border: none;
        width: 150px;
        height: 32px;
        margin-top: 8px;
    }

    small {
        color: ${Cores.branco}
    }
`;

export const CheckCartao = styled.div`
    justify-content: flex-end;
    background-color: ${Cores.laranja};

    h3 {
        margin-left: 10px;
        font-size: 20px;
        color: ${Cores.laranjaClaro};
    }
`;

export const CartaoList = styled.div`
    color: ${Cores.laranjaClaro};
    padding: 8px;

    label {
        display: flex;
        margin-bottom: 8px;
    }

    input {
        background-color: ${Cores.laranjaClaro};
        border: none;
        width: 480px;
        height: 32px;
    }
    
`;

export const CartaoNumber = styled.ul`
    display: flex;
    padding: 0;
    padding: 0px 6px 0 8px;
    justify-content: space-between;
    list-style: none;
    margin: 0px;

    label {
        color: ${Cores.laranjaClaro};  
        margin-bottom: 8px;
    }

    input {
        display: flex;
        background-color: ${Cores.laranjaClaro};
        border: none;
        width: 150px;
        height: 32px;
        margin-top: 8px;
    }

    .CVV {
        width: 150px;
    }

    .NumC {
        width: 228px;
    }

    small {
        color: ${Cores.branco}
    }
`;

export const CheckConclusao = styled.form`
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    
    h3 {
        margin-left: 10px;
        font-size: 32px;
        color: ${Cores.laranjaClaro};
    }

    open {
        display: flex;
    }
`;

export const CheckBotao = styled.div`
    display: flex;

    Botao {
        background-color: ${Cores.branco};
    }
`;