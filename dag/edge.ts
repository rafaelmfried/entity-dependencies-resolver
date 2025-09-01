import { Node } from "./node";

export class Edge {
  from: Node;
  to: Node;

  constructor(from: Node, to: Node) {
    this.from = from;
    this.to = to;
  }
}
