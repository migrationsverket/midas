import{o as ce,b as pe,j as g,r as de}from"./iframe-DHe7O3YB.js";import{S as f}from"./Select-apjpNqD2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-uG4DrbYs.js";import"./Tag-OqpM8DJf.js";import"./Button-BQbFjbVy.js";import"./Hidden-BwKN-Ct7.js";import"./useFocusRing-DNdg1RO0.js";import"./index-BpDGib3c.js";import"./index-BzXfAI-e.js";import"./useLabels-ByK8mPta.js";import"./useButton-CTl0n0ca.js";import"./Collection-Bdgm8S0Q.js";import"./index-DZlkqf27.js";import"./ListBox-C6UU2QM2.js";import"./DragAndDrop-CrHMTc0a.js";import"./getScrollParent-CvBDZYkN.js";import"./scrollIntoView-BfnXnyY_.js";import"./Separator-DPgq4WUN.js";import"./SelectionManager-DQc8Lfz5.js";import"./useEvent-dyC_FZrC.js";import"./SelectionIndicator-BgrmwFuS.js";import"./useDescription-BnPwjth8.js";import"./useControlledState-Cr1hZmrx.js";import"./ListKeyboardDelegate-CvIzD7Zk.js";import"./RSPContexts-BqA7yCGR.js";import"./Text-fzIvjG6X.js";import"./inertValue-DSW7U0kP.js";import"./useListState-DAdbgnQR.js";import"./useHighlightSelectionDescription-BavXuzNp.js";import"./useUpdateEffect-3f09mw3i.js";import"./useLocalizedStringFormatter-s0APVaC7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-gt8XyaSa.js";import"./useField-D9UztZcR.js";import"./Button-zyoNupAk.js";import"./Button.module-CcWMkJAG.js";import"./x-DcZTwviR.js";import"./createLucideIcon-BLSjYB_Y.js";import"./TextField-DUb_tqd3.js";import"./FieldError-DxPlW7kP.js";import"./Text-BWJyzLHL.js";import"./Form-qWuzbxkZ.js";import"./useFormValidation-D5dvEuW7.js";import"./Group-CM8zcKft.js";import"./Input-BSuN2rIe.js";import"./useTextField-ClorvVl6.js";import"./Checkbox-Z9Fx-GbY.js";import"./VisuallyHidden-ClxVrDZx.js";import"./useToggleState-BSkwPlWV.js";import"./check-T_ra17Ah.js";import"./ListBoxSection-cSQUDEpV.js";import"./Virtualizer-BdZenPhv.js";import"./useResizeObserver-DdLjGoYb.js";import"./Dialog-BJf0SFJ5.js";import"./OverlayArrow-CQFkkWT7.js";import"./PressResponder-C8pq8zlF.js";import"./useLocalizedStringFormatter-DhR4sC5N.js";import"./chevron-down-Dzm2AWhF.js";import"./Label-CgPuPOyR.js";import"./Heading-C40971bE.js";import"./info-C0s4yH1i.js";import"./Popover-CAMCg5KX.js";const vr={component:f,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:ce,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},e={},s={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])}},t={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"}},o={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},a={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},n={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{isInvalid:!0,errorMessage:"Error msg"}},l={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])}},c={args:{selectionMode:"multiple",isSelectableAll:!0}},r={args:{selectionMode:"multiple",isClearable:!1}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...e.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:S=>{const[b,le]=de.useState(new Set);return g.jsx(f,{...S,selectedKeys:b,onSelectionChange:le,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},d={args:{...e.args,options:pe}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:S=>g.jsxs("form",{onSubmit:b=>{b.preventDefault()},children:[g.jsx(f,{...S}),g.jsx("button",{type:"submit",children:"submit"})]})},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"}};var y,h,K;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(K=(h=e.parameters)==null?void 0:h.docs)==null?void 0:K.source}}};var w,M,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
