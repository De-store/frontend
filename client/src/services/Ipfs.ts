
import axios from 'axios';
import { create } from 'ipfs-http-client';

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

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