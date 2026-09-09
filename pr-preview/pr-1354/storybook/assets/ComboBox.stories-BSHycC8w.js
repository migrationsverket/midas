import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Hn as r,Kn as i,qn as a,t as o}from"./iframe-BrVg6ftD.js";import{jn as s,t as c}from"./exports-B5DysKi2.js";import{o as l,t as u}from"./exports-DzsnAQwZ.js";import{n as d,t as f}from"./ComboBox-C0iUN5VW.js";import{a as p,r as m,t as h}from"./ListBoxHeader-YWdmDxt2.js";import{a as g,n as _}from"./tag-3AknVr5N.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{r(),v=t(n(),1),u(),c(),d(),_(),y=o(),b={component:f,title:`Components/ComboBox`,tags:[`autodocs`],args:{children:e=>(0,y.jsx)(p,{children:e.name}),className:`test`,description:`Description `,errorMessage:`Fel!`,errorPosition:`top`,items:i,label:`Välj en frukt `,placeholder:`Välj eller sök frukt`,size:`large`}},x={},S={args:{isInvalid:!0}},C={args:{size:`medium`,isInvalid:!0}},w={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},T={args:{isReadOnly:!0,defaultSelectedKey:i[0].id}},E={args:{className:`test`,items:a,children:e=>(0,y.jsxs)(m,{id:e.name,children:[(0,y.jsx)(h,{children:e.name}),(0,y.jsx)(s,{items:e.children,children:e=>(0,y.jsx)(p,{id:e.id,children:e.name})})]})}},D={args:{selectionMode:`multiple`}},O={args:{...D.args,description:`Ananas och Kiwi är förvalda`,defaultValue:[`ananas`,`kiwi`]}},k={args:{...D.args,description:`Alla alternativ är valda`,defaultValue:i.map(({id:e})=>e)}},A={args:{selectionMode:`multiple`,items:a,children:E.args?.children}},j={tags:[`!autodocs`,`!snapshot`],args:{...E.args,listBoxProps:{virtualized:!1},children:E.args?.children}},M={args:{label:`Star Wars Character Lookup`,placeholder:`Välj eller sök karaktär`,description:`Anropar ett externt API`,allowsEmptyCollection:!0},render:e=>{let t=l({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),t.isLoading&&(0,y.jsx)(g,{isLoading:t.isLoading})]})}},N={args:{...M.args},render:e=>{let t=l({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),(0,y.jsx)(g,{isLoading:t.loadingState===`loadingMore`,onLoadMore:t.loadMore})]})}},P={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},F={tags:[`!dev`,`!autodocs`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=v.useState(25),r=[...Array(t).keys()].map(e=>({name:e.toString(),id:e}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`label`,{children:[`Adjust load`,(0,y.jsx)(`input`,{type:`number`,step:25,value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,y.jsx)(f,{...e,children:r.map(({name:e,id:t})=>(0,y.jsx)(p,{children:e},t))})]})}},I={args:{"aria-label":`test`,isRequired:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},decorators:e=>(0,y.jsxs)(`form`,{children:[(0,y.jsx)(e,{}),(0,y.jsx)(`button`,{type:`submit`,children:`Submit`})]})},L={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{"aria-label":`test`,selectionMode:`multiple`,isRequired:!0,defaultValue:[`ananas`,`kiwi`]},decorators:e=>(0,y.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,y.jsx)(e,{}),(0,y.jsx)(`button`,{type:`submit`,children:`Submit`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isInvalid: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultSelectedKey: options[0].id
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Multiple.args,
    description: 'Ananas och Kiwi är förvalda',
    defaultValue: ['ananas', 'kiwi']
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Multiple.args,
    description: 'Alla alternativ är valda',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    items: optionsWithSections,
    children: Sectioned.args?.children
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!snapshot'],
  args: {
    ...Sectioned.args,
    listBoxProps: {
      virtualized: false
    },
    children: Sectioned.args?.children
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  decorators: Component => <form>
      <Component />
      <button type='submit'>Submit</button>
    </form>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
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
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`Invalid`,`MediumSizeInvalid`,`Disabled`,`ReadOnly`,`Sectioned`,`Multiple`,`MultipleDefaultValue`,`MultipleAllSelected`,`MultipleWithSections`,`NotVirtualized`,`AsynchronousLoadingWithEmptyMessage`,`InfiniteScroll`,`WithHelpPopover`,`PerformanceTest`,`Required`,`MultipleRequired`]}))();export{M as AsynchronousLoadingWithEmptyMessage,w as Disabled,N as InfiniteScroll,S as Invalid,C as MediumSizeInvalid,D as Multiple,k as MultipleAllSelected,O as MultipleDefaultValue,L as MultipleRequired,A as MultipleWithSections,j as NotVirtualized,F as PerformanceTest,x as Primary,T as ReadOnly,I as Required,E as Sectioned,P as WithHelpPopover,R as __namedExportsOrder,b as default};