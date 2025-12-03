import{o as B,j as e,c as v,r as j}from"./iframe-a6Wk3Xzy.js";import{$ as I}from"./Collection-BxZCsRFI.js";import{S as f}from"./Select-BFV3deNI.js";import{L as n}from"./ListBoxItem-BxF9QQTK.js";import{L as S,a as y}from"./ListBoxSection-Yp_M0QAE.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-DuHdXNGk.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./useFocusRing-C1yXmCPx.js";import"./utils-Djxj9dvS.js";import"./clsx-B-dksMZM.js";import"./index-D2MYWhMB.js";import"./Button-D3kzwT0j.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./FieldError-BCytiDW7.js";import"./Text-DkJniAIt.js";import"./clsx-Ciqy0D92.js";import"./Text-Cei6q4nW.js";import"./Form-CV6_CH2f.js";import"./useFormValidation-ONm4qT-T.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BEXh_4ze.js";import"./DragAndDrop-BCqNIrgf.js";import"./getScrollParent-DPdiGwy9.js";import"./scrollIntoView-D4IpJVjb.js";import"./Separator-DC01dWRI.js";import"./SelectionManager-505Ik3lC.js";import"./useEvent-DDIjSBAF.js";import"./SelectionIndicator-CdYP5Mmy.js";import"./useDescription-CCWPLKTi.js";import"./useControlledState-DCZoTGT5.js";import"./ListKeyboardDelegate-hyjiyDq3.js";import"./RSPContexts-SYjPV_Gd.js";import"./inertValue-m0D-1Wa4.js";import"./useListState-BDbkQsmw.js";import"./Dialog-CXvjpGUD.js";import"./OverlayArrow-CyE76S0y.js";import"./useResizeObserver-BdfPDCR2.js";import"./PressResponder-Dhuu2u_J.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-nz69IdQH.js";import"./useField-BDXXirFK.js";import"./Label-DXagKvxd.js";import"./Button-BXJQHasJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";import"./createLucideIcon-D5ghYwFQ.js";import"./x-UTOZVbAg.js";import"./Heading-B2z4anRX.js";import"./info-3ZPJIb02.js";import"./Popover-BqLHs2z5.js";import"./Checkbox-CVs6LAuz.js";import"./check-BMVdLF27.js";import"./useToggleState-BRuYAOwi.js";import"./Tag-C8qqwLAX.js";import"./useHighlightSelectionDescription-Jkgp5R2P.js";import"./useUpdateEffect-CtcE8jsc.js";import"./useHasTabbableChild-BJO5-y03.js";import"./chevron-down-BSzGFoHX.js";import"./Virtualizer-DVIIa3fV.js";const He={component:f,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(n,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:B,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},i={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Hello"}),e.jsx(n,{children:"Goodbye"})]})}},r={},s={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},a={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:B.map(({id:t})=>t)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[o,L]=j.useState(null);return e.jsx(f,{...t,value:o,onChange:L,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(y,{children:"Fruit"}),e.jsx(n,{id:"Apple",children:"Apple"}),e.jsx(n,{id:"Banana",children:"Banana"})]}),e.jsxs(S,{children:[e.jsx(y,{children:"Vegetables"}),e.jsx(n,{id:"Cabbage",children:"Cabbage"}),e.jsx(n,{id:"Broccoli",children:"Broccoli"})]})]})}},h={args:{...r.args,items:v,children:t=>e.jsxs(S,{id:t.name,children:[e.jsx(y,{children:t.name}),e.jsx(I,{items:t.children,children:o=>e.jsx(n,{id:o.id,children:o.name})})]})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:o=>{o.preventDefault()},children:[e.jsx(f,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Long words",description:"just for test",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"JavaScript­Select­Component"}),e.jsx(n,{children:"En lång mening utan några långa ord, bara mellanslag"}),e.jsx(n,{children:"En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis"}),e.jsx(n,{children:"In an extraordinary demonstration of interdisciplinary collaboration, the hypermetropolitan university's neurophysiological research consortium unveiled a revolutionary apparatus designed to facilitate intercommunicational synchronization between artificially intelligent entities and biologically conscious organisms. The device, operating through electroencephalographic transmodulation and algorithmic contextualization, promises unprecedented advancements in cognitive enhancement, neuroplastic rehabilitation, and computational linguistics. Such an innovation, while theoretically transformative, also precipitates multifaceted bioethical deliberations concerning technopsychological autonomy and the potential dehumanization of consciousness through overmechanization."})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
