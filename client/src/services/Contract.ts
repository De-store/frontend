import { TYPE_APK } from "../constants/constants"
import { PublishAppData } from "../constants/Interfaces"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const publishApplication = async (name: string, tagline: string, description: string, icon: string, apkFile: string, iosFile: string = "", images: Array<string>, reduxState: any): Promise<string> => {

    try {

        const { contract } = reduxState.contract
        let currAccount = await contract.web3.eth.getAccounts();
        let addApplicationResult = await contract.instance.methods.addApplication(name, tagline, description, icon, apkFile, iosFile, images).send({ from: currAccount.toString() });

        return addApplicationResult.transactionHash.toString()
    } catch (err: any) {
        throw err
    }

}

// export const fetchUserApplication = async (reduxState: any): Promise<Array<PublishAppData>> => {

//     try {

//         const { contract } = reduxState.contract
//         let currAccount = await contract.web3.eth.getAccounts();
//         let addApplicationResult = await contract.instance.methods.getUserApplications().call({ from: currAccount.toString() });

//         let listOfApps: Array<PublishAppData> = []

//         const promisesToAwait = [];
//         for (let i in addApplicationResult) {
//             promisesToAwait.push(
//                 contract.instance.methods.getAppDetails(addApplicationResult[i]).call({ from: currAccount.toString() }));
//         }
//         const responses = await Promise.all(promisesToAwait);

//         const newPromisesToAwait = [];
//         for (let i in responses) {
//             newPromisesToAwait.push(fetchFromIPFS(responses[i].appId));
//         }
//         const responses2 = await Promise.all(newPromisesToAwait);


//         for (let i in responses2) {
//             const appData: PublishAppData = {
//                 name: responses2[i].name,
//                 tagLine: responses2[i].tagLine,
//                 description: responses2[i].description,
//                 icon: { type: "image/png", hash: responses2[i].icon },
//                 apk: { type: TYPE_APK, hash: responses[i].apkFile },
//                 images: { type: "image/png", hash: responses[i].images[0] }
//             }

//             listOfApps.push(appData)
//         }
//         return listOfApps
//     } catch (err: any) {
//         throw err
//     }

// }

export const graphQuery = async (reduxState: any): Promise<Array<PublishAppData>> => {

    // const APIURL = "https://api.thegraph.com/subgraphs/name/surajsingla333/de-store-graph";
    // const APIURL = "http://localhost:8000/subgraphs/name/destore/backend"
    let APIURL;

    const { contract } = reduxState.contract
    let currAccount = await contract.web3.eth.getAccounts();

    console.log({ contract })
    console.log(contract.instance._address)

    if (contract.instance._address === "0x5a18b5D8703D4bBf53365582F50f031965fa1Deb") {
        APIURL = "https://7f9f-103-16-30-190.ngrok.io/subgraphs/name/destore/backend"
    } else if (contract.instance._address === "0x3447eFaA7A0a95B44c794214b38D017FdD97A8f8") {
        APIURL = "https://api.thegraph.com/subgraphs/name/surajsingla333/de-store-graph";
    }

    console.log("currAccount.toString() ", currAccount.toString(), currAccount, currAccount[0])

    const tokensQuery = `
        query {
            exampleEntities(where: 
                {Owner: "${currAccount[0].toLowerCase()}"}) {
            id
            count
            Owner
            RegisteredApp_appId
            RegisteredApp_name
            RegisteredApp_tagLine
            RegisteredApp_description
            RegisteredApp_icon
            RegisteredApp_apkFile
            RegisteredApp_iosFile
            RegisteredApp_images
            }
        }
        `
    console.log("tokensQuery ", tokensQuery)

    const client = new ApolloClient({
        uri: APIURL,
        cache: new InMemoryCache()
    });

    try {
        let listOfApps: Array<PublishAppData> = []

        const data = await client.query({
            query: gql(tokensQuery)
        })

        console.log("DATA ", data, data.data.exampleEntities)
        let _data: any = data.data.exampleEntities;

        for (let i in _data) {
            console.log("ipfsResponse ", _data)
            console.log("ipfsResponse i", i)
            const appData: PublishAppData = {
                name: _data[i].RegisteredApp_name,
                tagLine: _data[i].RegisteredApp_tagLine,
                description: _data[i].RegisteredApp_description,
                icon: { type: "image/png", hash: _data[i].RegisteredApp_icon },
                apk: { type: TYPE_APK, hash: _data[i].RegisteredApp_apkFile },
                images: { type: "image/png", hash: _data[i].RegisteredApp_images[0] }
            }

            listOfApps.push(appData)
        }
        return listOfApps


    } catch (err: any) {
        console.log("ERR ", err)
        throw err
    }
}