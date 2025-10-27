import{o as ce,b as pe,j as g,r as de}from"./iframe-DrB9qZTI.js";import{S as f}from"./Select-C_FupFc4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-CInG6W3X.js";import"./Tag-B-qpqI9D.js";import"./Button-CXUNspnl.js";import"./Hidden-CfizYyXd.js";import"./useFocusRing-Bq-FvUHV.js";import"./index-D5KzPf6k.js";import"./index-DfIG-et7.js";import"./useLabels-soz90g56.js";import"./useButton-cF82fNVP.js";import"./Collection-DOI60D6p.js";import"./index-CBcC_KMF.js";import"./ListBox-CrA5Vj7x.js";import"./DragAndDrop-Ba8RWtkR.js";import"./getScrollParent-Bx1KYYcF.js";import"./scrollIntoView-ANtPBZbe.js";import"./Separator-CEzZGHar.js";import"./SelectionManager-fhVg1sA7.js";import"./useEvent-BKNlpUEC.js";import"./SelectionIndicator-BvENuxGq.js";import"./useDescription-BSAVr3Ry.js";import"./useControlledState-CIzzj-r4.js";import"./ListKeyboardDelegate-DCtLtuGF.js";import"./RSPContexts-DIw6ykPW.js";import"./Text-CepI4xEo.js";import"./inertValue-BTBSufgg.js";import"./useListState-D110dMCj.js";import"./useHighlightSelectionDescription-TtiyUdS2.js";import"./useUpdateEffect-D44lhmn-.js";import"./useLocalizedStringFormatter-CZ3U7jKg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DeAtaF0J.js";import"./useField-D5KtFbs5.js";import"./Button-yBTmUS_M.js";import"./Button.module-CcWMkJAG.js";import"./x-ChoxX23J.js";import"./createLucideIcon-BLlFR1Nx.js";import"./TextField-qWdMOUMI.js";import"./FieldError-Dk-uAcrK.js";import"./Text-DxFbSKvE.js";import"./Form-BiDHGWFe.js";import"./useFormValidation-J3VyGkUV.js";import"./Group-0oFgwG6g.js";import"./Input-BZ-GE_qp.js";import"./useTextField-CsheQ9jX.js";import"./Checkbox-7cjJbmHY.js";import"./VisuallyHidden-57DYoABU.js";import"./useToggleState-sgXx_6kU.js";import"./check-DtpUhVp4.js";import"./ListBoxSection-XvFXRCWC.js";import"./Virtualizer-gK_zC3UO.js";import"./useResizeObserver-B7B4wUnz.js";import"./Dialog-D1C6FjAe.js";import"./OverlayArrow-CNPaV-QQ.js";import"./PressResponder-DVKLPMgZ.js";import"./useLocalizedStringFormatter-Dt2a-aZg.js";import"./chevron-down-xk5KMdab.js";import"./Label-DbcP9VX_.js";import"./Heading-Nc0xAJcY.js";import"./info-BKdKlqNK.js";import"./Popover-DQu9Y3LC.js";const vr={component:f,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:ce,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},e={},s={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])}},t={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"}},o={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},a={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},n={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{isInvalid:!0,errorMessage:"Error msg"}},l={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])}},c={args:{selectionMode:"multiple",isSelectableAll:!0}},r={args:{selectionMode:"multiple",isClearable:!1}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...e.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:S=>{const[b,le]=de.useState(new Set);return g.jsx(f,{...S,selectedKeys:b,onSelectionChange:le,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},d={args:{...e.args,options:pe}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:S=>g.jsxs("form",{onSubmit:b=>{b.preventDefault()},children:[g.jsx(f,{...S}),g.jsx("button",{type:"submit",children:"submit"})]})},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"}};var y,h,K;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(K=(h=e.parameters)==null?void 0:h.docs)==null?void 0:K.source}}};var w,M,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: new Set(['kiwi'])
  }
}`,...(v=(M=s.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var D,x,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultSelectedKeys: new Set(['kiwi', 'banana']),
    selectionMode: 'multiple'
  }
}`,...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var C,k,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var E,T,R;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(T=a.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var P,q,I;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var O,W,N;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,_,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: new Set(['apple', 'kiwi'])
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var L,B,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J,Q,U;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(J=(H=r.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(U=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Primary.args,
    selectionMode: 'single',
    isClearable: false,
    label: 'Ärende',
    placeholder: 'Välj ärende'
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Selection>(new Set());
    return <Select {...args} selectedKeys={selectedKey} onSelectionChange={setSelectedKey} options={[{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    options: optionsWithSections
  }
}`,...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,te,oe;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ne,ie;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'multiple'
  }
}`,...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Dr=["Primary","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","MultiSelectTests"];export{o as AllKeysSelected,p as DS872,s as DefaultSelectedKey,t as DefaultSelectedKeys,a as Disabled,n as DisabledOption,i as Invalid,u as MultiSelectTests,r as NotClearable,e as Primary,m as RequiredSingleSelect,d as Sectioned,c as SelectAllEnabled,l as WithTags,Dr as __namedExportsOrder,vr as default};
