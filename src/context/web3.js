// import React from 'react'
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
import { View, Text } from "react-native";

// import WalletConnectProvider from '@walletconnect/web3-provider'
// import { providers } from 'ethers'
// import WalletLink from 'walletlink'
// import Web3Modal from 'web3modal'

// const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: INFURA_ID, // required
//     },
//   },
//   'custom-walletlink': {
//     display: {
//       logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
//       name: 'Coinbase',
//       description: 'Connect to Coinbase Wallet (not Coinbase App)',
//     },
//     options: {
//       appName: 'Coinbase', // Your app name
//       networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
//       chainId: 1,
//     },
//     package: WalletLink,
//     connector: async (_, options) => {
//       const { appName, networkUrl, chainId } = options
//       const walletLink = new WalletLink({
//         appName,
//       })
//       const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
//       await provider.enable()
//       return provider
//     },
//   },
// }

// let web3Modal;
// let provider;

// if (typeof window !== 'undefined') {
//   web3Modal = new Web3Modal({
//     network: 'mainnet', // optional
//     cacheProvider: true,
//     providerOptions, // required
//   })
// }

// const connectWeb3 = async function() {
//   // const provider = await web3Modal.connect();
//   // console.log(provider)
//   //  // We plug the initial `provider` into ethers.js and get back
//   //  // a Web3Provider. This will add on methods from ethers.js and
//   //  // event listeners such as `.on()` will be different.
//   //  const web3Provider = new providers.Web3Provider(provider)

//   //  const signer = web3Provider.getSigner()
//   //  const address = await signer.getAddress()

//   //  const network = await web3Provider.getNetwork()
   
//   //  console.log({ provider, web3Provider, network, address });
   
//   //  return { provider, web3Provider, network, address };

//   const connector = new WalletConnect({
//     bridge: "https://bridge.walletconnect.org", // Required
//     qrcodeModal: QRCodeModal, //() => <View style={{flex:1, backgroundColor: 'red'}}><Text>test UI</Text></View>,
//   });

//   if (!connector.connected) {
//     // create new session
//     connector.createSession();
//   }

//   console.log(connector);
// };

const disconnectWeb3 = async function () {
  // await web3Modal.clearCachedProvider()
  // if (provider?.disconnect && typeof provider.disconnect === 'function') {
  //   await provider.disconnect()
  // }
  console.log('dis')
};

export { disconnectWeb3 }
