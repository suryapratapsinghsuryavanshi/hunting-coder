export type fetchDataType = {
    data: {
        success: boolean,
        error: boolean
    },
    error: boolean
}

export default async function PostRequest(url: string, userData: any): Promise<fetchDataType> {
    let res;
    let data;
    let error: boolean;
    try {
        res = await fetch(url, { method: "POST", body: JSON.stringify(userData), headers: { 'Content-Type': 'application/json' } });
        data = await res.json();
        error = false;
    }catch(err) {
        error = true;
    }
    return { data, error }
}