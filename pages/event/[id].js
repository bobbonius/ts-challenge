import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { Error } from '~/components/Error'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { initializeApollo } from '~/graphql/client'
import getEvent from '~/graphql/queries/getEvent'

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
        <Container>
          <Image src={imageUrl} size={128} />
          <H2>{name}</H2>
          <H5>{new Date(date).toLocaleString()}</H5>
          <H5>{location}</H5>
          <Text>{description}</Text>
        </Container>
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
