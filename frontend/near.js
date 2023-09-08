// Importar la biblioteca NEAR JavaScript SDK
const near = require('near-api-js');

// Configurar la conexión con NEAR
const config = {
  networkId: 'testnet', // Cambiar a 'mainnet' para la red principal
  nodeUrl: 'https://rpc.testnet.near.org', // Cambiar a la URL correcta de la red principal
  walletUrl: 'https://wallet.testnet.near.org', // Cambiar a la URL correcta de la red principal
  helperUrl: 'https://helper.testnet.near.org', // Cambiar a la URL correcta de la red principal
  deps: {
    keyStore: new near.keyStores.BrowserLocalStorageKeyStore(),
  },
};

// Crear una instancia de conexión NEAR
async function connect() {
  const nearAPI = await near.connect(config);
  const account = await nearAPI.account('dev-1686275423526-60239495266974'); // Reemplazar por tu cuenta NEAR
  return { nearAPI, account };
}

module.exports = connect;