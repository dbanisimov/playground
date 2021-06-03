import {load, save} from './config'

let it = document.getElementById('it');

it.oninput = ()=> save(it.value);