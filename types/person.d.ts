import { PhoneNumber } from "./phonenumber"

export type Person = {
    name?: string,
    lastName?: string,
    email?: `${string}@${string}.${string}`,
    phone?: PhoneNumber,
    subscriptionOptIn?: boolean,
    termsOptIn?: true
}