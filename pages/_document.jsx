import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    // static async getInitialProps(ctx) {
    //     const initalProps = await Document.getInitialProps(ctx)

    //     return initalProps
    // }

    render() {
        return (
            <Html
                lang="es"
            >
                <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument