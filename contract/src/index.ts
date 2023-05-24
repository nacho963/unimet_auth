import { near } from "near-sdk-js";
import Certified from "./models/Certified";
import { certifies } from "./storange";


export function createCertified(
   certified_title: string,
   certified_created_at: string,
   certified_faculty_name: string,
   certified_faculty_direction: string,
   certified_registry_number: string,
   certified_secretary_name: string,
   certified_chancellor_name: string,
   certified_resourse: string
): Certified {

   // Obtener el remitente actual
   const sender = near.signerAccountId();

   // Crear un nuevo objeto Certified
   const newCertified = new Certified(certified_title, certified_created_at, certified_faculty_name,
      certified_faculty_direction, certified_registry_number,
      certified_secretary_name, certified_chancellor_name, certified_resourse, sender, sender);

   // Agregar el nuevo objeto Certified al mapapersistente
   certifies.set(certified_registry_number, newCertified);

   // Devolver el objeto Certified
   return newCertified;
}

export function transferCertified(newOwner: string, certified_registry_number: string): Certified | null{
   let temCertified = certifies.get(certified_registry_number)
   temCertified?.transferCertified(newOwner)
   if(temCertified)
   certifies.set(certified_registry_number, temCertified)

   return temCertified;
}




// export function getAllCertifies(): Array<Certified> {
//    const result = new Array<Certified>();
//    for (let index = 0; index < certifies.length; index++) {
//       result.push(certifies.get(""))
      
//    } 
  
//    return certifies.values(0,1);
// }