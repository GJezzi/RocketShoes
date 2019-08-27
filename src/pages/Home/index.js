import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>
                    Tênis Masculino Jordan Air. A escolha dos jogadores de
                    Basquete. O melhor tênis para melhorar seu jogo.
                </strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>Tênis Masculino</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>Tênis Masculino</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>Tênis Masculino</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>Tênis Masculino</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
                    alt="Tênis"
                />
                <strong>Tênis Masculino</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={14} color="#FFF" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
