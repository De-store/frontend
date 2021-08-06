# DeStore

*Decentralize app listing platform.*

## About

This repository is the truffle project for the DeStore website.<br>Destore only has one smart contract which stores the app details and its owner to maintain the ownership and to keep a record of all the applications.<br>The smart contract is deployed on the `matic-mumbai network`.

The website is a `react application` that is deployed on **IPFS** using **Fleek** to manage CI/CD pipeline and env variables.

The dApp currently supports **Metamask** and **Portis** wallets and is mobile friendly.

## Other Modules

### Query

The query to fetch data from the blockchain is managed using **The Graph**.<br>[This](https://github.com/De-store/graph-backend) is the repository that contains the graph project.<br>`https://github.com/De-store/graph-backend`

### Mobile app

DeStore also has a mobile application that will help users to view all the listed apps and install them on their devices.<br>[This](https://github.com/De-store/mobile-app) is the repository that contains the mobile app codebase.<br>`https://github.com/De-store/mobile-app`

## Useful links

- **Live site**: https://sparkling-disk-9446.on.fleek.co/
- **Smart contract**: https://mumbai.polygonscan.com/address/0x3447eFaA7A0a95B44c794214b38D017FdD97A8f8
- **Mobile application build**: https://slate.host/_/data?cid=bafybeidowfkijlzebcpb7okajqy2zoapckpehogvuundeglelwd4alvxai
- **The Graph**: https://thegraph.com/legacy-explorer/subgraph/surajsingla333/de-store-graph