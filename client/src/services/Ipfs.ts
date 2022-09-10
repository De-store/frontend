
import axios from 'axios';
import { create } from 'ipfs-http-client';

const ipfs = create(
    {
        host: 'ipfs.infura.io', port: 5001, protocol: 'https',
        headers: {
            authorization: 'Basic ' + Buffer.from(process.env.REACT_APP_DE_STORE_INFURE_IPFS_PUBLIC_ID + ':' + process.env.REACT_APP_DE_STORE_INFURE_IPFS_PRIVATE_KEY).toString('base64'),
        },
    });

export const addToIPFS = async (data: any) => {
    try {
        const IPFS = await ipfs.add(data)
        return IPFS
    } catch (err: any) {
        throw err
    }
}

export const fetchFromIPFS = async (path: string) => {
    try {
        const response = await axios.get(`https://gateway.ipfs.io/ipfs/${path}`)
        return response.data
    } catch (err: any) {
        throw err
    }
}