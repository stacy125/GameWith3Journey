import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// subscribeWithSelector is a middleware that allows us to subscribe to a subset of the store
// Create a store with a selector to subscribe to the store with 
export default create(subscribeWithSelector((set) => {
    return {
        blocksCount: 10,
        blocksSeed: 0,

        /**
         * Time
         */
        startTime: 0,
        endTime: 0,

        /**
         * Phases
         */
        phase: 'ready',

        start: () => {
            set((state) => {
                console.log('start', state.startTime);
                if (state.phase === 'ready')
                    return { phase: 'playing', startTime: Date.now() }

                return {}
            })
        },

        restart: () => {
            set((state) => {
                if (state.phase === 'playing' || state.phase === 'ended')
                    return { phase: 'ready', blocksSeed: Math.random() }

                return {}
            })
        },

        end: () => {
            set((state) => {
                if (state.phase === 'playing')
                    return { phase: 'ended', endTime: Date.now() }

                return {}
            })
        }
    }
}))