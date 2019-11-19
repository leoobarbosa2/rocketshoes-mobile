import React from 'react';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({ products, dispatch }) {
  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDescription>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDescription>
              <ProductDelete
                onPress={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                }
              >
                <Icon name="delete-forever" size={20} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductTotals>
              <ProductActions>
                <ButtonAction>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ButtonAction>
                <AmountProduct>{product.amount}</AmountProduct>
                <ButtonAction>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ButtonAction>
              </ProductActions>
              <ProductSubTotal>259,60</ProductSubTotal>
            </ProductTotals>
          </Product>
        ))}
        <Total>
          <TotalText>Total</TotalText>
          <TotalPrice>R$ 1619,10</TotalPrice>
          <BuyButton>
            <BuyText>Finalizar Pedido</BuyText>
          </BuyButton>
        </Total>
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
