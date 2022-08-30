import Script from 'next/script'

function MyScripts() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id="G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"`}
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
            </Script>
        </>
    )
}

export default MyScripts