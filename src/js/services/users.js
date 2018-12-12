import {ENDPOINT_USER} from "../constants/services";

export function fetchAll() {
    return fetch(ENDPOINT_USER).then(response => response.json(), );
}