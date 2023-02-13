# Draggable
Fully customizable draggable compatible with any Javascript framework.
Built with flexibility in mind and simplicity to keep everything running smoothly.
The draggable only requires a single DOM element as it's first argument and is meant to be independent of other elements.
Built with flexibility in mind and simplicity to keep everything running smoothly.
The draggable only requires a single DOM element as it's first argument and is meant to be independent of other elements.

## Installation
```
npm i @pixelform/draggable
```

## Basic usage
```javascript
import Draggable from '@pixelform/draggable'

const element = document.getElementById('draggable')
new Draggable(element)
```

## Advanced usage
Since the `Draggable` class wrapper is provided with a default `css_transform` plugin,
you can either extend it from there passing plugins inside the wrapper's config object or build your own draggable.
Simply import the core draggable and extend it with your plugins from there.
```javascript
import { draggable } from '@pixelform/draggable'

function customized() {

    return {
        hooks: {
            start({ x, y }) {},
            move({ x, y }) {},
            end(event) {}
        }
    }
}

const element = document.getElementById('draggable')
draggable(element, { plugins: [customized()] })
```

## Definition
```javascript
draggable(element, config)
```

### Parameters
Parameter | Explanation
--- | ---
`element` | An HTML element or element ref
`config` | Configuration object

### Configuration options
The configuration object currently has the following options:
Property | Value
 --- | ---
`bounds` | An array of numbers represented as `[minX, minY, maxX, maxY]`
`origin` | An array of numbers indicating where to constraint the mouse while dragging represented as `[originX, originY]`
`plugins`| An array of plugins, plugins are objects or functions that return an object that can extends the draggable's functionality, So far you can return an object with a `hooks` property and hook into the `start`, `move` and `end` hooks.
`trigger`| An element or element ref that must start the dragging operation, ideal for drag handles