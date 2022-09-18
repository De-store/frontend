export const createIpfsUrl = (hash: string): string => {
    // return `https://gateway.ipfs.io/ipfs/${hash}`
    return `https://cloudflare-ipfs.com/ipfs/${hash}`
}