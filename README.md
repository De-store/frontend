# DeStore

*Decentralize app listing platform.*

## About

This repository is the truffle project for the DeStore website.<br>Destore only has one smart contract which stores the app details and its owner to maintain the ownership and to keep a record of all the applications.<br>The smart contract is deployed on the following networks:

1. `matic-mumbai network` with contract address `0x3447eFaA7A0a95B44c794214b38D017FdD97A8f8` .
2. `evmos test network` with contract address `0x5a18b5D8703D4bBf53365582F50f031965fa1Deb` .

The website is a `react application` that is deployed on **IPFS** using **Fleek** to manage CI/CD pipeline and env variables.

The dApp currently supports **Metamask** (for both matic-mumbai and evmos test network) and **Portis** (only matic-mumbai network) wallets and is mobile friendly.

## Other Modules

### Query

The query to fetch data from the blockchain is managed using **The Graph**.<br>[This](https://github.com/De-store/graph-backend) is the repository that contains the graph project.<br>`https://github.com/De-store/graph-backend`

### Mobile app

DeStore also has a mobile application that will help users to view all the listed apps and install them on their devices.<br>[This](https://github.com/De-store/mobile-app) is the repository that contains the mobile app codebase.<br>`https://github.com/De-store/mobile-app`

## Useful links

- **Live site**: https://sparkling-disk-9446.on.fleek.co/
- **Smart contract (matic-mumbai)**: https://mumbai.polygonscan.com/address/0x3447eFaA7A0a95B44c794214b38D017FdD97A8f8
- **Smart contract (evmos-testnet)**: https://evm.evmos.dev/address/0x5a18b5D8703D4bBf53365582F50f031965fa1Deb/transactions
- **Mobile application build**: https://slate.host/_/data?cid=bafybeidowfkijlzebcpb7okajqy2zoapckpehogvuundeglelwd4alvxai
- **The Graph (matic-mumbai)**: https://thegraph.com/legacy-explorer/subgraph/surajsingla333/de-store-graph
- **The Graph (evmos testnet)**: https://e13d-103-69-24-35.ngrok.io/subgraphs/name/destore/backend/graphql
