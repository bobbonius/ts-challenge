import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Header />
        <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}