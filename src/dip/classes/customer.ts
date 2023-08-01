import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrderProtocol,
} from './interfaces/customer';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrderProtocol
{
  firstName: string;
  lastName: string;
  cpf: string;
  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustoner
  implements EnterpriseCustomerProtocol, CustomerOrderProtocol
{
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
