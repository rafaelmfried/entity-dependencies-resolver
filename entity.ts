import { Column } from "./column";

export class Entity {
  public id: string;
  public entity: string;
  public name: string;
  public version: string;
  public columns: Column[];
  public dependencies: Entity[];

  constructor(
    id: string,
    entity: string,
    name: string,
    version: string,
    columns: Column[],
    dependencies: Entity[] = []
  ) {
    this.id = id;
    this.entity = entity;
    this.name = name;
    this.version = version;
    this.columns = columns;
    this.dependencies = dependencies;
  }
}
