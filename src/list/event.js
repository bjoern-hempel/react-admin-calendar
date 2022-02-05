import * as React from "react";
import { List, Datagrid, TextField, DateField, NumberField, ReferenceField, EditButton } from 'react-admin';

export const EventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="name" />
            <NumberField source="type" options={{ maximumFractionDigits: 0 }} />
            <DateField source="date" />
            <TextField source="config.color" label="Color" />
            <EditButton />
        </Datagrid>
    </List>
);
