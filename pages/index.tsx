import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import PosterImage from '../public/code.jpg';
// import SirImg from "./../public/sir.png";
import Style from '../styles/Blog.module.css';
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { fetchData } from "../components/requests";
import { capitalToKebab } from "case-shift";

// if you want to image in your next app it is essentail to use a loader method to make all process smooter.

export type requestPropsType = {
    data: {
        blogs: string[],
        error: boolean
    }
}

const Home: NextPage<requestPropsType> = (props) => {const [ err, setErr ] = useState<boolean>();
    
    const [ blogs, setBlogs ] = useState<{ blogs: string[] }>({ blogs: props.data.blogs });

    // useEffect(() => {
    //     fetchData(`../api/blog-list`).then(({ data, error }: any)  => {
    //         setBlogs(data)
    //         setErr(error);
    //     }).catch(() => {
    //         setErr(true);
    //     });
    // }, [])

    return (
        <div className={styles.container}>
            {/* The Head component are do same work as html head tag but provide some extra funcitnality. */}
            <Head>
                <title>Hunting Coder</title>
                <meta
                    name="description"
                    content="A blog for hunting coder by a hunting coder!"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* we can use any head tag in this block but the script are make our application slower in some casees so we can use extranl Script componet provided by next. */}

                {/* <script src="/name.js"></script> */}
                {/* the above line make very huge inpact if you are use any extanl scirpt so use next Script componnet. */}
            </Head>
            {/* The Script component provide some fetures to load the script lazy and many more it options are use in strategy attribut and the Script component are also use as same the script tag. */}
            {/* <Script src="/name.js" strategy="lazyOnload" /> */}
            {/* we do same thing like script tag */}
            {/* <Script id="test" strategy="lazyOnload">
                {"console.log('a')"}
            </Script> */}

            <main className={styles.main}>
                <h1 className={styles.title}>Hunting Coder<span style={{color: 'rgb(42, 81, 255)'}}>!</span></h1>

                <p className={styles.description}>
                    A blog for hunting coder by a hunting coder!
                </p>

                <div className="imageWithPost">
                    <Image src={PosterImage} width={400} height={300} alt="code" style={{ 'borderRadius': '5px' }}
                        placeholder="blur"
                        quality={50}
                    />
                    <div className="letestBlog">
                        <h2 className="title">Latest Blogs</h2>
                        {
                            blogs?.blogs.map((data: string, key: number) => {
                                return <Fragment key={key}>
                                    <Link href={`/blog/${capitalToKebab(data)}`}>
                                        <div className={Style.blogItem}>
                                            <h3>{data}</h3>
                                        </div>
                                    </Link>
                                </Fragment>
                            })
                        }
                    </div>
                </div>
                {/* if you want to be use blur image placeholder you want to be a image path has to be static. */}
                {/* <Image
          placeholder="blur"
          src={SirImg}
          alt='stack in js'
          width={1366}
          height={768}
          quality={100}
        /> */}

                {/* but if you want to a blur effect in dynamic images use a another props calld blurDataURL with placholder. */}
                {/* <Image
          placeholder="blur"
          blurDataURL="/vercel.svg"
          src='/sir.png'
          alt='stack in js'
          width={1366}
          height={768}
          quality={100}
        />


        <Image
          src="/stack.jpg"
          alt='stack in js'
          width={863}
          height={137}
          quality={100}
        /> */}

               
            </main>

            
            {/* <Image
          src="/sir.png"
          alt='stack in js'
          width={1366}
          height={768}
          quality={100}
        /> */}
        </div>
    );
};

// Server side randing it is nessory to give full api path not reletive.
export async function getServerSideProps() {
    const data = await fetchData(`http://localhost:3000/api/blog-list`);
    return {
        props: data
    }
}

export default Home;
