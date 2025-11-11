import{o as B,j as e,c as v,r as j}from"./iframe-C1S3UI0q.js";import{$ as I}from"./Collection-BJAHpYZy.js";import{S as f}from"./Select-BH1NqViP.js";import{L as n}from"./ListBoxItem-DTmo5QA4.js";import{L as S,a as y}from"./ListBoxSection-jU1D_SYo.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-BJe1Vr5O.js";import"./index-DtMwqg1W.js";import"./index-9q-9abAX.js";import"./useFocusRing-CyRIiSHy.js";import"./utils-DDXHsTpT.js";import"./clsx-B-dksMZM.js";import"./index-Me4f3IYf.js";import"./Button-iogE4gXn.js";import"./useLabels-zIJcgfCF.js";import"./useButton-Ca4j2v7e.js";import"./FieldError-B79tkzHr.js";import"./Text-DHpcpzXZ.js";import"./clsx-Ciqy0D92.js";import"./Text-BWJL7Gm8.js";import"./Form-DHk6j1fS.js";import"./useFormValidation-0n95bcz8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Ci_4Gyv-.js";import"./DragAndDrop-BMCm0QVD.js";import"./getScrollParent-Bjcd7mkO.js";import"./scrollIntoView-CJsMR2zp.js";import"./Separator-BbRp0x6a.js";import"./SelectionManager-BXBHYyud.js";import"./useEvent-ClTJe97m.js";import"./SelectionIndicator-BQpZ71Nu.js";import"./useDescription-D_-dPDWg.js";import"./useControlledState-BU5hH7Ch.js";import"./ListKeyboardDelegate-CZ0dQ4_6.js";import"./RSPContexts-h2hygVuJ.js";import"./inertValue-D8DhX86n.js";import"./useListState-CZLS2f3_.js";import"./Dialog-COxcRZFR.js";import"./OverlayArrow-DbLci5Fj.js";import"./useResizeObserver-x6NIebEo.js";import"./PressResponder-B9bh3Uo3.js";import"./useLocalizedStringFormatter-CL1671By.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-DFD9-6eR.js";import"./useField-BDCXh-qT.js";import"./Label-DgiH-mJ_.js";import"./useLocalizedStringFormatter-DAqU679A.js";import"./Button-BJgkfWbj.js";import"./Button.module-CtQ1deO8.js";import"./x-392Zn0gg.js";import"./createLucideIcon-B-9b73Xu.js";import"./Heading-BAtLrgM0.js";import"./info-CSzhu02k.js";import"./Popover-3J87KIzX.js";import"./Checkbox-DKOYB9VG.js";import"./check-CFXta5kO.js";import"./useToggleState-hsN7EKhN.js";import"./Tag-BZWGuKQE.js";import"./useHighlightSelectionDescription-CW43SJpd.js";import"./useUpdateEffect-wjU1-G2X.js";import"./useHasTabbableChild-DCAqMLhg.js";import"./chevron-down-GDPvqlRa.js";import"./Virtualizer-B1nACU9W.js";const He={component:f,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(n,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:B,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},i={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Hello"}),e.jsx(n,{children:"Goodbye"})]})}},r={},s={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},a={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:B.map(({id:t})=>t)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[o,L]=j.useState(null);return e.jsx(f,{...t,value:o,onChange:L,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(y,{children:"Fruit"}),e.jsx(n,{id:"Apple",children:"Apple"}),e.jsx(n,{id:"Banana",children:"Banana"})]}),e.jsxs(S,{children:[e.jsx(y,{children:"Vegetables"}),e.jsx(n,{id:"Cabbage",children:"Cabbage"}),e.jsx(n,{id:"Broccoli",children:"Broccoli"})]})]})}},h={args:{...r.args,items:v,children:t=>e.jsxs(S,{id:t.name,children:[e.jsx(y,{children:t.name}),e.jsx(I,{items:t.children,children:o=>e.jsx(n,{id:o.id,children:o.name})})]})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:o=>{o.preventDefault()},children:[e.jsx(f,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Long words",description:"just for test",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"JavaScript­Select­Component"}),e.jsx(n,{children:"En lång mening utan några långa ord, bara mellanslag"}),e.jsx(n,{children:"En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis"}),e.jsx(n,{children:"In an extraordinary demonstration of interdisciplinary collaboration, the hypermetropolitan university's neurophysiological research consortium unveiled a revolutionary apparatus designed to facilitate intercommunicational synchronization between artificially intelligent entities and biologically conscious organisms. The device, operating through electroencephalographic transmodulation and algorithmic contextualization, promises unprecedented advancements in cognitive enhancement, neuroplastic rehabilitation, and computational linguistics. Such an innovation, while theoretically transformative, also precipitates multifaceted bioethical deliberations concerning technopsychological autonomy and the potential dehumanization of consciousness through overmechanization."})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    defaultValue: ['apple', 'kiwi']
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
    selectionMode: 'single',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
  }}>
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ke=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","LongWords"];export{a as AllKeysSelected,u as DS872,s as DefaultValue,c as Disabled,l as DisabledOption,h as DynamicSections,d as Invalid,x as LongWords,r as Primary,b as RequiredSingleSelect,p as SelectAllEnabled,i as StaticItems,g as StaticSections,m as WithTags,ke as __namedExportsOrder,He as default};
