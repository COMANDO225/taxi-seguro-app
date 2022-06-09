import '../styles/index.css'
import Script from 'next/script'

{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-231490160-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-231490160-1');
</script> */}


function MyApp({ Component, pageProps }) {

  return (
      <>
        <Script 
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=UA-231490160-1'
        />

        <Script id='google-analytics' strategy='afterInteractive'>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-231490160-1');
            `
          }
        </Script>

        <Component {...pageProps} />
      </>
    )
    
}

export default MyApp
