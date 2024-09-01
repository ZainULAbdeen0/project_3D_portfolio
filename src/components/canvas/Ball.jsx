import React , {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import { Decal , Float , OrbitControls , Preload , useTexture} from '@react-three/drei'

const Ball = ({icon}) => {
  
const decal = useTexture(icon)
  return (
    <Float floatIntensity={2} speed={0.75} rotationIntensity={1}>
      <ambientLight intensity={1}/>
      <directionalLight direction={[0,0,0.5]}/>
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
          color = "#fff8eb"
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0,0,1]}
          rotation={[2*Math.PI , 0, 6.25]}
        />
      </mesh>

    </Float>
  )
}

const CanvasBall = ({icon})=>{

  return(
    <Canvas
    frameloop='demand'
    gl = {{preserveDrawingBuffer: true}}    
    >
      <Suspense
      fallback = {<CanvasLoader/>}
      >
        <OrbitControls 
        enableZoom={false} 
        enableRotate={true} 
        enablePan={false}
      />
  

        <Ball key={icon} icon={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default CanvasBall;