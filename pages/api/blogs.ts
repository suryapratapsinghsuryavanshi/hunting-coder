import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from 'fs';

export type Data = {
    title: string
    date: string,
    desc: string,
    content: string,
    author: "Suryapratap Singh" | "Anonimous",
    like: number
}

export default function Blogs(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { blog } = req.query;
    const fileData = readFileSync(`./database/${blog}.json`);
    const data = JSON.parse(fileData.toString());
    res.json({
        title: data.title,
        date: data.date,
        desc: data.desc,
        content: data.content,
        author: data.author,
        like: data.like
    });
}