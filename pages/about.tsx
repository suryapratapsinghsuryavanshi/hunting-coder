import { NextPage } from "next";
import Head from "next/head";
import Style from './../styles/About.module.css';
// import './../styles/style.css'; // it is not posible with next it throw an error.
/*
    but if you want to add css for outside you can use _app.js or import css file form ndoe
    moduels folder but other then the above procsss is work.
    => importing css file from node_modules is permitted.
*/

const About: NextPage = () => {
    return(
        <>
            <Head>
                <title>Hunting Coder | About</title>
                <meta name="about" content="about page containe information abouts the hunting coder website!" />
            </Head>
            <h2 className="title" style={{textAlign: "center"}}>About Us</h2>
            <main className={Style.main}>
                <h3>Introduction</h3>
                <p>I think providing knowledge to the community makes you powerful so i have made some efforts to create this blog site and publish some blogs written by mine. If you like these types of things follow me on <a style={{color: "rgb(42, 81, 255)"}} href="https://github.com/suryapratapsinghsuryavanshi/" target={"_parent"}>GitHub</a> and <a style={{color: "rgb(42, 81, 255)"}} href="https://www.instagram.com/suryapratapcool/" target={"_parent"}>Instagram</a> where I post these types of material.</p>

                <h3>Service Offerd</h3>
                <p>I am a full-stack developer who works with most technologies and a teacher who teaches DAS and web development. I also try to make our community stronger</p>
                
                <h3>Our Aim</h3>
                <p>The aim of this blog site is not different from other blogging sites but, I have promised you to provide unique and interesting blogs on it.</p>
            </main>
        </>
    );
}

export default About;