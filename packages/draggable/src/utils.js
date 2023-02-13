function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options)
    return () => node.removeEventListener(event, handler, options)
}

export {
    listen
}