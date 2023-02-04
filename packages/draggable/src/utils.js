function listen(node, event, handler) {
    node.addEventListener(event, handler)
    return () => node.removeEventListener(event, handler)
}