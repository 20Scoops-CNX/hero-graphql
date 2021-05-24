import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    heros: [Hero!]
    hero(id: ID!): Hero
  }

  extend type Mutation {
    create(name: String!): Hero!
  }

  type Hero {
    id: ID!
    name: String!
  }
`;
