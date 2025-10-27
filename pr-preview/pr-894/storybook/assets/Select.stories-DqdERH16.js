import{o as ye,b as we,j as v,r as he}from"./iframe-odwdLjhJ.js";import{S as f}from"./Select-KQl9u6O8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-BfXlgJWI.js";import"./Tag-IX95m38K.js";import"./Button-CHIcEKTW.js";import"./Hidden-f5i2DQHq.js";import"./useFocusRing-D_0n3iry.js";import"./index-gUgSV9Od.js";import"./index-Y-mQe5FE.js";import"./useLabels-Co1S2KyV.js";import"./useButton-BxE9BcYr.js";import"./Collection-Castb3qJ.js";import"./index-5o94CGW_.js";import"./ListBox-D4su9LZ0.js";import"./DragAndDrop-ChTph38Y.js";import"./getScrollParent-SThPPMwY.js";import"./scrollIntoView-Bx0r-2kp.js";import"./Separator-CTTTZ56T.js";import"./SelectionManager-rKa6E0TN.js";import"./useEvent-CCjyJx7k.js";import"./SelectionIndicator-DXCDOo7y.js";import"./useDescription-Imkgoqqx.js";import"./useControlledState-fx81Le39.js";import"./ListKeyboardDelegate-BY0iTWI6.js";import"./RSPContexts-CU7vv0tP.js";import"./Text-D1-v39j4.js";import"./inertValue-Df7fHeNT.js";import"./useListState-C4ixAA-z.js";import"./useHighlightSelectionDescription-z99PQfoL.js";import"./useUpdateEffect-BZ02Qhv2.js";import"./useLocalizedStringFormatter-DcZOaAjj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CiWuwUqh.js";import"./useField-CHm8F9NL.js";import"./Button-DUkfVRlk.js";import"./Button.module-CcWMkJAG.js";import"./x-ByXAbeVe.js";import"./createLucideIcon-DT6ESbmV.js";import"./TextField-D-0CRexk.js";import"./FieldError-DM2aQdrw.js";import"./Text-Bc8jy4b7.js";import"./Form-WVETeLgZ.js";import"./useFormValidation-DqnNYfez.js";import"./Group-QD2CEpU4.js";import"./Input-BwwHtIHA.js";import"./useTextField-Xyn3yYLY.js";import"./Checkbox-BivswT3R.js";import"./VisuallyHidden-Cg-saB8v.js";import"./useToggleState-BZuaIU-Y.js";import"./check-hxjMcmUd.js";import"./ListBoxSection-szWs9jQj.js";import"./Virtualizer-D2_Pl-Tw.js";import"./useResizeObserver-IHOSW5AJ.js";import"./Dialog-CNJSsRcs.js";import"./OverlayArrow-BJUOFPmC.js";import"./PressResponder-DlvMD2kq.js";import"./useLocalizedStringFormatter-Czwx8J6G.js";import"./chevron-down-CVzwb29c.js";import"./Label-CjKUqSZU.js";import"./Heading-BAN08N4A.js";import"./info-PHroukmQ.js";import"./Popover-CBbH-QV4.js";const{expect:i,fn:k,spyOn:ve,userEvent:e}=__STORYBOOK_MODULE_TEST__,fe=k(),E=k(),Ra={component:f,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:ye,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:fe,size:"large"}},r={},l={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])}},c={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"}},p={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},d={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},m={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},u={args:{isInvalid:!0,errorMessage:"Error msg"}},b={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])}},g={args:{selectionMode:"multiple",isSelectableAll:!0}},o={args:{selectionMode:"multiple",isClearable:!1}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[t,s]=he.useState(new Set);return v.jsx(f,{...a,selectedKeys:t,onSelectionChange:s,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:t,canvas:s})=>{await t("It should be possible to select an item with an ID greater than 9",async()=>{await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[Space]"),i(s.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},y={args:{...r.args,options:we},play:async({step:a})=>{const t=ve(console,"warn").mockImplementation(k());await a("It should not warn about missing aria labels when toggling the select open state",async()=>{await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[Space]"),await i(t).toHaveBeenCalledTimes(0)})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:a=>v.jsxs("form",{onSubmit:t=>{t.preventDefault(),E()},children:[v.jsx(f,{...a}),v.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:a})=>{await a("It should give a validation error if the user submitted without selecting an option",async()=>{await e.tab(),await e.tab(),await e.keyboard("[Enter]"),await i(E).not.toHaveBeenCalled()})}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...n,args:{...n.args,selectionMode:"multiple"}},h={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:a,step:t,args:{label:s}})=>{await t("It should be possible to deselect all items to empty the selection",async()=>{await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[Space]"),await e.keyboard("[Space]"),await e.keyboard("[Escape]"),await i(a.getByLabelText(`${s}-hidden`)).toHaveDisplayValue([])}),await t("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await e.keyboard("[Space]"),await e.keyboard("[ArrowDown]"),await e.keyboard("[Space]"),await e.keyboard("[Escape]"),await i(a.getByLabelText(`${s}-hidden`)).not.toHaveDisplayValue([])})}};var K,D,x;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(x=(D=r.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var M,I,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: new Set(['kiwi'])
  }
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var C,A,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultSelectedKeys: new Set(['kiwi', 'banana']),
    selectionMode: 'multiple'
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,H,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,q,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(q=d.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var V,_,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var W,$,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(N=($=u.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var z,U,Y;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: new Set(['apple', 'kiwi'])
  }
}`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z,ee,ae;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(Z=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,se,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
  },
  play: async ({
    args,
    step,
    canvas
  }) => {
    await step('It should be possible to select an item with an ID greater than 9', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      expect(canvas.getByLabelText(args.label + '-hidden')).toHaveDisplayValue(['tolv']);
    });
  }
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,oe,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    options: optionsWithSections
  },
  play: async ({
    step
  }) => {
    const warn = spyOn(console, 'warn').mockImplementation(fn());
    await step('It should not warn about missing aria labels when toggling the select open state', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await expect(warn).toHaveBeenCalledTimes(0);
    });
  }
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,pe;n.parameters={...n.parameters,docs:{...(le=n.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    onSubmit();
  }}>
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>,
  play: async ({
    step
  }) => {
    await step('It should give a validation error if the user submitted without selecting an option', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(onSubmit).not.toHaveBeenCalled();
    });
  }
}`,...(pe=(ce=n.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,ue;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  ...RequiredSingleSelect,
  args: {
    ...RequiredSingleSelect.args,
    selectionMode: 'multiple'
  }
}`,...(ue=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var be,ge,Se;h.parameters={...h.parameters,docs:{...(be=h.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'multiple'
  },
  play: async ({
    canvas,
    step,
    args: {
      label
    }
  }) => {
    await step('It should be possible to deselect all items to empty the selection', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      await expect(canvas.getByLabelText(\`\${label as string}-hidden\`)).toHaveDisplayValue([]);
    });
    await step('It should be possible to press escape to exit the select without clearing the selections made', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      await expect(canvas.getByLabelText(\`\${label as string}-hidden\`)).not.toHaveDisplayValue([]);
    });
  }
}`,...(Se=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};const Ha=["Primary","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{p as AllKeysSelected,S as DS872,l as DefaultSelectedKey,c as DefaultSelectedKeys,d as Disabled,m as DisabledOption,u as Invalid,h as MultiSelectTests,o as NotClearable,r as Primary,w as RequiredMultiSelect,n as RequiredSingleSelect,y as Sectioned,g as SelectAllEnabled,b as WithTags,Ha as __namedExportsOrder,Ra as default};
