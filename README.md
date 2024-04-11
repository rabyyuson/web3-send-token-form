## Summary

The project makes use of the [Next.js](https://nextjs.org/) framework to define a solid code base which offers a lot of out of the box features including routing, react/typescript/tailwind/jest support, and others. It also utilizes [wagmi](https://wagmi.sh/) to allow easy development of blockchain applications.

The application flow is as follows. First the user is given a button to connect to a wallet. Once successfully connected, the user can then perform sending of ERC-20 token through the Avalanche Fuji C-Chain (testnet) network and displaying of the results whether it fails, is in process, or successfully performs the transaction.

## Getting Started

Install [Core Extension](https://chromewebstore.google.com/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb) then add Avalanche Fuji C-Chain network. Add the USDC asset and acquire USDC in
your testnet account via the [Testnet Faucet](https://test.core.app/tools/testnet-faucet/?subnet=c&token=usdcc). Also grab some [AVAX from the faucet](https://test.core.app/tools/testnet-faucet/?subnet=c&token=c) to pay for transaction fees.

You will need to [create a new project](https://cloud.walletconnect.com/) in *Wallet Connect* and then copy + paste the generated *project id* to a new `.env` file:

```bash
NEXT_PUBLIC_PROJECT_ID=<YOUR_WALLET_CONNECT_PROJECT_ID>
```

Clone the repo and install the dependencies:

```bash
git clone https://github.com/rabyyuson/web3-send-token-form.git
cd web3-send-token-form
npm install
```

Start the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run the test, issue the following command:

```bash
npm run test
```

It will run the test defined within the `__tests__` folder.