
import {  CarrinhoContainer, CartItem, CartList, Infos, Overlay, Sidebar, Valores } from "./styled"
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import {  close, remove} from '../../store/reducers/cart';
import { formataPreco } from "../CardaHero";
import { Link } from "react-router-dom";



const Carrinho = () => {
    
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart );
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }
    
    const valorTotal = items.reduce((total, item) => total + (item.valor || 0), 0);


    return (
        <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <CartList>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <Infos>
                                <h3>{item.name}</h3>
                                <span>{formataPreco(item.valor)}</span>
                                <button type="button" onClick={() => removeItem(item.id)}></button>
                            </Infos>
                        </CartItem>
                    ))}
                </CartList>
                <Valores>
                    <strong>Valor total:</strong>
                    <p>{formataPreco(valorTotal)}</p>
                </Valores>
                <button type='submit' title="Clique aqui para continuar com a entrega" >
                    <Link to="/checkout">Continuar com a entrega</Link>
                </button>
            </Sidebar>
        </CarrinhoContainer>

    )

};

export default Carrinho