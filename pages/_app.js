import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'
import styled from '@emotion/styled'

const Container = styled.div`
  min-height: 100vh;
`

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Cover />
        <Container>
          <Component {...pageProps} />
        </Container>
      <Footer />
    </ApolloProvider>
  )
}
