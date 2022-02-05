import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField, ChipField, EditButton } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <EmailField source="email" />
            <TextField source="username" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <ChipField source="roles" />
            <EditButton/>
        </Datagrid>
    </List>
);
