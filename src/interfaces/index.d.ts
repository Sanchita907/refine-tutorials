export interface IPatients {
    id: string;
    name: string;
    gender: string;
    created_at: String;
    dateOfBirth: String;
    existingHealthIssue: string;
    PatientAddress:IPatientAddress;
}

export interface IPatientAddress {
    address_id: string;
    addressLine: string;
    area: string;
    city: string;
    state: string;
    zipcode: Number;

}