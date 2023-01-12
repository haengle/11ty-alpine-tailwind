const focusCANDIDATES = `
        a, button, input, select, textarea, 
        svg, area, details, summary,
        iframe, object, embed, 
        [tabindex], [contenteditable]
    `;

function trapFocus(focusNode, rootNode = document) {

    const nodes = [...rootNode.querySelectorAll(focusCANDIDATES)]
    .filter(node => 
        !focusNode.contains(node) && node.getAttribute('tabindex') !== '-1');
        nodes.forEach(node => node.setAttribute('tabindex', '-1'));

    return;   
};

function endFocus() {
    document.querySelectorAll(focusCANDIDATES).forEach(node => node.removeAttribute('tabindex'));
    var modalsExist = document.querySelectorAll('.modal');
    if (modalsExist) {
        [...modalsExist].forEach(modal => {
            modal.setAttribute('tabindex','-1');
        })
    }
}

export {trapFocus, endFocus};