import{o as ae,j as e,b as ne,r as ce}from"./iframe-DPnaga4e.js";import{$ as le}from"./Collection-C7sTy2fH.js";import{L as x,a as h}from"./ListBoxSection-CnYfLOYg.js";import{S as B}from"./Select-BlmN7VIx.js";import{L as s}from"./ListBoxItem-DoDBd8us.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-Biyx0vtM.js";import"./index-Di3Pn6hf.js";import"./index-imm0VGrB.js";import"./useFocusRing-tXBvhons.js";import"./utils-C_NLF2I3.js";import"./clsx-B-dksMZM.js";import"./index-bWinJ1hv.js";import"./ListBox-lPPe9qg6.js";import"./DragAndDrop-C18NnBGo.js";import"./getScrollParent-DZ4pthAv.js";import"./scrollIntoView-CZU5SlwL.js";import"./Separator-0yb5a5Uw.js";import"./SelectionManager-C9rDJ8qv.js";import"./useEvent-DWH6GKUk.js";import"./SelectionIndicator-DBE8P_WO.js";import"./useDescription-Cy1nSfO4.js";import"./useControlledState-CE0QgSxB.js";import"./ListKeyboardDelegate-Bd9eV7ms.js";import"./RSPContexts-LRQnAeUj.js";import"./Text-CBe2rppe.js";import"./inertValue-CLMQDKpo.js";import"./Button-M1DRFAiy.js";import"./useLabels-CKVCeKfJ.js";import"./useButton-57XPWxvY.js";import"./useListState-DzMm2VMu.js";import"./clsx-Ciqy0D92.js";import"./FieldError-BdW8NjMe.js";import"./Text-Ckenc-vy.js";import"./Form-CZtmuM40.js";import"./useFormValidation-FrKmMlDQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-CuFD0l_k.js";import"./OverlayArrow-BeuJIEjE.js";import"./useResizeObserver-BVgMBA8-.js";import"./PressResponder-ZXnADFG2.js";import"./useLocalizedStringFormatter-DmrWiGnk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-CHl9X1zI.js";import"./useField-BpPDdgVp.js";import"./Label-CR66YL23.js";import"./useLocalizedStringFormatter-D0MEHzT7.js";import"./Button-kkpZemD7.js";import"./Button.module-CcWMkJAG.js";import"./x-q1YnQpWs.js";import"./createLucideIcon-BvWvcJ15.js";import"./Heading-Dj8d7lO4.js";import"./info-C5AR4LV4.js";import"./Popover-fip1DfEl.js";import"./Checkbox-CKP_8UQ9.js";import"./useToggleState-CMDw3bqD.js";import"./Tag-_x2N6CFz.js";import"./useHighlightSelectionDescription-CojPwolM.js";import"./useUpdateEffect-D0mQZewF.js";import"./useHasTabbableChild-D13HGBsk.js";import"./chevron-down-zbF7WvX9.js";import"./Virtualizer-B8DaloYg.js";const hr={component:B,title:"Components/Select",tags:["autodocs"],args:{children:r=>e.jsx(s,{...r,children:r.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:ae,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},a={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Hello"}),e.jsx(s,{children:"Goodbye"})]})}},o={},i={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},n={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:ae.map(({id:r})=>r)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:r=>{const[t,ie]=ce.useState(null);return e.jsx(B,{...r,value:t,onChange:ie,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Fruit"}),e.jsx(s,{id:"Apple",children:"Apple"}),e.jsx(s,{id:"Banana",children:"Banana"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Vegetables"}),e.jsx(s,{id:"Cabbage",children:"Cabbage"}),e.jsx(s,{id:"Broccoli",children:"Broccoli"})]})]})}},b={args:{...o.args,items:ne,children:r=>e.jsxs(x,{id:r.name,children:[e.jsx(h,{children:r.name}),e.jsx(le,{items:r.children,children:t=>e.jsx(s,{id:t.id,children:t.name})})]})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:r=>e.jsxs("form",{onSubmit:t=>{t.preventDefault()},children:[e.jsx(B,{...r}),e.jsx("button",{type:"submit",children:"submit"})]})};var f,L,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(y=(L=a.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var j,I,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var D,A,K;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...(K=(A=i.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,w,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...(V=(w=n.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var C,H,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var E,R,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var T,q,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,W,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  }
}`,...($=(W=m.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var _,G,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,N,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,te,oe;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Br=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect"];export{n as AllKeysSelected,u as DS872,i as DefaultValue,c as Disabled,l as DisabledOption,b as DynamicSections,d as Invalid,o as Primary,S as RequiredSingleSelect,p as SelectAllEnabled,a as StaticItems,g as StaticSections,m as WithTags,Br as __namedExportsOrder,hr as default};
