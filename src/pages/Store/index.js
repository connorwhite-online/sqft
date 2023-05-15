import { OrbitControls } from '@react-three/drei';
import './index.css';
import { Canvas } from '@react-three/fiber';

export default function Store() {
    return (
        <div className='store'>
            <div className='webgl'>
                <Canvas >
                    <OrbitControls />
                    {/* <ambientLight /> */}
                    <pointLight position={[10, 10, -3]} intensity={.5}/>
                    <pointLight position={[5, -5, 3]} intensity={.5} />
                    <mesh rotation-y={45}>
                        <boxBufferGeometry attach='geometry' args={[2, 3, .25]}/>
                        <meshStandardMaterial attach='material' color='turquoise' />
                    </mesh>
                </Canvas>
            </div>
            <div className='product'>
                <div className='productName'>
                    Issue 01
                </div>
                <div className='productPrice'>
                    $20.00
                </div>
                <div className='productDescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl nec nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl nec nisl.
                </div>
                <div className='productButton'>
                    <button>Add to Bag</button>
                </div>
            </div>
        </div>
    )
}