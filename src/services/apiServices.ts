import axios from "axios";
import {baseUrl} from "../constants/urls";

let apiService = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});
export {
    apiService
}