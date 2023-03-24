import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TableModel from "./TableModel";
import { Suspense } from "react";

const TableSection = () => {
    return (
        <section id="interactive-table-section">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <TableModel />
                    <OrbitControls enableZoom={false} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default TableSection;
