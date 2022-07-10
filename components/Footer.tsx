import { NextPage } from "next";

const Footer: NextPage = () => {
    return(
        <div className="footer">
            <h4>Made with <span style={{color: "red"}}>❤</span> by <a className="title" href="https://www.instagram.com/suryapratapcool/" target={"_parent"}>Suryapratap Singh</a></h4>
        </div>
    );
}

export default Footer;