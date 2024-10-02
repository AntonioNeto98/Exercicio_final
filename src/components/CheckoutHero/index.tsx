import { useFormik } from "formik";
import * as Yup from 'yup';
import { CartaoList, CartaoNumber, CheckBotao, CheckCartao, CheckConclusao, CheckList, CheckNumber, CheckoutCont, CheckoutForm } from "./styled";
import { Botao } from "../Hero/styles";
import { Overlay } from "../Carrinho/styled";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { open } from '../../store/reducers/cart'
import { Link } from "react-router-dom";



const CheckoutHero =() => {
    const {isOpen} = useSelector((state: RootReducer) => state.cart );
    const dispatch = useDispatch()
    
    const form = useFormik({
        initialValues: {
            fullName: '',
            endereco: '',
            cidade: '',
            cep: '',
            numeroCasa: '',
            complemento: '',
            cartaoNome: '',
            cartaoNumero: '',
            cartaoCvv: '',
            vencimento: '',
            anoVencimento: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(5, 'O campo precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatorio'),
            endereco: Yup.string().email('E-mail inválido')
            .required('O campo é obrigatorio'),
            cidade: Yup.string().required('Cidade é obrigatória'),
            cep: Yup.string().min(8, 'O campo precisa ter no minimo 8 caracteres' ).max(8,'O campo precisa ter no maximo 8 caracteres').required('CEP é obrigatório'),
            numeroCasa: Yup.string().required('Número da casa é obrigatório'),
            complemento: Yup.string(),
            cartaoNome:  Yup.string().min(5, 'O campo precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatorio'),
            cartaoNumero: Yup.string().min(5, 'O campo precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatorio'),
            cartaoCvv:  Yup.string().min(3, 'O campo precisa ter pelo menos 3 caracteres')
            .max(3, 'o campo precisa ter no maximo 3 caracteres')
            .required('O campo é obrigatorio'),
            vencimento: Yup.string().min(5, 'O campo precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatorio'),
            anoVencimento:  Yup.string().min(5, 'O campo precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatorio'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    
        })

        const openConclu = () => {
            dispatch(open())
        }

        const getErrorMessage = (fieldName: string, message?: string) => {
            const isTouched = fieldName in form.touched
            const isInvalid = fieldName in form.errors

            if (isTouched && isInvalid) return message
            return ''
        }

        return(
            <>
            <CheckoutForm onSubmit={form.handleSubmit}>
            <CheckoutCont >
                <h3>Entrega</h3>
                <h3>Pagamento - Valor a pagar </h3>
                <CheckList>
                    <label>Quem ira receber</label>
                    <input 
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                    <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
                </CheckList>

                <CheckList>
                    <label>Endereço</label>
                    <input 
                        id="endereco"
                        type="text"
                        name="endereco"
                        value={form.values.endereco}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
                    
                </CheckList>

                <CheckList>
                    <label>Cidade</label>
                    <input
                        id="cidade"
                        type="text"
                        name="cidade"
                        value={form.values.cidade}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
                </CheckList>

                <CheckNumber>
                    <li>
                        <label>CEP</label>
                        <input
                            id="cep"
                            type="text"
                            name="cep"
                            value={form.values.cep}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </li>
                    
                    <li>
                        <label>Número</label>
                        <input
                            id="numeroCasa"
                            type="text"
                            name="numeroCasa"
                            value={form.values.numeroCasa}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
                    </li>
                </CheckNumber>

                <CheckList>
                    <label>Complemento (opcional)</label>
                    <input
                        id="complemento"
                        type="text"
                        name="complemento"
                        value={form.values.complemento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    
                </CheckList>
            
            
            <CheckCartao>

            <CartaoList>
                <label>Nome no cartão</label>
                <input
                    id="cartaoNome"
                    type="text"
                    name="cartaoNome"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cartaoNome}
                />
                <small>{getErrorMessage('cartaoNome', form.errors.cartaoNome)}</small>
            </CartaoList>
            <CartaoNumber>
                <li>
                    <label>Número do cartão</label>
                    <input
                        className="NumC"
                        id="cartaoNumero"
                        type="text"
                        name="cartaoNumero"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cartaoNumero}
                    />
                    <small>{getErrorMessage('cartaoNumero', form.errors.cartaoNumero)}</small>
                </li>
                <li>
                    <label>CVV</label>
                    <input
                        className="CVV"
                        id="cartaoCvv"
                        type="text"
                        name="cartaoCvv"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cartaoCvv}
                    />
                    <small>{getErrorMessage('cartaoCvv', form.errors.cartaoCvv)}</small>
                </li>
            </CartaoNumber>
            <CartaoNumber>
                <li>
                    <label>Mês de vencimento</label>
                    <input
                        id="vencimento"
                        type="text"
                        name="vencimento"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.vencimento}
                    />
                    <small>{getErrorMessage('vencimento', form.errors.vencimento)}</small>
                </li>
                <li>
                    <label>Ano de vencimento</label>
                    <input
                        id="anoVencimento"
                        type="text"
                        name="anoVencimento"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.anoVencimento}
                    />
                    <small>{getErrorMessage('anoVencimento', form.errors.anoVencimento)}</small>
                </li>
            </CartaoNumber>
            

            <CheckBotao>
                <button type="submit" onClick={openConclu}>Concluir Pedido</button>
                <Botao >
                        <Link to="/cardapio">
                            Voltar para carrinho
                        </Link>
                </Botao>
            </CheckBotao>
        </CheckCartao>
        </CheckoutCont>
        </CheckoutForm>

        
        <CheckConclusao className={isOpen? 'open' : ''}>
            
                <h3>Pedido realizado - {}</h3>
                <p>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                </p>
                <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                </p>
                <p>
                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                </p>
                <p>
                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                    </p>
                <Botao >Concluir</Botao>
            
            <Overlay />
        </CheckConclusao>
        </>
        )
    }

    export default CheckoutHero