import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export default (): JSX.Element => {
  return (
    <View>
      <StyledImage source={require('../../../assets/splash.png')} />
    </View>
  );
};

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;
