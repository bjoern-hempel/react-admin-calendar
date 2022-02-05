import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './list/users';
import { CalendarList } from './list/calendars';
import { EventList } from './list/events';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost/api/v1', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="calendars" list={CalendarList} />
        <Resource name="calendar_images" list={ListGuesser} />
        <Resource name="calendar_styles" list={ListGuesser} />
        <Resource name="events" list={EventList} />
        <Resource name="holidays" list={ListGuesser} />
        <Resource name="holidays" list={ListGuesser} />
        <Resource name="holiday_groups" list={ListGuesser} />
        <Resource name="images" list={ListGuesser} />
    </Admin>
);

export default App;
