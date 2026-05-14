"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

// ─── Individual dish meshes ────────────────────────────────────────────

function Plate({
  radius = 1.1,
  color = "#f5f0eb",
  rimColor = "#e8e0d6",
}: {
  radius?: number;
  color?: string;
  rimColor?: string;
}) {
  return (
    <group>
      {/* Base plate */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[radius, radius * 0.92, 0.07, 64]} />
        <meshStandardMaterial color={color} roughness={0.12} metalness={0.06} />
      </mesh>
      {/* Rim ring */}
      <mesh position={[0, 0.03, 0]}>
        <torusGeometry args={[radius * 0.94, 0.04, 16, 80]} />
        <meshStandardMaterial color={rimColor} roughness={0.18} metalness={0.04} />
      </mesh>
    </group>
  );
}

function DarkBowl() {
  return (
    <group>
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[1.0, 0.7, 0.7, 64, 1, true]} />
        <meshStandardMaterial color="#1c1410" roughness={0.25} metalness={0.12} side={THREE.DoubleSide} />
      </mesh>
      {/* Bowl base */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.7, 0.65, 0.05, 64]} />
        <meshStandardMaterial color="#1c1410" roughness={0.25} metalness={0.12} />
      </mesh>
    </group>
  );
}

// Wagyu Tartare — dark red mound on white plate with gold ring
function TartareScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={groupRef}>
      <Plate radius={1.1} color="#f8f4ef" rimColor="#d4c8bc" />
      {/* Tartare mound */}
      <mesh castShadow position={[0, 0.22, 0]} scale={[1, 0.55, 1]}>
        <sphereGeometry args={[0.52, 40, 40]} />
        <meshStandardMaterial color="#6b1a1a" roughness={0.75} metalness={0.04} />
      </mesh>
      {/* Seared crust on top */}
      <mesh castShadow position={[0, 0.31, 0]} scale={[0.5, 0.06, 0.5]}>
        <sphereGeometry args={[0.52, 32, 16]} />
        <meshStandardMaterial color="#2d0f0f" roughness={0.55} metalness={0.08} />
      </mesh>
      {/* Quail egg yolk */}
      <mesh castShadow position={[0, 0.42, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.15} metalness={0.1} />
      </mesh>
      {/* Micro herb dots */}
      {[-0.3, 0.28, -0.1, 0.35].map((x, i) => (
        <mesh key={i} castShadow position={[x, 0.36, (i % 2 === 0 ? 0.22 : -0.18)]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#2d5a1b" roughness={0.8} />
        </mesh>
      ))}
      {/* Crostini leaning */}
      <mesh castShadow position={[0.55, 0.18, 0.2]} rotation={[0.3, 0.4, 0.25]}>
        <boxGeometry args={[0.55, 0.04, 0.2]} />
        <meshStandardMaterial color="#c8a46a" roughness={0.65} metalness={0.04} />
      </mesh>
      {/* Sauce dots on plate */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.78, 0.042, Math.sin(angle) * 0.78]}>
            <cylinderGeometry args={[0.045, 0.045, 0.01, 16]} />
            <meshStandardMaterial color="#8b2020" roughness={0.4} metalness={0.06} />
          </mesh>
        );
      })}
    </group>
  );
}

// Truffle Risotto — creamy golden mound on dark plate
function RisottoScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Plate radius={1.15} color="#1e1812" rimColor="#2a2016" />
      {/* Risotto mound — flattened sphere */}
      <mesh castShadow position={[0, 0.18, 0]} scale={[1, 0.42, 1]}>
        <sphereGeometry args={[0.62, 48, 32]} />
        <meshStandardMaterial color="#c49a3c" roughness={0.85} metalness={0.02} />
      </mesh>
      {/* Creamy sauce pool */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.02, 48]} />
        <meshStandardMaterial color="#d4b45a" roughness={0.7} metalness={0.03} />
      </mesh>
      {/* Truffle shavings — dark thin discs */}
      {[
        [0.15, 0, 0.1],
        [-0.22, 0, -0.05],
        [0.05, 0, -0.25],
        [-0.1, 0, 0.2],
        [0.28, 0, -0.15],
      ].map(([x, , z], i) => (
        <mesh key={i} castShadow position={[x, 0.32, z]} rotation={[Math.PI / 2 + (i * 0.2), 0, i * 0.7]}>
          <cylinderGeometry args={[0.1 + i * 0.02, 0.08, 0.015, 20]} />
          <meshStandardMaterial color="#1a1008" roughness={0.4} metalness={0.18} />
        </mesh>
      ))}
      {/* Parmesan crisp */}
      <mesh castShadow position={[0.5, 0.35, 0.1]} rotation={[0.1, 0.3, 0.15]}>
        <boxGeometry args={[0.35, 0.02, 0.22]} />
        <meshStandardMaterial color="#e8d48a" roughness={0.45} metalness={0.06} transparent opacity={0.88} />
      </mesh>
      {/* Gold leaf flake */}
      <mesh castShadow position={[-0.05, 0.38, 0.05]} rotation={[0.05, 0.2, 0]}>
        <boxGeometry args={[0.14, 0.003, 0.1]} />
        <meshStandardMaterial color="#f5c842" roughness={0.05} metalness={0.9} />
      </mesh>
    </group>
  );
}

// Miso Black Cod — white fillet with dark glaze on slate stone
function CodScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.28;
  });

  return (
    <group ref={groupRef}>
      {/* Slate stone plate (rectangular, dark) */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 0.06, 1.4]} />
        <meshStandardMaterial color="#1a1814" roughness={0.62} metalness={0.08} />
      </mesh>
      {/* Fish body */}
      <mesh castShadow position={[0, 0.15, 0]} scale={[1, 0.5, 1]}>
        <cylinderGeometry args={[0.3, 0.45, 1.5, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#e8e2d6" roughness={0.55} metalness={0.04} />
      </mesh>
      {/* Miso glaze on top */}
      <mesh castShadow position={[0, 0.33, 0]} scale={[1, 0.2, 1]}>
        <cylinderGeometry args={[0.28, 0.43, 1.48, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#3d1f05" roughness={0.28} metalness={0.35} />
      </mesh>
      {/* Caramelised glaze sheen */}
      <mesh position={[0, 0.36, 0]} scale={[1, 0.12, 1]}>
        <cylinderGeometry args={[0.22, 0.35, 1.4, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#8b4510" roughness={0.15} metalness={0.55} transparent opacity={0.7} />
      </mesh>
      {/* Pickled ginger pile */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} castShadow position={[0.7 - i * 0.04, 0.08, 0.3 + i * 0.06]} rotation={[0, i * 0.4, 0.2 * i]}>
          <boxGeometry args={[0.18, 0.04, 0.1]} />
          <meshStandardMaterial color="#e07070" roughness={0.7} metalness={0.02} transparent opacity={0.85} />
        </mesh>
      ))}
      {/* Micro herb cluster */}
      {[-0.65, -0.72, -0.6].map((x, i) => (
        <mesh key={i} castShadow position={[x, 0.08, -0.2 + i * 0.12]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#3d6b28" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// Lobster Bisque — deep orange soup in a wide white bowl
function BisqueScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.32;
  });

  return (
    <group ref={groupRef}>
      {/* Wide bowl outer */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[1.05, 0.75, 0.55, 64]} />
        <meshStandardMaterial color="#f0ece4" roughness={0.15} metalness={0.05} />
      </mesh>
      {/* Bowl interior (clipping illusion) */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.92, 0.65, 0.56, 64]} />
        <meshStandardMaterial color="#1a1510" roughness={0.4} side={THREE.BackSide} />
      </mesh>
      {/* Bisque surface */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.88, 0.88, 0.02, 64]} />
        <meshStandardMaterial color="#c0440e" roughness={0.45} metalness={0.06} />
      </mesh>
      {/* Cream swirl */}
      <mesh position={[0, 0.24, 0]}>
        <torusGeometry args={[0.38, 0.04, 8, 60, Math.PI * 1.6]} />
        <meshStandardMaterial color="#fef3e8" roughness={0.3} metalness={0.02} />
      </mesh>
      {/* Lobster claw piece */}
      <mesh castShadow position={[0.18, 0.35, 0.1]} rotation={[0.3, 0.4, 0.2]}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial color="#d03010" roughness={0.5} metalness={0.12} />
      </mesh>
      <mesh castShadow position={[0.32, 0.3, 0.18]} rotation={[0.5, 0.3, 0.4]}>
        <cylinderGeometry args={[0.07, 0.04, 0.28, 16]} />
        <meshStandardMaterial color="#b82808" roughness={0.45} metalness={0.15} />
      </mesh>
      {/* Chive snippets */}
      {[-0.1, 0.05, -0.22].map((x, i) => (
        <mesh key={i} castShadow position={[x, 0.28, -0.2 + i * 0.12]} rotation={[0, i * 0.5, 0.1]}>
          <cylinderGeometry args={[0.012, 0.012, 0.25, 8]} />
          <meshStandardMaterial color="#3a6220" roughness={0.8} />
        </mesh>
      ))}
      {/* Plate under bowl */}
      <mesh receiveShadow position={[0, -0.32, 0]}>
        <cylinderGeometry args={[1.3, 1.25, 0.05, 64]} />
        <meshStandardMaterial color="#f0ece4" roughness={0.12} metalness={0.05} />
      </mesh>
    </group>
  );
}

// ─── Scene lookup ──────────────────────────────────────────────────────
type DishType = "tartare" | "risotto" | "cod" | "bisque";

const scenes: Record<DishType, React.ReactNode> = {
  tartare: <TartareScene />,
  risotto: <RisottoScene />,
  cod:     <CodScene />,
  bisque:  <BisqueScene />,
};

// ─── Shared lighting rig ───────────────────────────────────────────────
function StudioLights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      {/* Warm amber key light from top-right */}
      <spotLight
        position={[3.5, 6, 2.5]}
        intensity={55}
        color="#fbbf24"
        angle={0.35}
        penumbra={0.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Rose fill from left */}
      <spotLight
        position={[-3, 4, -1]}
        intensity={20}
        color="#fb7185"
        angle={0.5}
        penumbra={0.9}
      />
      {/* Soft bounce from below-front */}
      <pointLight position={[0, -1, 3]} intensity={8} color="#fffbf0" />
    </>
  );
}

// ─── Public component (dynamically imported in page, ssr:false) ────────
interface FoodScene3DProps {
  dish: DishType;
  className?: string;
  autoRotate?: boolean;
}

export default function FoodScene3D({
  dish,
  className = "",
  autoRotate = true,
}: FoodScene3DProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 1.8, 3.8], fov: 42 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <StudioLights />
      <Environment preset="sunset" />
      <ContactShadows
        position={[0, -0.55, 0]}
        opacity={0.55}
        scale={4}
        blur={2.5}
        far={1.5}
        color="#3d1a05"
      />
      {scenes[dish]}
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.4}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 5}
      />
    </Canvas>
  );
}
