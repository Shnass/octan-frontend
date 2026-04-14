import ReleaseExtended from "@/components/shop/ReleaseExtended";
import {getRecord} from "@/db/records";
import { Release } from "@/types/release";
import setCurrencies from "@/services/setCurrencies"; 


export default async function ReleasePage({params}: {params: Promise<{ id: number }>;}) {
    const { id } = await params;
    const records = await getRecord(id);
    const record:Release = await setCurrencies(records[0])

    return (
        <ReleaseExtended item={record} />
    )
}