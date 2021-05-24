import { gql } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';

import heroSchema from './hero';

const linkSchema = gql`
  scalar Date
  type Query {
    heros: [Hero!]
  }
  type Mutation {
    create(body: HeroInput!): Hero!
  }
`;

export default mergeTypeDefs([heroSchema, linkSchema]);
