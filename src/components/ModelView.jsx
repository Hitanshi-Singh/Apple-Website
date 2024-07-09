import { Html, OrbitControls, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import  Model  from "./Iphone"

import * as THREE from 'three'

const ModelView = ({index,groupRef,gsapType,
  controlRef,setRotationSize,size,item}) => {
  return (
  <View
  index={index}
  id={gsapType}
  className={`border-2 border-red-500 w-full h-full ${index === 2 ? 'right-[-100%]':''}`}
  >
   {/* Ambient Light  */}
   <ambientLight intensity={0.3}/>
   <perspectiveCamera makeDefault position={[0,0,4]}/>
<Lights/>
<OrbitControls
makeDefault
ref={controlRef}
enableZoom={false}
enablePan={false}
rotateSpeed={0.4}
target={new THREE.Vector3(0,0,0)}
onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
/>

<group ref={groupRef} name={`${index===1}?'small':'large'`} position={[0,0,0]}>
<Suspense fallback={<Html><div>Loading</div></Html>}>
<Model
scale={index===1?[15,15,15]:[17,17,17]}
item={item}
size={size}
/>
  </Suspense>
</group>

  </View>
  )
}

export default ModelView