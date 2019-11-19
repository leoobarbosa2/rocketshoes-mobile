import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Div, Logo, CartView, CartText } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Div>
          <Logo />
          <CartView>
            <Icon name="shopping-basket" size={20} color="#FFF" />
            <CartText>1</CartText>
          </CartView>
        </Div>
      </Container>
    </>
  );
}
