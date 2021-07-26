const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { MNEMONIC, PROJECT_ID } = require('./constants')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // develop: {
    //   port: 8545
    // }
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7544,           // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    infura_matic: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    matic: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.matic.today`),
      // provider: () => new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.maticvigil.com/`),
      // provider: () => new HDWalletProvider(MNEMONIC, `https://matic-testnet-archive-rpc.bwarelabs.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider({
        mnemonic: MNEMONIC,
        providerOrUrl: `https://rinkeby.infura.io/v3/${PROJECT_ID}`
      }),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // HTTP://127.0.0.1:7699


  compilers: {
    solc: {
      version: "0.8.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};

// MATIC 0x3447eFaA7A0a95B44c794214b38D017FdD97A8f8

// OLD 0x5a18b5D8703D4bBf53365582F50f031965fa1Deb

// 2_deploy_contracts.js
// =====================

//    Deploying 'DeStore'
//    -------------------
//    > transaction hash:    0x251739421973a2bfe77cfd48be2247b52f9462ef9ac89214d21e9a5e1b94364c
//    > Blocks: 1            Seconds: 9
//    > contract address:    0x45F44aa52B051bc67C612685bA1dDb41C507ac9a
//    > block number:        8935107
//    > block timestamp:     1626264821
//    > account:             0x613e91209393D3adF227ddeFfd5A4FC3426733D4
//    > balance:             0.496671129971487799
//    > gas used:            1881241 (0x1cb499)
//    > gas price:           1.000000009 gwei
//    > value sent:          0 ETH
//    > total cost:          0.001881241016931169 ETH

