import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getSearchResults = gql`
  query getSearchResults($query: String!) {
    searchResults(query: $query) {
      ...event
    }
  }
  ${event}
`

export default getSearchResults