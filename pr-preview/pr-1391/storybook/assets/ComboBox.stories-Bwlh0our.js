import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{d as r,u as i}from"./Collection-CTMFqMoK.js";import{n as a,t as o}from"./clsx-BvAV21YK.js";import{i as s,s as c}from"./ListBox-Cfu1Xwti.js";import{n as l,t as u}from"./ComboBox-B3oL5LIo.js";import{d,n as f,o as ee,u as te}from"./iframe-Q-YUalFT.js";import{i as p,r as m}from"./Button-29jP128I.js";import{n as h,t as ne}from"./useLocalizedStringFormatter-BWoqhJfE.js";import{a as g,n as _,o as v,t as y}from"./ListBoxItem-XfpTv7uD.js";import{i as b,n as re,r as x,t as S}from"./ListBoxHeader-DRid0lQV.js";function ie(e,t){let{cursor:n,getKey:r}=e;return{setSelectedKeys(e){t(t=>({...t,selectedKeys:e}))},addKeysToSelection(e){t(t=>t.selectedKeys===`all`?t:e===`all`?{...t,selectedKeys:`all`}:{...t,selectedKeys:new Set([...t.selectedKeys,...e])})},removeKeysFromSelection(e){t(t=>{if(e===`all`)return{...t,selectedKeys:new Set};let n=t.selectedKeys===`all`?new Set(t.items.map(r)):new Set(t.selectedKeys);for(let t of e)n.delete(t);return{...t,selectedKeys:n}})},setFilterText(e){t(t=>({...t,filterText:e}))},insert(e,...n){t(t=>C(t,e,...n))},insertBefore(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1){if(t.items.length===0)i=0;else return t}return C(t,i,...n)})},insertAfter(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1){if(t.items.length===0)i=0;else return t}return C(t,i+1,...n)})},prepend(...e){t(t=>C(t,0,...e))},append(...e){t(t=>C(t,t.items.length,...e))},remove(...e){t(t=>{let i=new Set(e),a=t.items.filter(e=>!i.has(r(e))),o=`all`;if(t.selectedKeys!==`all`){o=new Set(t.selectedKeys);for(let t of e)o.delete(t)}return n==null&&a.length===0&&(o=new Set),{...t,items:a,selectedKeys:o}})},removeSelectedItems(){t(e=>{if(e.selectedKeys===`all`)return{...e,items:[],selectedKeys:new Set};let t=e.selectedKeys,n=e.items.filter(e=>!t.has(r(e)));return{...e,items:n,selectedKeys:new Set}})},move(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a=t.items.slice(),[o]=a.splice(i,1);return a.splice(n,0,o),{...t,items:a}})},moveBefore(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:w(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i)})},moveAfter(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:w(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i+1)})},update(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a;return a=typeof n==`function`?n(t.items[i]):n,{...t,items:[...t.items.slice(0,i),a,...t.items.slice(i+1)]}})}}}function C(e,t,...n){return{...e,items:[...e.items.slice(0,t),...n,...e.items.slice(t)]}}function w(e,t,n){n-=t.filter(e=>e<n).length;let r=t.map(e=>({from:e,to:n++}));for(let e=0;e<r.length;e++){let t=r[e].from;for(let n=e;n<r.length;n++)r[n].from>t&&r[n].from--}for(let e=0;e<r.length;e++){let t=r[e];for(let n=r.length-1;n>e;n--){let e=r[n];e.from<t.to?t.to++:e.from++}}let i=e.items.slice();for(let e of r){let[t]=i.splice(e.from,1);i.splice(e.to,0,t)}return{...e,items:i}}function T(){return(T=t((()=>{n()})))()}function ae(e,t){let n;switch(e.state){case`idle`:case`error`:switch(t.type){case`loading`:case`loadingMore`:case`sorting`:case`filtering`:return{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:t.abortController};case`update`:return{...e,...t.updater?.(e)};case`success`:case`error`:return e;default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}case`loading`:case`sorting`:case`filtering`:switch(t.type){case`success`:return t.abortController===e.abortController?(n=t.selectedKeys??e.selectedKeys,{...e,filterText:t.filterText??e.filterText,state:`idle`,items:[...t.items??[]],selectedKeys:n===`all`?`all`:new Set(n),sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:void 0,cursor:t.cursor}):e;case`error`:return t.abortController===e.abortController?{...e,state:`error`,error:t.error,abortController:void 0}:e;case`loading`:case`loadingMore`:case`sorting`:case`filtering`:return e.abortController?.abort(`aborting current load and starting new one`),{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,abortController:t.abortController};case`update`:return{...e,...t.updater?.(e)};default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}case`loadingMore`:switch(t.type){case`success`:return n=e.selectedKeys===`all`||t.selectedKeys===`all`?`all`:new Set([...e.selectedKeys,...t.selectedKeys??[]]),{...e,state:`idle`,items:[...e.items,...t.items??[]],selectedKeys:n,sortDescriptor:t.sortDescriptor??e.sortDescriptor,abortController:void 0,cursor:t.cursor};case`error`:return t.abortController===e.abortController?{...e,state:`error`,error:t.error}:e;case`loading`:case`sorting`:case`filtering`:return e.abortController?.abort(),{...e,filterText:t.filterText??e.filterText,state:t.type,items:t.type===`loading`?[]:e.items,abortController:t.abortController};case`loadingMore`:return t.abortController?.abort(),e;case`update`:return{...e,...t.updater?.(e)};default:throw Error(`Invalid action "${t.type}" in state "${e.state}"`)}default:throw Error(`Invalid state "${e.state}"`)}}function E(e){let{load:t,sort:n,initialSelectedKeys:r,initialSortDescriptor:i,getKey:a=e=>e.id||e.key,initialFilterText:o=``}=e,[s,c]=(0,D.useReducer)(ae,{state:`idle`,error:void 0,items:[],selectedKeys:r===`all`?`all`:new Set(r),sortDescriptor:i,filterText:o}),l=async(e,n)=>{let r=new AbortController;try{c({...e,abortController:r});let i=e.filterText??s.filterText,a=await n({items:s.items.slice(),selectedKeys:s.selectedKeys,sortDescriptor:e.sortDescriptor??s.sortDescriptor,signal:r.signal,cursor:e.type===`loadingMore`?s.cursor:void 0,filterText:i,loadingState:s.state}),o=a.filterText??i;c({type:`success`,...a,abortController:r}),o&&o!==i&&!r.signal.aborted&&l({type:`filtering`,filterText:o},t)}catch(e){c({type:`error`,error:e,abortController:r})}},u=(0,D.useRef)(!1);return(0,D.useEffect)(()=>{u.current||=(l({type:`loading`},t),!0)},[]),{items:s.items,selectedKeys:s.selectedKeys,sortDescriptor:s.sortDescriptor,isLoading:s.state===`loading`||s.state===`loadingMore`||s.state===`sorting`||s.state===`filtering`,loadingState:s.state,error:s.error,filterText:s.filterText,getItem(e){return s.items.find(t=>a(t)===e)},reload(){l({type:`loading`},t)},loadMore(){s.state!==`loading`&&s.state!==`loadingMore`&&s.state!==`filtering`&&s.cursor!=null&&l({type:`loadingMore`},t)},sort(e){l({type:`sorting`,sortDescriptor:e},n||t)},...ie({...e,getKey:a,cursor:s.cursor},e=>{c({type:`update`,updater:e})}),setFilterText(e){l({type:`filtering`,filterText:e},t)}}}var D;function O(){return(O=t((()=>{T(),D=n()})))()}var k,A,j;function M(){return(M=t((()=>{k={"loading...":`Loading...`},A={"loading...":`Laddar...`},j={en:k,sv:A}})))()}var N,P;function F(){return(F=t((()=>{n(),a(),c(),p(),ne(),M(),v(),N=f(),P=({className:e,children:t,isLoading:n,...r})=>{let i=h(j);return(0,N.jsx)(s,{className:o(g.listBoxLoadMoreItem,e),isLoading:n,...r,children:t||(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m,{small:!0}),(0,N.jsx)(`span`,{"aria-hidden":!0,children:i.format(`loading...`)})]})})},P.__docgenInfo={description:``,methods:[],displayName:`ListBoxLoadMoreItem`}})))()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{ee(),I=e(n(),1),O(),r(),l(),re(),_(),F(),b(),L=f(),R={component:u,title:`Components/ComboBox`,tags:[`autodocs`],args:{label:`Etikett`,placeholder:`Placeholder`,description:`Beskrivning`,errorMessage:`Fel!`,errorPosition:`top`,size:`large`},argTypes:{placeholder:{control:`text`}},render:e=>(0,L.jsxs)(u,{...e,children:[(0,L.jsx)(y,{id:`apple`,children:`Apple`}),(0,L.jsx)(y,{id:`lemon`,children:`Lemon`})]})},z={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`},render:e=>(0,L.jsx)(u,{"data-testid":`test`,items:te,...e,children:e=>(0,L.jsx)(y,{children:e.name})})},B={args:{isInvalid:!0}},V={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}}},H={args:{size:`medium`,isInvalid:!0}},U={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},W={args:{isReadOnly:!0,defaultSelectedKey:`lemon`}},G={args:{"aria-label":`test`,isRequired:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,L.jsxs)(`form`,{children:[(0,L.jsx)(u,{...e,children:(0,L.jsx)(y,{children:`Hej`})}),(0,L.jsx)(`button`,{type:`submit`,children:`Submit`})]})},K={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`,items:d},render:e=>(0,L.jsx)(u,{...e,children:e=>(0,L.jsxs)(x,{id:e.name,children:[(0,L.jsx)(S,{children:e.name}),(0,L.jsx)(i,{items:e.children,children:e=>(0,L.jsx)(y,{id:e.id,children:e.name})})]})})},q={tags:[`!autodocs`,`!snapshot`],args:{...K.args,listBoxProps:{virtualized:!1}},render:e=>(0,L.jsx)(u,{...e,children:e=>(0,L.jsxs)(x,{id:e.name,children:[(0,L.jsx)(S,{children:e.name}),(0,L.jsx)(i,{items:e.children,children:e=>(0,L.jsx)(y,{id:e.id,children:e.name})})]})})},J={tags:[`!dev`,`!autodocs`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=I.useState(25),r=[...Array(t).keys()].map(e=>({name:e.toString(),id:e}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`label`,{children:[`Adjust load`,(0,L.jsx)(`input`,{type:`number`,step:25,value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,L.jsx)(u,{...e,children:r.map(({name:e,id:t})=>(0,L.jsx)(y,{children:e},t))})]})}},Y={args:{label:`Star Wars Character Lookup`,placeholder:`Välj eller sök karaktär`,description:`Anropar ett externt API`,allowsEmptyCollection:!0},render:e=>{let t=E({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,L.jsxs)(u,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,L.jsx)(i,{items:t.items,children:e=>(0,L.jsx)(y,{id:e.name?.toString(),children:e.name})}),t.isLoading&&(0,L.jsx)(P,{isLoading:t.isLoading})]})}},X={args:{...Y.args},render:e=>{let t=E({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,L.jsxs)(u,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,L.jsx)(i,{items:t.items,children:e=>(0,L.jsx)(y,{id:e.name?.toString(),children:e.name})}),(0,L.jsx)(P,{isLoading:t.loadingState===`loadingMore`,onLoadMore:t.loadMore})]})}},Z={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`DS1253`,`MediumSizeInvalid`,`Disabled`,`ReadOnly`,`Required`,`Sectioned`,`NotVirtualized`,`PerformanceTest`,`AsynchronousLoadingWithEmptyMessage`,`InfiniteScroll`,`WithHelpPopover`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test'
  },
  render: args => <ComboBox data-testid='test' items={options} {...args}>
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isInvalid: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultSelectedKey: 'lemon'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'test',
    isRequired: true
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <form>
      <ComboBox {...args}>
        <ListBoxItem>Hej</ListBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
    items: optionsWithSections
  },
  render: args => <ComboBox {...args}>
      {section => <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>}
    </ComboBox>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!snapshot'],
  args: {
    ...Sectioned.args,
    listBoxProps: {
      virtualized: false
    }
  },
  render: args => <ComboBox {...args}>
      {section => <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>}
    </ComboBox>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Y as AsynchronousLoadingWithEmptyMessage,V as DS1253,U as Disabled,X as InfiniteScroll,B as Invalid,H as MediumSizeInvalid,q as NotVirtualized,J as PerformanceTest,z as Primary,W as ReadOnly,G as Required,K as Sectioned,Z as WithHelpPopover,Q as __namedExportsOrder,R as default};