import {IUserCompanyAddressModel} from "./IUserCompanyAddressModel";

export interface IUserCompanyModel{
    address: IUserCompanyAddressModel,
    department: string,
    name: string,
    title: string
}