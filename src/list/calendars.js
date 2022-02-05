import * as React from "react";
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton } from 'react-admin';

export const CalendarList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <ReferenceField label="Calendar Style" source="calendarStyleId" reference="calendar_styles">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="title" />
            <TextField source="subtitle" />
            <ReferenceField label="Holiday Group" source="holidayGroupId" reference="holiday_groups">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="config.backgroundColor" label="Background Color" />
            <EditButton />
        </Datagrid>
    </List>
);
