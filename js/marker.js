/*
highlight v5
Highlights arbitrary terms.
<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>
MIT license.
Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

Renamed to "marker" to avoid conflict and confusion
*/

jQuery.fn.marker = function (pat) {
    function innerMarker(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            if($(node.parentElement).get(0).tagName != "CODE"){
                var pos = node.data.toUpperCase().indexOf(pat);
                pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
                if (pos >= 0) {
                    var spannode = document.createElement('span');
                    spannode.className = 'marker';
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1;
                }
            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerMarker(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.length && pat && pat.length ? this.each(function () {
        innerMarker(this, pat.toUpperCase());
    }) : this;
};

jQuery.fn.removeMarker = function () {
    return this.find("span.marker").each(function () {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};