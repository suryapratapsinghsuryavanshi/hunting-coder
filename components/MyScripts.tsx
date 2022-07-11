import Script from 'next/script'

function MyScripts() {
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3548860783077018" crossOrigin="anonymous"/>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-JXDTGDR28S"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
            </Script>
        </>
    )
}

export default MyScripts