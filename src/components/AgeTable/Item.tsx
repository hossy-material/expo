import React from 'react';
import { Text } from 'react-native';
import ImageContainer from './AgeTable';
import styled from 'styled-components/native';

export default (): JSX.Element => {
  return (
    <StyledContainer>
      <ImageContainer />
      <StyledSubView>
        <Text>hogehoge</Text>
      </StyledSubView>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding-top: 50;
  flex: 1;
  flex-direction: row;
`;

const StyledSubView = styled.View`
  background-color: red;
  width: 100%;
  height: 100px;
`;
