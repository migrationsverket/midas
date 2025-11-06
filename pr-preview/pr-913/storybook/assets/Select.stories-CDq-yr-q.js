import{o as le,j as e,b as me,r as pe}from"./iframe-BK4BwmKq.js";import{$ as ue}from"./Collection-n9SXsJho.js";import{L as h,a as B}from"./ListBoxSection-RyHt7iQr.js";import{S as L}from"./Select-DXc5X14O.js";import{L as s}from"./ListBoxItem-CQHSBo0O.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-AX6UhX2n.js";import"./index-CO8NcyIM.js";import"./index-D5OE4sho.js";import"./useFocusRing-ozrB5mgy.js";import"./utils-BP7BScAh.js";import"./clsx-B-dksMZM.js";import"./index-Cd_j7zYh.js";import"./ListBox-DulFcu0d.js";import"./DragAndDrop-DWioItEf.js";import"./getScrollParent-Bk0MkW9i.js";import"./scrollIntoView-B9WQNtZu.js";import"./Separator-BZ0liBAQ.js";import"./SelectionManager-Bu-h1vcl.js";import"./useEvent-D9ykXVAs.js";import"./SelectionIndicator-Sfdcakz_.js";import"./useDescription-CpAuGt8A.js";import"./useControlledState-CMke2wqe.js";import"./ListKeyboardDelegate-Dwecqa0L.js";import"./RSPContexts-NqcdADeO.js";import"./Text-CcAUJWh3.js";import"./inertValue-CPNqRb98.js";import"./Button-DGeDhjgN.js";import"./useLabels-Rxot5ufl.js";import"./useButton-LpXCSEu1.js";import"./useListState-CGTzv_Nj.js";import"./clsx-Ciqy0D92.js";import"./FieldError-8BQoXSKI.js";import"./Text-Cd8SAJrp.js";import"./Form-BYkH_Hny.js";import"./useFormValidation-D2Ahs5V9.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-D3RZoW3E.js";import"./OverlayArrow-t4m-ev-s.js";import"./useResizeObserver-CkuVsOKE.js";import"./PressResponder-D7jPiYFF.js";import"./useLocalizedStringFormatter-CmK81N45.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-DMqxn5ui.js";import"./useField-B4CEvdol.js";import"./Label-DNKv1pT2.js";import"./useLocalizedStringFormatter-TH88mbD1.js";import"./Button-GkidKpkY.js";import"./Button.module-CcWMkJAG.js";import"./x-BYtBCtn3.js";import"./createLucideIcon-uVjZM-p7.js";import"./Heading-C9AAkBGE.js";import"./info-hyhiMJUl.js";import"./Popover-BqP-6hw4.js";import"./Checkbox-CwqL_5ry.js";import"./useToggleState-RThxQ5SL.js";import"./Tag-CUNCugFp.js";import"./useHighlightSelectionDescription-ByIo-8Mk.js";import"./useUpdateEffect-_BJ1bh67.js";import"./useHasTabbableChild-Dq7v339m.js";import"./chevron-down-DAhf2UDz.js";import"./Virtualizer-gdBdbeeC.js";const jr={component:L,title:"Components/Select",tags:["autodocs"],args:{children:r=>e.jsx(s,{...r,children:r.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:le,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},n={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Hello"}),e.jsx(s,{children:"Goodbye"})]})}},o={},a={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},i={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:le.map(({id:r})=>r)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:r=>{const[t,de]=pe.useState(null);return e.jsx(L,{...r,value:t,onChange:de,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(B,{children:"Fruit"}),e.jsx(s,{id:"Apple",children:"Apple"}),e.jsx(s,{id:"Banana",children:"Banana"})]}),e.jsxs(h,{children:[e.jsx(B,{children:"Vegetables"}),e.jsx(s,{id:"Cabbage",children:"Cabbage"}),e.jsx(s,{id:"Broccoli",children:"Broccoli"})]})]})}},b={args:{...o.args,items:me,children:r=>e.jsxs(h,{id:r.name,children:[e.jsx(B,{children:r.name}),e.jsx(ue,{items:r.children,children:t=>e.jsx(s,{id:t.id,children:t.name})})]})}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:r=>e.jsxs("form",{onSubmit:t=>{t.preventDefault()},children:[e.jsx(L,{...r}),e.jsx("button",{type:"submit",children:"submit"})]})},S={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Long words",description:"just for test",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"En lång mening utan några långa ord, bara mellanslag"}),e.jsx(s,{children:"En lång mening med ett jättelångt ord: pneumonoultramicroscopicsilicovolcanoconiosis"})]})}};var f,j,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var I,v,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var w,A,K;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...(K=(A=a.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,V,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var C,H,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var R,W,F;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,T,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var O,$,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  }
}`,...(_=($=m.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var G,z,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var N,Q,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,ie,ce;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <ListBoxItem>
          En lång mening utan några långa ord, bara mellanslag
        </ListBoxItem>
        <ListBoxItem>
          En lång mening med ett jättelångt ord:
          pneumonoultramicroscopicsilicovolcanoconiosis
        </ListBoxItem>
      </>
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const yr=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","LongWords"];export{i as AllKeysSelected,u as DS872,a as DefaultValue,c as Disabled,l as DisabledOption,b as DynamicSections,d as Invalid,S as LongWords,o as Primary,x as RequiredSingleSelect,p as SelectAllEnabled,n as StaticItems,g as StaticSections,m as WithTags,yr as __namedExportsOrder,jr as default};
