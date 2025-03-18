"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8566],{

/***/ 58493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(96540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ }),

/***/ 19888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(58493);
} else {}


/***/ }),

/***/ 46540:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $23b9f4fcf0fe224b$export$d68d59712b04d9d1),
/* harmony export */   W: () => (/* binding */ $23b9f4fcf0fe224b$export$408d25a4e12db025)
/* harmony export */ });
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $23b9f4fcf0fe224b$export$d68d59712b04d9d1 {
    get childNodes() {
        throw new Error('childNodes is not supported');
    }
    clone() {
        let node = new $23b9f4fcf0fe224b$export$d68d59712b04d9d1(this.type, this.key);
        node.value = this.value;
        node.level = this.level;
        node.hasChildNodes = this.hasChildNodes;
        node.rendered = this.rendered;
        node.textValue = this.textValue;
        node['aria-label'] = this['aria-label'];
        node.index = this.index;
        node.parentKey = this.parentKey;
        node.prevKey = this.prevKey;
        node.nextKey = this.nextKey;
        node.firstChildKey = this.firstChildKey;
        node.lastChildKey = this.lastChildKey;
        node.props = this.props;
        node.render = this.render;
        node.colSpan = this.colSpan;
        node.colIndex = this.colIndex;
        return node;
    }
    constructor(type, key){
        this.value = null;
        this.level = 0;
        this.hasChildNodes = false;
        this.rendered = null;
        this.textValue = '';
        this['aria-label'] = undefined;
        this.index = 0;
        this.parentKey = null;
        this.prevKey = null;
        this.nextKey = null;
        this.firstChildKey = null;
        this.lastChildKey = null;
        this.props = {};
        this.colSpan = null;
        this.colIndex = null;
        this.type = type;
        this.key = key;
    }
}
class $23b9f4fcf0fe224b$export$408d25a4e12db025 {
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : undefined;
        while(node){
            yield node;
            node = node.nextKey != null ? this.keyMap.get(node.nextKey) : undefined;
        }
    }
    getChildren(key) {
        let keyMap = this.keyMap;
        return {
            *[Symbol.iterator] () {
                let parent = keyMap.get(key);
                let node = (parent === null || parent === void 0 ? void 0 : parent.firstChildKey) != null ? keyMap.get(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? keyMap.get(node.nextKey) : undefined;
                }
            }
        };
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.keyMap.get(node.prevKey);
            while(node && node.type !== 'item' && node.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
            var _node_key;
            return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
        }
        return node.parentKey;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.type !== 'item' && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
            else return null;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
        while((node === null || node === void 0 ? void 0 : node.lastChildKey) != null)node = this.keyMap.get(node.lastChildKey);
        var _node_key;
        return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at() {
        throw new Error('Not implemented');
    }
    clone() {
        // We need to clone using this.constructor so that subclasses have the right prototype.
        // TypeScript isn't happy about this yet.
        // https://github.com/microsoft/TypeScript/issues/3841
        let Constructor = this.constructor;
        let collection = new Constructor();
        collection.keyMap = new Map(this.keyMap);
        collection.firstKey = this.firstKey;
        collection.lastKey = this.lastKey;
        return collection;
    }
    addNode(node) {
        if (this.frozen) throw new Error('Cannot add a node to a frozen collection');
        this.keyMap.set(node.key, node);
    }
    removeNode(key) {
        if (this.frozen) throw new Error('Cannot remove a node to a frozen collection');
        this.keyMap.delete(key);
    }
    commit(firstKey, lastKey, isSSR = false) {
        if (this.frozen) throw new Error('Cannot commit a frozen collection');
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.frozen = !isSSR;
    }
    // TODO: this is pretty specific to menu, will need to check if it is generic enough
    // Will need to handle varying levels I assume but will revisit after I get searchable menu working for base menu
    // TODO: an alternative is to simply walk the collection and add all item nodes that match the filter and any sections/separators we encounter
    // to an array, then walk that new array and fix all the next/Prev keys while adding them to the new collection
    UNSTABLE_filter(filterFn) {
        let newCollection = new $23b9f4fcf0fe224b$export$408d25a4e12db025();
        // This tracks the absolute last node we've visited in the collection when filtering, used for setting up the filteredCollection's lastKey and
        // for updating the next/prevKey for every non-filtered node.
        let lastNode = null;
        for (let node of this){
            if (node.type === 'section' && node.hasChildNodes) {
                let clonedSection = node.clone();
                let lastChildInSection = null;
                for (let child of this.getChildren(node.key))if ($23b9f4fcf0fe224b$var$shouldKeepNode(child, filterFn, this, newCollection)) {
                    let clonedChild = child.clone();
                    // eslint-disable-next-line max-depth
                    if (lastChildInSection == null) clonedSection.firstChildKey = clonedChild.key;
                    // eslint-disable-next-line max-depth
                    if (newCollection.firstKey == null) newCollection.firstKey = clonedSection.key;
                    // eslint-disable-next-line max-depth
                    if (lastChildInSection && lastChildInSection.parentKey === clonedChild.parentKey) {
                        lastChildInSection.nextKey = clonedChild.key;
                        clonedChild.prevKey = lastChildInSection.key;
                    } else clonedChild.prevKey = null;
                    clonedChild.nextKey = null;
                    newCollection.addNode(clonedChild);
                    lastChildInSection = clonedChild;
                }
                // Add newly filtered section to collection if it has any valid child nodes, otherwise remove it and its header if any
                if (lastChildInSection) {
                    if (lastChildInSection.type !== 'header') {
                        clonedSection.lastChildKey = lastChildInSection.key;
                        // If the old prev section was filtered out, will need to attach to whatever came before
                        // eslint-disable-next-line max-depth
                        if (lastNode == null) clonedSection.prevKey = null;
                        else if (lastNode.type === 'section' || lastNode.type === 'separator') {
                            lastNode.nextKey = clonedSection.key;
                            clonedSection.prevKey = lastNode.key;
                        }
                        clonedSection.nextKey = null;
                        lastNode = clonedSection;
                        newCollection.addNode(clonedSection);
                    } else {
                        if (newCollection.firstKey === clonedSection.key) newCollection.firstKey = null;
                        newCollection.removeNode(lastChildInSection.key);
                    }
                }
            } else if (node.type === 'separator') {
                // will need to check if previous section key exists, if it does then we add the separator to the collection.
                // After the full collection is created we'll need to remove it it is the last node in the section (aka no following section after the separator)
                let clonedSeparator = node.clone();
                clonedSeparator.nextKey = null;
                if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'section') {
                    lastNode.nextKey = clonedSeparator.key;
                    clonedSeparator.prevKey = lastNode.key;
                    lastNode = clonedSeparator;
                    newCollection.addNode(clonedSeparator);
                }
            } else {
                // At this point, the node is either a subdialogtrigger node or a standard row/item
                let clonedNode = node.clone();
                if ($23b9f4fcf0fe224b$var$shouldKeepNode(clonedNode, filterFn, this, newCollection)) {
                    if (newCollection.firstKey == null) newCollection.firstKey = clonedNode.key;
                    if (lastNode != null && lastNode.type !== 'section' && lastNode.type !== 'separator' && lastNode.parentKey === clonedNode.parentKey) {
                        lastNode.nextKey = clonedNode.key;
                        clonedNode.prevKey = lastNode.key;
                    } else clonedNode.prevKey = null;
                    clonedNode.nextKey = null;
                    newCollection.addNode(clonedNode);
                    lastNode = clonedNode;
                }
            }
        }
        if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'separator' && lastNode.nextKey === null) {
            let lastSection;
            if (lastNode.prevKey != null) {
                lastSection = newCollection.getItem(lastNode.prevKey);
                lastSection.nextKey = null;
            }
            newCollection.removeNode(lastNode.key);
            lastNode = lastSection;
        }
        newCollection.lastKey = (lastNode === null || lastNode === void 0 ? void 0 : lastNode.key) || null;
        return newCollection;
    }
    constructor(){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.frozen = false;
    }
}
function $23b9f4fcf0fe224b$var$shouldKeepNode(node, filterFn, oldCollection, newCollection) {
    if (node.type === 'subdialogtrigger' || node.type === 'submenutrigger') {
        // Subdialog wrapper should only have one child, if it passes the filter add it to the new collection since we don't need to
        // do any extra handling for its first/next key
        let triggerChild = [
            ...oldCollection.getChildren(node.key)
        ][0];
        if (triggerChild && filterFn(triggerChild.textValue)) {
            let clonedChild = triggerChild.clone();
            newCollection.addNode(clonedChild);
            return true;
        } else return false;
    } else if (node.type === 'header') return true;
    else return filterFn(node.textValue);
}



//# sourceMappingURL=BaseCollection.module.js.map


/***/ }),

/***/ 41177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pM: () => (/* binding */ $e1995378a142960e$export$fb8073518f34e6ec),
  GQ: () => (/* binding */ $e1995378a142960e$export$bf788dd355e3a401),
  yq: () => (/* binding */ $e1995378a142960e$export$e953bb1cd0f19726),
  KU: () => (/* binding */ $e1995378a142960e$export$18af5c7a9e9b3664)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/BaseCollection.mjs
var BaseCollection = __webpack_require__(46540);
;// ./node_modules/@react-aria/collections/dist/Document.mjs


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $681cc3c98f569e39$export$410b0c854570d131 {
    *[Symbol.iterator]() {
        let node = this.firstChild;
        while(node){
            yield node;
            node = node.nextSibling;
        }
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(firstChild) {
        this._firstChild = firstChild;
        this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(lastChild) {
        this._lastChild = lastChild;
        this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(previousSibling) {
        this._previousSibling = previousSibling;
        this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(nextSibling) {
        this._nextSibling = nextSibling;
        this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(parentNode) {
        this._parentNode = parentNode;
        this.ownerDocument.markDirty(this);
    }
    get isConnected() {
        var _this_parentNode;
        return ((_this_parentNode = this.parentNode) === null || _this_parentNode === void 0 ? void 0 : _this_parentNode.isConnected) || false;
    }
    appendChild(child) {
        this.ownerDocument.startTransaction();
        if (child.parentNode) child.parentNode.removeChild(child);
        if (this.firstChild == null) this.firstChild = child;
        if (this.lastChild) {
            this.lastChild.nextSibling = child;
            child.index = this.lastChild.index + 1;
            child.previousSibling = this.lastChild;
        } else {
            child.previousSibling = null;
            child.index = 0;
        }
        child.parentNode = this;
        child.nextSibling = null;
        this.lastChild = child;
        this.ownerDocument.markDirty(this);
        if (child.hasSetProps) // Only add the node to the collection if we already received props for it.
        // Otherwise wait until then so we have the correct id for the node.
        this.ownerDocument.addNode(child);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    insertBefore(newNode, referenceNode) {
        if (referenceNode == null) return this.appendChild(newNode);
        this.ownerDocument.startTransaction();
        if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
        newNode.nextSibling = referenceNode;
        newNode.previousSibling = referenceNode.previousSibling;
        newNode.index = referenceNode.index;
        if (this.firstChild === referenceNode) this.firstChild = newNode;
        else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
        referenceNode.previousSibling = newNode;
        newNode.parentNode = referenceNode.parentNode;
        let node = referenceNode;
        while(node){
            node.index++;
            node = node.nextSibling;
        }
        if (newNode.hasSetProps) this.ownerDocument.addNode(newNode);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    removeChild(child) {
        if (child.parentNode !== this || !this.ownerDocument.isMounted) return;
        this.ownerDocument.startTransaction();
        let node = child.nextSibling;
        while(node){
            node.index--;
            node = node.nextSibling;
        }
        if (child.nextSibling) child.nextSibling.previousSibling = child.previousSibling;
        if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
        if (this.firstChild === child) this.firstChild = child.nextSibling;
        if (this.lastChild === child) this.lastChild = child.previousSibling;
        child.parentNode = null;
        child.nextSibling = null;
        child.previousSibling = null;
        child.index = 0;
        this.ownerDocument.removeNode(child);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(ownerDocument){
        this._firstChild = null;
        this._lastChild = null;
        this._previousSibling = null;
        this._nextSibling = null;
        this._parentNode = null;
        this.ownerDocument = ownerDocument;
    }
}
class $681cc3c98f569e39$export$dc064fe9e59310fd extends $681cc3c98f569e39$export$410b0c854570d131 {
    get index() {
        return this._index;
    }
    set index(index) {
        this._index = index;
        this.ownerDocument.markDirty(this);
    }
    get level() {
        if (this.parentNode instanceof $681cc3c98f569e39$export$dc064fe9e59310fd) return this.parentNode.level + (this.node.type === 'item' ? 1 : 0);
        return 0;
    }
    updateNode() {
        var _this_previousSibling, _this_nextSibling, _this_firstChild, _this_lastChild;
        let node = this.ownerDocument.getMutableNode(this);
        node.index = this.index;
        node.level = this.level;
        node.parentKey = this.parentNode instanceof $681cc3c98f569e39$export$dc064fe9e59310fd ? this.parentNode.node.key : null;
        var _this_previousSibling_node_key;
        node.prevKey = (_this_previousSibling_node_key = (_this_previousSibling = this.previousSibling) === null || _this_previousSibling === void 0 ? void 0 : _this_previousSibling.node.key) !== null && _this_previousSibling_node_key !== void 0 ? _this_previousSibling_node_key : null;
        var _this_nextSibling_node_key;
        node.nextKey = (_this_nextSibling_node_key = (_this_nextSibling = this.nextSibling) === null || _this_nextSibling === void 0 ? void 0 : _this_nextSibling.node.key) !== null && _this_nextSibling_node_key !== void 0 ? _this_nextSibling_node_key : null;
        node.hasChildNodes = !!this.firstChild;
        var _this_firstChild_node_key;
        node.firstChildKey = (_this_firstChild_node_key = (_this_firstChild = this.firstChild) === null || _this_firstChild === void 0 ? void 0 : _this_firstChild.node.key) !== null && _this_firstChild_node_key !== void 0 ? _this_firstChild_node_key : null;
        var _this_lastChild_node_key;
        node.lastChildKey = (_this_lastChild_node_key = (_this_lastChild = this.lastChild) === null || _this_lastChild === void 0 ? void 0 : _this_lastChild.node.key) !== null && _this_lastChild_node_key !== void 0 ? _this_lastChild_node_key : null;
        // Update the colIndex of sibling nodes if this node has a colSpan.
        if ((node.colSpan != null || node.colIndex != null) && this.nextSibling) {
            var _node_colIndex, _node_colSpan;
            // This queues the next sibling for update, which means this happens recursively.
            let nextColIndex = ((_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index) + ((_node_colSpan = node.colSpan) !== null && _node_colSpan !== void 0 ? _node_colSpan : 1);
            if (nextColIndex !== this.nextSibling.node.colIndex) {
                let siblingNode = this.ownerDocument.getMutableNode(this.nextSibling);
                siblingNode.colIndex = nextColIndex;
            }
        }
    }
    setProps(obj, ref, rendered, render) {
        let node = this.ownerDocument.getMutableNode(this);
        let { value: value, textValue: textValue, id: id, ...props } = obj;
        props.ref = ref;
        node.props = props;
        node.rendered = rendered;
        node.render = render;
        node.value = value;
        node.textValue = textValue || (typeof props.children === 'string' ? props.children : '') || obj['aria-label'] || '';
        if (id != null && id !== node.key) {
            if (this.hasSetProps) throw new Error('Cannot change the id of an item');
            node.key = id;
        }
        if (props.colSpan != null) node.colSpan = props.colSpan;
        // If this is the first time props have been set, end the transaction started in the constructor
        // so this node can be emitted.
        if (!this.hasSetProps) {
            this.ownerDocument.addNode(this);
            this.ownerDocument.endTransaction();
            this.hasSetProps = true;
        }
        this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(type, ownerDocument){
        super(ownerDocument), this.nodeType = 8 // COMMENT_NODE (we'd use ELEMENT_NODE but React DevTools will fail to get its dimensions)
        , this._index = 0, this.hasSetProps = false;
        this.node = new (0, BaseCollection/* CollectionNode */.P)(type, `react-aria-${++ownerDocument.nodeId}`);
        // Start a transaction so that no updates are emitted from the collection
        // until the props for this node are set. We don't know the real id for the
        // node until then, so we need to avoid emitting collections in an inconsistent state.
        this.ownerDocument.startTransaction();
    }
}
class $681cc3c98f569e39$export$b34a105447964f9f extends $681cc3c98f569e39$export$410b0c854570d131 {
    get isConnected() {
        return this.isMounted;
    }
    createElement(type) {
        return new $681cc3c98f569e39$export$dc064fe9e59310fd(type, this);
    }
    /**
   * Lazily gets a mutable instance of a Node. If the node has already
   * been cloned during this update cycle, it just returns the existing one.
   */ getMutableNode(element) {
        let node = element.node;
        if (!this.mutatedNodes.has(element)) {
            node = element.node.clone();
            this.mutatedNodes.add(element);
            element.node = node;
        }
        this.markDirty(element);
        return node;
    }
    getMutableCollection() {
        if (!this.isSSR && !this.collectionMutated) {
            this.collection = this.collection.clone();
            this.collectionMutated = true;
        }
        return this.collection;
    }
    markDirty(node) {
        this.dirtyNodes.add(node);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(element) {
        let collection = this.getMutableCollection();
        if (!collection.getItem(element.node.key)) {
            collection.addNode(element.node);
            for (let child of element)this.addNode(child);
        }
        this.markDirty(element);
    }
    removeNode(node) {
        for (let child of node)this.removeNode(child);
        let collection = this.getMutableCollection();
        collection.removeNode(node.node.key);
        this.markDirty(node);
    }
    /** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
        if (this.transactionCount > 0) return this.collection;
        this.updateCollection();
        return this.collection;
    }
    updateCollection() {
        for (let element of this.dirtyNodes)if (element instanceof $681cc3c98f569e39$export$dc064fe9e59310fd && element.isConnected) element.updateNode();
        this.dirtyNodes.clear();
        if (this.mutatedNodes.size || this.collectionMutated) {
            var _this_firstChild, _this_lastChild;
            let collection = this.getMutableCollection();
            for (let element of this.mutatedNodes)if (element.isConnected) collection.addNode(element.node);
            this.mutatedNodes.clear();
            var _this_firstChild_node_key, _this_lastChild_node_key;
            collection.commit((_this_firstChild_node_key = (_this_firstChild = this.firstChild) === null || _this_firstChild === void 0 ? void 0 : _this_firstChild.node.key) !== null && _this_firstChild_node_key !== void 0 ? _this_firstChild_node_key : null, (_this_lastChild_node_key = (_this_lastChild = this.lastChild) === null || _this_lastChild === void 0 ? void 0 : _this_lastChild.node.key) !== null && _this_lastChild_node_key !== void 0 ? _this_lastChild_node_key : null, this.isSSR);
        }
        this.collectionMutated = false;
    }
    queueUpdate() {
        // Don't emit any updates if there is a transaction in progress.
        // queueUpdate should be called again after the transaction.
        if (this.dirtyNodes.size === 0 || this.transactionCount > 0) return;
        for (let fn of this.subscriptions)fn();
    }
    subscribe(fn) {
        this.subscriptions.add(fn);
        return ()=>this.subscriptions.delete(fn);
    }
    resetAfterSSR() {
        if (this.isSSR) {
            this.isSSR = false;
            this.firstChild = null;
            this.lastChild = null;
            this.nodeId = 0;
        }
    }
    constructor(collection){
        // @ts-ignore
        super(null), this.nodeType = 11 // DOCUMENT_FRAGMENT_NODE
        , this.ownerDocument = this, this.dirtyNodes = new Set(), this.isSSR = false, this.nodeId = 0, this.nodesByProps = new WeakMap(), this.isMounted = true, this.mutatedNodes = new Set(), this.subscriptions = new Set(), this.transactionCount = 0;
        this.collection = collection;
        this.collectionMutated = true;
    }
}



//# sourceMappingURL=Document.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/useCachedChildren.mjs
var useCachedChildren = __webpack_require__(64367);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/Hidden.mjs
var Hidden = __webpack_require__(75127);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(19888);
;// ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs











/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $e1995378a142960e$var$ShallowRenderContext = /*#__PURE__*/ (0, react.createContext)(false);
const $e1995378a142960e$var$CollectionDocumentContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$export$bf788dd355e3a401(props) {
    // If a document was provided above us, we're already in a hidden tree. Just render the content.
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    if (doc) // The React types prior to 18 did not allow returning ReactNode from components
    // even though the actual implementation since React 16 did.
    // We must return ReactElement so that TS does not complain that <CollectionBuilder>
    // is not a valid JSX element with React 16 and 17 types.
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return props.content;
    // Otherwise, render a hidden copy of the children so that we can build the collection before constructing the state.
    // This should always come before the real DOM content so we have built the collection by the time it renders during SSR.
    // This is fine. CollectionDocumentContext never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { collection: collection, document: document } = $e1995378a142960e$var$useCollectionDocument(props.createCollection);
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement((0, Hidden/* Hidden */.jZ), null, /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionDocumentContext.Provider, {
        value: document
    }, props.content)), /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionInner, {
        render: props.children,
        collection: collection
    }));
}
function $e1995378a142960e$var$CollectionInner({ collection: collection, render: render }) {
    return render(collection);
}
// React 16 and 17 don't support useSyncExternalStore natively, and the shim provided by React does not support getServerSnapshot.
// This wrapper uses the shim, but additionally calls getServerSnapshot during SSR (according to SSRProvider).
function $e1995378a142960e$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let isSSRRef = (0, react.useRef)(isSSR);
    // This is read immediately inside the wrapper, which also runs during render.
    // We just need a ref to avoid invalidating the callback itself, which
    // would cause React to re-run the callback more than necessary.
    // eslint-disable-next-line rulesdir/pure-render
    isSSRRef.current = isSSR;
    let getSnapshotWrapper = (0, react.useCallback)(()=>{
        return isSSRRef.current ? getServerSnapshot() : getSnapshot();
    }, [
        getSnapshot,
        getServerSnapshot
    ]);
    return (0, shim.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const $e1995378a142960e$var$useSyncExternalStore = typeof (0, react)['useSyncExternalStore'] === 'function' ? (0, react)['useSyncExternalStore'] : $e1995378a142960e$var$useSyncExternalStoreFallback;
function $e1995378a142960e$var$useCollectionDocument(createCollection) {
    // The document instance is mutable, and should never change between renders.
    // useSyncExternalStore is used to subscribe to updates, which vends immutable Collection objects.
    let [document] = (0, react.useState)(()=>new (0, $681cc3c98f569e39$export$b34a105447964f9f)((createCollection === null || createCollection === void 0 ? void 0 : createCollection()) || new (0, BaseCollection/* BaseCollection */.W)()));
    let subscribe = (0, react.useCallback)((fn)=>document.subscribe(fn), [
        document
    ]);
    let getSnapshot = (0, react.useCallback)(()=>{
        let collection = document.getCollection();
        if (document.isSSR) // After SSR is complete, reset the document to empty so it is ready for React to render the portal into.
        // We do this _after_ getting the collection above so that the collection still has content in it from SSR
        // during the current render, before React has finished the client render.
        document.resetAfterSSR();
        return collection;
    }, [
        document
    ]);
    let getServerSnapshot = (0, react.useCallback)(()=>{
        document.isSSR = true;
        return document.getCollection();
    }, [
        document
    ]);
    let collection = $e1995378a142960e$var$useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        document.isMounted = true;
        return ()=>{
            // Mark unmounted so we can skip all of the collection updates caused by
            // React calling removeChild on every item in the collection.
            document.isMounted = false;
        };
    }, [
        document
    ]);
    return {
        collection: collection,
        document: document
    };
}
const $e1995378a142960e$var$SSRContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$var$useSSRCollectionNode(Type, props, ref, rendered, children, render) {
    // During SSR, portals are not supported, so the collection children will be wrapped in an SSRContext.
    // Since SSR occurs only once, we assume that the elements are rendered in order and never re-render.
    // Therefore we can create elements in our collection document during render so that they are in the
    // collection by the time we need to use the collection to render to the real DOM.
    // After hydration, we switch to client rendering using the portal.
    let itemRef = (0, react.useCallback)((element)=>{
        element === null || element === void 0 ? void 0 : element.setProps(props, ref, rendered, render);
    }, [
        props,
        ref,
        rendered,
        render
    ]);
    let parentNode = (0, react.useContext)($e1995378a142960e$var$SSRContext);
    if (parentNode) {
        // Guard against double rendering in strict mode.
        let element = parentNode.ownerDocument.nodesByProps.get(props);
        if (!element) {
            element = parentNode.ownerDocument.createElement(Type);
            element.setProps(props, ref, rendered, render);
            parentNode.appendChild(element);
            parentNode.ownerDocument.updateCollection();
            parentNode.ownerDocument.nodesByProps.set(props, element);
        }
        return children ? /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$SSRContext.Provider, {
            value: element
        }, children) : null;
    }
    // @ts-ignore
    return /*#__PURE__*/ (0, react).createElement(Type, {
        ref: itemRef
    }, children);
}
function $e1995378a142960e$export$18af5c7a9e9b3664(type, render) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let focusableProps = (0, react.useContext)((0, useFocusable/* FocusableContext */.gY));
        let isShallow = (0, react.useContext)($e1995378a142960e$var$ShallowRenderContext);
        if (!isShallow) {
            if (render.length >= 3) throw new Error(render.name + ' cannot be rendered outside a collection.');
            return render(props, ref);
        }
        return $e1995378a142960e$var$useSSRCollectionNode(type, props, ref, 'children' in props ? props.children : null, null, (node)=>// Forward FocusableContext to real DOM tree so tooltips work.
            /*#__PURE__*/ (0, react).createElement((0, useFocusable/* FocusableContext */.gY).Provider, {
                value: focusableProps
            }, /*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            })));
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $e1995378a142960e$export$e953bb1cd0f19726(type, render, useChildren = $e1995378a142960e$var$useCollectionChildren) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let children = useChildren(props);
        var _useSSRCollectionNode;
        return (_useSSRCollectionNode = $e1995378a142960e$var$useSSRCollectionNode(type, props, ref, null, children, (node)=>/*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            }))) !== null && _useSSRCollectionNode !== void 0 ? _useSSRCollectionNode : /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null);
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $e1995378a142960e$var$useCollectionChildren(options) {
    return (0, useCachedChildren/* useCachedChildren */.p)({
        ...options,
        addIdAndValue: true
    });
}
const $e1995378a142960e$var$CollectionContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$export$fb8073518f34e6ec(props) {
    let ctx = (0, react.useContext)($e1995378a142960e$var$CollectionContext);
    let dependencies = ((ctx === null || ctx === void 0 ? void 0 : ctx.dependencies) || []).concat(props.dependencies);
    let idScope = props.idScope || (ctx === null || ctx === void 0 ? void 0 : ctx.idScope);
    let children = $e1995378a142960e$var$useCollectionChildren({
        ...props,
        idScope: idScope,
        dependencies: dependencies
    });
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    if (doc) children = /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionRoot, null, children);
    // Propagate dependencies and idScope to child collections.
    ctx = (0, react.useMemo)(()=>({
            dependencies: dependencies,
            idScope: idScope
        }), [
        idScope,
        ...dependencies
    ]);
    return /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionContext.Provider, {
        value: ctx
    }, children);
}
function $e1995378a142960e$var$CollectionRoot({ children: children }) {
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    let wrappedChildren = (0, react.useMemo)(()=>/*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionDocumentContext.Provider, {
            value: null
        }, /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$ShallowRenderContext.Provider, {
            value: true
        }, children)), [
        children
    ]);
    // During SSR, we render the content directly, and append nodes to the document during render.
    // The collection children return null so that nothing is actually rendered into the HTML.
    return (0, SSRProvider/* useIsSSR */.wR)() ? /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$SSRContext.Provider, {
        value: doc
    }, wrappedChildren) : /*#__PURE__*/ (0, react_dom.createPortal)(wrappedChildren, doc);
}



//# sourceMappingURL=CollectionBuilder.module.js.map


/***/ }),

/***/ 64367:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $e948873055cbafe4$export$727c8fc270210f13)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e948873055cbafe4$export$727c8fc270210f13(props) {
    let { children: children, items: items, idScope: idScope, addIdAndValue: addIdAndValue, dependencies: dependencies = [] } = props;
    // Invalidate the cache whenever the parent value changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let cache = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new WeakMap(), dependencies);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (items && typeof children === 'function') {
            let res = [];
            for (let item of items){
                let rendered = cache.get(item);
                if (!rendered) {
                    rendered = children(item);
                    var _rendered_props_id, _ref;
                    // @ts-ignore
                    let key = (_ref = (_rendered_props_id = rendered.props.id) !== null && _rendered_props_id !== void 0 ? _rendered_props_id : item.key) !== null && _ref !== void 0 ? _ref : item.id;
                    if (key == null) throw new Error('Could not determine key for item');
                    if (idScope) key = idScope + ':' + key;
                    // Note: only works if wrapped Item passes through id...
                    rendered = (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(rendered, addIdAndValue ? {
                        key: key,
                        id: key,
                        value: item
                    } : {
                        key: key
                    });
                    cache.set(item, rendered);
                }
                res.push(rendered);
            }
            return res;
        } else if (typeof children !== 'function') return children;
    }, [
        children,
        items,
        cache,
        idScope,
        addIdAndValue
    ]);
}



//# sourceMappingURL=useCachedChildren.module.js.map


/***/ }),

/***/ 64606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $7135fc7d473fd974$export$a164736487e3f0ae),
/* harmony export */   P2: () => (/* binding */ $7135fc7d473fd974$export$d40e14dec8b060a8),
/* harmony export */   l2: () => (/* binding */ $7135fc7d473fd974$export$90e00781bc59d8f9),
/* harmony export */   zL: () => (/* binding */ $7135fc7d473fd974$export$4feb769f8ddf26c5)
/* harmony export */ });
/* unused harmony export Section */
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64367);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $7135fc7d473fd974$export$d40e14dec8b060a8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $7135fc7d473fd974$export$6e2c8f0811a474ce = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $18I52$createBranchComponent)('section', (props, ref, section)=>{
    let { name: name, render: render } = (0, $18I52$useContext)($7135fc7d473fd974$export$d40e14dec8b060a8);
    console.warn(`<Section> is deprecated. Please use <${name}> instead.`);
    return render(props, ref, section, 'react-aria-Section');
})));
const $7135fc7d473fd974$export$a164736487e3f0ae = {
    CollectionRoot ({ collection: collection, renderDropIndicator: renderDropIndicator }) {
        return $7135fc7d473fd974$var$useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection: collection, parent: parent, renderDropIndicator: renderDropIndicator }) {
        return $7135fc7d473fd974$var$useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function $7135fc7d473fd974$var$useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .useCachedChildren */ .p)({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            var _collection_getItem;
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            let key = node.key;
            let keyAfter = collection.getKeyAfter(key);
            return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, renderDropIndicator({
                type: 'item',
                key: key,
                dropPosition: 'before'
            }), rendered, (keyAfter == null || ((_collection_getItem = collection.getItem(keyAfter)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.type) !== 'item') && renderDropIndicator({
                type: 'item',
                key: key,
                dropPosition: 'after'
            }));
        }
    });
}
const $7135fc7d473fd974$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)($7135fc7d473fd974$export$a164736487e3f0ae);
function $7135fc7d473fd974$export$90e00781bc59d8f9(focusedKey) {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}



//# sourceMappingURL=Collection.module.js.map


/***/ })

}]);