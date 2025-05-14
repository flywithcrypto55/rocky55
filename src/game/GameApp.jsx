import { Canvas } from "@react-three/fiber";
// import { Experience } from "../components/Experience";


import { AudioManagerProvider } from "../hooks/useAudioManager";
import { GameStateProvider } from "../hooks/useGameState";
import { Physics } from "@react-three/rapier";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import { UI } from "./UI";
import { GameExperience } from "./GameExperience";

export const Controls={
  forward:"forward",
  back:"back",
  left:"left",
  right:"right",
  jump:"jump",
}


function GameApp() {
    const map = useMemo(
        () => [
          { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
          { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
          { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
          { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
          { name: Controls.jump, keys: ["Space"] },
        ],
        []
      );

      return (
        <KeyboardControls map={map}>
        <AudioManagerProvider>
          <GameStateProvider>
          <Canvas shadows camera={{ position: [0, 16, 10], fov: 42 }}>
            <color attach="background" args={["grey"]} />
            <Physics>
            <GameExperience />
            </Physics>
          </Canvas>
          <UI />
          </GameStateProvider>
         
        </AudioManagerProvider>
        </KeyboardControls>
      );
}

export default GameApp;
