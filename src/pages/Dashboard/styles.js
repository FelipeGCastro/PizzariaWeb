import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
`;
export const HeaderContainer = styled.div`
  background: #0b2031;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoImage = styled.img``;

export const LogoName = styled.h2`
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
  margin-left: 15px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #999999;
`;
export const UserName = styled.h2`
  color: #fff;
  font-family: sans-serif;
  font-size: 18px;
  margin-bottom: 3px;
`;
export const Logout = styled.a`
  color: #fff;
  font-family: sans-serif;
  font-size: 16px;
  opacity: 0.6;
  align-self: flex-end;

  :hover {
    cursor: pointer;
  }
`;

export const CartContainer = styled.div`
  background: #e5293e;
  width: 46px;
  height: 46px;
  border-radius: 23px;

  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;
export const ShoppingCart = styled.img``;

// PRODUCT CONTAINER

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  width: 900px;

  margin-top: 110px;
`;

export const LabelOrders = styled.h2`
  color: #333333;
  align-self: flex-start;
  margin-bottom: 15px;
`;

export const OrderContainer = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  -webkit-box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.5);
  margin-bottom: 23px;
`;

export const OrderTitle = styled.strong`
  color: #0b2031;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const OrderTime = styled.p`
  color: #706e7b;
  font-size: 13px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const OrderPrice = styled.span`
  font-size: 18px;
  color: #0b2031;
  font-weight: bold;
`;

export const ProductsContainer = styled.div`
  padding: 5px 0 10px 0;
  border-width: 1px 0;
  border-style: solid;
  border-color: #2222;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductBox = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #2222;
  border-radius: 10px;
  padding: 15px;
  width: 280px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 5px;
  margin-top: 5px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  flex: 1;
  height: 100%;
`;

export const ProductName = styled.h3`
  font-size: 15px;
  color: #0b2031;
  margin: 10px 0 6px;
`;

export const ProductDetail = styled.p`
  font-size: 13px;
  color: #706e7b;
`;

export const OrderObs = styled.p`
  font-size: 16px;
  color: #706e7b;
`;
export const OrderObsBold = styled.strong`
  font-weight: bold;
`;
