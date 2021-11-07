require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong cost miss provide inside light army gentle'; 
let testAccounts = [
"0xf211d3fec5a801a86dff17a5223875ebdc6a07000de881b1a17711a748963b0b",
"0x650f4185ef2831a0c758cc7aef068f2e20fbe1dae11419254514937611d09202",
"0x8137da9cf70ba8edf94b86fb5a3fd4502147749a25e4a1cf2a1efa90878af827",
"0x7a96b555fd06e959e9fb77ece88d20c34813db955911ee0aa3f1d7e6bd76aaca",
"0xd3cff6f269ad547c35d8f24d128e5b3e1941002ae4e7a27ef922e5115b6b7fee",
"0x4bf4184a9fdd8f0f8f3b30d776b0b4595b55b070539570e7e15ed1122b5d8565",
"0x0e8ed1c0b77f5fa85b0f93c0c5283fe24462af1c9b328620fde5a2d4ec7cd593",
"0x67ffe0a12bd682147ebfea9664c3e0be2b7668413833997e7e44cf6f1dcb4d0c",
"0x1c90826bdb83aa591bce99b7829af6f65a24a7a13ff24a9887a37bc115f986a5",
"0x17292f0093a445c475d8450215d6e211d797c4f062bf2acd6d155acdd06cf825"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


