import { NextPage } from "next";
import Head from "next/head";

const Service: NextPage = () => {
    return(
        <>
        <Head>
            <title>Hunting Coder | Service</title>
            <meta name="service" content="service page containe information about services provided by hunting coder webstie!" />
        </Head>
        {/* if use global keyword it make thise component level css global */}
            {/* <style jsx global>
                {`
                    .span {
                        color: red;
                    }
                    span {
                        background: yellow;
                    }
                `}
            </style> */}
            <h2>Service Page</h2>
            {/* <span className="span">Service Page</span> */}
        </>
    );
}

export default Service;