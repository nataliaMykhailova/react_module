import {IUserAddressCoordinatesModel} from "./IUserAddressCoordinatesModel";

export interface IUserAddressModel{
    address: string,
    city: string,
    "coordinates": IUserAddressCoordinatesModel,
    postalCode: string,
    state: string
}