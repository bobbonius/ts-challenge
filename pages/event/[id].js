import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { initializeApollo } from '~/graphql/client'
import getEvent from '~/graphql/queries/getEvent'

const Event = ({ data }) => {


  const { name, date, location, imageUrl, description } = data.event

  return (
    <>
      <Cover />

      <Container>
        <Image src={imageUrl} size={128} />
        <H2>{name}</H2>
        <H5>{new Date(date).toLocaleString()}</H5>
        <H5>{location}</H5>
        <Text>{description}</Text>
      </Container>

      <Footer />
    </>
  )
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
