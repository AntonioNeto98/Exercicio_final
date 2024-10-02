import logo from '../../assets/images/logo.png'

import { HeaderCard } from "./styles";

import { useDispatch } from 'react-redux';
import { open } from '../../store/reducers/cart';

const CardaHeader = () => {
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }
    
    return (

    <HeaderCard>
        <p>Restaurantes</p>
        <img src={logo} alt="Efood" />
        <button onClick={openCart}> produto(s) no carrinho</button>
    </HeaderCard>

    )
}



export default CardaHeader