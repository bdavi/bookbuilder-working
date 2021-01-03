import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { theme } from '../lib/theme';
import Header from '../components/Header';

const propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected styles.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <CssBaseLine />
        <Header {...pageProps} />
        <Component {...pageProps} />;
      </ThemeProvider>
    );
  }
}

MyApp.propTypes = propTypes;

export default MyApp;
