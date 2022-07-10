import { NextApiRequest, NextApiResponse } from "next";
import { readdirSync } from 'fs';
import { kebabToCapital } from "case-shift";

export type Data = {
    blogs: string[]
}

export default function Blogs(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const files = readdirSync(`./database/`).map((fileName) => {
        return kebabToCapital(fileName.replace(".json", ""));
    })
    res.json({
        blogs: files
    });
}