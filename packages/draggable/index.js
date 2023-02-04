import draggable from './src/internal'
import CSSTransforms from './src/plugins'

class Draggable {
    constructor(element, config = {}) {
        draggable(element, {plugins: [CSSTransforms(element, config)]})
    }
}

export default Draggable