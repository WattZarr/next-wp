export async function getSingleData(type,id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/${type}/${id}`);
    return res.json();    
}



