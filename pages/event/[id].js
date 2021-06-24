import React from 'react'
import getEvent from '~/graphql/queries/getEvent'
import { initializeApollo } from '~/graphql/client'
import { Error } from '~/components/Error'
import { EventCover } from '~/components/EventCover'
import Container from '~/components/Container'

const Event = ({ data }) => {
  if (!data.event)
    return (
      <Container>
        <Error>
          Something went wrong, please take me <a href="/">back</a>
        </Error>
      </Container>
    )

  if (data) {
    const { name, date, location, imageUrl, description } = data.event

    return (
      <>
        <main>
          <EventCover
            imageUrl={imageUrl}
            name={name}
            location={location}
            description={description}
            date={date}
          />
        </main>
      </>
    )
  }
}

export const getServerSideProps = async ({ params }) => {
  const eventId = parseInt(params.id)
  const client = initializeApollo()

  const { data } = await client.query({
    query: getEvent,
    variables: { id: eventId },
  })

  return {
    props: {
      data: data,
    },
  }
}

export default Event