import { Edge } from "./edge";
import { Node } from "./node";

export function topologicalSort(nodes: Node[], edges: Edge[]): Node[] {
  // Calcula o grau de entrada (in-degree) de cada nó
  const inDegree = new Map<Node, number>();

  nodes.forEach((node) => {
    inDegree.set(node, 0);
  });

  // Conta as arestas que chegam em cada nó
  edges.forEach((edge) => {
    const currentInDegree = inDegree.get(edge.to) || 0;
    inDegree.set(edge.to, currentInDegree + 1);
  });

  // Fila com nós que não têm dependências (in-degree = 0)
  const queue: Node[] = [];
  nodes.forEach((node) => {
    if (inDegree.get(node) === 0) {
      queue.push(node);
    }
  });

  const result: Node[] = [];

  while (queue.length > 0) {
    const current = queue.shift()!;
    result.push(current);

    // Remove as arestas que saem do nó atual
    edges
      .filter((edge) => edge.from === current)
      .forEach((edge) => {
        const targetInDegree = inDegree.get(edge.to)! - 1;
        inDegree.set(edge.to, targetInDegree);

        // Se o nó de destino não tem mais dependências, adiciona à fila
        if (targetInDegree === 0) {
          queue.push(edge.to);
        }
      });
  }

  // Verifica se há ciclos (se nem todos os nós foram processados)
  if (result.length !== nodes.length) {
    throw new Error(
      "Grafo contém ciclos - não é possível fazer ordenação topológica"
    );
  }

  return result;
}
