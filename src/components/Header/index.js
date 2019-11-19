import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Div, Logo, CartView, CartText, LogoView } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <>
      <Container>
        <Div>
          <LogoView onPress={() => navigation.navigate('Main')}>
            <Logo />
          </LogoView>
          <CartView onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" size={20} color="#FFF" />
            <CartText>{cartSize}</CartText>
          </CartView>
        </Div>
      </Container>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
