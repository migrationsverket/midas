import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{O as n}from"./useLoadMoreSentinel-ck3hGlF4.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./Table-km02Defn.js";import{n as f}from"./iframe-7nvLZrFE.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./Virtualizer-c5ZV1SmS.js";import{n as ee,t as te}from"./Button-DdX8yOBP.js";import{n as ne,t as C}from"./Link-Clk6FIUG.js";import{n as w,t as T}from"./TextField-BqmWb80U.js";function E(e){return e!=null&&(!isNaN(e)||String(e).match(/^(\d+)(?=%$)/)!==null)}function D(e){if(!e||typeof e==`number`)return 1;let t=e.match(/^(.+)(?=fr$)/);return t?parseFloat(t[0]):1}function O(e,t){if(typeof e==`string`){let n=e.match(/^(\d+)(?=%$)/);if(!n)throw Error(`Only percentages or numbers are supported for static column widths`);return t*(parseFloat(n[0])/100)}return e}function k(e,t){return e==null?2**53-1:O(e,t)}function A(e,t){return e==null?0:O(e,t)}function j(e,t,n,r,i){let a=e,o=Math.floor(e),s=e-o>0;e=o;let c=!1,l=t.map((t,a)=>{let o=n.get(t.key)==null?t.width??t.defaultWidth??r?.(a)??`1fr`:n.get(t.key)??`1fr`,s=!1,l=0,u=0,d=0;E(o)?(l=O(o,e),s=!0):(u=D(o),u<=0&&(s=!0));let f=A(t.minWidth??i?.(a)??0,e),p=k(t.maxWidth,e),m=Math.max(f,Math.min(l,p));return s?d=m:l>m&&(s=!0,d=m),s||(c=!0),{frozen:s,baseSize:l,hypotheticalMainSize:m,min:f,max:p,flex:u,targetMainSize:d,violation:0}});for(;c;){let t=0,n=0;l.forEach(e=>{e.frozen?t+=e.targetMainSize:(t+=e.baseSize,n+=e.flex)});let r=e-t;r>0&&l.forEach(e=>{if(!e.frozen){let t=e.flex/n;e.targetMainSize=e.baseSize+t*r}});let i=0;l.forEach(e=>{if(e.violation=0,!e.frozen){let{min:t,max:n,targetMainSize:r}=e;e.targetMainSize=Math.max(t,Math.min(r,n)),e.violation=e.targetMainSize-r,i+=e.violation}}),c=!1,l.forEach(e=>{i===0||Math.sign(i)===Math.sign(e.violation)?e.frozen=!0:e.frozen||(c=!0)})}let u=M(l);if(s&&u.length>0){let e=a.toString().split(`.`)[1],t=u[u.length-1].toString();u[u.length-1]=Number(t+`.`+e)}return u}function M(e){let t=0,n=0,r=[];return e.forEach(function(e){let i=e.targetMainSize,a=Math.round(i+t)-n;t+=i,n+=a,r.push(a)}),r}var N;function P(){return(P=e((()=>{N=class{constructor(e){this.columnWidths=new Map,this.columnMinWidths=new Map,this.columnMaxWidths=new Map,this.getDefaultWidth=e?.getDefaultWidth??(()=>`1fr`),this.getDefaultMinWidth=e?.getDefaultMinWidth??(()=>75)}splitColumnsIntoControlledAndUncontrolled(e){return e.reduce((e,t)=>(t.props.width==null?e[1].set(t.key,t):e[0].set(t.key,t),e),[new Map,new Map])}recombineColumns(e,t,n,r){return new Map(e.map(e=>n.has(e.key)?[e.key,t.get(e.key)]:[e.key,r.get(e.key).props.width]))}getInitialUncontrolledWidths(e){return new Map(Array.from(e).map(([e,t])=>[e,t.props.defaultWidth??this.getDefaultWidth?.(t)??`1fr`]))}getColumnWidth(e){return this.columnWidths.get(e)??0}getColumnMinWidth(e){return this.columnMinWidths.get(e)??0}getColumnMaxWidth(e){return this.columnMaxWidths.get(e)??0}resizeColumnWidth(e,t,n,r){let i=this.columnWidths,a=!0,o=new Map;return r=Math.max(this.getColumnMinWidth(n),Math.min(this.getColumnMaxWidth(n),Math.floor(r))),e.columns.forEach(e=>{e.key===n?(o.set(e.key,r),a=!1):a?o.set(e.key,i.get(e.key)??0):o.set(e.key,e.props.width??t.get(e.key))}),o}buildColumnWidths(e,t,n){return this.columnWidths=new Map,this.columnMinWidths=new Map,this.columnMaxWidths=new Map,j(e,t.columns.map(e=>({...e.props,key:e.key})),n,e=>this.getDefaultWidth(t.columns[e]),e=>this.getDefaultMinWidth(t.columns[e])).forEach((n,r)=>{let i=t.columns[r].key,a=t.columns[r];this.columnWidths.set(i,n),this.columnMinWidths.set(i,A(a.props.minWidth??this.getDefaultMinWidth(a),e)),this.columnMaxWidths.set(i,k(a.props.maxWidth,e))}),this.columnWidths}}})))()}var F,I;function L(){return(L=e((()=>{v(),h(),S(),m(),P(),F=48,I=class extends y{constructor(e){super(e),this.lastCollection=null,this.columnWidths=new Map,this.lastPersistedKeys=null,this.persistedIndices=new Map,this.stickyColumnIndices=[]}get collection(){return this.virtualizer.collection}get rowHeight(){return super.rowHeight}get estimatedRowHeight(){return super.estimatedRowHeight}get headingHeight(){return super.headingHeight}get estimatedHeadingHeight(){return super.estimatedHeadingHeight}get loaderHeight(){return super.loaderHeight}columnsChanged(e,t){return!t||e.columns!==t.columns&&e.columns.length!==t.columns.length||e.columns.some((e,n)=>e.key!==t.columns[n].key||e.props.width!==t.columns[n].props.width||e.props.minWidth!==t.columns[n].props.minWidth||e.props.maxWidth!==t.columns[n].props.maxWidth)}shouldInvalidateLayoutOptions(e,t){return e.columnWidths!==t.columnWidths||super.shouldInvalidateLayoutOptions(e,t)}update(e){let t=this.virtualizer.collection;if(e.layoutOptions?.columnWidths){for(let[t,n]of e.layoutOptions.columnWidths)if(this.columnWidths.get(t)!==n){this.columnWidths=e.layoutOptions.columnWidths,e.sizeChanged=!0;break}}else if(e.sizeChanged||this.columnsChanged(t,this.lastCollection)){let n=new N({});this.columnWidths=n.buildColumnWidths(this.virtualizer.size.width-this.padding*2,t,new Map),e.sizeChanged=!0}super.update(e)}buildCollection(){this.stickyColumnIndices=[];let e=this.virtualizer.collection;for(let t of e.columns)(this.isStickyColumn(t)||e.rowHeaderColumnKeys.has(t.key))&&this.stickyColumnIndices.push(t.index);let t=[],n=0,r=0;if(e.head){for(let i of e)switch(i.type){case`tableheader`:{let e=this.buildTableHeader();n=e.layoutInfo.rect.maxY+this.gap,r=Math.max(r,e.layoutInfo.rect.width),this.layoutNodes.set(e.layoutInfo.key,e),t.push(e);break}case`tablebody`:case`tablefooter`:{let e=this.buildRowGroup(n,i);n=e.layoutInfo.rect.maxY+this.gap,r=Math.max(r,e.layoutInfo.rect.width),this.layoutNodes.set(e.layoutInfo.key,e),t.push(e);break}}n>0&&(n-=this.gap);for(let e of t)e.layoutInfo.rect.width=r}else{let e=this.buildTableHeader();this.layoutNodes.set(e.layoutInfo.key,e);let i=this.buildBody(e.layoutInfo.rect.maxY+this.gap);i.layoutInfo.rect.width=Math.max(e.layoutInfo.rect.width,i.layoutInfo.rect.width),n=i.layoutInfo.rect.maxY,r=i.layoutInfo.rect.width,t=[e,i]}return this.lastPersistedKeys=null,this.contentSize=new b(r+this.padding*2,n+this.padding),t}buildTableHeader(){let e=this.virtualizer.collection,t=new g(this.padding,this.padding,0,0),n=new p(`header`,e.head?.key??`header`,t);n.isSticky=!0,n.zIndex=1;let r=this.padding,i=0,a=[];for(let t of e.headerRows){let e=this.buildChild(t,this.padding,r,n.key);e.layoutInfo.parentKey=n.key,r=e.layoutInfo.rect.maxY,i=Math.max(i,e.layoutInfo.rect.width),e.index=a.length,a.push(e)}return t.width=i,t.height=r-this.padding,{layoutInfo:n,children:a,validRect:n.rect,node:e.head}}buildHeaderRow(e,t,r){let i=new g(t,r,0,0),a=new p(`headerrow`,e.key,i),o=0,s=[];for(let i of n(e,this.virtualizer.collection)){let e=this.buildChild(i,t,r,a.key);e.layoutInfo.parentKey=a.key,t=e.layoutInfo.rect.maxX,o=Math.max(o,e.layoutInfo.rect.height),e.index=s.length,s.push(e)}for(let[e,t]of s.entries())t.layoutInfo.zIndex=s.length-e+1;return this.setChildHeights(s,o),i.height=o,i.width=t-i.x,{layoutInfo:a,children:s,validRect:i,node:e}}setChildHeights(e,t){for(let n of e)n.layoutInfo.rect.height!==t&&(n.layoutInfo=n.layoutInfo.copy(),n.layoutInfo.rect.height=t)}getRenderedColumnWidth(e){let t=this.virtualizer.collection,n=e.colSpan??1,r=e.colIndex??e.index,i=0;for(let e=r;e<r+n;e++){let n=t.columns[e];n?.key!=null&&(i+=this.columnWidths.get(n.key)??0)}return i}getEstimatedHeight(e,t,n,r){let i=!1;if(n==null){let a=this.layoutNodes.get(e.key);a?(n=a.layoutInfo.rect.height,i=e!==a.node||t!==a.layoutInfo.rect.width||a.layoutInfo.estimatedSize):(n=r??F,i=!0)}return{height:n,isEstimated:i}}getEstimatedRowHeight(){return this.rowHeight??this.estimatedRowHeight??F}buildColumn(e,t,n){let r=this.getRenderedColumnWidth(e),{height:i,isEstimated:a}=this.getEstimatedHeight(e,r,this.headingHeight??this.rowHeight,this.estimatedHeadingHeight??this.estimatedRowHeight),o=new g(t,n,r,i),s=new p(e.type,e.key,o);return s.isSticky=this.isStickyColumn(e),s.zIndex=s.isSticky?2:1,s.estimatedSize=a,{layoutInfo:s,children:[],validRect:s.rect,node:e}}isStickyColumn(e){return!1}buildBody(e){let t=this.virtualizer.collection;return this.buildRowGroup(e,t.body)}buildRowGroup(e,t){let r=this.virtualizer.collection,i=new g(this.padding,e,0,0),a=new p(`rowgroup`,t.key,i),o=e,s=0,c=[],l=this.getEstimatedRowHeight()+this.gap,u=n(t,r);for(let t of u){if(e+l<this.requestedRect.y&&!this.isValid(t,e)||e>this.requestedRect.maxY&&t.type!==`loader`){e+=l;continue}let n=this.buildChild(t,this.padding,e,a.key);n.layoutInfo.parentKey=a.key,n.index=c.length,e=n.layoutInfo.rect.maxY+this.gap,s=Math.max(s,n.layoutInfo.rect.width),c.push(n)}return r?.size===0?e=this.virtualizer.size.height:e-=this.gap,i.width=s,i.height=e-o,{layoutInfo:a,children:c,validRect:a.rect.intersection(this.requestedRect),node:t}}buildLoader(e,t,n){let r=super.buildLoader(e,t,n),i=this.virtualizer.collection;return r.layoutInfo.rect.width=this.layoutNodes.get(i.head?.key??`header`).layoutInfo.rect.width,r.validRect=r.layoutInfo.rect.intersection(this.requestedRect),r}buildNode(e,t,n){switch(e.type){case`headerrow`:return this.buildHeaderRow(e,t,n);case`item`:return this.buildRow(e,t,n);case`column`:case`placeholder`:return this.buildColumn(e,t,n);case`cell`:return this.buildCell(e,t,n);case`loader`:return this.buildLoader(e,t,n);default:throw Error(`Unknown node type `+e.type)}}buildRow(e,t,r){let i=this.virtualizer.collection,a=new g(t,r,0,0),o=new p(`row`,e.key,a),s=[],c=0;for(let a of n(e,i))if(a.type===`cell`){if(t>this.requestedRect.maxX){let e=this.layoutNodes.get(a.key);if(e)e.layoutInfo.rect.x=t,t+=e.layoutInfo.rect.width;else break}else{let e=this.buildChild(a,t,r,o.key);t=e.layoutInfo.rect.maxX,c=Math.max(c,e.layoutInfo.rect.height),e.index=s.length,s.push(e)}}return this.setChildHeights(s,c),a.width=this.layoutNodes.get(i.head?.key??`header`).layoutInfo.rect.width,a.height=c,{layoutInfo:o,children:s,validRect:a.intersection(this.requestedRect),node:e}}buildCell(e,t,n){let r=this.getRenderedColumnWidth(e),{height:i,isEstimated:a}=this.getEstimatedHeight(e,r,this.rowHeight,this.estimatedRowHeight),o=new g(t,n,r,i),s=new p(e.type,e.key,o);return s.isSticky=this.isStickyColumn(e),s.zIndex=s.isSticky?2:1,s.estimatedSize=a,{layoutInfo:s,children:[],validRect:o,node:e}}getVisibleLayoutInfos(e){if(e.height>1){let t=this.getEstimatedRowHeight();e.y=Math.floor(e.y/t)*t,e.height=Math.ceil(e.height/t)*t}this.layoutIfNeeded(e);let t=[];this.buildPersistedIndices();for(let n of this.rootNodes)t.push(n.layoutInfo),this.addVisibleLayoutInfos(t,n,e);return t}addVisibleLayoutInfos(e,t,n){if(t.children&&t.children.length!==0)switch(t.layoutInfo.type){case`header`:for(let r of t.children)e.push(r.layoutInfo),this.addVisibleLayoutInfos(e,r,n);break;case`rowgroup`:{let r=this.binarySearch(t.children,n.topLeft,`y`),i=this.binarySearch(t.children,n.bottomRight,`y`),a=this.persistedIndices.get(t.layoutInfo.key),o=0;for(;a&&o<a.length&&a[o]<r;){let r=a[o];r<t.children.length&&(e.push(t.children[r].layoutInfo),this.addVisibleLayoutInfos(e,t.children[r],n)),o++}for(let s=r;s<=i;s++){for(;a&&o<a.length&&a[o]<s;)o++;e.push(t.children[s].layoutInfo),this.addVisibleLayoutInfos(e,t.children[s],n)}for(;a&&o<a.length;){let r=a[o++];r<t.children.length&&(e.push(t.children[r].layoutInfo),this.addVisibleLayoutInfos(e,t.children[r],n))}let s=t.children.at(-1);s?.layoutInfo.type===`loader`&&e.push(s.layoutInfo);break}case`headerrow`:case`row`:{let r=this.binarySearch(t.children,n.topLeft,`x`),i=this.binarySearch(t.children,n.topRight,`x`),a=0,o=this.persistedIndices.get(t.layoutInfo.key)||this.stickyColumnIndices;for(;a<o.length&&o[a]<r;){let n=o[a];n<t.children.length&&e.push(t.children[n].layoutInfo),a++}for(let n=r;n<=i;n++){for(;a<o.length&&o[a]<n;)a++;e.push(t.children[n].layoutInfo)}for(;a<o.length;){let n=o[a++];n<t.children.length&&e.push(t.children[n].layoutInfo)}break}default:throw Error(`Unknown node type `+t.layoutInfo.type)}}binarySearch(e,t,n){let r=0,i=e.length-1;for(;r<=i;){let a=r+i>>1,o=e[a];if(n===`x`&&o.layoutInfo.rect.maxX<=t.x||n===`y`&&o.layoutInfo.rect.maxY<=t.y)r=a+1;else if(n===`x`&&o.layoutInfo.rect.x>t.x||n===`y`&&o.layoutInfo.rect.y>t.y)i=a-1;else return a}return Math.max(0,Math.min(e.length-1,r))}buildPersistedIndices(){if(this.virtualizer.persistedKeys!==this.lastPersistedKeys){this.lastPersistedKeys=this.virtualizer.persistedKeys,this.persistedIndices.clear();for(let e of this.virtualizer.persistedKeys){let t=this.layoutNodes.get(e)?.layoutInfo;for(;t&&t.parentKey;){let e=this.virtualizer.collection.getItem(t.key),n=this.persistedIndices.get(t.parentKey);n||(n=e?.type===`cell`||e?.type===`column`?[...this.stickyColumnIndices]:[],this.persistedIndices.set(t.parentKey,n));let r=this.layoutNodes.get(t.key)?.index;r!=null&&!n.includes(r)&&n.push(r),t=this.layoutNodes.get(t.parentKey)?.layoutInfo}}for(let e of this.persistedIndices.values())e.sort((e,t)=>e-t)}}getDropTargetFromPoint(e,t,n){e+=this.virtualizer.visibleRect.x,t+=this.virtualizer.visibleRect.y;let r=new g(e,Math.max(0,t-this.gap),1,Math.max(1,this.gap*2)),i=this.getVisibleLayoutInfos(r),a=null,o=1/0;for(let e of i){if(e.type!==`row`||!e.rect.intersects(r))continue;let n=Math.abs(e.rect.y-t),i=Math.abs(e.rect.maxY-t),s=Math.min(n,i);s<o&&(o=s,a=e.key)}if(a==null||this.virtualizer.collection.size===0)return{type:`root`};let s=this.getLayoutInfo(a);if(!s)return null;let c=s.rect,l={type:`item`,key:s.key,dropPosition:`on`};return n(l)?t<=c.y+10&&n({...l,dropPosition:`before`})?l.dropPosition=`before`:t>=c.maxY-10&&n({...l,dropPosition:`after`})&&(l.dropPosition=`after`):t<=c.y+c.height/2&&n({...l,dropPosition:`before`})?l.dropPosition=`before`:n({...l,dropPosition:`after`})&&(l.dropPosition=`after`),l}getDropTargetLayoutInfo(e){let t=super.getDropTargetLayoutInfo(e);return t.parentKey=this.virtualizer.collection.getItem(e.key)?.parentKey??null,t}}})))()}var R,z;function B(){return(B=e((()=>{o(),L(),R=t(),z=class extends I{useLayoutOptions(){let e=(0,R.useContext)(i);return(0,R.useMemo)(()=>({columnWidths:e?.columnWidths}),[e?.columnWidths])}}})))()}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{B(),_(),V=t(),u(),ne(),ee(),w(),H=f(),U=[{name:`Name`,id:`name`,isRowHeader:!0},{name:`Type`,id:`type`},{name:`Date Modified`,id:`date`}],W=[{id:1,name:`Games`,date:`6/7/2020`,type:`File folder`},{id:2,name:`Program Files`,date:`4/7/2021`,type:`File folder`},{id:3,name:`bootmgr`,date:`11/20/2010`,type:`System file`},{id:4,name:`log.txt`,date:`1/18/2016`,type:`Text Document`}],G={component:a,subcomponents:{TableHeader:c,Column:s,TableBody:r,Row:l,Cell:d},title:`Components/Table`,tags:[`autodocs`],args:{"aria-label":`Files`,selectionMode:`multiple`},argTypes:{size:{control:!1},selectionMode:{options:[`none`,`single`,`multiple`],control:{type:`radio`},defaultValue:`multiple`}},render:e=>(0,H.jsxs)(a,{...e,children:[(0,H.jsx)(c,{columns:U,children:e=>(0,H.jsx)(s,{isRowHeader:e.isRowHeader,children:e.name})}),(0,H.jsx)(r,{items:W,children:e=>(0,H.jsx)(l,{columns:U,children:t=>(0,H.jsx)(d,{children:e[t.id]})})})]})},K={},q={args:{striped:!0,className:`my-class`}},J={tags:[`!test`],render:e=>{let t=[];for(let e=0;e<5e3;e++)t.push({id:e,foo:`Foo ${e}`,bar:`Bar ${e}`,baz:`Baz ${e}`});return(0,H.jsx)(x,{layout:z,layoutOptions:{rowHeight:48,headingHeight:48},children:(0,H.jsxs)(a,{...e,style:{height:300,overflow:`auto`,scrollPaddingTop:48},children:[(0,H.jsxs)(c,{children:[(0,H.jsx)(s,{isRowHeader:!0,children:`Foo`}),(0,H.jsx)(s,{children:`Bar`}),(0,H.jsx)(s,{children:`Baz`})]}),(0,H.jsx)(r,{items:t,children:e=>(0,H.jsxs)(l,{"data-even":e.id%2==0,children:[(0,H.jsx)(d,{children:e.foo}),(0,H.jsx)(d,{children:e.bar}),(0,H.jsx)(d,{children:e.baz})]})})]})})}},Y={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:`todo`}},args:{striped:!0},render:e=>(0,H.jsxs)(a,{...e,children:[(0,H.jsx)(c,{children:(0,H.jsx)(s,{children:`Derp`})}),(0,H.jsxs)(r,{children:[(0,H.jsx)(l,{children:(0,H.jsx)(d,{children:(0,H.jsx)(C,{href:`#`,children:`Link`})})}),(0,H.jsx)(l,{children:(0,H.jsx)(d,{children:(0,H.jsx)(C,{href:`#`,children:`Link`})})})]})]})},X={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,H.jsxs)(a,{...e,selectionMode:`none`,keyboardNavigationBehavior:`tab`,children:[(0,H.jsxs)(c,{children:[(0,H.jsx)(s,{isRowHeader:!0,children:`Name`}),(0,H.jsx)(s,{children:`Note`}),(0,H.jsx)(s,{children:`Actions`})]}),(0,H.jsx)(r,{items:W,children:e=>(0,H.jsxs)(l,{children:[(0,H.jsx)(d,{children:e.name}),(0,H.jsx)(d,{children:(0,H.jsx)(T,{"aria-label":`Note for ${e.name}`})}),(0,H.jsx)(d,{children:(0,H.jsx)(te,{children:`Edit`})})]})})]})},Z={render:e=>{let[t,n]=(0,V.useState)({column:`name`,direction:`ascending`}),i=[...W].sort((e,n)=>{let r=e[t.column],i=n[t.column],a=0;return typeof r==`string`&&typeof i==`string`?a=r.localeCompare(i):typeof r==`number`&&typeof i==`number`&&(a=r-i),t.direction===`descending`&&(a*=-1),a});return(0,H.jsxs)(a,{...e,sortDescriptor:t,onSortChange:n,children:[(0,H.jsx)(c,{columns:U,children:e=>(0,H.jsx)(s,{isRowHeader:e.isRowHeader,allowsSorting:!0,children:e.name})}),(0,H.jsx)(r,{items:i,children:e=>(0,H.jsx)(l,{columns:U,children:t=>(0,H.jsx)(d,{children:e[t.id]})})})]})}},Q=[`Primary`,`Striped`,`Virtualized`,`StripedWithLink`,`InteractiveCells`,`Sorting`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    className: 'my-class'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // slow test
  tags: ['!test'],
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <Table {...args} selectionMode='none' keyboardNavigationBehavior='tab'>
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Note</Column>
        <Column>Actions</Column>
      </TableHeader>
      <TableBody items={rows}>
        {item => <Row>
            <Cell>{item.name}</Cell>
            <Cell>
              <TextField aria-label={\`Note for \${item.name}\`} />
            </Cell>
            <Cell>
              <Button>Edit</Button>
            </Cell>
          </Row>}
      </TableBody>
    </Table>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: 'name',
      direction: 'ascending'
    });
    const sortedRows = [...rows].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof IRow];
      const second = b[sortDescriptor.column as keyof IRow];
      let cmp = 0;
      if (typeof first === 'string' && typeof second === 'string') {
        cmp = first.localeCompare(second);
      } else if (typeof first === 'number' && typeof second === 'number') {
        cmp = first - second;
      }
      if (sortDescriptor.direction === 'descending') {
        cmp *= -1;
      }
      return cmp;
    });
    return <Table {...args} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
        <TableHeader columns={columns}>
          {column => <Column isRowHeader={column.isRowHeader} allowsSorting>
              {column.name}
            </Column>}
        </TableHeader>
        <TableBody items={sortedRows}>
          {item => <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>}
        </TableBody>
      </Table>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{X as InteractiveCells,K as Primary,Z as Sorting,q as Striped,Y as StripedWithLink,J as Virtualized,Q as __namedExportsOrder,G as default};