const KEY = process.env.NP_API_KEY;

export async function POST(request: Request) {

    const body = await request.json();

    const methodProperties: any = {
        FindByString: body.input
    }
    if(body.method === 'getWarehouses'){
        methodProperties.CityRef = body.Ref
    }


    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        apiKey: KEY,
        modelName: "AddressGeneral",
        calledMethod: body.method,
        methodProperties,
    }),
    });

    // "calledMethod": "getAreas",
    // "calledMethod": "getCities",
    // "calledMethod": "getWarehouses",

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}



