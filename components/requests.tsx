export type fetchDataType = {
    data: typeof JSON,
    error: boolean
}

export async function fetchData(url: string): Promise<fetchDataType> {
    let res;
    let data;
    let error: boolean;
    try {
        res = await fetch(url);
        data = await res.json();
        error = false;
    }catch(err) {
        error = true;
    }
    return { data, error }
}