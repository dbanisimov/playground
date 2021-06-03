import { get, put } from './net';

let session = Math.random();
let api = '/api?session=';

export function load(){
    return get(api + session);
}

export function save(){
    put(api + session);
}