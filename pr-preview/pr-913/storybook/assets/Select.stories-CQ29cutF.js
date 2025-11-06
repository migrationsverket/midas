import{o as le,j as e,b as me,r as pe}from"./iframe-BvbRhJsG.js";import{$ as ue}from"./Collection-BQ-gfYPI.js";import{L as S,a as y}from"./ListBoxSection-CbI1YhM4.js";import{S as f}from"./Select-Cp3Pk-tV.js";import{L as n}from"./ListBoxItem-CRnZCoi1.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-BHVK8w8L.js";import"./index-B3-53qwc.js";import"./index-BnFhduz6.js";import"./useFocusRing-BPVAUh7v.js";import"./utils-CS14vqSf.js";import"./clsx-B-dksMZM.js";import"./index-DktjSCet.js";import"./ListBox-BWiwM83C.js";import"./DragAndDrop-DuTjJXKp.js";import"./getScrollParent-DmvlycPD.js";import"./scrollIntoView-4fLPX-y5.js";import"./Separator-B6Q-yLcW.js";import"./SelectionManager-CZKKZnpr.js";import"./useEvent-DIBtdt1V.js";import"./SelectionIndicator-DRsBa2Gv.js";import"./useDescription-DS3a88uT.js";import"./useControlledState-CBXFJxHg.js";import"./ListKeyboardDelegate-vBdjRqyn.js";import"./RSPContexts-Q5Y9ewG3.js";import"./Text-lWcGrung.js";import"./inertValue-Gyh0MAdA.js";import"./Button-Bmi_wjRq.js";import"./useLabels-bBfz2F1H.js";import"./useButton-Ckg5GaUx.js";import"./useListState-CIowCSBM.js";import"./clsx-Ciqy0D92.js";import"./FieldError-BxDTCqc4.js";import"./Text-B2nr1LzC.js";import"./Form-Bss_g8S1.js";import"./useFormValidation-Co1lvxmd.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-BNbEiLTM.js";import"./OverlayArrow-CHYfjIjX.js";import"./useResizeObserver-nkPfv1jT.js";import"./PressResponder-BCAtUx8N.js";import"./useLocalizedStringFormatter-DyBJTu8f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-BaZl6s6K.js";import"./useField-CDQxQ9Nr.js";import"./Label-DHP9RXTf.js";import"./useLocalizedStringFormatter-40qb0x8d.js";import"./Button-oLX16Zh5.js";import"./Button.module-CcWMkJAG.js";import"./x-BNTRgTjP.js";import"./createLucideIcon-BuTuzAY3.js";import"./Heading-B6O0H_WJ.js";import"./info-Cf64K6wb.js";import"./Popover-BpYrTlcz.js";import"./Checkbox-Yz8bknxD.js";import"./useToggleState-DUzWEw3P.js";import"./Tag-DjGyl1hV.js";import"./useHighlightSelectionDescription-CRFeHxJz.js";import"./useUpdateEffect-DYRGxUiV.js";import"./useHasTabbableChild-Cs6Zx1GN.js";import"./chevron-down-CLEOWqPP.js";import"./Virtualizer-BkbtmGov.js";const Lt={component:f,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(n,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:le,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},i={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Hello"}),e.jsx(n,{children:"Goodbye"})]})}},r={},s={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},a={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:le.map(({id:t})=>t)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[o,de]=pe.useState(null);return e.jsx(f,{...t,value:o,onChange:de,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(y,{children:"Fruit"}),e.jsx(n,{id:"Apple",children:"Apple"}),e.jsx(n,{id:"Banana",children:"Banana"})]}),e.jsxs(S,{children:[e.jsx(y,{children:"Vegetables"}),e.jsx(n,{id:"Cabbage",children:"Cabbage"}),e.jsx(n,{id:"Broccoli",children:"Broccoli"})]})]})}},h={args:{...r.args,items:me,children:t=>e.jsxs(S,{id:t.name,children:[e.jsx(y,{children:t.name}),e.jsx(ue,{items:t.children,children:o=>e.jsx(n,{id:o.id,children:o.name})})]})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:o=>{o.preventDefault()},children:[e.jsx(f,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Long words",description:"just for test",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"JavaScript­Select­Component"}),e.jsx(n,{children:"En lång mening utan några långa ord, bara mellanslag"}),e.jsx(n,{children:"En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis"}),e.jsx(n,{children:"In an extraordinary demonstration of interdisciplinary collaboration, the hypermetropolitan university's neurophysiological research consortium unveiled a revolutionary apparatus designed to facilitate intercommunicational synchronization between artificially intelligent entities and biologically conscious organisms. The device, operating through electroencephalographic transmodulation and algorithmic contextualization, promises unprecedented advancements in cognitive enhancement, neuroplastic rehabilitation, and computational linguistics. Such an innovation, while theoretically transformative, also precipitates multifaceted bioethical deliberations concerning technopsychological autonomy and the potential dehumanization of consciousness through overmechanization."})]})}};var B,L,v;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(v=(L=i.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var j,I,w;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var D,A,K;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...(K=(A=s.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,V,C;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...(C=(V=a.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var E,z,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var k,T,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(R=(T=l.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var W,F,P;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,O,$;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  }
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var _,G,J;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var N,Q,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ae,ce;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};const vt=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","LongWords"];export{a as AllKeysSelected,u as DS872,s as DefaultValue,c as Disabled,l as DisabledOption,h as DynamicSections,d as Invalid,x as LongWords,r as Primary,b as RequiredSingleSelect,p as SelectAllEnabled,i as StaticItems,g as StaticSections,m as WithTags,vt as __namedExportsOrder,Lt as default};
