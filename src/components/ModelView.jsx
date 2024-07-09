import { Html, OrbitControls, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import  Model  from "./Iphone"

import * as THREE from 'three'
import Loader from "./Loader"

const ModelView = ({index,groupRef,gsapType,
  controlRef,setRotationState,size,item}) => {
  return (
  <View
  index={index}
  id={gsapType}
  className={`border-2 w-full h-full absolute ${index === 2 ? 'right-[-100%]':''}`}
  >
   {/* Ambient Light  */}
   <ambientLight intensity={5}/>
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
<Suspense fallback={<Loader/>}>
<Model
scale={index===1?[30,30,30]:[35,35,35]}
item={item}
size={size}
/>
  </Suspense>
</group>

  </View>
  )
}

export default ModelView