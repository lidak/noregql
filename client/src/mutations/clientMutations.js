import {gql} from '@apollo/client';

const ADD_CLIENT = gql`
mutation addlient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
        id,
        email,
        name,
        phone
    }
}
`

const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id) {
            id,
            email,
            name,
            phone
        }
    }
`;

export {DELETE_CLIENT, ADD_CLIENT};