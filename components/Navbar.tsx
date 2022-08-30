import { NextPage } from "next";
import Link from "next/link"; // use for link component for nav pages.
import styles from "../styles/Home.module.css";
import Head from "next/head";
import MyScripts from "./MyScripts";
import Script from "next/script";

const Navbar = () => {
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/HC.png" type="image/x-icon" />
                <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_CLIENT_PUBLIC}`} crossOrigin="anonymous"/>
            </Head>
            <MyScripts/>
            <header>
                <div className="left">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <h1 className="logo">&lt;Hunting <span className={styles.half_logo}>Coder!</span>/&gt;</h1>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                            <li><Link href="/blog"><a>Blog</a></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;