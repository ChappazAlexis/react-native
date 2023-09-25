import React from 'react';

// PREMIER CAS

const Component = () => <View />;
export { Component };

/**
 * Lorsque vous utilisez la notation au dessus, votre composant est exporté seul mais pas par défault.
 * Pour l'importer par la suite, c'est comme suis:
 */

import { Component } from 'le chemin vers votre fichier/Component';

/**
 * Pas de .js à rajouter ou quoi que ce soit, c'est le nom du module qui importe, ainsi que le nom du composant.
 */



// SECOND CAS

const Component = () => <View />;
export default Component;

/**
 * Lorsque vous utilisez la notation au dessus, votre composant est exporté par default
 * Pour l'importer par la suite, c'est comme suis:
 */

import Component from 'le chemin vers fotre fichier/Component';
//OU
import LeNomQueVousSouhaitez from 'le chemin vers fotre fichier/Component';

/**
 * Cette notation ci-dessus fonctionne aussi. En effet le composant a été exporté par défaut, vous pouvez donc assigner n'importe quel nom à celui-ci au moment de l'import
 * Seul le chemin ici compte.
 */

/*------------------------------*/
/**
 * Composants
 */


// Fonctionnel
const Hello = (props) => {
  return <View />;
};
// ou
const Hello = () => <View />;

// Class
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View />;
  }
}

/*------------------------------*/
/**
 * Les props
 * 
 * Se sont les options, les propriétés que l'on peut passer au composant pour altérer son fonctionnement
 */


// Fonctionnel
<Hello monObject="toto" />;
props.monObject;


// Class
<Hello monObject="toto" />;
//Dans le composant Hello pour y accéder je fais:
this.props.monObject;



/*------------------------------*/
/**
 * JSON
 */

 //objet json
 const object = {}

 //array json
 const array = []

 //combiner le tout
 const data = [
   {
     toto: "tata"
   },
   "tutu",
   {
     otherObject: 'titi'
   }
 ]

 const data2 = {
   array: [ ... ],
   attribut1: "test",
   attribut2: "bonsoir"
 }
