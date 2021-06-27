import { useState, Fragment } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { Input, Card, space, sizes, color } from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/comets'
import styled from '@emotion/styled'
import getSearchResults from '~/graphql/queries/getSearchResults'
import { useHelpers } from '~/hooks/useHelpers'
import { Placeholder } from '~/components/Placeholder'

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

  const hasResults = query && !loading && data.searchResults.length > 0
  const showPlaceholder = query && !loading && data.searchResults.length === 0

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
        {showPlaceholder && (
          <Placeholder text="No results" color={color.spaceMedium} size={36} />
        )}
        {hasResults &&
          data.searchResults.map(event => {
            const { name, id, location, date } = event

            return (
              <Fragment key={id}>
                <Link href={`/event/${id}`} passHref>
                  <a>
                    <Card
                      title={truncateString(name, 35)}
                      text={`${location} - ${new Date(
                        date
                      ).toLocaleDateString()}`}
                    />
                  </a>
                </Link>
              </Fragment>
            )
          })}
      </SearchContainer>
    </>
  )
}
