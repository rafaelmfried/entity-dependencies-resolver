import { Entity } from "../entity";

export class Node {
  entity: Entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }
}
