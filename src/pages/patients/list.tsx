import {
    IResourceComponentsProps
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
    useSelect,
} from "@pankod/refine-antd";

import { IPatientAddress, IPatients } from "../../interfaces";

export const PatientsList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<IPatients>({
        initialSorter: [
            {
                field: "id",
                order: "asc",
            },
        ],
        metaData: {
            fields: [
                "id",
                "name",
                "gender",
                "created_at",
                "dateOfBirth",
                "existingHealthIssue",

                {
                    PatientAddress: ["area"]
                }

            ],
        },
    });

    // const { selectProps } = useSelect<IPatientAddress>({
    //     resource: "healthTech_PatientAddress",
    //     metaData: {
    //         fields: [
    //             "area",
    //         ],
    //     },
    // });


    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                />
                <Table.Column
                    dataIndex="name"
                    title="Name"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="gender"
                    title="Gender"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="dateOfBirth"
                    title="Date Of Birth"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("dateOfBirth", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="created_at"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="existingHealthIssue"
                    title="Existing Health Issue"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column<IPatients>
                    dataIndex="area"
                    title="Area"
                    render={(_, record) => record.PatientAddress.area}

                />

                <Table.Column<IPatients>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                                metaData={{
                                    fields: [
                                        "id",
                                        "name",
                                        "gender",
                                        "created_at",
                                        "dateOfBirth",
                                        "existingHealthIssue",
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