import {ENDPOINT_ARTICLE} from "../constants/services";

export function fetchAll() {
    return fetch(ENDPOINT_ARTICLE).then(response => response.json(), );
}