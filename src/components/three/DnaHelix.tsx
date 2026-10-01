import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PAIRS = 36;
const HEIGHT = 9;
const RADIUS = 1.35;
const TWIST = 0.42; // radians between consecutive base pairs

const PINK = "#ff2171";
const TEAL = "#22a699";
const ORANGE = "#ff8400";

function Helix() {
  const group = useRef<THREE.Group>(null);
  const strandA = useRef<THREE.InstancedMesh>(null);
  const strandB = useRef<THREE.InstancedMesh>(null);
  const rungs = useRef<THREE.InstancedMesh>(null);

  const pairs = useMemo(
    () =>
      Array.from({ length: PAIRS }, (_, i) => {
        const angle = i * TWIST;
        const y = (i / (PAIRS - 1) - 0.5) * HEIGHT;
        const a = new THREE.Vector3(Math.cos(angle) * RADIUS, y, Math.sin(angle) * RADIUS);
        const b = new THREE.Vector3(-a.x, y, -a.z);
        return { a, b };
      }),
    [],
  );

  useLayoutEffect(() => {
    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);
    pairs.forEach(({ a, b }, i) => {
      dummy.position.copy(a);
      dummy.quaternion.identity();
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      strandA.current!.setMatrixAt(i, dummy.matrix);

      dummy.position.copy(b);
      dummy.updateMatrix();
      strandB.current!.setMatrixAt(i, dummy.matrix);

      // Rung: a thin cylinder from a to b.
      const dir = new THREE.Vector3().subVectors(b, a);
      dummy.position.copy(a).addScaledVector(dir, 0.5);
      dummy.quaternion.setFromUnitVectors(up, dir.clone().normalize());
      dummy.scale.set(1, dir.length(), 1);
      dummy.updateMatrix();
      rungs.current!.setMatrixAt(i, dummy.matrix);
    });
    for (const mesh of [strandA, strandB, rungs]) mesh.current!.instanceMatrix.needsUpdate = true;
  }, [pairs]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.35;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });

  return (
    <group ref={group} rotation={[0, 0, 0.35]}>
      <instancedMesh ref={strandA} args={[undefined, undefined, PAIRS]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={PINK}
          roughness={0.25}
          metalness={0.2}
          emissive={PINK}
          emissiveIntensity={0.25}
        />
      </instancedMesh>
      <instancedMesh ref={strandB} args={[undefined, undefined, PAIRS]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={TEAL}
          roughness={0.25}
          metalness={0.2}
          emissive={TEAL}
          emissiveIntensity={0.25}
        />
      </instancedMesh>
      <instancedMesh ref={rungs} args={[undefined, undefined, PAIRS]}>
        <cylinderGeometry args={[0.045, 0.045, 1, 8]} />
        <meshStandardMaterial color={ORANGE} roughness={0.5} transparent opacity={0.75} />
      </instancedMesh>
    </group>
  );
}

/** Rotating DNA double helix. Loaded lazily, desktop only. */
export default function DnaHelix() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 13], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <pointLight position={[-4, -3, 3]} intensity={20} color={ORANGE} />
      <Helix />
    </Canvas>
  );
}
