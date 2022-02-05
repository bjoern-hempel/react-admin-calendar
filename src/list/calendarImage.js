import * as React from "react";
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, BooleanField } from 'react-admin';

export const CalendarImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <ReferenceField label="Calendar" source="calendarId" reference="calendars">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Image" source="imageId" reference="images">
                <TextField source="path" />
            </ReferenceField>
            <NumberField source="year" options={{ maximumFractionDigits: 0 }} label="Year" />
            <NumberField source="month" options={{ maximumFractionDigits: 0 }} label="Month" />
            <EditButton />
        </Datagrid>
    </List>
);
