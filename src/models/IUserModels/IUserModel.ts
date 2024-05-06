import {IUserHairModel} from "./IUserHairModel";
import {IUserAddressModel} from "./IUserAddressModel";
import {IUserBankModel} from "./IUserBankModel";
import {IUserCompanyModel} from "./IUserCompanyModel";

export interface IUserModel{
    id: number,
    firstName: string,
    maidenName: string,
    lastName:string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height?: number,
    weight?: number,
    eyeColor?: string,
    hair?: IUserHairModel,
    domain: string,
    ip: string,
    address: IUserAddressModel,
    macAddress?: string,
    university?: string,
    bank?: IUserBankModel,
    company?:IUserCompanyModel,
    ein?: string,
    ssn?: string,
    userAgent?: string
}