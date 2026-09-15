import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Hn as r,Kn as i,qn as a,t as o}from"./iframe-Dr0zsgfA.js";import{An as s,t as c}from"./exports-DLpogbzZ.js";import{o as l,t as u}from"./exports-DhSIu5mR.js";import{n as d,t as f}from"./ComboBox-hocHeZhA.js";import{a as p,r as m,t as h}from"./ListBoxHeader-Bh4ur-hn.js";import{i as g,t as _}from"./list-box-k0t0ojX9.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{r(),v=t(n(),1),u(),c(),d(),_(),y=o(),b={component:f,title:`Components/ComboBox`,tags:[`autodocs`],args:{label:`Etikett`,placeholder:`Placeholder`,description:`Beskrivning`,errorMessage:`Fel!`,errorPosition:`top`,size:`large`},argTypes:{placeholder:{control:`text`}},render:e=>(0,y.jsxs)(f,{...e,children:[(0,y.jsx)(p,{id:`apple`,children:`Apple`}),(0,y.jsx)(p,{id:`lemon`,children:`Lemon`})]})},x={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`},render:e=>(0,y.jsx)(f,{"data-testid":`test`,items:i,...e,children:e=>(0,y.jsx)(p,{children:e.name})})},S={args:{isInvalid:!0}},C={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}}},w={args:{size:`medium`,isInvalid:!0}},T={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},E={args:{isReadOnly:!0,defaultSelectedKey:`lemon`}},D={args:{"aria-label":`test`,isRequired:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,y.jsxs)(`form`,{children:[(0,y.jsx)(f,{...e,children:(0,y.jsx)(p,{children:`Hej`})}),(0,y.jsx)(`button`,{type:`submit`,children:`Submit`})]})},O={args:{placeholder:`Välj eller sök frukt`,label:`Välj en frukt`,description:`Description`,className:`test`,items:a},render:e=>(0,y.jsx)(f,{...e,children:e=>(0,y.jsxs)(m,{id:e.name,children:[(0,y.jsx)(h,{children:e.name}),(0,y.jsx)(s,{items:e.children,children:e=>(0,y.jsx)(p,{id:e.id,children:e.name})})]})})},k={tags:[`!autodocs`,`!snapshot`],args:{...O.args,listBoxProps:{virtualized:!1}},render:e=>(0,y.jsx)(f,{...e,children:e=>(0,y.jsxs)(m,{id:e.name,children:[(0,y.jsx)(h,{children:e.name}),(0,y.jsx)(s,{items:e.children,children:e=>(0,y.jsx)(p,{id:e.id,children:e.name})})]})})},A={tags:[`!dev`,`!autodocs`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=v.useState(25),r=[...Array(t).keys()].map(e=>({name:e.toString(),id:e}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`label`,{children:[`Adjust load`,(0,y.jsx)(`input`,{type:`number`,step:25,value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,y.jsx)(f,{...e,children:r.map(({name:e,id:t})=>(0,y.jsx)(p,{children:e},t))})]})}},j={args:{label:`Star Wars Character Lookup`,placeholder:`Välj eller sök karaktär`,description:`Anropar ett externt API`,allowsEmptyCollection:!0},render:e=>{let t=l({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),t.isLoading&&(0,y.jsx)(g,{isLoading:t.isLoading})]})}},M={args:{...j.args},render:e=>{let t=l({async load({signal:e,cursor:t,filterText:n}){t&&=t.replace(/^http:\/\//i,`https://`);let{results:r,next:i}=await(await fetch(t||`https://swapi.py4e.com/api/people/?search=${n}`,{signal:e})).json();return{items:r,cursor:i}}});return(0,y.jsxs)(f,{...e,inputValue:t.filterText,onInputChange:t.setFilterText,children:[(0,y.jsx)(s,{items:t.items,children:e=>(0,y.jsx)(p,{id:e.name?.toString(),children:e.name})}),(0,y.jsx)(g,{isLoading:t.loadingState===`loadingMore`,onLoadMore:t.loadMore})]})}},N=[{id:`SKU-1001`,name:`Trådlösa hörlurar`},{id:`SKU-1002`,name:`Bluetooth-högtalare`},{id:`SKU-1003`,name:`Mekaniskt tangentbord`},{id:`SKU-1004`,name:`Trådlös mus`},{id:`SKU-1005`,name:`USB-C-hubb`},{id:`SKU-1006`,name:`Extern SSD 1TB`}],P={margin:`0 0 12px`,padding:`8px 12px`,fontSize:13,lineHeight:1.5,color:`#3a3a3a`,background:`#f2f2f2`,borderLeft:`3px solid #999`,maxWidth:640},F={margin:`12px 0 0`,padding:12,fontSize:12,lineHeight:1.6,background:`#1e1e1e`,color:`#d4d4d4`,overflowX:`auto`,borderRadius:4,maxWidth:640},I=`const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

<ComboBox items={products} label='Välj en produkt'>
  {item => (
    <ListBoxItem textValue={\`\${item.name} \${item.id}\`}>
      {item.name}{' '}
      <span style={{ color: 'var(--midas-text-secondary)' }}>{item.id}</span>
    </ListBoxItem>
  )}
</ComboBox>`,L=`const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

function ProductCombobox() {
  const [query, setQuery] = useState('')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)
  // Only filter while the user is actively typing — otherwise reopening
  // the popover after a selection re-filters by the leftover query (the
  // selected item's own name) and shows just that one match.
  const [isSearching, setIsSearching] = useState(false)

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!isSearching || !q) return products
    return products.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q),
    )
  }, [query, isSearching])

  return (
    <ComboBox
      label='Välj en produkt'
      items={filteredProducts}
      inputValue={query}
      onInputChange={value => {
        setQuery(value)
        setIsSearching(true)
        if (value === '') setSelectedKey(null)
      }}
      selectedKey={selectedKey}
      onSelectionChange={key => {
        setSelectedKey(key)
        setQuery(products.find(item => item.id === key)?.name ?? '')
        setIsSearching(false)
      }}
      // items are already filtered above, don't filter again
      defaultFilter={() => true}
    >
      {item => (
        <ListBoxItem textValue={item.name}>
          {item.name} <span style={{ color: 'var(--midas-text-secondary)' }}>{item.id}</span>
        </ListBoxItem>
      )}
    </ComboBox>
  )
}`,R=`const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

function ProductCombobox() {
  const [query, setQuery] = useState('')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!isSearching || !q) return products
    return products.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q),
    )
  }, [query, isSearching])

  return (
    <ComboBox
      label='Välj en produkt'
      items={filteredProducts}
      inputValue={query}
      onInputChange={value => {
        setQuery(value)
        setIsSearching(true)
        if (value === '') setSelectedKey(null)
      }}
      selectedKey={selectedKey}
      onSelectionChange={key => {
        setSelectedKey(key)
        setQuery(products.find(item => item.id === key)?.name ?? '')
        setIsSearching(false)
      }}
      // items are already filtered above, don't filter again
      defaultFilter={() => true}
    >
      {item => <ListBoxItem textValue={item.name}>{item.name}</ListBoxItem>}
    </ComboBox>
  )
}`,z={name:`Filter by id — textValue trick`,args:{placeholder:`Sök på namn eller SKU`,label:`Välj en produkt (sök på namn eller SKU)`,description:`Filtrerar på både namn och id, t.ex. prova "1004"`,className:`test`,items:N},render:e=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`p`,{style:P,children:[(0,y.jsx)(`strong`,{children:`textValue-tricket.`}),` Id läggs in i `,(0,y.jsx)(`code`,{children:`textValue`}),` `,`och visas i listboxen (sekundär textfärg) — inget extra state behövs. Nackdel: när man väljer ett alternativ visas hela textValue i fältet ("Trådlös mus SKU-1004"), inte bara namnet.`]}),(0,y.jsx)(f,{...e,children:e=>(0,y.jsxs)(p,{textValue:`${e.name} ${e.id}`,children:[e.name,` `,(0,y.jsx)(`span`,{style:{color:`var(--midas-text-secondary)`},children:e.id})]})}),(0,y.jsx)(`pre`,{style:F,children:(0,y.jsx)(`code`,{children:I})})]}),parameters:{docs:{description:{story:'Fold the id into `textValue` on each `ListBoxItem`, and show it in the listbox in a secondary text color so a match is never a mystery. Zero extra state, but RAC also uses `textValue` to populate the input on selection — so after picking a product the field shows the full "name + id" string, not just the name.'},source:{code:I,type:`code`}}}},B={name:`Filter by id — fully controlled, id visible in list`,args:{placeholder:`Sök på namn eller SKU`,label:`Välj en produkt (sök på namn eller SKU)`,description:`Filtrerar på namn och id, men visar bara namnet i fältet. Prova t.ex. "1004"`,className:`test`},render:e=>{let[t,n]=v.useState(``),[r,i]=v.useState(null),[a,o]=v.useState(!1),s=v.useMemo(()=>{let e=t.trim().toLowerCase();return!a||!e?N:N.filter(t=>t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e))},[t,a]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`p`,{style:P,children:[(0,y.jsx)(`strong`,{children:`Helt kontrollerad.`}),` Filtrerar på namn och id, men du bestämmer själv vad fältet visar — `,(0,y.jsx)(`code`,{children:`onSelectionChange`}),` `,`sätter texten till bara namnet, oavsett vad som matchade. Id visas i listboxen (i sekundär textfärg) så det syns varför en sökning gav träff, men inte i det stängda fältet.`]}),(0,y.jsx)(f,{...e,items:s,inputValue:t,onInputChange:e=>{n(e),o(!0),e===``&&i(null)},selectedKey:r,onSelectionChange:e=>{i(e),n(N.find(t=>t.id===e)?.name??``),o(!1)},defaultFilter:()=>!0,children:e=>(0,y.jsxs)(p,{textValue:e.name,children:[e.name,` `,(0,y.jsx)(`span`,{style:{color:`var(--midas-text-secondary)`},children:e.id})]})}),(0,y.jsx)(`pre`,{style:F,children:(0,y.jsx)(`code`,{children:L})})]})},parameters:{docs:{description:{story:"Filters on name and id, and takes full control of the input so the closed field only ever shows the item's name. The id is shown in the listbox (secondary text color) so a match is never a mystery, per UX feedback in the Slack thread. `isSearching` prevents reopening the popover from re-filtering by the leftover query after a selection."},source:{code:L,type:`code`}}}},V={name:`Filter by id — fully controlled, id hidden`,args:{placeholder:`Sök på namn eller SKU`,label:`Välj en produkt (sök på namn eller SKU)`,description:`Filtrerar på namn och id, men id visas aldrig. Prova t.ex. "1004"`,className:`test`},render:e=>{let[t,n]=v.useState(``),[r,i]=v.useState(null),[a,o]=v.useState(!1),s=v.useMemo(()=>{let e=t.trim().toLowerCase();return!a||!e?N:N.filter(t=>t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e))},[t,a]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`p`,{style:P,children:[(0,y.jsx)(`strong`,{children:`Helt kontrollerad, id helt dolt.`}),` Samma som ovan, men id visas varken i listboxen eller i fältet — om Philips UX-poäng om att visa kopplingen inte gäller för ert case, eller om listan ska hållas helt fri från id.`]}),(0,y.jsx)(f,{...e,items:s,inputValue:t,onInputChange:e=>{n(e),o(!0),e===``&&i(null)},selectedKey:r,onSelectionChange:e=>{i(e),n(N.find(t=>t.id===e)?.name??``),o(!1)},defaultFilter:()=>!0,children:e=>(0,y.jsx)(p,{textValue:e.name,children:e.name})}),(0,y.jsx)(`pre`,{style:F,children:(0,y.jsx)(`code`,{children:R})})]})},parameters:{docs:{description:{story:`Same fix as the other controlled variant (isSearching resets filtering on reopen), but the id never renders anywhere — neither the listbox nor the closed field. Use this if Philip's "show the match" UX point doesn't apply to your case.`},source:{code:R,type:`code`}}}},H={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Filter by id — textValue trick',
  args: {
    placeholder: 'Sök på namn eller SKU',
    label: 'Välj en produkt (sök på namn eller SKU)',
    description: 'Filtrerar på både namn och id, t.ex. prova "1004"',
    className: 'test',
    items: products
  },
  render: args => <>
      <p style={noteStyle}>
        <strong>textValue-tricket.</strong> Id läggs in i <code>textValue</code>{' '}
        och visas i listboxen (sekundär textfärg) — inget extra state behövs.
        Nackdel: när man väljer ett alternativ visas hela textValue i fältet
        ("Trådlös mus SKU-1004"), inte bara namnet.
      </p>
      <ComboBox {...args}>
        {item => <ListBoxItem textValue={\`\${item.name} \${item.id}\`}>
            {item.name}{' '}
            <span style={{
          color: 'var(--midas-text-secondary)'
        }}>
              {item.id}
            </span>
          </ListBoxItem>}
      </ComboBox>
      <pre style={codeBlockStyle}>
        <code>{textValueTrickCode}</code>
      </pre>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Fold the id into \`textValue\` on each \`ListBoxItem\`, and show it in the listbox in a secondary text color so a match is never a mystery. Zero extra state, but RAC also uses \`textValue\` to populate the input on selection — so after picking a product the field shows the full "name + id" string, not just the name.'
      },
      source: {
        code: textValueTrickCode,
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Filter by id — fully controlled, id visible in list',
  args: {
    placeholder: 'Sök på namn eller SKU',
    label: 'Välj en produkt (sök på namn eller SKU)',
    description: 'Filtrerar på namn och id, men visar bara namnet i fältet. Prova t.ex. "1004"',
    className: 'test'
  },
  render: args => {
    const [query, setQuery] = React.useState('');
    const [selectedKey, setSelectedKey] = React.useState<Key | null>(null);
    // Only filter while the user is actively typing. Without this, reopening
    // the popover after a selection re-filters by the leftover query (the
    // selected item's own name) and shows just that one match instead of
    // the full list — the bug Johanna hit in the Slack thread.
    const [isSearching, setIsSearching] = React.useState(false);
    const filteredProducts = React.useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!isSearching || !q) return products;
      return products.filter(item => item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q));
    }, [query, isSearching]);
    return <>
        <p style={noteStyle}>
          <strong>Helt kontrollerad.</strong> Filtrerar på namn och id, men du
          bestämmer själv vad fältet visar — <code>onSelectionChange</code>{' '}
          sätter texten till bara namnet, oavsett vad som matchade. Id visas i
          listboxen (i sekundär textfärg) så det syns varför en sökning gav
          träff, men inte i det stängda fältet.
        </p>
        <ComboBox {...args} items={filteredProducts} inputValue={query} onInputChange={value => {
        setQuery(value);
        setIsSearching(true);
        if (value === '') setSelectedKey(null);
      }} selectedKey={selectedKey} onSelectionChange={key => {
        setSelectedKey(key);
        setQuery(products.find(item => item.id === key)?.name ?? '');
        setIsSearching(false);
      }} defaultFilter={() => true}>
          {item => <ListBoxItem textValue={item.name}>
              {item.name}{' '}
              <span style={{
            color: 'var(--midas-text-secondary)'
          }}>
                {item.id}
              </span>
            </ListBoxItem>}
        </ComboBox>
        <pre style={codeBlockStyle}>
          <code>{controlledCode}</code>
        </pre>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Filters on name and id, and takes full control of the input so the closed field only ever shows the item's name. The id is shown in the listbox (secondary text color) so a match is never a mystery, per UX feedback in the Slack thread. \`isSearching\` prevents reopening the popover from re-filtering by the leftover query after a selection."
      },
      source: {
        code: controlledCode,
        type: 'code'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Filter by id — fully controlled, id hidden',
  args: {
    placeholder: 'Sök på namn eller SKU',
    label: 'Välj en produkt (sök på namn eller SKU)',
    description: 'Filtrerar på namn och id, men id visas aldrig. Prova t.ex. "1004"',
    className: 'test'
  },
  render: args => {
    const [query, setQuery] = React.useState('');
    const [selectedKey, setSelectedKey] = React.useState<Key | null>(null);
    const [isSearching, setIsSearching] = React.useState(false);
    const filteredProducts = React.useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!isSearching || !q) return products;
      return products.filter(item => item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q));
    }, [query, isSearching]);
    return <>
        <p style={noteStyle}>
          <strong>Helt kontrollerad, id helt dolt.</strong> Samma som ovan,
          men id visas varken i listboxen eller i fältet — om Philips
          UX-poäng om att visa kopplingen inte gäller för ert case, eller om
          listan ska hållas helt fri från id.
        </p>
        <ComboBox {...args} items={filteredProducts} inputValue={query} onInputChange={value => {
        setQuery(value);
        setIsSearching(true);
        if (value === '') setSelectedKey(null);
      }} selectedKey={selectedKey} onSelectionChange={key => {
        setSelectedKey(key);
        setQuery(products.find(item => item.id === key)?.name ?? '');
        setIsSearching(false);
      }} defaultFilter={() => true}>
          {item => <ListBoxItem textValue={item.name}>{item.name}</ListBoxItem>}
        </ComboBox>
        <pre style={codeBlockStyle}>
          <code>{controlledCodeNoId}</code>
        </pre>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Same fix as the other controlled variant (isSearching resets filtering on reopen), but the id never renders anywhere — neither the listbox nor the closed field. Use this if Philip's \\"show the match\\" UX point doesn't apply to your case."
      },
      source: {
        code: controlledCodeNoId,
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...H.parameters?.docs?.source}}},U=[`Primary`,`Invalid`,`DS1253`,`MediumSizeInvalid`,`Disabled`,`ReadOnly`,`Required`,`Sectioned`,`NotVirtualized`,`PerformanceTest`,`AsynchronousLoadingWithEmptyMessage`,`InfiniteScroll`,`FilterByIdAndName`,`FilterByIdAndNameControlled`,`FilterByIdAndNameControlledNoId`,`WithHelpPopover`]}))();export{j as AsynchronousLoadingWithEmptyMessage,C as DS1253,T as Disabled,z as FilterByIdAndName,B as FilterByIdAndNameControlled,V as FilterByIdAndNameControlledNoId,M as InfiniteScroll,S as Invalid,w as MediumSizeInvalid,k as NotVirtualized,A as PerformanceTest,x as Primary,E as ReadOnly,D as Required,O as Sectioned,H as WithHelpPopover,U as __namedExportsOrder,b as default};