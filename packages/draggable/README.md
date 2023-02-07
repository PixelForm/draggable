# Draggable
Fully customizable draggable compatible with any Javascript framework.
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
```javascript
import { draggable } from '@pixelform/draggable'

function customized() {

    return {
        hooks: {
            start({ x, y }) { /* ... */ },
            move({ x, y }) { /* ... */ },
            end(event) { /* ... */ }
        }
    }
}

const element = document.getElementById('draggable')
draggable(element, { plugins: [customized()] })
```


