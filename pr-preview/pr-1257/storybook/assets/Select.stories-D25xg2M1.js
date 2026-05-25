import{c as j,o as B,r as I,j as e}from"./iframe-BgrJi1dO.js";import{$ as w}from"./Collection-B928yBNj.js";import{S as y}from"./Select-DFT135UJ.js";import{L as f,a as v}from"./ListBoxHeader-C02TP4aG.js";import{L as n}from"./ListBoxItem-DUeayZnv.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-B-ocAKFH.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./useFocusRing-BS9YqB89.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./index-hMpkQrUO.js";import"./Button-CzM4r0Q8.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./FieldError-CK0qCQ53.js";import"./Text-BwTtjMDe.js";import"./clsx-Ciqy0D92.js";import"./Text-U40rqCZc.js";import"./Form-BYQG3pHA.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CXMNU2lb.js";import"./DragAndDrop-D9bWvhRF.js";import"./getScrollParent-D_EmKFyf.js";import"./scrollIntoView-BBkPTMW6.js";import"./Separator-CFMUc0y5.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./SelectionIndicator--LpreWkm.js";import"./useDescription-jfs0LzVP.js";import"./useControlledState-D4OQ_QAh.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./RSPContexts-DvRO0UAG.js";import"./inertValue-hTPLVWAe.js";import"./useListState-DzDqmCya.js";import"./Dialog-Dx5PGef6.js";import"./OverlayArrow-BxhCGC-N.js";import"./useResizeObserver-DsBe658C.js";import"./PressResponder-oCaC_hiz.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoZL00eg.js";import"./VisuallyHidden-BtrvhTUL.js";import"./useField-DQisryMe.js";import"./Label-BdWzYcgR.js";import"./ModalOverlay-ByFsZVVk.js";import"./x-DF1DvVFb.js";import"./createLucideIcon-Xa2G53WL.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Heading-Pcy6kdR-.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./info-CKFRirRj.js";import"./Popover-ClRnZYFV.js";import"./Checkbox-l9jmAejL.js";import"./check-BaBKIaX1.js";import"./useToggleState-Ct7i5QmH.js";import"./TagGroup-BF___Br3.js";import"./useHighlightSelectionDescription-M5bvHCnY.js";import"./useUpdateEffect-DbAMDDv6.js";import"./useHasTabbableChild-BBHF-kZN.js";import"./chevron-down-BRZCbCLL.js";import"./Virtualizer-ZqSPXoln.js";const ke={component:y,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(n,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:B,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},s={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Hello"}),e.jsx(n,{children:"Goodbye"})]})}},r={},i={args:{description:"Kiwi and ananas are pre-selected",defaultValue:["kiwi","ananas"],selectionMode:"multiple"}},a={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:B.map(({id:t})=>t)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["ananas","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[o,L]=I.useState(null);return e.jsx(y,{...t,value:o,onChange:L,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(v,{children:"Fruit"}),e.jsx(n,{id:"Apple",children:"Apple"}),e.jsx(n,{id:"Banana",children:"Banana"})]}),e.jsxs(f,{children:[e.jsx(v,{children:"Vegetables"}),e.jsx(n,{id:"Cabbage",children:"Cabbage"}),e.jsx(n,{id:"Broccoli",children:"Broccoli"})]})]})}},h={args:{...r.args,items:j,children:t=>e.jsxs(f,{id:t.name,children:[e.jsx(v,{children:t.name}),e.jsx(w,{items:t.children,children:o=>e.jsx(n,{id:o.id,children:o.name})})]})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple",isSelectableAll:!0,isRequired:!0},render:t=>e.jsxs("form",{onSubmit:o=>{o.preventDefault()},children:[e.jsx(y,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:o=>{o.preventDefault()},children:[e.jsx(y,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Long words",description:"just for test",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"JavaScript­Select­Component"}),e.jsx(n,{children:"En lång mening utan några långa ord, bara mellanslag"}),e.jsx(n,{children:"En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis"}),e.jsx(n,{children:"In an extraordinary demonstration of interdisciplinary collaboration, the hypermetropolitan university's neurophysiological research consortium unveiled a revolutionary apparatus designed to facilitate intercommunicational synchronization between artificially intelligent entities and biologically conscious organisms. The device, operating through electroencephalographic transmodulation and algorithmic contextualization, promises unprecedented advancements in cognitive enhancement, neuroplastic rehabilitation, and computational linguistics. Such an innovation, while theoretically transformative, also precipitates multifaceted bioethical deliberations concerning technopsychological autonomy and the potential dehumanization of consciousness through overmechanization."})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and ananas are pre-selected',
    defaultValue: ['kiwi', 'ananas'],
    selectionMode: 'multiple'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['ananas', 'kiwi']
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Te=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredMultipleSelectAll","RequiredSingleSelect","LongWords"];export{a as AllKeysSelected,u as DS872,i as DefaultValue,c as Disabled,l as DisabledOption,h as DynamicSections,d as Invalid,x as LongWords,r as Primary,b as RequiredMultipleSelectAll,S as RequiredSingleSelect,p as SelectAllEnabled,s as StaticItems,g as StaticSections,m as WithTags,Te as __namedExportsOrder,ke as default};
