import styled from "styled-components";

import myImage from '../img/monobank_cat.png';

export default function Balance({ balance }) {
  return (
    <BlockTag>
      <img src={myImage} width="300px" height="300px" alt="My Image"/>
      <Money>{balance} ₴ <Sup>UA</Sup></Money>
    </BlockTag>
  );
}

const BlockTag = styled.div`
  /* робимо ширину на весь екран */
  width: 100%;

  /* робимо відступи по боках та зверху, 
  щоб задати потрібний розмір нашого блоку
  */
  padding: 100px 12px;

  /* вмикаємо режим верстки flex, 
  робимо текст по центру вертикально та горизонтально 
  */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

const Money = styled.div`
  /* задаємо розмір тексту */
  font-size: 52px;

  /* задаємо колір тексту */
  color: #fff;
`;

const Sup = styled.sup`
  font-size: 60%; 
  vertical-align: super;
  opacity: 0.8; 
`;
