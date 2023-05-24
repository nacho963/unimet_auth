


import { NearBindgen } from "near-sdk-js";
import { near } from "near-sdk-js";

@NearBindgen({})
class Certified {
  certified_title: string;
  certified_created_by: string;
  certified_created_at: string;
  certified_owner: string;
  certified_faculty_name: string;
  certified_faculty_direction: string;
  certified_registry_number: string;
  certified_secretary_name: string;
  certified_chancellor_name: string;
  certified_resourse: string;

  constructor(
    certified_title: string,
    certified_created_at: string,
    certified_faculty_name: string,
    certified_faculty_direction: string,
    certified_registry_number: string,
    certified_secretary_name: string,
    certified_chancellor_name: string,
    certified_resourse: string,
    certified_created_by: string,
    certified_owner: string
  ) {
    this.certified_created_by = certified_created_by;
    this.certified_owner = certified_owner;
    this.certified_title = certified_title;
    this.certified_created_at = certified_created_at;
    this.certified_faculty_name = certified_faculty_name;
    this.certified_faculty_direction = certified_faculty_direction;
    this.certified_registry_number = certified_registry_number;
    this.certified_secretary_name = certified_secretary_name;
    this.certified_chancellor_name = certified_chancellor_name;
    this.certified_resourse = certified_resourse;
  }

  transferCertified(newOwner: string) {
    if (near.signerAccountId() == this.certified_owner) {
      this.certified_owner = newOwner;
    }
  }
}
export default Certified;
