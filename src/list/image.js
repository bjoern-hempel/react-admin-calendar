import * as React from "react";
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, ChipField, ReferenceManyField, SingleFieldList, FunctionField } from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="path" label="Path" />
            <NumberField source="width" options={{ maximumFractionDigits: 0 }} />
            <NumberField source="height" options={{ maximumFractionDigits: 0 }} />
            <NumberField source="size" options={{ maximumFractionDigits: 0 }} />
            <ReferenceManyField label="Calendar Images" reference="calendar_images" target="imageId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
            <EditButton />
        </Datagrid>
    </List>
);
