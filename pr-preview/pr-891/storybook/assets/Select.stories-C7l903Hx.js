import{o as c,f as K,j as V,r as D}from"./iframe-BvtnbEWO.js";import{S as k}from"./Select-BlrOHcRK.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./utils-Dmj49lEG.js";import"./Tag-CQecM679.js";import"./Button-BDKaMgDI.js";import"./Hidden-B-AZDmCl.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./ListBox-DtidrHjR.js";import"./DragAndDrop-Da2BPJ6T.js";import"./getScrollParent-DAh1nnIS.js";import"./scrollIntoView-CptB-SyI.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useDescription-3yaDVIih.js";import"./useControlledState-Dzlb7uXm.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./RSPContexts-BMp6jLpo.js";import"./Text-G_ihDvZJ.js";import"./inertValue-orH6NezI.js";import"./useListState-CFYSJQ23.js";import"./useHighlightSelectionDescription-BqU753u8.js";import"./useUpdateEffect-DZw5GxmE.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-DVP5XgGP.js";import"./useField-BnzoMeMJ.js";import"./Button-DciKK2iU.js";import"./Button.module-CtQ1deO8.js";import"./x-B4WpRfld.js";import"./createLucideIcon-DLTmB58A.js";import"./TextField-DHoRK5-k.js";import"./FieldError-DmVA7zlg.js";import"./Text-B7oxr1RI.js";import"./Form-DlbxRFTH.js";import"./useFormValidation-CFPInbMA.js";import"./Group-ZdvQrpSb.js";import"./Input-D1QGK8B0.js";import"./useTextField-DMzI2iiY.js";import"./Checkbox-BG9y2DcX.js";import"./VisuallyHidden-DqvK4Wff.js";import"./useToggleState-CfcMXvy9.js";import"./check-BU6uoXYK.js";import"./ListBoxSection-BqofAzjf.js";import"./Virtualizer-BsNUACvv.js";import"./useResizeObserver-BU-ZyiTP.js";import"./Dialog-SMibr7T8.js";import"./OverlayArrow-CjKqQivr.js";import"./PressResponder-DQRY-Kqq.js";import"./useLocalizedStringFormatter-B6icmZu0.js";import"./chevron-down-ClR7GgM3.js";import"./Label-DtYzvuRw.js";import"./Heading-BExRDS79.js";import"./info-C4RVpOnV.js";import"./Popover-lyKFTbo1.js";const{expect:s,fn:T,spyOn:I,userEvent:a}=__STORYBOOK_MODULE_TEST__,M=T(),E=T(),Ne={component:k,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:c,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:M,size:"large"}},r={play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(c[0].name,{selector:"span"});await s(i).toHaveDisplayValue([c[0].name]),await s(o).toBeVisible()}),await n("it should change size according to size prop",async()=>{await s(e.getByRole("button")).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},d={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("Kiwi",{selector:"span"});s(i).toHaveDisplayValue(["Kiwi"]),s(o).toBeVisible()})}},u={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Banana","Kiwi"]),s(o).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(/valda/,{selector:"span"});s(i).toHaveDisplayValue(c.map(({name:f})=>f)),s(o).toBeVisible()})}},b={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},w={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:t,canvas:e,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Apple","Kiwi"]),s(o).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},h={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:t,canvas:e,step:n})=>{await n("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(`${c.length} valda`,{selector:"span"});s(i).toHaveDisplayValue(c.map(({name:f})=>f)),s(o).toBeVisible()})}},p={args:{selectionMode:"multiple",isClearable:!1}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[e,n]=D.useState(new Set);return V.jsx(k,{...t,selectedKeys:e,onSelectionChange:n,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:t,step:e,canvas:n})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),s(n.getByLabelText(t.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},v={args:{...r.args,options:K},play:async({step:t})=>{const e=I(console,"warn").mockImplementation(T());await t("It should not warn about missing aria labels when toggling the select open state",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await s(e).toHaveBeenCalledTimes(0)})}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>V.jsxs("form",{onSubmit:e=>{e.preventDefault(),E()},children:[V.jsx(k,{...t}),V.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:t})=>{await t("It should give a validation error if the user submitted without selecting an option",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await s(E).not.toHaveBeenCalled()})}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...l,args:{...l.args,selectionMode:"multiple"}},B={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:t,step:e,args:{label:n}})=>{await e("It should be possible to deselect all items to empty the selection",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).toHaveDisplayValue([])}),await e("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await a.keyboard("[Space]"),await a.keyboard("[ArrowDown]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await s(t.getByLabelText(`${n}-hidden`)).not.toHaveDisplayValue([])})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...p.parameters?.docs?.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...p.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const We=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{m as AllKeysSelected,S as DS872,d as DefaultSelectedKey,u as DefaultSelectedKeys,b as Disabled,y as DisabledOption,g as Invalid,B as MultiSelectTests,r as Normal,p as NotClearable,x as RequiredMultiSelect,l as RequiredSingleSelect,v as Sectioned,h as SelectAllEnabled,w as WithTags,We as __namedExportsOrder,Ne as default};
