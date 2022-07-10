import { NextPage } from "next";
import { useRouter } from "next/router";
import { kebabToCapital } from 'case-shift';
import Style from '../../styles/Blog.module.css';
import Head from "next/head";
import { useEffect, useState } from "react";
import { fetchData, fetchDataType } from '../../components/requests';
import { Data } from "../api/blogs";
import Image from "next/image";


export type requestPropsType = {
    data: Data,
    error: boolean
}

const Slug: NextPage<requestPropsType> = (props) => {

    const router = useRouter();
    const { slug } = router.query;
    const [ err, setErr ] = useState<boolean>(props.error);
    const [ blog, setBlog ] = useState<Data>(props.data);

    // it is a method return html as __html for dangerouslySetInnerHTML attribute want.
    function createMarkup(content: string) {
        return {
            __html: content
        }
    }

    // useEffect(() => {
    //     if(slug !== undefined) {
    //         fetchData(`../api/blogs?blog=${slug}`).then(({ data, error }: any)  => {
    //             setBlog(data);
    //             setErr(error);
    //         }).catch(() => {
    //             setErr(true);
    //         })
    //     }
    // }, [ slug ]);

    /*
        - Collect all the files from the database directory. => Done with the help of next api routes.
        - display the all the files on the blogs page as itrated.
        - if file exist read and populate it as blog.
    */

    return(
        <>
            <Head>
                <title>{
                        typeof slug === 'string' ?
                            "Hunting Coder | Blog | " + blog?.title
                        :
                            "Hunting Coder | Blog | " + slug
                    }</title>
                    <meta name="blog" content={slug && ""} />
            </Head>
            <main className={Style.blogPost}>
                <div className={Style.top}>
                    <h2>{
                        typeof slug === 'string' ?
                            blog?.title
                        :
                            slug
                    }</h2>
                    <p>{ blog?.date }</p>
                    <p>{ blog?.desc }</p>
                </div>
                <hr style={{ 'width': '100%' }} />
                <div className={Style.bottom}>
                    {<div dangerouslySetInnerHTML={createMarkup(blog?.content)}></div>}
                    <br />
                    <div className={Style.bloglast}>👍 Like: {blog?.like} <br />📝 Author: {blog?.author}</div>
                </div>
            </main>
        </>
    );
}

// Server side randing it is nessory to give full api path not reletive.
export async function getServerSideProps(context: any) {
    const { slug } = context.query;
    const data = await fetchData(`http://localhost:3000/api/blogs?blog=${slug}`);
    return {
        props: data
    }
}

export default Slug;