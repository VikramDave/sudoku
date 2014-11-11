
    // Various utilities for fiddling with the DOM
    function createTABLE(parent, tableClass) {
        return createNode(parent, 'TABLE', tableClass);
    }

    function createTHEAD(table, theadClass) {
        return createNode(table, 'THEAD', theadClass);
    }

    function createTBODY(table, theadClass) {
        return createNode(table, 'TBODY', theadClass);
    }

    function createTR(table, rowClass) {
        return createNode(table, 'TR', rowClass);
    }

    function createTD(parent, tdClass) {
        return createNode(parent, 'TD', tdClass);
    }

    function createTH(parent, thClass) {
        return createNode(parent, 'TH', thClass);
    }

    function createDIV(parent, divClass) {
        return createNode(parent, 'DIV', divClass);
    }

    function createH(parent, level) {
        return createNode(parent, 'H' + level);
    }

    function createSELECT(parent, selectClass) {
        return createNode(parent, 'SELECT', selectClass);
    }

    /**
     * Create an option in a selector. 
     * NOTE: the 'label' value should be regular text. It
     * Will be escaped as necessary.
     */
    function createOPTION(parent, optionClass, label, value) {
        var option = createNode(parent, 'OPTION', optionClass);

        // 'falsey' values are allowed for labels and values, so 
        // we have to specifically compare only for undefined or null here
        if (label !== undefined && label !== null) {
            setHTML(option, Y.Escape.html(label));
        }
        if (value !== undefined && value !== null) {
            option.value = value;
        }
        return option;
    }

    function createLINK(parent, href, linkClass) {
        var link = createNode(parent, 'A', linkClass);
        if (href) {
            link.href = href;
        }
        return link;
    }

    function createIMG(parent, imageSrc, imgClass) {
        var img = createNode(parent, 'IMG', imgClass);
        if (imageSrc) {
            img.src = imageSrc;
        }
        return img;
    }

    function createSPAN(parent, text, spanClass) {
        var span = createNode(parent, 'SPAN', spanClass);
        if (text) {
            span.text = text;
        }
        return span;
    }

    function createLI(parent, liClass) {
        return createNode(parent, 'LI', liClass);
    }

    function createUL(parent, ulClass) {
        return createNode(parent, 'UL', ulClass);
    }

    function createINPUT(parent, inputType, inputClass) {
        var input = createNode(parent, 'INPUT', inputClass);
        if (inputType) {
            input.type = inputType;
        }
        return input;
    }

    function createBUTTON(parent, label, buttonClass) {
        var button = createNode(parent, 'BUTTON', buttonClass);
        if (label) {
            setHTML(button, label);
        }
        return button;
    }

    function createLABEL(parent, text, labelClass) {
        var label = createNode(parent, 'LABEL', labelClass);
        if (text !== undefined && text !== null) {
            setHTML(label, Y.Escape.html(text));
        }
        return label;
    }

    function createCANVAS(parent, canvasClass) {
        return createNode(parent, 'CANVAS', canvasClass);
    }

    function createNode(parent, nodeType, nodeClass) {
        var node = document.createElement(nodeType);
        if (nodeClass) {
            addClass(node, nodeClass);
        }

        // if we were given a parent, hook us up. If not, that's
        // fine--let the caller do that as needed.
        if (parent) {
            parent.appendChild(node);
        }

        return node;
    }

    function createText(parent, text) {
        var node = document.createTextNode(text);
        parent.appendChild(node);
    }

    function addClass(node, newClassNames) {
        var name = node.className;
        name = (!name ? newClassNames : name + " " + newClassNames);
        node.className = name;
    }

    // Remove any contents of a node. THIS ASSUMES ALL CONTENTS ARE HTML,
    // NOT SOMETHING LIKE SVG?
    function removeAllChildren(node) {
        node.innerHTML = '';
    }

    /**
     * Given a string of HTML, set a node's contents to that
     */
    function setHTML(node, html) {
        var frag = document.createDocumentFragment(),
            tmp = document.createElement('body'), 
            child;

        tmp.innerHTML = html;

        // Append elements in a loop to a DocumentFragment, so that the 
        // browser does not re-render the document for each node
        while (child = tmp.firstChild) {
            frag.appendChild(child);
        }

        node.appendChild(frag); // Now, append all elements at once
    }

    /**
     * Equivalent to YUI's 'on' method for a Node. The event name
     * should not include the 'on' part.
     */
    function onEvent(node, eventName, eventFn, thisVal) {
        if (!thisVal) {
            node.addEventListener(eventName, eventFn, false);
        } else {
            node.addEventListener(eventName, 
                                  function(event) { 
                                      eventFn.call(thisVal, event);
                                  }, 
                                  false);
        }
    }


    function start() {
        var div = createDIV(document.body);
        var table = createTABLE(div);
        var thead = createTHEAD(table);
        var tr = createTR(thead);

        data = initdata;

        var td;
        var th;
        var tbody = createTBODY(table);
        var tdi;

        // input table body                        
        for (var row = 0; row < 9; row++) {
            tr = createTR(tbody);
            for (var col = 0; col < 9; col++) {
                td = createTD(tr);
                tdi = createINPUT(td, "text");
                tdi.setAttribute("maxlength", 1); 
                tdi.setAttribute("id", row + "_" + col);     
                if(data[row][col] !== 0){
                    tdi.setAttribute("disabled", true);
                    tdi.value = data[row][col] ;

                } 
            }
        }

        table.addEventListener("keypress", checkValue);

    }


