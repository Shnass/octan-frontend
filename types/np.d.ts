export type NPCity = {
    Ref: string,
    Description: string,
    AreaDescription: string
}
export type NPDepartment = {
    Description: string,
    CityDescription: string,
    ShortAddress: string,
    Ref: string
}

export type NPFetchArguments = {
    input: string,
    method: string,
    CityName?: string,
    CityRef?: string,
    Limit?: number
}