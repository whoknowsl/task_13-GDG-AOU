//## Challenge 6: The Deep Object Flattener

function flatten(object, prefix = "") {
  let flattend = {};
  for (let key in object) {
    let val = object[key];
    let newKey = prefix === "" ? key : prefix + "." + key;
    if (val !== null && typeof val === "object") {
      let recerusiv = flatten(val, newKey);
      flattend = { ...flattend, ...recerusiv };
    } else {
      flattend[newKey] = val;
    }
  }
  return flattend;
}



module.exports = flatten;