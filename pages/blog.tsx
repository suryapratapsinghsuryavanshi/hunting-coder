import { NextPage } from "next";
import Head from "next/head";
import Style from '../styles/Blog.module.css';
import Link from "next/link";
import { Fragment, useState } from "react";
import { capitalToKebab } from "case-shift";
import { readdirSync } from 'fs';
import { kebabToCapital } from "case-shift";

export type requestPropsType = {
    data: {
        blogs: string[],
        error: boolean
    }
}

const Blog: NextPage<requestPropsType> = (props) => {

    const [ blogs, setBlogs ] = useState<{ blogs: string[] }>({ blogs: props.data.blogs });

    return (
        <>
            <Head>
                <title>Hunting Coder | Blog</title>
                <meta name="blog" content="blog page containe blogs published by hunting coders!" />
            </Head>
            <h2 className="title" style={{textAlign: "center"}}>Blogs</h2>
            <main className={Style.main}>
                <div className="letestBlog">
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
            </main>
        </>
    );
}

// at the time the site was building the the api not abilabel so be
// replace those api request with nodejs logic.
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


export default Blog;