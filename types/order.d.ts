import { Release, ReleaseShort } from "./release";
import { Person } from "./person";
import { Shipping } from "./shipping";

export type Order = {
    id?: number;
    items: Release[] | ReleaseShort[];
    buyer: Person;
    address?: string;
    country?: string;
    city?: string;
    zipcode?: string;
    np?: number;
    shipping: Shipping;
    payment: string;
    status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    sum: number;
    currency?: 'EUR' | 'UAH' | 'USD' | 'GBP'
}