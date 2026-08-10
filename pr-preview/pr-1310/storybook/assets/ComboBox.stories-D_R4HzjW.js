import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Bi as r,Fi as i,t as a,zi as o}from"./iframe-Bw3d0Vn2.js";import{In as s,_n as c,fn as l,t as u}from"./import-D1LjhqOP.js";import{n as d,t as f}from"./ComboBox-DZsWYSgx.js";import{t as p}from"./ListBoxItem-BpWoLCEb.js";import{c as m,i as h,o as g,t as _}from"./list-box-D3JWVxoY.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{i(),v=t(n(),1),l(),u(),d(),_(),y=a(),b={component:f,title:`Components/ComboBox`,tags:[`autodocs`],args:{label:`Etikett`,placeholder:`Placeholder`,description:`Beskrivning`,errorMessage:`Fel!`,errorPosition:`top`,size:`large`},argTypes:{placeholder:{control:`text`}},render:e=>(0,y.jsxs)(f,{...e,children:[(0,y.jsx)(p,{id:`apple`,children:`Apple`}),(0,y.jsx)(p,{id:`lemon`,children:`Lemon`})]})},x={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`},render:e=>(0,y.jsx)(f,{"data-testid":`test`,items:o,...e,children:e=>(0,y.jsx)(p,{children:e.name})})},S={args:{isInvalid:!0}},C={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}}},w={args:{size:`medium`,isInvalid:!0}},T={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},E={args:{isReadOnly:!0,defaultSelectedKey:`lemon`}},D={args:{"aria-label":`test`,isRequired:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,y.jsxs)(`form`,{children:[(0,y.jsx)(f,{...e,children:(0,y.jsx)(p,{children:`Hej`})}),(0,y.jsx)(`button`,{type:`submit`,children:`Submit`})]})},O={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`,items:r},render:e=>(0,y.jsx)(f,{...e,children:e=>(0,y.jsxs)(m,{id:e.name,children:[(0,y.jsx)(h,{children:e.name}),(0,y.jsx)(s,{items:e.children,children:e=>(0,y.jsx)(p,{id:e.id,children:e.name})})]})})},k={tags:[`!dev`,`!autodocs`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=v.useState(25),r=[...Array(t).keys()].map(e=>({name:e.toString(),id:e}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`label`,{children:[`Adjust load`,(0,y.jsx)(`input`,{type:`number`,step:25,value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,y.jsx)(f,{...e,children:r.map(({name:e,id:t})=>(0,y.jsx)(p,{children:e},t))})]})}},A={args:{label:`Star Wars Character Lookup`,placeholder:`Välj eller sök karaktär`,description:`Anropar ett externt API`,allowsEmptyCollection:!0},render:e=>{let t=c({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),t.isLoading&&(0,y.jsx)(g,{isLoading:t.isLoading})]})}},j={args:{...A.args},render:e=>{let t=c({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),(0,y.jsx)(g,{isLoading:t.loadingState===`loadingMore`,onLoadMore:t.loadMore})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test'
  },
  render: args => <ComboBox data-testid='test' items={options} {...args}>
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isInvalid: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultSelectedKey: 'lemon'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Primary`,`Invalid`,`DS1253`,`MediumSizeInvalid`,`Disabled`,`ReadOnly`,`Required`,`Sectioned`,`PerformanceTest`,`AsynchronousLoadingWithEmptyMessage`,`InfiniteScroll`]}))();export{A as AsynchronousLoadingWithEmptyMessage,C as DS1253,T as Disabled,j as InfiniteScroll,S as Invalid,w as MediumSizeInvalid,k as PerformanceTest,x as Primary,E as ReadOnly,D as Required,O as Sectioned,M as __namedExportsOrder,b as default};