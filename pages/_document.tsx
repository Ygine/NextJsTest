import Document, { Html, Head, Main, NextScript } from 'next/document'
import {siteTitle} from "../src/components/layout";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body data-themcontainer={""}>
        <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
