import * as React from "react";
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, DateField } from 'react-admin';

export const HolidayList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <ReferenceField label="Holiday Group" source="holidayGroupId" reference="holiday_groups">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="name" options={{ maximumFractionDigits: 0 }} label="Name" />
            <DateField source="date" label="Date" />
            <TextField source="config.color" label="Color" />
            <EditButton />
        </Datagrid>
    </List>
);
