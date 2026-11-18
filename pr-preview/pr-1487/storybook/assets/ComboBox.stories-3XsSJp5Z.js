import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,t as i}from"./clsx-Cb5F7C4j.js";import{d as a,u as o}from"./Collection-BTHDL66r.js";import{i as s,s as c}from"./ListBox-ByJg36mE.js";import{n as l,t as u}from"./ComboBox-j-NgxURn.js";import{i as ee,r as d}from"./Button-Cttizpj4.js";import{n as te,t as ne}from"./useLocalizedStringFormatter-SyqSJkJO.js";import{a as f,n as re,o as ie,t as p}from"./ListBoxItem-BaPwPZ2c.js";import{i as ae,n as oe,r as se,t as ce}from"./ListBoxHeader-CEqmofr_.js";import{d as m,n as h,o as g,u as _}from"./iframe-8PoB5PYn.js";function le(e,t){let{cursor:n,getKey:r}=e;return{setSelectedKeys(e){t(t=>({...t,selectedKeys:e}))},addKeysToSelection(e){t(t=>t.selectedKeys===`all`?t:e===`all`?{...t,selectedKeys:`all`}:{...t,selectedKeys:new Set([...t.selectedKeys,...e])})},removeKeysFromSelection(e){t(t=>{if(e===`all`)return{...t,selectedKeys:new Set};let n=t.selectedKeys===`all`?new Set(t.items.map(r)):new Set(t.selectedKeys);for(let t of e)n.delete(t);return{...t,selectedKeys:n}})},setFilterText(e){t(t=>({...t,filterText:e}))},insert(e,...n){t(t=>v(t,e,...n))},insertBefore(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1){if(t.items.length===0)i=0;else return t}return v(t,i,...n)})},insertAfter(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1){if(t.items.length===0)i=0;else return t}return v(t,i+1,...n)})},prepend(...e){t(t=>v(t,0,...e))},append(...e){t(t=>v(t,t.items.length,...e))},remove(...e){t(t=>{let i=new Set(e),a=t.items.filter(e=>!i.has(r(e))),o=`all`;if(t.selectedKeys!==`all`){o=new Set(t.selectedKeys);for(let t of e)o.delete(t)}return n==null&&a.length===0&&(o=new Set),{...t,items:a,selectedKeys:o}})},removeSelectedItems(){t(e=>{if(e.selectedKeys===`all`)return{...e,items:[],selectedKeys:new Set};let t=e.selectedKeys,n=e.items.filter(e=>!t.has(r(e)));return{...e,items:n,selectedKeys:new Set}})},move(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a=t.items.slice(),[o]=a.splice(i,1);return a.splice(n,0,o),{...t,items:a}})},moveBefore(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:y(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i)})},moveAfter(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:y(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i+1)})},update(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a;return a=typeof n==`function`?n(t.items[i]):n,{...t,items:[...t.items.slice(0,i),a,...t.items.slice(i+1)]}})}}}function v(e,t,...n){return{...e,items:[...e.items.slice(0,t),...n,...e.items.slice(t)]}}function y(e,t,n){n-=t.filter(e=>e<n).length;let r=t.map(e=>({from:e,to:n++}));for(let e=0;e<r.length;e++){let t=r[e].from;for(let n=e;n<r.length;n++)r[n].from>t&&r[n].from--}for(let e=0;e<r.length;e++){let t=r[e];for(let n=r.length-1;n>e;n--){let e=r[n];e.from<t.to?t.to++:e.from++}}let i=e.items.slice();for(let e of r){let[t]=i.splice(e.from,1);i.splice(e.to,0,t)}return{...e,items:i}}function b(){return(b=e((()=>{n()})))()}function ue(e,t){let n;switch(e.state){case`idle`:case`error`:switch(t.type){case`loading`:case`loadingMore`:case`sorting`:case`filtering`:return{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:t.abortController};case`update`:return{...e,...t.updater?.(e)};case`success`:case`error`:return e;default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}case`loading`:case`sorting`:case`filtering`:switch(t.type){case`success`:return t.abortController===e.abortController?(n=t.selectedKeys??e.selectedKeys,{...e,filterText:t.filterText??e.filterText,state:`idle`,items:[...t.items??[]],selectedKeys:n===`all`?`all`:new Set(n),sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:void 0,cursor:t.cursor}):e;case`error`:return t.abortController===e.abortController?{...e,state:`error`,error:t.error,abortController:void 0}:e;case`loading`:case`loadingMore`:case`sorting`:case`filtering`:return e.abortController?.abort(`aborting current load and starting new one`),{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,abortController:t.abortController};case`update`:return{...e,...t.updater?.(e)};default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}case`loadingMore`:switch(t.type){case`success`:return n=e.selectedKeys===`all`||t.selectedKeys===`all`?`all`:new Set([...e.selectedKeys,...t.selectedKeys??[]]),{...e,state:`idle`,items:[...e.items,...t.items??[]],selectedKeys:n,sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:void 0,cursor:t.cursor};case`error`:return t.abortController===e.abortController?{...e,state:`error`,error:t.error}:e;case`loading`:case`sorting`:case`filtering`:return e.abortController?.abort(),{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,abortController:t.abortController};case`loadingMore`:return t.abortController?.abort(),e;case`update`:return{...e,...t.updater?.(e)};default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}default:throw Error(`Invalid state "${e.state}"`)}}function x(e){let{load:t,sort:n,initialSelectedKeys:r,initialSortDescriptor:i,getKey:a=e=>e.id||e.key,initialFilterText:o=``}=e,[s,c]=(0,S.useReducer)(ue,{state:`idle`,error:void 0,items:[],selectedKeys:r===`all`?`all`:new Set(r),sortDescriptor:i,filterText:o}),l=async(e,n)=>{let r=new AbortController;try{c({...e,abortController:r});let i=e.filterText??s.filterText,a=await n({items:s.items.slice(),selectedKeys:s.selectedKeys,sortDescriptor:e.sortDescriptor??s.sortDescriptor,signal:r.signal,cursor:e.type===`loadingMore`?s.cursor:void 0,filterText:i,loadingState:s.state}),o=a.filterText??i;c({type:`success`,...a,abortController:r}),o&&o!==i&&!r.signal.aborted&&l({type:`filtering`,filterText:o},t)}catch(e){c({type:`error`,error:e,abortController:r})}},u=(0,S.useRef)(!1);return(0,S.useEffect)(()=>{u.current||=(l({type:`loading`},t),!0)},[]),{items:s.items,selectedKeys:s.selectedKeys,sortDescriptor:s.sortDescriptor,isLoading:s.state===`loading`||s.state===`loadingMore`||s.state===`sorting`||s.state===`filtering`,loadingState:s.state,error:s.error,filterText:s.filterText,getItem(e){return s.items.find(t=>a(t)===e)},reload(){l({type:`loading`},t)},loadMore(){s.state!==`loading`&&s.state!==`loadingMore`&&s.state!==`filtering`&&s.cursor!=null&&l({type:`loadingMore`},t)},sort(e){l({type:`sorting`,sortDescriptor:e},n||t)},...le({...e,getKey:a,cursor:s.cursor},e=>{c({type:`update`,updater:e})}),setFilterText(e){l({type:`filtering`,filterText:e},t)}}}var S;function C(){return(C=e((()=>{b(),S=n()})))()}var w,T,E;function D(){return(D=e((()=>{w={"loading...":`Loading...`},T={"loading...":`Laddar...`},E={en:w,sv:T}})))()}var O,k;function A(){return(A=e((()=>{n(),r(),c(),ee(),ne(),D(),ie(),O=h(),k=({className:e,children:t,isLoading:n,...r})=>{let a=te(E);return(0,O.jsx)(s,{className:i(f.listBoxLoadMoreItem,e),isLoading:n,...r,children:t||(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{small:!0}),(0,O.jsx)(`span`,{"aria-hidden":!0,children:a.format(`loading...`)})]})})},k.__docgenInfo={description:``,methods:[],displayName:`ListBoxLoadMoreItem`}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{g(),j=t(n(),1),C(),a(),l(),oe(),re(),A(),ae(),M=h(),N={component:u,title:`Components/ComboBox`,tags:[`autodocs`],args:{children:e=>(0,M.jsx)(p,{children:e.name}),className:`test`,description:`Description `,errorMessage:`Fel!`,errorPosition:`top`,items:_,label:`Välj en frukt `,placeholder:`Välj eller sök frukt`,size:`large`}},P={},F={args:{isInvalid:!0}},I={args:{size:`medium`,isInvalid:!0}},L={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},R={args:{isReadOnly:!0,defaultSelectedKey:_[0].id}},z={args:{className:`test`,items:m,children:e=>(0,M.jsxs)(se,{id:e.name,children:[(0,M.jsx)(ce,{children:e.name}),(0,M.jsx)(o,{items:e.children,children:e=>(0,M.jsx)(p,{id:e.id,children:e.name})})]})}},B={args:{selectionMode:`multiple`}},V={args:{...B.args,description:`Ananas och Kiwi är förvalda`,defaultValue:[`ananas`,`kiwi`]}},H={args:{...B.args,description:`Ananas och Kiwi är förvalda, skrivskyddad`,defaultValue:[`ananas`,`kiwi`],isReadOnly:!0}},U={args:{...B.args,description:`Alla alternativ är valda`,defaultValue:_.map(({id:e})=>e)}},W={args:{selectionMode:`multiple`,items:m,children:z.args?.children}},G={tags:[`!autodocs`,`!snapshot`],args:{...z.args,listBoxProps:{virtualized:!1},children:z.args?.children}},K={args:{label:`Star Wars Character Lookup`,placeholder:`Välj eller sök karaktär`,description:`Anropar ett externt API`,allowsEmptyCollection:!0},render:e=>{let t=x({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,M.jsxs)(u,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,M.jsx)(o,{items:t.items,children:e=>(0,M.jsx)(p,{id:e.name?.toString(),children:e.name})}),t.isLoading&&(0,M.jsx)(k,{isLoading:t.isLoading})]})}},q={args:{...K.args},render:e=>{let t=x({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,M.jsxs)(u,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,M.jsx)(o,{items:t.items,children:e=>(0,M.jsx)(p,{id:e.name?.toString(),children:e.name})}),(0,M.jsx)(k,{isLoading:t.loadingState===`loadingMore`,onLoadMore:t.loadMore})]})}},J={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Y={tags:[`!dev`,`!autodocs`],render:e=>{let[t,n]=j.useState(25),r=[...Array(t).keys()].map(e=>({name:e.toString(),id:e}));return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`label`,{children:[`Adjust load`,(0,M.jsx)(`input`,{type:`number`,step:25,value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,M.jsx)(u,{...e,children:r.map(({name:e,id:t})=>(0,M.jsx)(p,{children:e},t))})]})}},X={args:{"aria-label":`test`,isRequired:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],decorators:e=>(0,M.jsxs)(`form`,{children:[(0,M.jsx)(e,{}),(0,M.jsx)(`button`,{type:`submit`,children:`Submit`})]})},Z={tags:[`!dev`,`!autodocs`,`!snapshot`],args:{"aria-label":`test`,selectionMode:`multiple`,isRequired:!0,defaultValue:[`ananas`,`kiwi`]},decorators:e=>(0,M.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,M.jsx)(e,{}),(0,M.jsx)(`button`,{type:`submit`,children:`Submit`})]})},Q=[`Primary`,`Invalid`,`MediumSizeInvalid`,`Disabled`,`ReadOnly`,`Sectioned`,`Multiple`,`MultipleDefaultValue`,`MultipleReadOnly`,`MultipleAllSelected`,`MultipleWithSections`,`NotVirtualized`,`AsynchronousLoadingWithEmptyMessage`,`InfiniteScroll`,`WithHelpPopover`,`PerformanceTest`,`Required`,`MultipleRequired`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isInvalid: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultSelectedKey: options[0].id
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'test',
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Multiple.args,
    description: 'Ananas och Kiwi är förvalda',
    defaultValue: ['ananas', 'kiwi']
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Multiple.args,
    description: 'Ananas och Kiwi är förvalda, skrivskyddad',
    defaultValue: ['ananas', 'kiwi'],
    isReadOnly: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Multiple.args,
    description: 'Alla alternativ är valda',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    items: optionsWithSections,
    children: Sectioned.args?.children
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!snapshot'],
  args: {
    ...Sectioned.args,
    listBoxProps: {
      virtualized: false
    },
    children: Sectioned.args?.children
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Star Wars Character Lookup',
    placeholder: 'Välj eller sök karaktär',
    description: 'Anropar ett externt API',
    allowsEmptyCollection: true
  },
  render: args => {
    const list = useAsyncList<Item>({
      async load({
        signal,
        cursor,
        filterText
      }) {
        if (cursor) {
          cursor = cursor.replace(/^http:\\/\\//i, 'https://');
        }
        const res = await fetch(cursor || \`https://swapi.py4e.com/api/people/?search=\${filterText}\`, {
          signal
        });
        const {
          results,
          next
        } = await res.json();
        return {
          items: results,
          cursor: next
        };
      }
    });
    return <ComboBox {...args} inputValue={list.filterText} onInputChange={list.setFilterText}>
        <Collection items={list.items}>
          {item => <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>}
        </Collection>
        {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
      </ComboBox>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...AsynchronousLoadingWithEmptyMessage.args
  },
  render: args => {
    const list = useAsyncList<Item>({
      async load({
        signal,
        cursor,
        filterText
      }) {
        if (cursor) {
          cursor = cursor.replace(/^http:\\/\\//i, 'https://');
        }
        const res = await fetch(cursor || \`https://swapi.py4e.com/api/people/?search=\${filterText}\`, {
          signal
        });
        const {
          results,
          next
        } = await res.json();
        return {
          items: results,
          cursor: next
        };
      }
    });
    return <ComboBox {...args} inputValue={list.filterText} onInputChange={list.setFilterText}>
        <Collection items={list.items}>
          {item => <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>}
        </Collection>
        <ListBoxLoadMoreItem isLoading={list.loadingState === 'loadingMore'} onLoadMore={list.loadMore} />
      </ComboBox>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: args => {
    const [numberOfItems, setNumberOfItems] = React.useState(25);
    const items = [...Array(numberOfItems).keys()].map(n => ({
      name: n.toString(),
      id: n
    }));
    return <>
        <label>
          Adjust load
          <input type='number' step={25} value={numberOfItems} onChange={e => setNumberOfItems(parseInt(e.target.value))} />
        </label>
        <ComboBox {...args}>
          {items.map(({
          name,
          id
        }) => <ListBoxItem key={id}>{name}</ListBoxItem>)}
        </ComboBox>
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'test',
    isRequired: true
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  decorators: Component => <form>
      <Component />
      <button type='submit'>Submit</button>
    </form>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    'aria-label': 'test',
    selectionMode: 'multiple',
    isRequired: true,
    defaultValue: ['ananas', 'kiwi']
  },
  decorators: Component => <form onSubmit={e => e.preventDefault()}>
      <Component />
      <button type='submit'>Submit</button>
    </form>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as AsynchronousLoadingWithEmptyMessage,L as Disabled,q as InfiniteScroll,F as Invalid,I as MediumSizeInvalid,B as Multiple,U as MultipleAllSelected,V as MultipleDefaultValue,H as MultipleReadOnly,Z as MultipleRequired,W as MultipleWithSections,G as NotVirtualized,Y as PerformanceTest,P as Primary,R as ReadOnly,X as Required,z as Sectioned,J as WithHelpPopover,Q as __namedExportsOrder,N as default};