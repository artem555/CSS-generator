function init() {
    const container = document.querySelector('.container-present');
    const buttonContainer = document.querySelector('.button-container');
    const listOfProps = {};

    buttonContainer.addEventListener('click', (e) => selectProp(e, container, listOfProps));
    addNewElement(container);
    removeElement(container);
    selectItemProp();
}

function selectProp(e, container, listOfProps) {
    const targetElement = e.target;

    if(targetElement.tagName !== 'BUTTON') {
        return;
    }
    
    const propsContainer = targetElement.parentElement.parentElement;

    switch (true) {
        case propsContainer.classList.contains('direction-props'):
            return setPropToContainer('flex-direction', container, targetElement, listOfProps);

        case propsContainer.classList.contains('justify-content-props'):
            return setPropToContainer('justify-content', container, targetElement, listOfProps);

        case propsContainer.classList.contains('wrap-props'):
            return setPropToContainer('flex-wrap', container, targetElement, listOfProps);

        case propsContainer.classList.contains('display-props'):
            return setPropToContainer('display', container, targetElement, listOfProps);

        case propsContainer.classList.contains('items-props'):
            return setPropToContainer('align-items', container, targetElement, listOfProps);

        case propsContainer.classList.contains('content-props'):
            return setPropToContainer('align-content', container, targetElement, listOfProps);

        default:
            return console.error('Seems you tried to set wrong param');
    }
}

function selectItemProp() {
    const targetElement = e.target;

    if(targetElement.tagName !== 'BUTTON') {
        return;
    }
    
    const liCollection = document.querySelectorAll('.container-present .item');

    Array.prototype.forEach.call(liCollection, (li) => {

        switch (true) {
            case li.classList.contains('flex-grow-props'):
                return setPropToContainer('flex-grow', liCollection, targetElement, listOfProps);

            case li.classList.contains('flex-shrink-props'):
                return setPropToContainer('flex-shrink', liCollection, targetElement, listOfProps);

            case li.classList.contains('align-self-props'):
                return setPropToContainer('align-self', liCollection, targetElement, listOfProps);

            case li.classList.contains('flex-basis-props'):
                return setPropToContainer('flex-basis', liCollection, targetElement, listOfProps);
            
            case li.classList.contains('order-props'):
                return setPropToContainer('order', liCollection, targetElement, listOfProps);
        }
    });
}

function outputContainerStyles(listOfProps) {
    const out = document.querySelector('.output');
    const clearButton = document.querySelector('.clearBtn');
    out.innerHTML = '';

    const fragment = document.createDocumentFragment();
    const keys = Object.keys(listOfProps);

    keys.map((propName) => {
        const li = document.createElement('li');

        li.textContent = `${propName}: ${listOfProps[propName]};`;
        fragment.appendChild(li);
    });

    out.appendChild(fragment);

    clearButton.onclick = function() {
        
    }
}

function setPropToContainer(propName, container, targetElement, listOfProps) {
    const prop = targetElement.textContent;

    container.style[propName] = prop;
    listOfProps[propName] = prop;

    outputContainerStyles(listOfProps);
}

function addNewElement(container) {
    const addNewItemButton = document.querySelector('.add');
    
    addNewItemButton.addEventListener('click', () => {
        const li = document.createElement('li');
        container.appendChild(li);
    });
}

function removeElement(container) {
    const removeNewItemButton = document.querySelector('.remove');

    removeNewItemButton.addEventListener('click', () => {
        const children = container.children;
        const length = children.length;

        if (length <= 0) {
            return;
        }

        container.removeChild(children[length - 1]);
    });
}

window.addEventListener('load', init);
