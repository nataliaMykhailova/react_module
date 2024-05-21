import {IUserAddressModel} from "./IUserAddressModel";
import {IUserCompanyModel} from "./IUserCompanyModel";
export interface IUserModel {
    id: number,
    name: string,
    username: "Bret",
    email: string,
    address: IUserAddressModel,
    phone: string,
    website: string,
    company: IUserCompanyModel
}