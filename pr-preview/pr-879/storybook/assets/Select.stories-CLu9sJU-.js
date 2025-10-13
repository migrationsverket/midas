import{o as p,d as he,j as B,r as we}from"./iframe-B_ygYNkI.js";import{S as V}from"./Select-tawG6FF8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-CXsj727F.js";import"./Tag-ByEmQqYN.js";import"./Button-DMhyuXvl.js";import"./Hidden-glhldbCg.js";import"./useFocusRing-DQn-e4pR.js";import"./index-D8MlaW6J.js";import"./index-CPUP237Z.js";import"./useLabels-4ym5HR4k.js";import"./useButton-oVtVVevU.js";import"./Collection-BKKTYarE.js";import"./index-xqO8xPMl.js";import"./ListBox-DgyjhOBj.js";import"./DragAndDrop-Bs497dMc.js";import"./getScrollParent-DUubX-Bx.js";import"./scrollIntoView-DHLPPniT.js";import"./Separator-qbyZkIpX.js";import"./SelectionManager-hN3Mg3In.js";import"./useEvent-j_Fr0Fkm.js";import"./SelectionIndicator-h-yKrdJ_.js";import"./useDescription-J4yXttox.js";import"./useControlledState-C9qVCaaE.js";import"./ListKeyboardDelegate-DllJju6w.js";import"./RSPContexts-D0ALC_tS.js";import"./Text-HoaiwDmI.js";import"./inertValue-Bnxbtd7A.js";import"./useListState-CVnasb7m.js";import"./useHighlightSelectionDescription-B8a8RhkT.js";import"./useUpdateEffect-NmOk22I9.js";import"./useLocalizedStringFormatter-D3srnXI9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Czmo9uAh.js";import"./useField-DmAsGA14.js";import"./Button-B-vuvhpN.js";import"./Button.module-CcWMkJAG.js";import"./x-DJ-2z-Iw.js";import"./createLucideIcon-BP2N8NK_.js";import"./Checkbox-D7uboohj.js";import"./Form-BJG6ri3O.js";import"./useFormValidation-DQ-DrMkl.js";import"./VisuallyHidden-CGR0QuAJ.js";import"./useToggleState-BjNdEtTK.js";import"./check-CITebWau.js";import"./ListBoxSection-BKfkb5mM.js";import"./Virtualizer-BIUqDZPa.js";import"./useResizeObserver-Bn76dmuL.js";import"./Dialog-Dqzhz9x6.js";import"./OverlayArrow-Bxop-R1f.js";import"./PressResponder-ic_rd789.js";import"./useObserveElement-DK09pGIS.js";import"./useLocalizedStringFormatter-DaVXzdm8.js";import"./chevron-down-Cg1uLN1S.js";import"./FieldError-Vo2yk1PA.js";import"./Text-CdpZfcKZ.js";import"./Label-D_zNKIyu.js";import"./Heading-z6_badJB.js";import"./info-BRmASJZr.js";import"./Popover-Bzl1ixSZ.js";const{expect:s,fn:k,spyOn:ve,userEvent:a}=__STORYBOOK_MODULE_TEST__,Se=k(),f=k(),Ka={component:V,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:p,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:Se,size:"large"}},r={play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(p[0].name,{selector:"span"});await s(i).toHaveDisplayValue([p[0].name]),await s(o).toBeVisible()}),await n("it should change size according to size prop",async()=>{await s(e.getByRole("button")).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},d={args:{description:"Kiwi is pre-selected",defaultValue:"kiwi"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("Kiwi",{selector:"span"});s(i).toHaveDisplayValue(["Kiwi"]),s(o).toBeVisible()})}},u={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Banana","Kiwi"]),s(o).toBeVisible()})}},m={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},b={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},y={args:{isInvalid:!0,errorMessage:"Error msg"}},g={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Apple","Kiwi"]),s(o).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},h={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(`${p.length} valda`,{selector:"span"});s(i).toHaveDisplayValue(p.map(({name:ge})=>ge)),s(o).toBeVisible()})}},c={args:{selectionMode:"multiple",isClearable:!1}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[e,n]=we.useState(null);return B.jsx(V,{...t,value:e,onChange:n,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:t,step:e,canvas:n})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),s(n.getByLabelText(t.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},v={args:{...r.args,options:he},play:async({step:t})=>{const e=ve(console,"warn").mockImplementation(k());await t("It should not warn about missing aria labels when toggling the select open state",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await s(e).toHaveBeenCalledTimes(0)})}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0,validationBehavior:"native"},render:t=>B.jsxs("form",{onSubmit:e=>{e.preventDefault(),f()},children:[B.jsx(V,{...t}),B.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:t})=>{await t("It should give a validation error if the user submitted without selecting an option",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await s(f).not.toHaveBeenCalled()})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...l,args:{...l.args,selectionMode:"multiple"}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:t,step:e,args:{label:n}})=>{await e("It should be possible to deselect all items to empty the selection",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).toHaveDisplayValue([])}),await e("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await a.keyboard("[Space]"),await a.keyboard("[ArrowDown]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).not.toHaveDisplayValue([])})}};var E,T,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var K,I,M;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is pre-selected',
    defaultValue: 'kiwi'
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
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var H,L,C;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
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
}`,...(C=(L=u.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var $,A,R;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,j,q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var _,z,N;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(N=(z=y.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var W,P,U;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
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
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,F,G;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(F=h.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,Q,X,Z,ee;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
    const [selectedKey, setSelectedKey] = useState<Key | Key[] | null>(null);
    return <Select {...args} value={selectedKey} onChange={setSelectedKey} options={[{
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
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,ie,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,le,ce;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'single',
    isRequired: true,
    validationBehavior: 'native'
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
}`,...(ce=(le=l.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,de,ue;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,be,ye;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Ia=["Normal","DefaultSelectedKey","DefaultSelectedKeys","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{w as DS872,d as DefaultSelectedKey,u as DefaultSelectedKeys,m as Disabled,b as DisabledOption,y as Invalid,x as MultiSelectTests,r as Normal,c as NotClearable,S as RequiredMultiSelect,l as RequiredSingleSelect,v as Sectioned,h as SelectAllEnabled,g as WithTags,Ia as __namedExportsOrder,Ka as default};
