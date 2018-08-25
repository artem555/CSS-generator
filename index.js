function init() {
    const container = document.querySelector('.container-present');
    const buttonContainer = document.querySelector('.button-container');

    buttonContainer.addEventListener('click', (e) => selectProp(e, container));
    addNewElement(container);
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

function setPropToContainer(styleProp, container, targetElement) {
    const prop = targetElement.textContent;

    container.style[styleProp] = prop;
}

function addNewElement(container) {
    const addli = document.querySelector('button[name = add]');
    
    addli.addEventListener('click', () => {
        const li = document.createElement('li');
        container.appendChild(li);
        removeElement(li, container);
    });
}

function removeElement(li, container){
    const removeli = document.querySelector('button[name = remove]');

    removeli.addEventListener('click', () => {
        container.removeChild(li);
    });
}

window.addEventListener('load', init);
