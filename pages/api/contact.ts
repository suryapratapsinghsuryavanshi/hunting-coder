/* this api route is handle a post request are get form the client and resolve it by post method of API in nextjs routes.
*/

// post reqest is handle in next API is diffrent from get request.
import { NextApiRequest, NextApiResponse } from "next";
import { writeFileSync } from "fs";
import { soleToken } from "sole-token";

export type contactResponseType = {
    success: boolean,
    error: string | null
}

export default function ContextPOSTApi(
    req: NextApiRequest,
    res: NextApiResponse<contactResponseType>
) {
    if(req.method === "POST") {
        // if post request, get from client
        const data = JSON.stringify(req.body);
        writeFileSync(`./contacts/${soleToken()}.json`, data, { encoding: "utf-8" });
        res.json({
            success: true,
            error: null
        })
    }else {
        // else the type of the request is GET.
        res.json({
            success: false, 
            error: "The contact route is configure as POST route!"
        })
    }
}