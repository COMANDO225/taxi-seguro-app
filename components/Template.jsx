import Head from 'next/head'
const Template = ({children}) => {
    return (
        <>
            <Head>
                <title>Taxi Seguro</title>
                <meta name="description" content="Generated by create next app" />
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    );
}

export default Template;