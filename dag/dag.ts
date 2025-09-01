import { Entity } from "../entity";
import { Edge } from "./edge";
import { Node } from "./node";

export class DAG {
  public nodes: Node[];
  public edges: Edge[];
  private topologicalSortFn: (nodes: Node[], edges: Edge[]) => Node[];

  constructor(topologicalSort: (nodes: Node[], edges: Edge[]) => Node[]) {
    this.topologicalSortFn = topologicalSort;
    this.nodes = [];
    this.edges = [];
  }

  addNode(entity: Entity) {
    const node = new Node(entity);
    this.nodes.push(node);
    return node;
  }

  addEdge(from: Entity, to: Entity) {
    const fromNode = this.nodes.find((node) => node.entity === from);
    const toNode = this.nodes.find((node) => node.entity === to);
    if (fromNode && toNode) {
      const edge = new Edge(fromNode, toNode);
      this.edges.push(edge);
    } else {
      const fromNode = this.addNode(from);
      const toNode = this.addNode(to);
      const edge = new Edge(fromNode, toNode);
      this.edges.push(edge);
    }
  }

  getNodes() {
    return this.nodes;
  }

  getEdges() {
    return this.edges;
  }

  getNodeEdges(node: Node): Edge[] {
    return this.edges.filter(
      (edge) =>
        edge.from.entity === node.entity || edge.to.entity === node.entity
    );
  }

  deepSearch(node: Node, visited: Set<Node> = new Set()): Node[] {
    if (visited.has(node)) {
      return [];
    }
    visited.add(node);
    let result = [node];
    const edges = this.getNodeEdges(node);
    for (const edge of edges) {
      const nextNode = edge.from.entity === node.entity ? edge.to : edge.from;
      result = result.concat(this.deepSearch(nextNode, visited));
    }
    return result;
  }

  // Algoritmo de Ordenação Topológica usando Kahn's algorithm
  topologicalSort(): Node[] {
    return this.topologicalSortFn(this.nodes, this.edges);
  }
}
