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

import { IPost } from "../../interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<IPost>({
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
            ],
        },
    });

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
                <Table.Column<IPost>
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