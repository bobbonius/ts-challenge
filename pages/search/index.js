  
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { Input, Card, Text, space, sizes } from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/comets'
import styled from '@emotion/styled'
import getSearchResults from '~/graphql/queries/getSearchResults'
import { useHelpers } from '../../hooks/useHelpers'

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${space[16]};
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

  const { truncateString } = useHelpers()

  const hasResults = query && !loading && data

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
          {!hasResults && <Text>Results are shown here</Text>}
          {hasResults && data.searchResults.map(event => {
              const { name, id, location, date } = event

              return (
                <React.Fragment key={id}>
                  <Link href={`/event/${id}`} passHref>
                    <a>
                      <Card
                        title={truncateString(name, 40)}
                        text={`${location} - ${new Date(
                          date
                        ).toLocaleDateString()}`}
                      />
                    </a>
                  </Link>
                </React.Fragment>
              )
            })}
        </SearchContainer>
    </>
  )
}