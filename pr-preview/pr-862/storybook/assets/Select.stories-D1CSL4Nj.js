import{o as c,d as xe,j as V,r as Be}from"./iframe-D6D3K-aQ.js";import{S as k}from"./Select-_2PGuKmB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-8NXnZt9D.js";import"./Tag-C6V9M03H.js";import"./Button-Dutn2UJh.js";import"./Hidden-Bnv0XruJ.js";import"./useFocusRing-BDdoqUbs.js";import"./index-B111u4e2.js";import"./index-CkH952uE.js";import"./useLabels-7CJ5XO9x.js";import"./useButton-CBuzLm6I.js";import"./Collection-BarC4WRT.js";import"./index-Bx8ZkdzW.js";import"./ListBox-BHRdsuEF.js";import"./DragAndDrop-D0TP5j6F.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D0JYxpFR.js";import"./SelectionManager-DCPdtUb2.js";import"./useEvent-BbiwRRw4.js";import"./FocusScope-HtELhbvT.js";import"./useDescription-DcLxz0oY.js";import"./useControlledState-DSMKeP6m.js";import"./context-CeqNEQ9w.js";import"./Text-CRwR8S11.js";import"./inertValue-DPhYL9WI.js";import"./useListState-B9iUmLA7.js";import"./useHighlightSelectionDescription-BVMTyrsQ.js";import"./useUpdateEffect-Blp1YTdd.js";import"./useLocalizedStringFormatter-B5_FKKgr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CXGjJKlD.js";import"./useField-C4B2WCZE.js";import"./Button-C89H8vUo.js";import"./Button.module-CcWMkJAG.js";import"./x-R9yZnylX.js";import"./createLucideIcon-ZlwLd3nc.js";import"./TextField-BGTzXgTa.js";import"./FieldError-wZwTZDn3.js";import"./Text-CyYYqzHS.js";import"./Form-HTA4uZLG.js";import"./useFormValidation-uiHVILup.js";import"./Group-DkRQlUkc.js";import"./Input-DYegzmkh.js";import"./useTextField-tfweB5Vc.js";import"./Checkbox-C3r2UY4x.js";import"./RSPContexts-DVS3MyLV.js";import"./VisuallyHidden-CKZy1p9G.js";import"./useToggleState-ChptHVUf.js";import"./check-Bv5H-K0B.js";import"./ListBoxSection-DpC_tAU4.js";import"./Virtualizer-CUqSeIF7.js";import"./useResizeObserver-Cg1CWVuV.js";import"./Dialog-sWoZxtT8.js";import"./OverlayArrow-nayYjZLk.js";import"./PressResponder-CxfOxXhY.js";import"./useObserveElement-BSrJp6-z.js";import"./useLocalizedStringFormatter-CCiN5bcW.js";import"./chevron-down-B3doX4xv.js";import"./Label-tdFlceSw.js";import"./Heading-XKPSM-mw.js";import"./info-BgnaGC3E.js";import"./Popover-BJEvt7Yk.js";const{expect:s,fn:T,spyOn:Ve,userEvent:a}=__STORYBOOK_MODULE_TEST__,fe=T(),E=T(),Ra={component:k,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:c,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:fe,size:"large"}},r={play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(c[0].name,{selector:"span"});await s(i).toHaveDisplayValue([c[0].name]),await s(o).toBeVisible()}),await n("it should change size according to size prop",async()=>{await s(e.getByRole("button")).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},d={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("Kiwi",{selector:"span"});s(i).toHaveDisplayValue(["Kiwi"]),s(o).toBeVisible()})}},u={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Banana","Kiwi"]),s(o).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(/valda/,{selector:"span"});s(i).toHaveDisplayValue(c.map(({name:f})=>f)),s(o).toBeVisible()})}},b={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},w={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Apple","Kiwi"]),s(o).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},S={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(`${c.length} valda`,{selector:"span"});s(i).toHaveDisplayValue(c.map(({name:f})=>f)),s(o).toBeVisible()})}},p={args:{selectionMode:"multiple",isClearable:!1}},h={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[e,n]=Be.useState(new Set);return V.jsx(k,{...t,selectedKeys:e,onSelectionChange:n,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:t,step:e,canvas:n})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),s(n.getByLabelText(t.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},v={args:{...r.args,options:xe},play:async({step:t})=>{const e=Ve(console,"warn").mockImplementation(T());await t("It should not warn about missing aria labels when toggling the select open state",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await s(e).toHaveBeenCalledTimes(0)})}},l={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>V.jsxs("form",{onSubmit:e=>{e.preventDefault(),E()},children:[V.jsx(k,{...t}),V.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:t})=>{await t("It should give a validation error if the user submitted without selecting an option",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await s(E).not.toHaveBeenCalled()})}},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...l,args:{...l.args,selectionMode:"multiple"}},B={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:t,step:e,args:{label:n}})=>{await e("It should be possible to deselect all items to empty the selection",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).toHaveDisplayValue([])}),await e("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await a.keyboard("[Space]"),await a.keyboard("[ArrowDown]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).not.toHaveDisplayValue([])})}};var K,D,I;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should be possible to select an item using the keyboard', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText(options[0].name, {
        selector: 'span'
      });
      await expect(hiddenSelect).toHaveDisplayValue([options[0].name]);
      await expect(visibleValue).toBeVisible();
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,H,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: new Set(['kiwi'])
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected value', async () => {
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText('Kiwi', {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue(['Kiwi']);
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,$,C;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultSelectedKeys: new Set(['kiwi', 'banana']),
    selectionMode: 'multiple'
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected value', async () => {
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText('2 valda', {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue(['Banana', 'Kiwi']);
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(C=($=u.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var R,O,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText(/valda/, {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue(options.map(({
        name
      }) => name));
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,_,z;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(_=b.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var N,W,P;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=(W=y.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var U,Y,F;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(F=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: new Set(['apple', 'kiwi'])
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText('2 valda', {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue(['Apple', 'Kiwi']);
      expect(visibleValue).toBeVisible();
      expect(canvas.getByText('Apple', {
        selector: 'div'
      })).toBeVisible();
      expect(canvas.getByText('Kiwi', {
        selector: 'div'
      })).toBeVisible();
    });
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should be possible to select all items', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.tab({
        shift: true
      });
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText(\`\${options.length} valda\`, {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue(options.map(({
        name
      }) => name));
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,se,ne,ie;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(se=(te=p.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ie=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var oe,re,le;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Normal.args,
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
}`,...(le=(re=h.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,pe,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
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
}`,...(de=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,be;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(be=(me=l.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,ge,we;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(we=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var Se,he,ve;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(ve=(he=B.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const Oa=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{m as AllKeysSelected,h as DS872,d as DefaultSelectedKey,u as DefaultSelectedKeys,b as Disabled,y as DisabledOption,g as Invalid,B as MultiSelectTests,r as Normal,p as NotClearable,x as RequiredMultiSelect,l as RequiredSingleSelect,v as Sectioned,S as SelectAllEnabled,w as WithTags,Oa as __namedExportsOrder,Ra as default};
