export async function getData(type) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/${type}`, {
        headers: {
            'api-key' : process.env.NEXT_PUBLIC_API_KEY
        }
    });
    return res.json();    
}



