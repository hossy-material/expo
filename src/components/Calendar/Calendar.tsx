import React from 'react';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import createDay from './Day';
import calendarConfig from './config';

// カレンダーの詳細設定
LocaleConfig.locales['ja'] = calendarConfig();
LocaleConfig.defaultLocale = 'ja';

export default (): JSX.Element => {
  return (
    <CalendarList
      monthFormat={'yyyy年MM月'}
      horizontal
      pagingEnabled
      calendarHeight={900}
      theme={{ textMonthFontSize: 20 }}
      dayComponent={({ date, state }) => createDay({ date, state })}
    />
  );
};
