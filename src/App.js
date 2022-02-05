import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CalendarList } from './list/calendar';
import { CalendarImageList } from './list/calendarImage';
import { CalendarStyleList } from './list/calendarStyle';
import { EventList } from './list/event';
import { HolidayList } from './list/holiday';
import { HolidayGroupList } from './list/holidayGroup';
import { ImageList } from './list/image';
import { UserList } from './list/user';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost/api/v1', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="calendars" list={CalendarList} />
        <Resource name="calendar_images" list={CalendarImageList} />
        <Resource name="calendar_styles" list={CalendarStyleList} />
        <Resource name="events" list={EventList} />
        <Resource name="holidays" list={HolidayList} />
        <Resource name="holiday_groups" list={HolidayGroupList} />
        <Resource name="images" list={ImageList} />
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
