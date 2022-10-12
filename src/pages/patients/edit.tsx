import React from "react";
import { HttpError, IResourceComponentsProps } from "@pankod/refine-core";

import {
    Edit,
    Form,
    Input,
    ListButton,
    RefreshButton,
    useForm,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPatients } from "../../interfaces";

export const PostEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<
        IPatients,
        HttpError,
        IPatients
    >({
        metaData: {
            fields: [
                "id",
                "name",
            ],
        },
    });

    return (
        <Edit
            pageHeaderProps={{
                extra: (
                    <>
                        <ListButton />
                        <RefreshButton onClick={() => queryResult?.refetch()} />
                    </>
                ),
            }}
            saveButtonProps={saveButtonProps}
        >
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) =>
                    formProps.onFinish?.({
                        ...values,
                    })
                }
            >
                <Form.Item
                    label="ID"
                    name="id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                </Form.Item>
            </Form>
        </Edit>
    );
};