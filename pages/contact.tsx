import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useReducer, useState } from "react";
import PostRequest from "../components/postRequest";
import Style from '../styles/Contact.module.css';

export type contectType = {
    name: string,
    query: string,
    email?: string,
    phone?: number | undefined
};

const Contact: NextPage = () => {

    const [success, setSuccess] = useState<boolean>(false);
    const [user, setUser] = useState<contectType>();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [query, setQuery] = useState<string>("");

    const submitForm = () => {
        setUser({
            name,
            email,
            phone: parseInt(phone, 10),
            query
        });
    }

    useEffect(() => {
        if (typeof user === "object" && user.name !== '' && user.query !== '') {
            PostRequest("/api/contact", user).then(data => {
                if(data.data.success === true) {
                    setSuccess(true);
                }
            }).catch(e => {
                setSuccess(false);
            });
        }
    }, [user])

    return (
        <>
            <Head>
                <title>Hunting Coder | Contact</title>
                <meta name="contact" content="contact page containe information about contact detils to hunting coder!" />
            </Head>
            <main className={Style.main} >
                <div className="upper">
                    <h2 className="title">Contact Us</h2>
                </div>
                {
                    success ?
                        <div className={Style.form}>
                            <p>Thanks!</p>
                        </div>
                        :
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            submitForm();
                        }} className={Style.form}>
                            <div className={Style.lower}>
                                <label htmlFor="name">Name: </label>
        
                                <input
                                    placeholder="Jhon*"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }} type="text" name="name" id="name" />
        
        
                                <label htmlFor="email">Email: </label>
        
                                <input
                                    placeholder="jhon@gmail.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} type="email" name="email" id="email" />
        
        
                                <label htmlFor="phone">Phone: </label>
        
                                <input
                                    placeholder="91**********"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }} type="text" name="phone" id="phone" />
        
        
                                <label htmlFor="query">Query: </label>
        
                                <textarea
                                    placeholder="Your Query*"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value)
                                    }} name="query" id="query" cols={30} rows={10}></textarea>
                            </div>
        
                            <button className="btn" type="submit">Submit</button>
                        </form>
                }
            </main>
        </>
    );
}

export default Contact;