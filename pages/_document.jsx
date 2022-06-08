import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='es'>
            <Head >
                <meta charSet='utf-8' />
                <link rel='canonical' href='https://www.somostaxiseguro.com/' />
                <meta name='author' content='@AlmeydaDev' />
                <meta name='description' content='Taxi Seguro - Servicios de taxi corporativo. Somos una empresa formal dedicada y especializada en el servicio de movilidad en toda la ciudad de Lima y fuera' />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}