import draggable from './src/internal'
import css_transforms from './src/plugins'

class Draggable {
    constructor(element, config = {}) {
        draggable(element, {plugins: [css_transforms(element, config)]})
    }
}

export default Draggable