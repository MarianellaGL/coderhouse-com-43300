/** ATENCION: ESTO ES UN EJEMPLO PRACTICO DE COMO SERÍA LA REALIZACIÓN DE UN POLYFILL, NO ES APLICABLE A LOS CONTENIDOS QUE VAMOS A ESTAR TOMANDO :) */

const array = [1, 2, 3, 4, 5];
if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.find = function (callback, arg) {
    if (typeof callback !== "function") {
      throw new TypeError("debe ser una funcion");
    }

    for (let i = 0; this.length; i++) {
      let element = this[i];
      if (callback.call(arg, element, i, this)) {
        return element;
      }
    }
    return undefined;
  };
}

const result = array.find((item) => item === 2);
console.log(result);
