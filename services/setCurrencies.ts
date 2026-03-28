import { Release, ReleaseFetched } from "@/types/release";
import { getRates } from "@/db/currencies";


export default async function addCurrencies(release:ReleaseFetched){
    const rates = await getRates();
    const {uah, usd, gbp} = await rates.json();
    const priceProps = {
        prices:{
            eur: release.price,
            uah: Number((release.price * uah).toFixed(2)),
            usd: Number((release.price * usd).toFixed(2)),
            gbp: Number((release.price * gbp).toFixed(2)),
        }
    }
    const releaseWithCurrencies:Release = Object.assign({}, release, priceProps)
    return releaseWithCurrencies;
}