import { buildDAG } from "./build-dag";
import { entities } from "./example";

const dag = buildDAG(entities);

try {
  const topologicalOrder = dag.topologicalSort();
  console.log(
    "TOPOLOGICAL ORDER: ",
    topologicalOrder.map((node) => node.entity.id)
  );
} catch (error) {
  console.error("Erro na ordenação topológica:", (error as Error).message);
}
