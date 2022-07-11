import { NextPage } from "next";
import Link from "next/link"; // use for link component for nav pages.
import styles from "../styles/Home.module.css";
import Head from "next/head";
import MyScripts from "./MyScripts";

const Navbar = () => {
    return(
        <>
            <Head>
                <MyScripts/>
            </Head>
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