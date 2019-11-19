import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Product,
  AmountPrice,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  AddButton,
  AddButtonText,
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
          <AmountPrice>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmount>1</ProductAmount>
          </AmountPrice>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <Container>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
        </Container>
      </>
    );
  }
}
