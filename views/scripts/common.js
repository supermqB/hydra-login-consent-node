var $ = selector => document.querySelector(selector)

$.on = (node, evtType, cb) => {
    node.addEventListener(evtType, cb);
}