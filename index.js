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
    console.log(propsContainer.classList.contains('direction-props'));

    if(propsContainer.classList.contains('direction-props')){
        setPropToContainer('flex-direction', container, targetElement)
    } else if(propsContainer.classList.contains('justify-content-props')){
        setPropToContainer('justify-content', container, targetElement)
    } else if(propsContainer.classList.contains('wrap-props')){
        setPropToContainer('flex-wrap', container, targetElement);
    } else if(propsContainer.classList.contains('display-props')){
        setPropToContainer('display', container, targetElement);
    } else if(propsContainer.classList.contains('items-props')){
        setPropToContainer('align-items', container, targetElement);
    } else if(propsContainer.classList.contains('content-props')){
        setPropToContainer('align-content', container, targetElement);
    }
    //setPropToContainer(container, targetElement);
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