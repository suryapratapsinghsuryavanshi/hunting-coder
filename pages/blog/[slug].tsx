import { NextPage } from "next";
import Style from '../../styles/Blog.module.css';
import Head from "next/head";
import { useState } from "react";
import { Data } from "../api/blogs";
import { readdirSync, readFileSync } from 'fs';
import { capitalToKebab } from "case-shift";


export type requestPropsType = {
    data: Data,
    error: boolean,
    slug: string
}

const Slug: NextPage<requestPropsType> = (props) => {

    const [ slug, setSlug ] = useState(props.slug);
    const [ blog, setBlog ] = useState<Data>(props.data);

    // it is a method return html as __html for dangerouslySetInnerHTML attribute want.
    function createMarkup(content: string) {
        return {
            __html: content
        }
    }

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

// how many page will we rander as dynamicly count and return those slugs to getStaticProps method.
export async function getStaticPaths() {
    
    const files = readdirSync(`./database/`).map((fileName) => {
        let file = fileName.replace(".json", "")
        return file;
    });

    return {
        paths: files.map(file => {
            return {
                params: {
                    slug: file
                }
            }
        }),
        fallback: true // false for 'blocking'
    };
}

// do stuffe by the slug need or api calls, return those things to components props.
export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const fileData = readFileSync(`./database/${capitalToKebab(slug, false)}.json`);
    const data = JSON.parse(fileData.toString());
    return {
        props: {
            data,
            error: false,
            slug
        }
    }
}

export default Slug;