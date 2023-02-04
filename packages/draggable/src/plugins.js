function CSSTransforms(element, config) {
    let state = {
        c: [null, null],
        p: [0, 0],
        s: [null, null]
    } 
    
    let box = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    } 
   
    function boundaries(x, y) {
        if(!config.bounds) return {x, y} 

        let [minx, miny, maxx, maxy] = config.bounds 

        maxx = maxx - box.width 
        maxy = maxy - box.height 

        if(x < minx) x = minx 
        if(x > maxx) x = maxx 
        if(y < miny) y = miny 
        if(y > maxy) y = maxy 

        return {x, y} 
    }
    
    function origin(x, y) {
        if(!config.origin) return {x, y} 

        let [nx, ny] = config.origin 

        x = nx + box.left 
        y = ny + box.top 

        return {x, y} 
    }
    
    function render() {
        const [x, y] = state.c 
        element.style.transform = `translate3d(${x}px, ${y}px, 0px)` 
    }
    
    return {
        hooks: {
            start({x, y}) {
                x = x - state.p[0] 
                y = y - state.p[1] 

                const {x: ox, y: oy} = origin(x, y) 

                state.s = [ox, oy] 
            },
            move({x, y}) {
                x = x - state.s[0] 
                y = y - state.s[1] 

                const {x: bx, y: by} = boundaries(x, y)

                state.c = [bx, by] 
                render() 
            },
            end() {
                const {x, y} = boundaries(state.c[0], state.c[1]) 
                state.p = [x, y] 
            }
        }
    } 
}

export default CSSTransforms