
import { Contract, PublishAppData } from './Interfaces'

let data = new Blob([""], { type: '' });
let arrayOfBlob = new Array<Blob>();
arrayOfBlob.push(data);

export const emptyFile: File = new File(arrayOfBlob, "")

export const emptyPublishAppData: PublishAppData = {
    name: "",
    tagLine: "",
    description: "",
    icon: emptyFile,
    apk: emptyFile,
    images: emptyFile
}

export const emptyContract: Contract = {
    web3: {},
    instance: {}
}