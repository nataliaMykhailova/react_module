import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModels/IUserModel";
import styles from './UserComponent.module.css'
interface IUserProps{
    user: IUserModel
}
type IUserPropsType = IUserProps & {children?: React.ReactNode} & {lift?:(userId:number) => void};
const UserComponent:FC<IUserPropsType> = ({user, lift}) => {
    let onClickHandler = () =>{
        if (lift){
            lift(user.id)
        }
    }
    return (
        <div className={styles.userComponent}>
            <h3>{user.id} - {user.username} {user.firstName} {user.maidenName} {user.lastName}</h3>
            <img src={user.image} alt={user.username}/>
            <h5>Email - {user.email}, phone number - {user.phone}</h5>
            <p>Age: {user.age}, gender: {user.gender}, birthDate: {user.birthDate}, blood group: {user.bloodGroup}</p>
            <p>Domain - {user.domain}, IP - {user.ip}</p>
            <ul>Address:
                <li>Address: {user.address.address}</li>
                <li>City: {user.address.city}</li>
                <li>State: {user.address.state}</li>
                <li>Postal code: {user.address.postalCode}</li>
                <ul>Coordinates:
                <li>Lat: {user.address.coordinates.lat}</li>
                <li>Lng:v{user.address.coordinates.lng}</li>
                </ul>
            </ul>
            <button onClick={onClickHandler}>Show posts of user</button>
        </div>
    );
};


//
//     "height": 189,
//     "weight": 75.4,
//     "eyeColor": "Green",
//     "hair": {
//     "color": "Black",
//         "type": "Strands"
// },
//     "domain": "slashdot.org",
//     "ip": "117.29.86.254",
//     "address": {
//     "address": "1745 T Street Southeast",
//         "city": "Washington",
//         "coordinates": {
//         "lat": 38.867033,
//             "lng": -76.979235
//     },
//     "postalCode": "20020",
//         "state": "DC"
// },
//     "macAddress": "13:69:BA:56:A3:74",
//     "university": "Capitol University",
//     "bank": {
//     "cardExpire": "06/22",
//         "cardNumber": "50380955204220685",
//         "cardType": "maestro",
//         "currency": "Peso",
//         "iban": "NO17 0695 2754 967"
// },
//     "company": {
//     "address": {
//         "address": "629 Debbie Drive",
//             "city": "Nashville",
//             "coordinates": {
//             "lat": 36.208114,
//                 "lng": -86.58621199999999
//         },
//         "postalCode": "37076",
//             "state": "TN"
//     },
//     "department": "Marketing",
//         "name": "Blanda-O'Keefe",
//         "title": "Help Desk Operator"
// },
//     "ein": "20-9487066",
//     "ssn": "661-64-2976",
//     "userAgent": "Mozilla/5.0 ..."
// }

export default UserComponent;