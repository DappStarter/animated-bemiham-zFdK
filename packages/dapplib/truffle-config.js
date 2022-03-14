require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain erosion hope ensure blue survey'; 
let testAccounts = [
"0x9822613896408f377f4963d3f3a3272ea68b3615a49ba0add03654828776fc47",
"0xa372517a27d9d4a94dde45dac90ecb3fafa1383436b8df1a3d34c79d20c64615",
"0x6c7ddb843b88d53d6548ca79bf2739f3c95a0f7c9dcfc72e93497e83dc81cc43",
"0x98285b7653a57af452683307fcfc982936ecbe5878c11e3152a5f706cfd863d6",
"0x86210319ae2337fd213a3d58b17fc097e2dd36dbc1082554625eb5c1732cdffc",
"0xcfcac8da9cade2cd39226677a206618308bbcdb391f1f9a524a5dd96268966bc",
"0xdae3df0022a5e0a5a5a2efc1fba0cd69c03ae9fc98332782215c224caecc0217",
"0x2a1ca825de4b97c8b50e687040a775a0c5abcd60a1b4f41b60f5e316c9e6acc4",
"0x9d790207a1929d38c85ed19d3204581b015d51ee5cbe23104562328d3ffa56ab",
"0x30a4b79569a436bcdbb3cf8fcf6345a63e057e0f34c16bcc47c52696576f2803"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

