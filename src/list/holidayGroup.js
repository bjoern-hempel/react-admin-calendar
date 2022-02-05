import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    ReferenceManyField,
    SingleFieldList,
    ChipField
} from 'react-admin';

export const HolidayGroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" options={{ maximumFractionDigits: 0 }} />
            <TextField source="name" label="Name" />
            <ReferenceManyField label="Holidays" reference="holidays" target="holidayGroupId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
            <EditButton />
        </Datagrid>
    </List>
);
