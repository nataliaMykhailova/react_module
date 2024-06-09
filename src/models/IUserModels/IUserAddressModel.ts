import {IUserAddressGeoModel} from "./IUserAddressGeoModel";

export interface IUserAddressModel{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IUserAddressGeoModel
}