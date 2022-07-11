import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Style from '../styles/Blog.module.css';
import Link from "next/link";
import { Fragment, useState } from "react";
import { capitalToKebab } from "case-shift";
import { readdirSync } from 'fs';
import { kebabToCapital } from "case-shift";

// if you want to image in your next app it is essentail to use a loader method to make all process smooter.
export type requestPropsType = {
    data: {
        blogs: string[],
        error: boolean
    }
}

const Home: NextPage<requestPropsType> = (props) => {const [ err, setErr ] = useState<boolean>();
    
    const [ blogs, setBlogs ] = useState<{ blogs: string[] }>({ blogs: props.data.blogs });

    return (
        <div className={styles.container}>
            <Head>
                <title>Hunting Coder</title>
                <meta
                    name="description"
                    content="A blog for hunting coder by a hunting coder!"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Hunting Coder<span style={{color: 'rgb(42, 81, 255)'}}>!</span></h1>

                <p className={styles.description}>
                    A blog for hunting coder by a hunting coder!
                </p>

                <div className="imageWithPost">
                    <img className="img" src="./code.webp" width={400} height={300} alt="code" style={{ 'borderRadius': '5px' }}/>
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
            </main>
        </div>
    );
};

export async function getStaticProps(context: any) {
    
    const files = readdirSync(`./database/`).map((fileName) => {
        let file = fileName.replace(".json", "").toLowerCase();
        return kebabToCapital(file);
    });

    return {
        props: {
            data: {
                blogs: files
            },
            error: false
        }
    }
}

export default Home;
