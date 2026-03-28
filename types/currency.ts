export const currencies = ['uah', 'eur', 'usd', 'gbp'] as const;
export const currencySigns = {
    eur:'€',
    usd:'$',
    gbp:'£',
    uah:'₴',
}
export type Currency = typeof currencies[number];
