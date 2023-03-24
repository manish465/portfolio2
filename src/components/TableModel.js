import { useGLTF } from "@react-three/drei";

const TableModel = () => {
    const { scene } = useGLTF("/table.glb");

    return <primitive object={scene} position={[0, 0, 0]} scale={0.5} />;
};

export default TableModel;
