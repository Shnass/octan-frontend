import ReleaseExtended from "@/components/store/ReleaseExtended";
import {getRecord} from "@/db/records";

export default async function ReleasePage({params}: {params: Promise<{ id: number }>;}) {
    const { id } = await params;
    const records = await getRecord(id);

    return (
        <ReleaseExtended item={records[0]} />
    )
}