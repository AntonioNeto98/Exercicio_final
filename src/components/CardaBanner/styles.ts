import styled from "styled-components";
import { Cores } from "../../styles";

export const Banner = styled.div`
    position: relative;
    height: 284px;
    font-size: 22px;

    background-repeat: no-repeat;
    background-size: cover;

    &::after {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        opacity: 0.56;
    }

    p {
        font-size: 30px;
        margin: 0;
        padding: 25px 0 0 80px;
        color: ${Cores.branco};
    }

    h2 {
        padding: 130px 0 0 80px;
        font-weight: bold;
        color: ${Cores.branco};
    }

    .container {
        z-index: 1;
        position: relative
    }
`;