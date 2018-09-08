function init() {
    const container = document.querySelector('.container-present');
    const buttonContainer = document.querySelector('.button-container');

    buttonContainer.addEventListener('click', (e) => selectProp(e, container));
    addNewElement(container);
    removeElement(container);
    changeItemProps();
}

function selectProp(e, container) {
    const targetElement = e.target;

    if(targetElement.tagName !== 'BUTTON'){
        return;
    }
    
    const propsContainer = targetElement.parentElement.parentElement;

    switch (true) {
        case propsContainer.classList.contains('direction-props'):
            return setPropToContainer('flex-direction', container, targetElement);

        case propsContainer.classList.contains('justify-content-props'):
            return setPropToContainer('justify-content', container, targetElement);

        case propsContainer.classList.contains('wrap-props'):
            return setPropToContainer('flex-wrap', container, targetElement);

        case propsContainer.classList.contains('display-props'):
            return setPropToContainer('display', container, targetElement);

        case propsContainer.classList.contains('items-props'):
            return setPropToContainer('align-items', container, targetElement);

        case propsContainer.classList.contains('content-props'):
            return setPropToContainer('align-content', container, targetElement);

        default:
            return console.error('Seems you tried to set wrong param');
    }
}

/*function changeItemProps() {
    const items = document.querySelectorAll('.container-present .item');
      
    Array.prototype.map.call(items, onItemsProps);
} 

function onItemsProps(item){
    const propsContainer = targetElement.parentElement.parentElement;
    const targetElement = e.target;

    item.addEventListener('click', () => {
        switch (true) {
            case propsContainer.classList.contains('flex-grow-props'):
                return setPropToContainer('flex-grow', items, targetElement1);
    
            case propsContainer.classList.contains('flex-shrink-props'):
                return setPropToContainer('flex-shrink', items, targetElement1);
        }
    });
}*/

function setPropToContainer(styleProp, container, targetElement) {
    const out = document.querySelector('.out');
    const prop = targetElement.textContent;

    container.style[styleProp] = prop;
    out.innerHTML = styleProp + ': ' + prop + ';';
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
