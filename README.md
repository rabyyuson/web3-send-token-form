## Getting Started

You will first need to [create a new project](https://cloud.walletconnect.com/) in wallet connect and then copy the *project id*. Once you have the *project id*, create a `.env` file and add the following:

```bash
NEXT_PUBLIC_PROJECT_ID=<YOUR_WALLET_CONNECT_PROJECT_ID>
```

Next, clone the repo and install the dependencies:

```bash
git clone https://github.com/rabyyuson/web3-send-token-form.git
cd web3-send-token-form
npm install
```

Finally, start the application:

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