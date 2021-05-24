import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    heros(skip: Int): [Hero!]
    hero(id: ID!): Hero!
  }

  extend type Mutation {
    create(body: HeroInput!): Hero!
  }

  type Images {
    xs: String
    sm: String
    md: String
    lg: String
  }

  input ImagesInput {
    xs: String
    sm: String
    md: String
    lg: String
  }

  type Connections {
    groupAffiliation: String
    relatives: String
  }

  input ConnectionsInput {
    groupAffiliation: String
    relatives: String
  }

  type Work {
    occupation: String
    base: String
  }

  input WorkInput {
    occupation: String
    base: String
  }

  type Biography {
    fullName: String
    alterEgos: String
    placeOfBirth: String
    firstAppearance: String
    publisher: String
    alignment: String
    aliases: [String]
  }

  input BiographyInput {
    fullName: String
    alterEgos: String
    placeOfBirth: String
    firstAppearance: String
    publisher: String
    alignment: String
    aliases: [String]
  }

  type Appearance {
    gender: String
    race: String
    eyeColor: String
    hairColor: String
    weight: [String]
    height: [String]
  }

  input AppearanceInput {
    gender: String
    race: String
    eyeColor: String
    hairColor: String
    weight: [String]
    height: [String]
  }

  type Powerstats {
    intelligence: Int
    strength: Int
    speed: Int
    durability: Int
    power: Int
    combat: Int
  }

  input PowerstatsInput {
    intelligence: Int
    strength: Int
    speed: Int
    durability: Int
    power: Int
    combat: Int
  }

  type Hero {
    _id: ID!
    name: String
    slug: String
    images: Images
    connections: Connections
    work: Work
    biography: Biography
    appearance: Appearance
    powerstats: Powerstats
  }

  input HeroInput {
    name: String!
    slug: String
    images: ImagesInput
    connections: ConnectionsInput
    work: WorkInput
    biography: BiographyInput
    appearance: AppearanceInput
    powerstats: PowerstatsInput
  }
`;
