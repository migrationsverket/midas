import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Bi as r,Fi as i,t as a,zi as o}from"./iframe-WlAtqoSC.js";import{In as s,t as c}from"./import-CmiUljse.js";import{t as l}from"./ListBoxItem-DTi0Rjst.js";import{c as u,i as d,t as f}from"./list-box-B3Nyff9w.js";import{n as p,t as m}from"./Select-CcWx5s1j.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{i(),h=t(n(),1),c(),p(),f(),g=a(),_={component:m,title:`Components/Select`,tags:[`autodocs`],args:{children:e=>(0,g.jsx)(l,{...e,children:e.name}),description:`Description`,isDisabled:!1,isSelectableAll:!1,label:`Label`,items:o,placeholder:`Select an option`,selectionMode:`single`,showTags:!1,errorPosition:`top`,size:`large`}},v={args:{label:`label`,description:`static`,children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{children:`Hello`}),(0,g.jsx)(l,{children:`Goodbye`})]})}},y={},b={args:{description:`Kiwi and ananas are pre-selected`,defaultValue:[`kiwi`,`ananas`],selectionMode:`multiple`}},x={args:{selectionMode:`multiple`,description:`All options are selected`,defaultValue:o.map(({id:e})=>e)}},S={parameters:{docs:{description:{story:`Avoid using disabled`}},a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},C={args:{description:`Kiwi is disabled`,disabledKeys:[`kiwi`]}},w={args:{isInvalid:!0,errorMessage:`Error msg`}},T={args:{selectionMode:`multiple`,showTags:!0,defaultValue:[`ananas`,`kiwi`]}},E={args:{selectionMode:`multiple`,isSelectableAll:!0}},D={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{...y.args,selectionMode:`single`,label:`Ärende`,placeholder:`Välj ärende`},render:e=>{let[t,n]=(0,h.useState)(null);return(0,g.jsx)(m,{...e,value:t,onChange:n,items:[{id:`12`,name:`tolv`},{id:`1`,name:`ett`},{id:`2`,name:`två`}]})}},O={args:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u,{children:[(0,g.jsx)(d,{children:`Fruit`}),(0,g.jsx)(l,{id:`Apple`,children:`Apple`}),(0,g.jsx)(l,{id:`Banana`,children:`Banana`})]}),(0,g.jsxs)(u,{children:[(0,g.jsx)(d,{children:`Vegetables`}),(0,g.jsx)(l,{id:`Cabbage`,children:`Cabbage`}),(0,g.jsx)(l,{id:`Broccoli`,children:`Broccoli`})]})]})}},k={args:{...y.args,items:r,children:e=>(0,g.jsxs)(u,{id:e.name,children:[(0,g.jsx)(d,{children:e.name}),(0,g.jsx)(s,{items:e.children,children:e=>(0,g.jsx)(l,{id:e.id,children:e.name})})]})}},A={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:`multiple`,isSelectableAll:!0,isRequired:!0},render:e=>(0,g.jsxs)(`form`,{onSubmit:e=>{e.preventDefault()},children:[(0,g.jsx)(m,{...e}),(0,g.jsx)(`button`,{type:`submit`,children:`submit`})]})},j={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:`single`,isRequired:!0},render:e=>(0,g.jsxs)(`form`,{onSubmit:e=>{e.preventDefault()},children:[(0,g.jsx)(m,{...e}),(0,g.jsx)(`button`,{type:`submit`,children:`submit`})]})},M={tags:[`!dev`,`!autodocs`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Long words`,description:`just for test`,children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{children:`JavaScript­Select­Component`}),(0,g.jsx)(l,{children:`En lång mening utan några långa ord, bara mellanslag`}),(0,g.jsx)(l,{children:`En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis`}),(0,g.jsx)(l,{children:`In an extraordinary demonstration of interdisciplinary collaboration, the hypermetropolitan university's neurophysiological research consortium unveiled a revolutionary apparatus designed to facilitate intercommunicational synchronization between artificially intelligent entities and biologically conscious organisms. The device, operating through electroencephalographic transmodulation and algorithmic contextualization, promises unprecedented advancements in cognitive enhancement, neuroplastic rehabilitation, and computational linguistics. Such an innovation, while theoretically transformative, also precipitates multifaceted bioethical deliberations concerning technopsychological autonomy and the potential dehumanization of consciousness through overmechanization.`})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and ananas are pre-selected',
    defaultValue: ['kiwi', 'ananas'],
    selectionMode: 'multiple'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    },
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
  },
  args: {
    isDisabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['ananas', 'kiwi']
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Primary.args,
    selectionMode: 'single',
    label: 'Ärende',
    placeholder: 'Välj ärende'
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null);
    return <Select {...args} value={selectedKey} onChange={setSelectedKey} items={[{
      id: '12',
      name: 'tolv'
    }, {
      id: '1',
      name: 'ett'
    }, {
      id: '2',
      name: 'två'
    }]} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxSection>
          <ListBoxHeader>Fruit</ListBoxHeader>
          <ListBoxItem id='Apple'>Apple</ListBoxItem>
          <ListBoxItem id='Banana'>Banana</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
          <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
        </ListBoxSection>
      </>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true,
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
  }}>
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
  }}>
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Long words',
    description: 'just for test',
    children: <>
        <ListBoxItem>JavaScript&shy;Select&shy;Component</ListBoxItem>
        <ListBoxItem>
          En lång mening utan några långa ord, bara mellanslag
        </ListBoxItem>
        <ListBoxItem>
          En lång mening med ett jättelångt ord:
          pneumonoultramicroscopicsilicovolcanoconiosis
        </ListBoxItem>
        <ListBoxItem>
          In an extraordinary demonstration of interdisciplinary collaboration,
          the hypermetropolitan university's neurophysiological research
          consortium unveiled a revolutionary apparatus designed to facilitate
          intercommunicational synchronization between artificially intelligent
          entities and biologically conscious organisms. The device, operating
          through electroencephalographic transmodulation and algorithmic
          contextualization, promises unprecedented advancements in cognitive
          enhancement, neuroplastic rehabilitation, and computational
          linguistics. Such an innovation, while theoretically transformative,
          also precipitates multifaceted bioethical deliberations concerning
          technopsychological autonomy and the potential dehumanization of
          consciousness through overmechanization.
        </ListBoxItem>
      </>
  }
}`,...M.parameters?.docs?.source}}},N=[`StaticItems`,`Primary`,`DefaultValue`,`AllKeysSelected`,`Disabled`,`DisabledOption`,`Invalid`,`WithTags`,`SelectAllEnabled`,`DS872`,`StaticSections`,`DynamicSections`,`RequiredMultipleSelectAll`,`RequiredSingleSelect`,`LongWords`]}))();export{x as AllKeysSelected,D as DS872,b as DefaultValue,S as Disabled,C as DisabledOption,k as DynamicSections,w as Invalid,M as LongWords,y as Primary,A as RequiredMultipleSelectAll,j as RequiredSingleSelect,E as SelectAllEnabled,v as StaticItems,O as StaticSections,T as WithTags,N as __namedExportsOrder,_ as default};