import { NextResponse } from "next/server";
const apiKey = process.env.WB_API_KEY;
const login = process.env.WB_LOGIN;

export async function POST(request: Request) {
    if(!login || !apiKey) return;

    const response = await fetch('https://system.westernbid.com/api/v1/Shipping/GetRates', {
        method: "POST",
        headers: {
              'accept': 'application/json',
              'Authorization': apiKey,
              'Login': login,
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Shipper: {
                Address: {
                    CountryCode: "UA",
                    Residential: true
                }
            },
            Recipient: {
                Address: {
                CountryCode: "US", // 1
                PostalCode: "70640", // 2
                Residential: true
                }
            },
            Package: {
                Dimensions: {
                Length: 33,
                Width: 33,
                Height: 2 //3
                },
                Weight: 0.85 //4
            },
            PackageItems: [
                {
                Description: "Informational materials, used phonograph records",
                HarmonizedCode: "8523801000",
                Quantity: 2, // 5
                UnitPrice: {
                    Amount: "10", //6
                    Currency: "USD" //7
                }
                }
            ]
        })        
    })
    const quotas = await response.json();

    return new NextResponse(JSON.stringify(quotas), {status: 200})


}