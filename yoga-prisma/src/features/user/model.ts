export const userTypeDef = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
  }
`
