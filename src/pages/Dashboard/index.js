import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import LoginActions from '../../store/ducks/auth';
import {
  Container,
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoName,
  UserContainer,
  UserInfoContainer,
  UserName,
  Logout,
  CartContainer,
  ShoppingCart,
  ContentContainer,
  LabelOrders,
  OrderContainer,
  OrderTitle,
  OrderTime,
  OrderPrice,
  ProductsContainer,
  ProductBox,
  ProductImage,
  InfoContainer,
  ProductName,
  ProductDetail,
  OrderObs,
  OrderObsBold,
} from './styles';

import Logo from '../../assets/Imagens/logo.svg';

import api from '../../services/api';

class Dashboard extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  state = {
    orders: null,
    username: '',
  };

  componentDidMount = async () => {
    const response = await api.get('orders');
    const username = await api.get('users');
    this.setState({ orders: response.data, username: username.data });
  };

  handleLogoutPress = () => {
    const { signOut } = this.props;

    signOut();
  };

  render() {
    const { orders, username } = this.state;
    return (
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <LogoImage src={Logo} />
            <LogoName>Pizzaria Don Juan</LogoName>
          </LogoContainer>
          <UserContainer>
            <UserInfoContainer>
              <UserName>{username}</UserName>
              <Logout onClick={this.handleLogoutPress}>Sair do App</Logout>
            </UserInfoContainer>

            <CartContainer>
              <ShoppingCart src={Logo} />
            </CartContainer>
          </UserContainer>
        </HeaderContainer>
        <ContentContainer>
          <LabelOrders>Últimos Pedidos</LabelOrders>
          {orders
            && orders.map(order => (
              <OrderContainer key={order.id}>
                <OrderTitle>
                  Pedido #{order.id} - {order.customer}
                </OrderTitle>
                <OrderTime>
                  {`Há ${distanceInWordsToNow(order.created_at, {
                    locale: pt,
                  })}`}
                </OrderTime>
                <OrderPrice>R${order.price}</OrderPrice>
                <ProductsContainer>
                  {order.products.map(product => (
                    <ProductBox key={product.id}>
                      <ProductImage src={product.url} />
                      <InfoContainer>
                        <ProductName>
                          {product.productName} - {product.typeName}
                        </ProductName>
                        <ProductDetail>Tamanho: {product.sizeName}</ProductDetail>
                      </InfoContainer>
                    </ProductBox>
                  ))}
                </ProductsContainer>
                <OrderObs>
                  <OrderObsBold>Observações: </OrderObsBold>
                  {order.description}
                </OrderObs>
              </OrderContainer>
            ))}
        </ContentContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Dashboard);
