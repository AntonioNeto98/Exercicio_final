import styled from "styled-components";
import { Cores } from "../../styles";

export const FooterBaner = styled.div`
    background-color: ${Cores.laranjaClaro};
`;

export const FooterLogo = styled.div`
    img{
        display: flex;
        margin: auto;
        padding: 40px
        }
`;

export const ListRedes = styled.div`
    display: flex;
    list-style: none;
    justify-content: center;
`;

export const Redes = styled.div`
    margin-right: 8px; 
    margin-bottom: 80px
`;

export const Text = styled.div`
    display: flex;
    padding-bottom: 40px;
    font-size: 10px;
    color: ${Cores.laranja};
    justify-content: center;
    text-align: center;
`;