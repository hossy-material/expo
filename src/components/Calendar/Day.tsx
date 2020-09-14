import { DayComponentProps } from 'react-native-calendars';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export default (
  dayComponent: Pick<DayComponentProps, 'date' | 'state'>
): JSX.Element => {
  return (
    <View>
      <StyledDayText state={dayComponent.state}>
        {dayComponent.date.day}
      </StyledDayText>
    </View>
  );
};

type State = '' | 'selected' | 'disabled' | 'today';

const StyledDayText = styled.Text<{ state: State }>`
  text-align: center;
  color: ${(props) => (props.state === 'disabled' ? 'gray' : 'black')};
  font-size: 20px;
  padding: 15px;
`;
