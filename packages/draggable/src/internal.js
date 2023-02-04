import { listen } from './utils'

function draggable(element, config = {}) {

    const internals = {
        plugins: [],
        bounds: [],
        origin: [],
        ...config
    } 

    let event1, event2, event3, trigger = internals.trigger || element 

    function hook(name, ...args) {
        const { plugins } = internals

        if(plugins.length) {
            let i = plugins.length
            while(i--) {
                if(plugins[i].hooks && plugins[i].hooks.hasOwnProperty(name)) plugins[i].hooks[name](...args)
            }
        }
    }

    function start(event) {
    	const x = event.pageX
        const y = event.pageY
        
		hook('start', {x, y})
        
        event2 = listen(document, 'mousemove', move)
        event3 = listen(document, 'mouseup', end)
    }

    function move(event) {
    	let x = event.pageX 
        let y = event.pageY 

        hook('move', {x, y}) 
    }

    function end(event) {
        hook('end', event) 

        event2() 
        event3() 
    }

    event1 = listen(trigger, 'mousedown', start) 
}

export default draggable