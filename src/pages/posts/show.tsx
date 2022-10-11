import { useShow, IResourceComponentsProps } from "@pankod/refine-core";

import {
    Show,
    Typography,
    RefreshButton,
} from "@pankod/refine-antd";

import { IPost } from "../../interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
    const metaData = {
        fields: [
            "id",
            "name",
        ],
    };

    const { queryResult } = useShow<IPost>({
        metaData,
    });

    const { data, isLoading } = queryResult;
    const record = data?.data;
    console.log(record);

    return (
        <Show
            isLoading={isLoading}
            pageHeaderProps={{
                extra: (
                    <RefreshButton
                        onClick={() => {
                            queryResult.refetch();
                        }}
                    />
                ),
            }}
        >
            <Title level={5}>ID</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>

        </Show>
    );
};