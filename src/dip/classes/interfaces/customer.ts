export interface CustomerOrderProtocol {
  getName(): string;
  getIDN(): string; // IDN - id number
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
