import {
    IResourceComponentsProps,
} from "@pankod/refine-core";

import {
    List,
    Table,
    useTable,
    Space,
    EditButton,
    ShowButton,
    DeleteButton,
    getDefaultSortOrder,
    DateField,
} from "@pankod/refine-antd";

import { IPatientAddress } from "../../interfaces";

export const PatientsAddressList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<IPatientAddress>({
        initialSorter: [
            {
                field: "address_id",
                order: "asc",
            },
        ],
        metaData: {
            fields: [
                "address_id",
                "addressLine",
                "area",
                "city",
                "zipcode",
                "state",
                "created_at",
            ],
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="address_id"
                    title="ID"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("address_id", sorter)}
                />
                <Table.Column
                    dataIndex="addressLine"
                    title="Address Line"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="area"
                    title="Area"
                    sorter={{ multiple: 1 }}
                />

                <Table.Column
                    dataIndex="created_at"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="city"
                    title="City"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="state"
                    title="State"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="zipcode"
                    title="Zipcode"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column<IPatientAddress>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.address_id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.address_id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.address_id}
                                metaData={{
                                    fields: [
                                        "address_id",
                                        "addressLine",
                                        "area",
                                        "city",
                                        "zipcode",
                                        "state",
                                        "created_at",
                                    ],
                                }}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};