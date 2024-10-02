import pizza from '../../assets/images/pizza.png';
import fechar from '../../assets/images/botaoFechar.png';

import { Botao, Cardapio, CardaProduto, Descricao, Modal, ModalText, ModalContainer, SubTitulo, ModalHero } from "./styles";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';

export type Produto = {
    id: number;
    name: string;
    valor?: number;
    image?: string;
}

export const formataPreco = (valor?: number) => {
    if (valor === undefined || valor === null) {
        return 'R$ 0,00';
    }
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};


const produtos: Produto[] = [
    { id: 0, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
    { id: 1, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
    { id: 2, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
    { id: 3, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
    { id: 4, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
    { id: 5, name: 'Pizza Marguerita', valor: 60.90, image: pizza},
];

const ProdutoCarda = ({ id, name,image, maisDetalhes }: Produto & { maisDetalhes: () => void }) => {

    return (
        <CardaProduto key={id}>
            <img src={image} alt={name} />
            <SubTitulo>{name}</SubTitulo>
            <Descricao>
                A clássica {name}: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
            </Descricao>
            <Botao onClick={maisDetalhes}>
                Mais detalhes
            </Botao>
        </CardaProduto>
    );
};

const CardaHero = () => {
    const [modalEstaAberto, setModalEstaAberto] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const dispatch = useDispatch();

    const detalhes = (produto: Produto) => {
        setProdutoSelecionado(produto);
        setModalEstaAberto(true);
    };

    const addToCart = (produto: Produto) => {
        dispatch(add(produto));
        dispatch(open())
    };


    return (
        <>
            <Cardapio>
                {produtos.map(produto => (
                    <ProdutoCarda 
                        key={produto.id} 
                        id={produto.id}
                        image={produto.image}
                        name={produto.name} 
                        maisDetalhes={() => detalhes(produto)} 
                    />
                ))}
            </Cardapio>

            <Modal className={modalEstaAberto ? 'visivel' : ''}>
                <ModalContainer className='container'>
                    <header>
                        <img src={fechar} alt="click para fechar" onClick={() => setModalEstaAberto(false)} />
                    </header>
                    {produtoSelecionado && (
                        <ModalHero>
                            <img src={pizza} alt={produtoSelecionado.name} />
                            <ModalText>
                                <h4>{produtoSelecionado.name}</h4>
                                <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                                <p>Serve: de 2 a 3 pessoas</p>
                                <button onClick={() => addToCart(produtoSelecionado)}>Adicionar ao carrinho - R$ 60,90</button>
                            </ModalText>
                        </ModalHero>
                    )}
                </ModalContainer>
                <div className="overlay"></div>
            </Modal>
        </>
    );
};

export default CardaHero;