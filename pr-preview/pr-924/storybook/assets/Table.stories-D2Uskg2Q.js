import{r as N,j as u}from"./iframe-BkRwSuoF.js";import{$ as q,c as y,R as k,b as z,C as b,a as $,T as C}from"./Table-DnIo_qiP.js";import{$ as U,b as X,c as w,d as I,a as D}from"./Virtualizer-BlBRFpIF.js";import{f as L,g as G}from"./SelectionManager-CmDhkmt5.js";import{L as F}from"./Link-Zet_wR1o.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CO79J77U.js";import"./utils-BdDw6N01.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-1m_lMC.js";import"./useFocusRing-B3CGeMvZ.js";import"./index-CCvpWvoT.js";import"./index-Dldu1ldC.js";import"./useLabels--gJ5LkCh.js";import"./useButton-CswrRlr6.js";import"./RSPContexts-B3MVorUA.js";import"./Collection-BDg-oKXI.js";import"./index-DXImVbQC.js";import"./DragAndDrop-DnxlLkam.js";import"./getScrollParent-DA13BLUh.js";import"./scrollIntoView-O2aOyMO3.js";import"./SelectionIndicator-B_q3NmJe.js";import"./inertValue-D0BRHCKG.js";import"./useHighlightSelectionDescription-B2QwTFFj.js";import"./useUpdateEffect-DjrFPNoj.js";import"./useLocalizedStringFormatter-Cwp5Qrc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useDescription-EQv126BS.js";import"./VisuallyHidden-Dh5oNNi1.js";import"./ListKeyboardDelegate-B9onWOf6.js";import"./useHasTabbableChild-D5JSVkEe.js";import"./clsx-Ciqy0D92.js";import"./createLucideIcon-CDTY4y58.js";import"./Checkbox-HGBUWKbL.js";import"./Form-DOOHuSw0.js";import"./useFormValidation-CyIPY_c0.js";import"./check-jFoQUBBD.js";import"./useToggleState-CrG7TLLq.js";import"./useControlledState-v9DI2Sbw.js";import"./useResizeObserver-yTt8U_gJ.js";import"./useEvent-FTwQNHvp.js";import"./arrow-right-bS9KPpkF.js";import"./square-arrow-out-up-right-lPQdLL_K.js";function J(c){return c!=null&&(!isNaN(c)||String(c).match(/^(\d+)(?=%$)/)!==null)}function Q(c){if(!c||typeof c=="number")return 1;let t=c.match(/^(.+)(?=fr$)/);return t?parseFloat(t[0]):1}function E(c,t){if(typeof c=="string"){let e=c.match(/^(\d+)(?=%$)/);if(!e)throw new Error("Only percentages or numbers are supported for static column widths");return t*(parseFloat(e[0])/100)}return c}function O(c,t){return c!=null?E(c,t):Number.MAX_SAFE_INTEGER}function Y(c,t){return c!=null?E(c,t):0}function Z(c,t,e,i,o){let r=!1,l=t.map((n,s)=>{var a,d,h,f;let m=e.get(n.key)!=null?(a=e.get(n.key))!==null&&a!==void 0?a:"1fr":(f=(h=(d=n.width)!==null&&d!==void 0?d:n.defaultWidth)!==null&&h!==void 0?h:i?.(s))!==null&&f!==void 0?f:"1fr",p=!1,x=0,v=0,g=0;J(m)?(x=E(m,c),p=!0):(v=Q(m),v<=0&&(p=!0));var j,T;let B=Y((T=(j=n.minWidth)!==null&&j!==void 0?j:o?.(s))!==null&&T!==void 0?T:0,c),P=O(n.maxWidth,c),M=Math.max(B,Math.min(x,P));return p?g=M:x>M&&(p=!0,g=M),p||(r=!0),{frozen:p,baseSize:x,hypotheticalMainSize:M,min:B,max:P,flex:v,targetMainSize:g,violation:0}});for(;r;){let n=0,s=0;l.forEach(h=>{h.frozen?n+=h.targetMainSize:(n+=h.baseSize,s+=h.flex)});let a=c-n;a>0&&l.forEach(h=>{if(!h.frozen){let f=h.flex/s;h.targetMainSize=h.baseSize+f*a}});let d=0;l.forEach(h=>{if(h.violation=0,!h.frozen){let{min:f,max:m,targetMainSize:p}=h;h.targetMainSize=Math.max(f,Math.min(p,m)),h.violation=h.targetMainSize-p,d+=h.violation}}),r=!1,l.forEach(h=>{d===0||Math.sign(d)===Math.sign(h.violation)?h.frozen=!0:h.frozen||(r=!0)})}return ee(l)}function ee(c){let t=0,e=0,i=[];return c.forEach(function(o){let r=o.targetMainSize,l=Math.round(r+t)-e;t+=r,e+=l,i.push(l)}),i}class te{splitColumnsIntoControlledAndUncontrolled(t){return t.reduce((e,i)=>(i.props.width!=null?e[0].set(i.key,i):e[1].set(i.key,i),e),[new Map,new Map])}recombineColumns(t,e,i,o){return new Map(t.map(r=>i.has(r.key)?[r.key,e.get(r.key)]:[r.key,o.get(r.key).props.width]))}getInitialUncontrolledWidths(t){return new Map(Array.from(t).map(([e,i])=>{var o,r,l,n;return[e,(n=(l=i.props.defaultWidth)!==null&&l!==void 0?l:(o=(r=this).getDefaultWidth)===null||o===void 0?void 0:o.call(r,i))!==null&&n!==void 0?n:"1fr"]}))}getColumnWidth(t){var e;return(e=this.columnWidths.get(t))!==null&&e!==void 0?e:0}getColumnMinWidth(t){var e;return(e=this.columnMinWidths.get(t))!==null&&e!==void 0?e:0}getColumnMaxWidth(t){var e;return(e=this.columnMaxWidths.get(t))!==null&&e!==void 0?e:0}resizeColumnWidth(t,e,i,o){let r=this.columnWidths,l=!0,n=new Map;return o=Math.max(this.getColumnMinWidth(i),Math.min(this.getColumnMaxWidth(i),Math.floor(o))),t.columns.forEach(s=>{var a,d;s.key===i?(n.set(s.key,o),l=!1):l?n.set(s.key,(a=r.get(s.key))!==null&&a!==void 0?a:0):n.set(s.key,(d=s.props.width)!==null&&d!==void 0?d:e.get(s.key))}),n}buildColumnWidths(t,e,i){return this.columnWidths=new Map,this.columnMinWidths=new Map,this.columnMaxWidths=new Map,Z(t,e.columns.map(r=>({...r.props,key:r.key})),i,r=>this.getDefaultWidth(e.columns[r]),r=>this.getDefaultMinWidth(e.columns[r])).forEach((r,l)=>{let n=e.columns[l].key,s=e.columns[l];this.columnWidths.set(n,r);var a;this.columnMinWidths.set(n,Y((a=s.props.minWidth)!==null&&a!==void 0?a:this.getDefaultMinWidth(s),t)),this.columnMaxWidths.set(n,O(s.props.maxWidth,t))}),this.columnWidths}constructor(t){this.columnWidths=new Map,this.columnMinWidths=new Map,this.columnMaxWidths=new Map;var e;this.getDefaultWidth=(e=t?.getDefaultWidth)!==null&&e!==void 0?e:()=>"1fr";var i;this.getDefaultMinWidth=(i=t?.getDefaultMinWidth)!==null&&i!==void 0?i:()=>75}}const V=48;class ie extends U{get collection(){return this.virtualizer.collection}columnsChanged(t,e){return!e||t.columns!==e.columns&&t.columns.length!==e.columns.length||t.columns.some((i,o)=>i.key!==e.columns[o].key||i.props.width!==e.columns[o].props.width||i.props.minWidth!==e.columns[o].props.minWidth||i.props.maxWidth!==e.columns[o].props.maxWidth)}shouldInvalidateLayoutOptions(t,e){return t.columnWidths!==e.columnWidths||super.shouldInvalidateLayoutOptions(t,e)}update(t){var e;let i=this.virtualizer.collection;if(!((e=t.layoutOptions)===null||e===void 0)&&e.columnWidths){for(const[o,r]of t.layoutOptions.columnWidths)if(this.columnWidths.get(o)!==r){this.columnWidths=t.layoutOptions.columnWidths,t.sizeChanged=!0;break}}else if(t.sizeChanged||this.columnsChanged(i,this.lastCollection)){let o=new te({});this.columnWidths=o.buildColumnWidths(this.virtualizer.visibleRect.width-this.padding*2,i,new Map),t.sizeChanged=!0}super.update(t)}buildCollection(){var t;this.stickyColumnIndices=[];let e=this.virtualizer.collection;if(((t=e.head)===null||t===void 0?void 0:t.key)===-1)return[];for(let r of e.columns)(this.isStickyColumn(r)||e.rowHeaderColumnKeys.has(r.key))&&this.stickyColumnIndices.push(r.index);let i=this.buildTableHeader();this.layoutNodes.set(i.layoutInfo.key,i);let o=this.buildBody(i.layoutInfo.rect.maxY+this.gap);return this.lastPersistedKeys=null,o.layoutInfo.rect.width=Math.max(i.layoutInfo.rect.width,o.layoutInfo.rect.width),this.contentSize=new X(o.layoutInfo.rect.width+this.padding*2,o.layoutInfo.rect.maxY+this.padding),[i,o]}buildTableHeader(){var t;let e=this.virtualizer.collection,i=new w(this.padding,this.padding,0,0);var o;let r=new I("header",(o=(t=e.head)===null||t===void 0?void 0:t.key)!==null&&o!==void 0?o:"header",i);r.isSticky=!0,r.zIndex=1;let l=this.padding,n=0,s=[];for(let a of e.headerRows){let d=this.buildChild(a,this.padding,l,r.key);d.layoutInfo.parentKey=r.key,l=d.layoutInfo.rect.maxY,n=Math.max(n,d.layoutInfo.rect.width),d.index=s.length,s.push(d)}return i.width=n,i.height=l-this.padding,{layoutInfo:r,children:s,validRect:r.rect,node:e.head}}buildHeaderRow(t,e,i){let o=new w(e,i,0,0),r=new I("headerrow",t.key,o),l=0,n=[];for(let s of L(t,this.virtualizer.collection)){let a=this.buildChild(s,e,i,r.key);a.layoutInfo.parentKey=r.key,e=a.layoutInfo.rect.maxX,l=Math.max(l,a.layoutInfo.rect.height),a.index=n.length,n.push(a)}for(let[s,a]of n.entries())a.layoutInfo.zIndex=n.length-s+1;return this.setChildHeights(n,l),o.height=l,o.width=e-o.x,{layoutInfo:r,children:n,validRect:o,node:t}}setChildHeights(t,e){for(let i of t)i.layoutInfo.rect.height!==e&&(i.layoutInfo=i.layoutInfo.copy(),i.layoutInfo.rect.height=e)}getRenderedColumnWidth(t){let e=this.virtualizer.collection;var i;let o=(i=t.colSpan)!==null&&i!==void 0?i:1;var r;let l=(r=t.colIndex)!==null&&r!==void 0?r:t.index,n=0;for(let a=l;a<l+o;a++){let d=e.columns[a];var s;d?.key!=null&&(n+=(s=this.columnWidths.get(d.key))!==null&&s!==void 0?s:0)}return n}getEstimatedHeight(t,e,i,o){let r=!1;if(i==null){let l=this.layoutNodes.get(t.key);l?(i=l.layoutInfo.rect.height,r=t!==l.node||e!==l.layoutInfo.rect.width||l.layoutInfo.estimatedSize):(i=o??V,r=!0)}return{height:i,isEstimated:r}}getEstimatedRowHeight(){var t,e;return(e=(t=this.rowHeight)!==null&&t!==void 0?t:this.estimatedRowHeight)!==null&&e!==void 0?e:V}buildColumn(t,e,i){let o=this.getRenderedColumnWidth(t);var r,l;let{height:n,isEstimated:s}=this.getEstimatedHeight(t,o,(r=this.headingHeight)!==null&&r!==void 0?r:this.rowHeight,(l=this.estimatedHeadingHeight)!==null&&l!==void 0?l:this.estimatedRowHeight),a=new w(e,i,o,n),d=new I(t.type,t.key,a);return d.isSticky=this.isStickyColumn(t),d.zIndex=d.isSticky?2:1,d.estimatedSize=s,{layoutInfo:d,children:[],validRect:d.rect,node:t}}isStickyColumn(t){return!1}buildBody(t){let e=this.virtualizer.collection,i=new w(this.padding,t,0,0),o=new I("rowgroup",e.body.key,i),r=t,l=0,n=0,s=[],a=this.getEstimatedRowHeight()+this.gap,d=L(e.body,e);for(let m of d){if(t+a<this.requestedRect.y&&!this.isValid(m,t)){t+=a,l++;continue}let p=this.buildChild(m,this.padding,t,o.key);if(p.layoutInfo.parentKey=o.key,p.index=s.length,t=p.layoutInfo.rect.maxY+this.gap,n=Math.max(n,p.layoutInfo.rect.width),s.push(p),t>this.requestedRect.maxY){var h;let x=e.size-(s.length+l),v=G(d);if(t+=x*a,v?.type==="loader"&&((h=s.at(-1))===null||h===void 0?void 0:h.layoutInfo.type)!=="loader"){let g=this.buildChild(v,this.padding,t,o.key);g.layoutInfo.parentKey=o.key,g.index=e.size,n=Math.max(n,g.layoutInfo.rect.width),s.push(g),t=g.layoutInfo.rect.maxY}break}}return e?.size===0?t=this.virtualizer.visibleRect.maxY:t-=this.gap,i.width=n,i.height=t-r,{layoutInfo:o,children:s,validRect:o.rect.intersection(this.requestedRect),node:e.body}}buildNode(t,e,i){switch(t.type){case"headerrow":return this.buildHeaderRow(t,e,i);case"item":return this.buildRow(t,e,i);case"column":case"placeholder":return this.buildColumn(t,e,i);case"cell":return this.buildCell(t,e,i);case"loader":return this.buildLoader(t,e,i);default:throw new Error("Unknown node type "+t.type)}}buildRow(t,e,i){var o;let r=this.virtualizer.collection,l=new w(e,i,0,0),n=new I("row",t.key,l),s=[],a=0;for(let h of L(t,r))if(h.type==="cell")if(e>this.requestedRect.maxX){let f=this.layoutNodes.get(h.key);if(f)f.layoutInfo.rect.x=e,e+=f.layoutInfo.rect.width;else break}else{let f=this.buildChild(h,e,i,n.key);e=f.layoutInfo.rect.maxX,a=Math.max(a,f.layoutInfo.rect.height),f.index=s.length,s.push(f)}this.setChildHeights(s,a);var d;return l.width=this.layoutNodes.get((d=(o=r.head)===null||o===void 0?void 0:o.key)!==null&&d!==void 0?d:"header").layoutInfo.rect.width,l.height=a,{layoutInfo:n,children:s,validRect:l.intersection(this.requestedRect),node:t}}buildCell(t,e,i){let o=this.getRenderedColumnWidth(t),{height:r,isEstimated:l}=this.getEstimatedHeight(t,o,this.rowHeight,this.estimatedRowHeight),n=new w(e,i,o,r),s=new I(t.type,t.key,n);return s.isSticky=this.isStickyColumn(t),s.zIndex=s.isSticky?2:1,s.estimatedSize=l,{layoutInfo:s,children:[],validRect:n,node:t}}getVisibleLayoutInfos(t){if(t.height>1){let i=this.getEstimatedRowHeight();t.y=Math.floor(t.y/i)*i,t.height=Math.ceil(t.height/i)*i}this.layoutIfNeeded(t);let e=[];this.buildPersistedIndices();for(let i of this.rootNodes)e.push(i.layoutInfo),this.addVisibleLayoutInfos(e,i,t);return e}addVisibleLayoutInfos(t,e,i){if(!(!e.children||e.children.length===0))switch(e.layoutInfo.type){case"header":for(let o of e.children)t.push(o.layoutInfo),this.addVisibleLayoutInfos(t,o,i);break;case"rowgroup":{let o=this.binarySearch(e.children,i.topLeft,"y"),r=this.binarySearch(e.children,i.bottomRight,"y"),l=this.persistedIndices.get(e.layoutInfo.key),n=0;for(;l&&n<l.length&&l[n]<o;){let a=l[n];a<e.children.length&&(t.push(e.children[a].layoutInfo),this.addVisibleLayoutInfos(t,e.children[a],i)),n++}for(let a=o;a<=r;a++){for(;l&&n<l.length&&l[n]<a;)n++;t.push(e.children[a].layoutInfo),this.addVisibleLayoutInfos(t,e.children[a],i)}for(;l&&n<l.length;){let a=l[n++];a<e.children.length&&(t.push(e.children[a].layoutInfo),this.addVisibleLayoutInfos(t,e.children[a],i))}let s=e.children.at(-1);s?.layoutInfo.type==="loader"&&t.push(s.layoutInfo);break}case"headerrow":case"row":{let o=this.binarySearch(e.children,i.topLeft,"x"),r=this.binarySearch(e.children,i.topRight,"x"),l=0,n=this.persistedIndices.get(e.layoutInfo.key)||this.stickyColumnIndices;for(;l<n.length&&n[l]<o;){let s=n[l];s<e.children.length&&t.push(e.children[s].layoutInfo),l++}for(let s=o;s<=r;s++){for(;l<n.length&&n[l]<s;)l++;t.push(e.children[s].layoutInfo)}for(;l<n.length;){let s=n[l++];s<e.children.length&&t.push(e.children[s].layoutInfo)}break}default:throw new Error("Unknown node type "+e.layoutInfo.type)}}binarySearch(t,e,i){let o=0,r=t.length-1;for(;o<=r;){let l=o+r>>1,n=t[l];if(i==="x"&&n.layoutInfo.rect.maxX<=e.x||i==="y"&&n.layoutInfo.rect.maxY<=e.y)o=l+1;else if(i==="x"&&n.layoutInfo.rect.x>e.x||i==="y"&&n.layoutInfo.rect.y>e.y)r=l-1;else return l}return Math.max(0,Math.min(t.length-1,o))}buildPersistedIndices(){if(this.virtualizer.persistedKeys!==this.lastPersistedKeys){this.lastPersistedKeys=this.virtualizer.persistedKeys,this.persistedIndices.clear();for(let o of this.virtualizer.persistedKeys){var t;let r=(t=this.layoutNodes.get(o))===null||t===void 0?void 0:t.layoutInfo;for(;r&&r.parentKey;){var e,i;let l=this.virtualizer.collection.getItem(r.key),n=this.persistedIndices.get(r.parentKey);n||(n=l?.type==="cell"||l?.type==="column"?[...this.stickyColumnIndices]:[],this.persistedIndices.set(r.parentKey,n));let s=(e=this.layoutNodes.get(r.key))===null||e===void 0?void 0:e.index;s!=null&&!n.includes(s)&&n.push(s),r=(i=this.layoutNodes.get(r.parentKey))===null||i===void 0?void 0:i.layoutInfo}}for(let o of this.persistedIndices.values())o.sort((r,l)=>r-l)}}getDropTargetFromPoint(t,e,i){t+=this.virtualizer.visibleRect.x,e+=this.virtualizer.visibleRect.y;let o=new w(t,Math.max(0,e-this.gap),1,Math.max(1,this.gap*2)),r=this.getVisibleLayoutInfos(o),l=null,n=1/0;for(let h of r){if(h.type!=="row"||!h.rect.intersects(o))continue;let f=Math.abs(h.rect.y-e),m=Math.abs(h.rect.maxY-e),p=Math.min(f,m);p<n&&(n=p,l=h.key)}if(l==null||this.virtualizer.collection.size===0)return{type:"root"};let s=this.getLayoutInfo(l);if(!s)return null;let a=s.rect,d={type:"item",key:s.key,dropPosition:"on"};return i(d)?e<=a.y+10&&i({...d,dropPosition:"before"})?d.dropPosition="before":e>=a.maxY-10&&i({...d,dropPosition:"after"})&&(d.dropPosition="after"):e<=a.y+a.height/2&&i({...d,dropPosition:"before"})?d.dropPosition="before":i({...d,dropPosition:"after"})&&(d.dropPosition="after"),d}getDropTargetLayoutInfo(t){let e=super.getDropTargetLayoutInfo(t);return e.parentKey=this.virtualizer.collection.body.key,e}constructor(t){super(t),this.lastCollection=null,this.columnWidths=new Map,this.lastPersistedKeys=null,this.persistedIndices=new Map,this.stickyColumnIndices=[]}}class A extends ie{useLayoutOptions(){let t=N.useContext(q);return N.useMemo(()=>({columnWidths:t?.columnWidths}),[t?.columnWidths])}}const K=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],le=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],qe={component:C,subcomponents:{TableHeader:$,Column:b,TableBody:z,Row:k,Cell:y},title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files",selectionMode:"multiple"},argTypes:{size:{control:!1}},render:c=>u.jsxs(C,{...c,children:[u.jsx($,{columns:K,children:t=>u.jsx(b,{isRowHeader:t.isRowHeader,children:t.name})}),u.jsx(z,{items:le,children:t=>u.jsx(k,{columns:K,children:e=>u.jsx(y,{children:t[e.id]})})})]})},W={},R={args:{striped:!0,className:"my-class"}},S={render:c=>{const t=[];for(let e=0;e<5e3;e++)t.push({id:e,foo:`Foo ${e}`,bar:`Bar ${e}`,baz:`Baz ${e}`});return u.jsx(D,{layout:A,layoutOptions:{rowHeight:48,headingHeight:48},children:u.jsxs(C,{...c,style:{height:300,overflow:"auto",scrollPaddingTop:48},children:[u.jsxs($,{children:[u.jsx(b,{isRowHeader:!0,children:"Foo"}),u.jsx(b,{children:"Bar"}),u.jsx(b,{children:"Baz"})]}),u.jsx(z,{items:t,children:e=>u.jsxs(k,{"data-even":e.id%2===0,children:[u.jsx(y,{children:e.foo}),u.jsx(y,{children:e.bar}),u.jsx(y,{children:e.baz})]})})]})})}},H={tags:["!dev","!autodocs","!snapshot"],args:{striped:!0},parameters:{chromatic:{disableSnapshot:!0}},render:c=>{const t=[];for(let e=0;e<5e3;e++)t.push({id:e,foo:`Foo ${e}`,bar:`Bar ${e}`,baz:`Baz ${e}`});return u.jsx(D,{layout:A,layoutOptions:{rowHeight:48,headingHeight:48},children:u.jsxs(C,{...c,style:{height:300,overflow:"auto",scrollPaddingTop:48},children:[u.jsxs($,{children:[u.jsx(b,{isRowHeader:!0,children:"Foo"}),u.jsx(b,{children:"Bar"}),u.jsx(b,{children:"Baz"})]}),u.jsx(z,{items:t,children:e=>u.jsxs(k,{"data-even":e.id%2===0,children:[u.jsx(y,{children:e.foo}),u.jsx(y,{children:e.bar}),u.jsx(y,{children:e.baz})]})})]})})}},_={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},args:{striped:!0},render:c=>u.jsxs(C,{...c,children:[u.jsx($,{children:u.jsx(b,{children:"Derp"})}),u.jsxs(z,{children:[u.jsx(k,{children:u.jsx(y,{children:u.jsx(F,{href:"#",children:"Link"})})}),u.jsx(k,{children:u.jsx(y,{children:u.jsx(F,{href:"#",children:"Link"})})})]})]})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:"{}",...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    className: 'my-class'
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const rows = [];
    for (let i = 0; i < 5000; i++) {
      rows.push({
        id: i,
        foo: \`Foo \${i}\`,
        bar: \`Bar \${i}\`,
        baz: \`Baz \${i}\`
      });
    }
    return <Virtualizer layout={TableLayout} layoutOptions={{
      rowHeight: 48,
      headingHeight: 48
    }}>
        <Table {...args} style={{
        height: 300,
        overflow: 'auto',
        scrollPaddingTop: 48
      }}>
          <TableHeader>
            <Column isRowHeader>Foo</Column>
            <Column>Bar</Column>
            <Column>Baz</Column>
          </TableHeader>
          <TableBody items={rows}>
            {item => <Row data-even={item.id % 2 === 0}>
                <Cell>{item.foo}</Cell>
                <Cell>{item.bar}</Cell>
                <Cell>{item.baz}</Cell>
              </Row>}
          </TableBody>
        </Table>
      </Virtualizer>;
  }
}`,...S.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    striped: true
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => {
    const rows = [];
    for (let i = 0; i < 5000; i++) {
      rows.push({
        id: i,
        foo: \`Foo \${i}\`,
        bar: \`Bar \${i}\`,
        baz: \`Baz \${i}\`
      });
    }
    return <Virtualizer layout={TableLayout} layoutOptions={{
      rowHeight: 48,
      headingHeight: 48
    }}>
        <Table {...args} style={{
        height: 300,
        overflow: 'auto',
        scrollPaddingTop: 48
      }}>
          <TableHeader>
            <Column isRowHeader>Foo</Column>
            <Column>Bar</Column>
            <Column>Baz</Column>
          </TableHeader>
          <TableBody items={rows}>
            {item => <Row data-even={item.id % 2 === 0}>
                <Cell>{item.foo}</Cell>
                <Cell>{item.bar}</Cell>
                <Cell>{item.baz}</Cell>
              </Row>}
          </TableBody>
        </Table>
      </Virtualizer>;
  }
}`,...H.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    a11y: {
      // Link color has insufficient contrast to striped background
      test: 'todo'
    }
  },
  args: {
    striped: true
  },
  render: args => <Table {...args}>
      <TableHeader>
        <Column>Derp</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <Link href='#'>Link</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Link href='#'>Link</Link>
          </Cell>
        </Row>
      </TableBody>
    </Table>
}`,..._.parameters?.docs?.source}}};const Ue=["Primary","Striped","Virtualized","VirtualizedStriped","StripedWithLink"];export{W as Primary,R as Striped,_ as StripedWithLink,S as Virtualized,H as VirtualizedStriped,Ue as __namedExportsOrder,qe as default};
