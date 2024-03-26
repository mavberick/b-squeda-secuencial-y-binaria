/*1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
4.- Escribe una función que devuelva el número de hojas de un árbol binario.
//Nodo terminal u hoja: Nodo que no tiene sucesores.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value < this.value) {
      this.addToTheLeft(value);
    } else {
      this.addToTheRight(value);
    }
  }

  addToTheLeft(value) {
    if (this.left) {
      this.left.add(value);
    } else {
      this.left = new Node(value);
    }
  }

  addToTheRight(value) {
    if (this.right) {
      this.right.add(value);
    } else {
      this.right = new Node(value);
    }
  }

  // Método para imprimir los nodos a un nivel 'n'
  printNodesAtLevel(node, level) {
    if (!node) return; // Si el nodo es nulo, no hay nada que imprimir

    if (level === 1) {
      // Si estamos en el nivel deseado, imprimimos el valor del nodo
      console.log(node.value);
    } else if (level > 1) {
      // Si no, continuamos la búsqueda en los subárboles izquierdo y derecho
      this.printNodesAtLevel(node.left, level - 1);
      this.printNodesAtLevel(node.right, level - 1);
    }
  }

  countLeaves() {
    if (this === null) {
      return 0;
    }
    if (this.left === null && this.right === null) {
      return 1;
    }
    let count = 0;
    if (this.left !== null) {
      count += this.left.countLeaves();
    }
    if (this.right !== null) {
      count += this.right.countLeaves();
    }
    return count;
  }
}
// Funcion para comparar dos arboles, para revisar si son iguales
function areTreesIdentical(nodeA, nodeB) {
  // Si ambos nodos son nulos, son idénticos (caso base)
  if (nodeA === null && nodeB === null) {
    return true;
  }
  // Si uno de los nodos es nulo y el otro no, no son idénticos
  if (nodeA === null || nodeB === null) {
    return false;
  }
  // Comparamos el valor del nodo actual y la estructura/valores de los subárboles
  return (
    nodeA.value === nodeB.value &&
    areTreesIdentical(nodeA.left, nodeB.left) &&
    areTreesIdentical(nodeA.right, nodeB.right)
  );
}

// Función para clonar un árbol binario
function cloneTree(node) {
  // Si el nodo es nulo, retornamos nulo
  if (node === null) {
    return null;
  }
  // Creamos un nuevo nodo con el mismo valor
  var newNode = new Node(node.value);
  // Clonamos recursivamente los subárboles izquierdo y derecho
  newNode.left = cloneTree(node.left);
  newNode.right = cloneTree(node.right);
  return newNode;
}

const treeNodeA = new Node(10);

treeNodeA.add(11);
treeNodeA.add(12);
treeNodeA.add(5);
treeNodeA.add(6);

// const treeNodeB = cloneTree(treeNodeA);
console.log(treeNodeA);
//console.log(treeNodeB);

//const sonIdenticos = areTreesIdentical(treeNodeA, treeNodeB);

//console.log(sonIdenticos);

treeNodeA.printNodesAtLevel(treeNodeA, 3);
console.log("Número de hojas en el árbol:", treeNodeA.countLeaves());
