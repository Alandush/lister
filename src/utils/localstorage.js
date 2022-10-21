/**
 * @name localstorage
 * @description Données persistantes dans le navigateur
 * @author A. G.
 * @version 1.0
 **/

export default {
  save(key, value) {
    // On convertit les données en STRING avant l'insertion
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      // Reconvertir le STRING en valeurs JAVASCRIPT
      return JSON.parse(value);
    }
    return null;
  },
  delete() {},
};
