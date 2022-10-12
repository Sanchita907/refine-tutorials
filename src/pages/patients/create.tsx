import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    Create,
    Form,
    Input,
    useForm,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPatients , IPatientAddress} from "../../interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<IPatients>();
    

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Date Of Birth"
                    name="dateOfBirth"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mobile Number"
                    name="mobile"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Existing Health Issues"
                    name="existingHealthIssue"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Address Id"
                    name="PatientAddress_address_id"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Address Line "
                    name="PatientAddress_addressLine"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Area "
                    name="PatientAddress_area"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="City "
                    name="PatientAddress_city"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="State "
                    name="PatientAddress_state"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Zipcode "
                    name="PatientAddress_zipcode"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Create>
    );
};