import{o as ce,b as pe,j as g,r as de}from"./iframe-C1xkKcfZ.js";import{S as f}from"./Select-ozCOdg5i.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-CIwcQmyM.js";import"./Tag-CYJc4jyb.js";import"./Button-3GQO97zm.js";import"./Hidden-CP0qe3cu.js";import"./useFocusRing-BisJsM0Y.js";import"./index-m-lDxEOy.js";import"./index-DbI_VynI.js";import"./useLabels-DecHiXST.js";import"./useButton-Dsc1RD5R.js";import"./Collection-CXhOpkpv.js";import"./index-B8aw3egT.js";import"./ListBox-BlhC76_h.js";import"./DragAndDrop-OoPrv2HM.js";import"./getScrollParent-VUJGe-lS.js";import"./scrollIntoView-C6qeH3Y-.js";import"./Separator-CbNNq_7V.js";import"./SelectionManager-CV7I6TdW.js";import"./useEvent-CXA8x_uh.js";import"./SelectionIndicator-BQC2TXwV.js";import"./useDescription-Cv4ZGqtk.js";import"./useControlledState-B5NDMWqh.js";import"./ListKeyboardDelegate-Cz_QUPOh.js";import"./RSPContexts-ClEziChI.js";import"./Text-CMQFVGEq.js";import"./inertValue-DsQSTo3g.js";import"./useListState-DGPlsUhR.js";import"./useHighlightSelectionDescription-DXi_BtzI.js";import"./useUpdateEffect-CJvx5dE3.js";import"./useLocalizedStringFormatter-zf0PXjQ3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DDf7zirD.js";import"./useField-Gl5FKzeb.js";import"./Button-BbFNfB1b.js";import"./Button.module-CcWMkJAG.js";import"./x-B8qCCVdF.js";import"./createLucideIcon-a3ujvLJc.js";import"./TextField-pnY4DCL5.js";import"./FieldError-Cl8Vhntk.js";import"./Text-CPFq_c7k.js";import"./Form-UYTfNcr1.js";import"./useFormValidation-BQfyT2h7.js";import"./Group-B6CySLjt.js";import"./Input-Bq3_hZzA.js";import"./useTextField-CmJHQncH.js";import"./Checkbox-Dux0wKAh.js";import"./VisuallyHidden-DMZktvKr.js";import"./useToggleState-DH0ke7P7.js";import"./check-BKwiJel4.js";import"./ListBoxSection-DS0g0aCS.js";import"./Virtualizer-B3Xx1tVO.js";import"./useResizeObserver-oYvemm8W.js";import"./Dialog-DZUpTUY6.js";import"./OverlayArrow-DoJCGCtR.js";import"./PressResponder-C9gCcdxY.js";import"./useLocalizedStringFormatter-rAvam-oH.js";import"./chevron-down-k-WoLrZ_.js";import"./Label-qeJD_ooN.js";import"./Heading-BYGGaevl.js";import"./info-D_b93ni_.js";import"./Popover-ZZEZxZX0.js";const vr={component:f,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:ce,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},e={},s={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])}},t={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"}},o={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},a={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},n={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{isInvalid:!0,errorMessage:"Error msg"}},l={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])}},c={args:{selectionMode:"multiple",isSelectableAll:!0}},r={args:{selectionMode:"multiple",isClearable:!1}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...e.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:S=>{const[b,le]=de.useState(new Set);return g.jsx(f,{...S,selectedKeys:b,onSelectionChange:le,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},d={args:{...e.args,options:pe}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:S=>g.jsxs("form",{onSubmit:b=>{b.preventDefault()},children:[g.jsx(f,{...S}),g.jsx("button",{type:"submit",children:"submit"})]})},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"}};var y,h,K;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(K=(h=e.parameters)==null?void 0:h.docs)==null?void 0:K.source}}};var w,M,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
