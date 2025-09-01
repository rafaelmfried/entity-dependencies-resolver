export class Column {
  public id: string;
  public name: string;
  public type: string;
  public foreignKeyReferences: Column[];
  public isPrimaryKey: boolean;
  public isForeignKey: boolean;
  public isUnique: boolean;
  public isNullable: boolean;
  public entity: string;

  constructor(
    id: string,
    name: string,
    type: string,
    isForeignKey: boolean,
    foreignKeyReferences: Column[],
    isPrimaryKey: boolean,
    isUnique: boolean = false,
    isNullable: boolean = true,
    entity: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.isForeignKey = isForeignKey;
    this.foreignKeyReferences = foreignKeyReferences;
    this.isPrimaryKey = isPrimaryKey;
    this.isUnique = isUnique;
    this.isNullable = isNullable;
    this.entity = entity;
  }
}
