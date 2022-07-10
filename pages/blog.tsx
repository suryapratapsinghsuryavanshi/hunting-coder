import { NextPage } from "next";
import Head from "next/head";
import Style from '../styles/Blog.module.css';
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { fetchData } from "../components/requests";
import { capitalToKebab } from "case-shift";
import InfiniteScroll from "react-infinite-scroll-component";

export type requestPropsType = {
    data: {
        blogs: string[],
        error: boolean
    }
}

const Blog: NextPage<requestPropsType> = (props) => {

    const [ err, setErr ] = useState<boolean>(props.data.error);
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
        <>
            <Head>
                <title>Hunting Coder | Blog</title>
                <meta name="blog" content="blog page containe blogs published by hunting coders!" />
            </Head>
            <h2 className="title" style={{textAlign: "center"}}>Blogs</h2>
            <main className={Style.main}>
                <div className="letestBlog">
                    {
                        blogs !== undefined
                        ?
                        blogs?.blogs.map((data: string, key: number) => {
                            return <Fragment key={key}>
                                <Link href={`/blog/${capitalToKebab(data)}`}>
                                    <div className={Style.blogItem}>
                                        <h3>{data}</h3>
                                    </div>
                                </Link>
                            </Fragment>
                        })
                        :
                        ""
                    }
                </div>
            </main>
        </>
    );
}

// Server side randing it is nessory to give full api path not reletive.
export async function getServerSideProps() {
    const data = await fetchData(`http://localhost:3000/api/blog-list`);
    return {
        props: data
    }
}

export default Blog;