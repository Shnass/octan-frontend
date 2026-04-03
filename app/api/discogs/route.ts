import { NextResponse } from "next/server";

const token = process.env.DISCOGS_TOKEN;

export async function POST(request: Request){

    const body = await request.json();

    try{
        const listingId = body._id;
        const discogsResponse = await fetch(`https://api.discogs.com/marketplace/listings/${listingId}`,{
            method:'POST',
            headers:{
                Authorization: `Discogs token=${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "Draft",
            }),
        })
        return new NextResponse(JSON.stringify({r:discogsResponse}), {status:200})
    } catch {
        return new Error("something went wrong with discogs")
    }
}