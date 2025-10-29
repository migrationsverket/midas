import{o as l,j as t,f as T,r as j}from"./iframe-D22RnrI5.js";import{$ as D}from"./Collection-D-9NlrVc.js";import{L as B,a as V}from"./ListBoxSection-D_P0A61b.js";import{S as f}from"./Select-DMhgz79k.js";import{L as o}from"./ListBoxItem-j5ixVqIf.js";import"./preload-helper-Ct5FWWRu.js";import"./Hidden-CtIENPW4.js";import"./index-B6eCQ9aw.js";import"./index-DZ5AQ9RU.js";import"./useFocusRing-CelFkdst.js";import"./utils-IQwsi_Mp.js";import"./clsx-B-dksMZM.js";import"./index-Btrb5JSf.js";import"./ListBox-yKbFYqkd.js";import"./DragAndDrop-Bl8S20Ks.js";import"./getScrollParent-CBtZzG_M.js";import"./scrollIntoView-DFHnj_oN.js";import"./Separator-ovPP9zcr.js";import"./SelectionManager-BDylyf_D.js";import"./useEvent-CbrHpgHc.js";import"./SelectionIndicator-tBl4dzhl.js";import"./useDescription-BfXV2LOb.js";import"./useControlledState-Civ9vvMz.js";import"./ListKeyboardDelegate-B8eLekIo.js";import"./RSPContexts-DFUkwuHx.js";import"./Text-C_rQTysa.js";import"./inertValue-DzcDtwOb.js";import"./Button-rdu5FjWn.js";import"./useLabels-DCbQxQd_.js";import"./useButton-DTvkVre_.js";import"./useListState-BIvJZgbp.js";import"./clsx-Ciqy0D92.js";import"./FieldError-Hi4vksVn.js";import"./Text-CWwJ5Kgj.js";import"./Form-StjO7poT.js";import"./useFormValidation-BAkWF0Gg.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-5Q1RHl6S.js";import"./OverlayArrow-a7rvTWVZ.js";import"./useResizeObserver-CkrFVkoI.js";import"./PressResponder-4CpaqU4b.js";import"./useLocalizedStringFormatter-BSWUiH8B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-aWO_RYgT.js";import"./useField-r-GiupzV.js";import"./Label-ZoLaA4pR.js";import"./useLocalizedStringFormatter-C3cFmwKu.js";import"./Button-T9TteJoQ.js";import"./Button.module-CtQ1deO8.js";import"./x-35cMYwCl.js";import"./createLucideIcon-DImY0aIE.js";import"./Heading-CuV8echB.js";import"./info-D8uJKAbJ.js";import"./Popover-BsFa4I11.js";import"./Checkbox-DdZolN6t.js";import"./check-CRA6KFrU.js";import"./useToggleState-BDqFNfnB.js";import"./Tag-Chqj6JjD.js";import"./useHighlightSelectionDescription-BCwXsxMy.js";import"./useUpdateEffect-DI3MoPHF.js";import"./useHasTabbableChild-I6TtfmqG.js";import"./chevron-down-BGYlaFAl.js";import"./Virtualizer-BpEiAZ5A.js";const{expect:n,fn:I,spyOn:M,userEvent:s,within:K}=__STORYBOOK_MODULE_TEST__,A=I(),k=I(),Ne={component:f,title:"Components/Select",tags:["autodocs"],args:{children:e=>t.jsx(o,{...e,children:e.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:l,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:A,size:"large"}},c={args:{label:"label",description:"static",children:t.jsxs(t.Fragment,{children:[t.jsx(o,{children:"Hello"}),t.jsx(o,{children:"Goodbye"})]})}},r={play:async({args:e,canvas:a,step:i})=>{await i("It should be possible to select an item using the keyboard",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]");const E=a.getByText(l[0].name,{selector:"span"}),L=K(a.getByTestId("hidden-select-container")).getByDisplayValue(l[0].name);await n(L).toBeVisible(),await n(E).toBeVisible()}),await i("it should change size according to size prop",async()=>{await n(a.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},p={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected value",async()=>{await n(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},d={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:l.map(({id:e})=>e)},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{await n(e.getByText(`${l.length} valda`,{selector:"span"})).toBeVisible()})}},m={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},u={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},b={args:{isInvalid:!0,errorMessage:"Error msg"}},y={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{const i=e.getByText("2 valda",{selector:"span"});await n(i).toBeVisible(),await n(e.getByText("Apple",{selector:"div"})).toBeVisible(),await n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},g={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:a})=>{await a("It should be possible to select all items",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.tab({shift:!0}),await s.keyboard("[Space]"),await s.keyboard("[Escape]");const i=e.getByText(`${l.length} valda`,{selector:"span"});await n(i).toBeVisible()})}},h={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[a,i]=j.useState(null);return t.jsx(f,{...e,value:a,onChange:i,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:a})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]");const i=a.getByText("tolv",{selector:"span"});await n(i).toBeVisible()})}},w={args:{children:t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:[t.jsx(V,{children:"Fruit"}),t.jsx(o,{id:"Apple",children:"Apple"}),t.jsx(o,{id:"Banana",children:"Banana"})]}),t.jsxs(B,{children:[t.jsx(V,{children:"Vegetables"}),t.jsx(o,{id:"Cabbage",children:"Cabbage"}),t.jsx(o,{id:"Broccoli",children:"Broccoli"})]})]})}},v={args:{...r.args,items:T,children:e=>t.jsxs(B,{id:e.name,children:[t.jsx(V,{children:e.name}),t.jsx(D,{items:e.children,children:a=>t.jsx(o,{id:a.id,children:a.name})})]})},play:async({step:e})=>{const a=M(console,"warn").mockImplementation(I());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await n(a).toHaveBeenCalledTimes(0)})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>t.jsxs("form",{onSubmit:a=>{a.preventDefault(),k()},children:[t.jsx(f,{...e}),t.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await s.tab(),await s.tab(),await s.keyboard("[Enter]"),await n(k).not.toHaveBeenCalled()})}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should be possible to deselect all items to empty the selection",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await s.keyboard("[Escape]");const i=e.getByText("Select an option",{selector:"span"});await n(i).toBeVisible()})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should be possible to select an item using the keyboard', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      const visibleValue = canvas.getByText(options[0].name, {
        selector: 'span'
      });
      const hiddenValue = within(canvas.getByTestId('hidden-select-container')).getByDisplayValue(options[0].name);
      await expect(hiddenValue).toBeVisible();
      await expect(visibleValue).toBeVisible();
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected value', async () => {
      await expect(canvas.getByText('2 valda', {
        selector: 'span'
      })).toBeVisible();
    });
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      await expect(canvas.getByText(\`\${options.length} valda\`, {
        selector: 'span'
      })).toBeVisible();
    });
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      const visibleValue = canvas.getByText('2 valda', {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
      await expect(canvas.getByText('Apple', {
        selector: 'div'
      })).toBeVisible();
      await expect(canvas.getByText('Kiwi', {
        selector: 'div'
      })).toBeVisible();
    });
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  },
  play: async ({
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
      const visibleValue = canvas.getByText(\`\${options.length} valda\`, {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Normal.args,
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
  },
  play: async ({
    step,
    canvas
  }) => {
    await step('It should be possible to select an item with an ID greater than 9', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      const visibleValue = canvas.getByText('tolv', {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('It should be possible to deselect all items to empty the selection', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      const visibleValue = canvas.getByText(\`Select an option\`, {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...x.parameters?.docs?.source}}};const We=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{d as AllKeysSelected,h as DS872,p as DefaultValue,m as Disabled,u as DisabledOption,v as DynamicSections,b as Invalid,x as MultiSelectTests,r as Normal,S as RequiredSingleSelect,g as SelectAllEnabled,c as StaticItems,w as StaticSections,y as WithTags,We as __namedExportsOrder,Ne as default};
