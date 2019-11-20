import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/Cart/actions';

import {
  Container,
  Products,
  ProductImage,
  Product,
  ProductInfo,
  ProductDelete,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductTotals,
  ProductActions,
  ButtonAction,
  AmountProduct,
  ProductSubTotal,
  Total,
  TotalText,
  TotalPrice,
  BuyButton,
  BuyText,
} from './styles';

function Cart({ products, removeFromCart, updateAmount, total }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDescription>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDescription>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={20} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductTotals>
              <ProductActions>
                <ButtonAction onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ButtonAction>
                <AmountProduct>{product.amount}</AmountProduct>
                <ButtonAction onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ButtonAction>
              </ProductActions>
              <ProductSubTotal>{product.subtotal}</ProductSubTotal>
            </ProductTotals>
          </Product>
        ))}
        <Total>
          <TotalText>Total</TotalText>
          <TotalPrice>{total}</TotalPrice>
          <BuyButton>
            <BuyText>Finalizar Pedido</BuyText>
          </BuyButton>
        </Total>
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
