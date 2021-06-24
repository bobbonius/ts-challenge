import { useState } from 'react'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { Input, space, sizes } from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/comets'
import getSearchResults from '~/graphql/queries/getSearchResults'

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: ${space[16]};
  margin: ${space[16]} auto;
  max-width: ${sizes.tablet}px;
`

export default function Search() {
  const [query, setQuery] = useState('')

  const { loading, data } = useQuery(getSearchResults, {
    variables: {
      query: query,
    },
  })

  console.log(data)

  return (
    <>
      <SearchContainer>
      <Input
            placeholder="Search for events"
            id="search"
            label="Search"
            hideLabel
            leftAdornment={<MagnifyingGlass size={24} />}
            onChange={e => setQuery(e.target.value)}
            loading={loading}
          />
      </SearchContainer>
    </>
  )
}