// Importar el archivo de conexión
const connect = require('./near');
import 'regenerator-runtime/runtime';
import { Wallet } from './near-wallet';
// Función para interactuar con el contrato
async function interactWithContract() {
  // Conectar a NEAR
  const { nearAPI, account } = await connect();

  // Obtener la instancia del contrato
  const contractId = 'dev-1686275423526-60239495266974'; // Reemplazar por la cuenta de tu contrato
  const contract = new nearAPI.Contract(account, contractId, {
    viewMethods: ['get_all_certified', 'get_certified'], // Métodos de solo lectura
    changeMethods: ['create_certified', 'update_certified', 'transfer_certified_ownership'], // Métodos de modificación
  });

  const wallet = new Wallet({ createAccessKeyFor: contractId })

  // Ejemplo de llamada a un método de solo lectura
  const allCertified = await contract.get_all_certified();
  console.log('Todos los certificados:', allCertified);

  // Ejemplo de llamada a un método de modificación
  const result = await contract.create_certified(
    'Título del certificado',
    'Fecha de creación',
    'Nombre de la facultad',
    'Dirección de la facultad',
    'Número de registro',
    'Nombre del secretario',
    'Nombre del canciller',
    'Recurso del certificado'
  );
  console.log('Nuevo certificado creado:', result);

  document.querySelector('#sign-out-button').onclick = () => { wallet.signOut(); };
}



// Llamar a la función de interacción con el contrato
interactWithContract();