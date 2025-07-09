'use client'
import { useCallback } from 'react';
import ReactFlow,{  Node ,addEdge, Background , Controls, useNodesState , useEdgesState, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: "1", data:{ label: "node 1"}, position: {x:0, y:0},
  },
  {
    id: "2", data:{label: "Node 2"}, position: {x:200, y:200},
  },
  {
    id: "3", data:{label: "Node 3"}, position: {x:200, y:300},
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true}];
export default function Graphalgo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true , id: `${edges.length + 1}`};
    setEdges((preveEdges) => addEdge(edge, preveEdges));
  }, []);

    return (
      <div className=' flex-1 h-full'>
        <ReactFlow nodes={nodes} edges={edges}   
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange} 
        onConnect={onConnect} fitView > 
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  }
  