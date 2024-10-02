import { styled } from 'styled-components';

import { Cores } from '../../styles';

export const HeaderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: ${Cores.laranjaClaro};

    img{
    display: block;
    width: 125px;
    padding: 40px
    }

    p, button {
    color: ${Cores.laranja};
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

