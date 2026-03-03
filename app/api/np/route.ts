const KEY = process.env.NP_API_KEY;

export async function POST(request: Request) {

    const body = await request.json();

    const methodProperties: any = {
        FindByString: body.input,
        Limit: body.Limit || 20
    }
    if(body.method === 'getWarehouses'){
        methodProperties.CityRef = body.CityRef
        methodProperties.CityName = body.CityName
    }

    const bodyArgs = JSON.stringify({
        apiKey: KEY,
        modelName: "AddressGeneral",
        calledMethod: body.method,
        methodProperties,
    })

    console.log('Received request with body: ', body)
    console.log('Constructed bodyArgs: ', bodyArgs)

    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: bodyArgs
    });

    // "calledMethod": "getAreas",
    // "calledMethod": "getCities",
    // "calledMethod": "getWarehouses",

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}



