import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField, ChipField, EditButton } from 'react-admin';

export const CalendarStyleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <TextField source="name" label="Name" />
            <TextField source="config.name" label="Config name" />
            <EditButton/>
        </Datagrid>
    </List>
);
