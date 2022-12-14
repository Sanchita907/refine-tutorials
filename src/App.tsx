import { Refine } from "@pankod/refine-core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider, {
    GraphQLClient,
} from "@pankod/refine-hasura";
import "@pankod/refine-antd/dist/styles.min.css";

import { PostCreate, PostEdit, PostShow, PatientsList } from "./pages/patients";
import { PatientsAddressList } from "./pages/PatientAddress/list";

const API_URL = "http://localhost:8080/v1/graphql";
console.log(API_URL);

const client = new GraphQLClient(API_URL, {
    headers: {
        "x-hasura-role": "admin",
    },
});

const gqlDataProvider = dataProvider(client);

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={gqlDataProvider}
            resources={[
                {
                    
                    name: "healthTech_Patients",
                    list: PatientsList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
                {
                    name: "healthTech_PatientAddress",
                    list: PatientsAddressList,

                }
            ]}
            notificationProvider={notificationProvider}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />
    );
};

export default App;