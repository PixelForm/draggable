class Draggable {
    constructor(element, config = {}) {
        draggable(element, {plugins: [CSSTransforms(element, config)]})
    }
}