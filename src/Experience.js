import { OrbitControls } from '@react-three/drei'
import {Level} from './Level.js'
import Lights from './Lights.js'
import { Physics, Debug } from '@react-three/rapier'
import Player from './Player.js'
import useGame from './stores/useGame.js'
import Effects from './Effects.js'

export default function Experience() {

    const blocksCount = useGame(state => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)
    
    return <>
        <color args={['#252731']} attach="background" />

        <OrbitControls makeDefault />

        <Physics>
            <Debug />
            <Lights />
            <Level count={blocksCount} />
            <Player />
        </Physics>
        <Effects  />
    </>
}