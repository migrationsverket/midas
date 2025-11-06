import{o as ae,j as e,b as ne,r as ce}from"./iframe-DtxoFKwo.js";import{$ as le}from"./Collection-C_3kFyjg.js";import{L as x,a as h}from"./ListBoxSection-C8oh99yK.js";import{S as B}from"./Select-C2Qi8xFt.js";import{L as s}from"./ListBoxItem-Ben1CFAG.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-BHiOEcku.js";import"./index-CtRPRv0Z.js";import"./index-B505Biom.js";import"./useFocusRing-CdyWXIln.js";import"./utils-DIWkIshB.js";import"./clsx-B-dksMZM.js";import"./index-ZmpB6TO1.js";import"./ListBox-By23T7E-.js";import"./DragAndDrop-CSIUOQtB.js";import"./getScrollParent-Bw9ZEnJh.js";import"./scrollIntoView-WFVR6_rQ.js";import"./Separator-BU6eY9vc.js";import"./SelectionManager-FcOlnM9k.js";import"./useEvent-otJ549iY.js";import"./SelectionIndicator-B37qDg19.js";import"./useDescription-Dpo2AssW.js";import"./useControlledState-Cf9Dm7V0.js";import"./ListKeyboardDelegate-CIi-P_r3.js";import"./RSPContexts-XAz2G-XR.js";import"./Text-D4YkJF8T.js";import"./inertValue-dBLX8RpV.js";import"./Button-BE_Do470.js";import"./useLabels-D54vKqlx.js";import"./useButton-mneyLtoN.js";import"./useListState-pgXVzsl_.js";import"./clsx-Ciqy0D92.js";import"./FieldError-BDMwdtmq.js";import"./Text-CZZKswuy.js";import"./Form-BrTz3pE_.js";import"./useFormValidation-Do28Vedx.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-XV2aWCU0.js";import"./OverlayArrow-22WDSqob.js";import"./useResizeObserver-DsQ7K_yQ.js";import"./PressResponder-h6fhfTfY.js";import"./useLocalizedStringFormatter-CQ08zqg5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-Cxgi0rpi.js";import"./useField-DT9fx3LY.js";import"./Label-BjNdcq1j.js";import"./useLocalizedStringFormatter-C_aITI_T.js";import"./Button-B7Jqdyxh.js";import"./Button.module-CcWMkJAG.js";import"./x-7fEGHR51.js";import"./createLucideIcon-Ba6NwseB.js";import"./Heading-CYUOCyeI.js";import"./info-Bh3PztBZ.js";import"./Popover-C0JxeGyN.js";import"./Checkbox-CBA__-y7.js";import"./useToggleState-dui3q8c0.js";import"./Tag-CwAHxlOt.js";import"./useHighlightSelectionDescription-BW6bZxrU.js";import"./useUpdateEffect-DTKFOHkj.js";import"./useHasTabbableChild-CmktdXeH.js";import"./chevron-down-bq-yHeC6.js";import"./Virtualizer-BHn2sOk2.js";const hr={component:B,title:"Components/Select",tags:["autodocs"],args:{children:r=>e.jsx(s,{...r,children:r.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:ae,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},a={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Hello"}),e.jsx(s,{children:"Goodbye"})]})}},o={},i={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},n={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:ae.map(({id:r})=>r)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:r=>{const[t,ie]=ce.useState(null);return e.jsx(B,{...r,value:t,onChange:ie,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Fruit"}),e.jsx(s,{id:"Apple",children:"Apple"}),e.jsx(s,{id:"Banana",children:"Banana"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Vegetables"}),e.jsx(s,{id:"Cabbage",children:"Cabbage"}),e.jsx(s,{id:"Broccoli",children:"Broccoli"})]})]})}},b={args:{...o.args,items:ne,children:r=>e.jsxs(x,{id:r.name,children:[e.jsx(h,{children:r.name}),e.jsx(le,{items:r.children,children:t=>e.jsx(s,{id:t.id,children:t.name})})]})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:r=>e.jsxs("form",{onSubmit:t=>{t.preventDefault()},children:[e.jsx(B,{...r}),e.jsx("button",{type:"submit",children:"submit"})]})};var f,L,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
