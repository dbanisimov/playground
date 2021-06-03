// example/net.js
function get() {
}
function put() {
}

// example/config.js
var session = Math.random();
var api = "/api?session=";
function load() {
  return get(api + session);
}
function save() {
  put(api + session);
}

export {
  load,
  save
};
