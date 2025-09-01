import { DAG } from "./dag/dag";
import { topologicalSort } from "./dag/topological-sort";
import { Entity } from "./entity";

export function buildDAG(entities: Entity[]): DAG {
  const dag = new DAG(topologicalSort);
  entities.forEach((entity) => {
    dag.addNode(entity);
  });
  entities.forEach((entity) => {
    entity.dependencies.forEach((dep) => {
      // aresta vai da dependência (dep) para a entidade que depende dela (entity)
      // Isso significa que 'dep' deve ser instalado ANTES de 'entity'
      dag.addEdge(dep, entity);
    });
  });
  return dag;
}
