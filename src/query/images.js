import { gql } from 'apollo-boost';

export default gql`
  query Images {
    images @client {
      id
      src
      alt
    }
  }
`;
