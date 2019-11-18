import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  background: #000;
`;

export const Div = styled.View`
  flex: 1;
  flex-direction: row;
  background: #000;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
