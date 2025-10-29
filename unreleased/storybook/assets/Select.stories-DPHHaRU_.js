import{o as l,j as t,d as he,r as we}from"./iframe-DDu8DmeW.js";import{$ as ve}from"./Collection-BvyKS8Z0.js";import{L as B,a as V}from"./ListBoxSection-wntYkv3-.js";import{S as I}from"./Select-Cd4gAdLn.js";import{L as o}from"./ListBoxItem-BEIn5F-q.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-DbzT6Tb3.js";import"./index-9JF2JLNE.js";import"./index-oWOcmufG.js";import"./useFocusRing-DE1dspJM.js";import"./utils-gG0zFOus.js";import"./clsx-B-dksMZM.js";import"./index-CCQ93eKI.js";import"./ListBox-C1bcUQ-T.js";import"./DragAndDrop-CSCzejMc.js";import"./getScrollParent-yMRnHreF.js";import"./scrollIntoView-BCYET4ie.js";import"./Separator-BLom6WfB.js";import"./SelectionManager-BFe9HRcv.js";import"./useEvent-Ctty1v25.js";import"./SelectionIndicator-BuEnQtR3.js";import"./useDescription-FC5Vttkq.js";import"./useControlledState-vyCKnSPc.js";import"./ListKeyboardDelegate-BLRl-bYm.js";import"./RSPContexts-CbaQoKER.js";import"./Text-Du8qLI1y.js";import"./inertValue-D_LlJpgZ.js";import"./Button-W_tVDnnM.js";import"./useLabels-oagClqW_.js";import"./useButton-CZnsZF0I.js";import"./useListState-CvAopeSh.js";import"./clsx-Ciqy0D92.js";import"./FieldError-CfsOaaJM.js";import"./Text-DzQda5Un.js";import"./Form-BAXgfx4t.js";import"./useFormValidation-B602dbrn.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-B0ljVIXD.js";import"./OverlayArrow-DE4W6S8W.js";import"./useResizeObserver-C9Jv5oPf.js";import"./PressResponder-CQlmIXUV.js";import"./useLocalizedStringFormatter-C0zPpO_M.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-CNUOWjfh.js";import"./useField-CtlkLz9B.js";import"./Label-B8LJezYD.js";import"./useLocalizedStringFormatter-Cjb6BS-2.js";import"./Button-Db_GUMoi.js";import"./Button.module-CcWMkJAG.js";import"./x-C71oNwSO.js";import"./createLucideIcon-BjbUxzO6.js";import"./Heading-lljzmipU.js";import"./info-9wS9a3Hd.js";import"./Popover-CtNF9AAB.js";import"./Checkbox-9B1yhXY8.js";import"./useToggleState-DZh-COS4.js";import"./Tag-Dak0GE5M.js";import"./useHighlightSelectionDescription-D701crXe.js";import"./useUpdateEffect-CqU2OJ25.js";import"./useHasTabbableChild-C_PyjcG7.js";import"./chevron-down-Cb7ZtONS.js";import"./Virtualizer-BH1ahz95.js";const{expect:n,fn:f,spyOn:Se,userEvent:s,within:xe}=__STORYBOOK_MODULE_TEST__,Be=f(),k=f(),Da={component:I,title:"Components/Select",tags:["autodocs"],args:{children:e=>t.jsx(o,{...e,children:e.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:l,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:Be,size:"large"}},c={args:{label:"label",description:"static",children:t.jsxs(t.Fragment,{children:[t.jsx(o,{children:"Hello"}),t.jsx(o,{children:"Goodbye"})]})}},r={play:async({args:e,canvas:a,step:i})=>{await i("It should be possible to select an item using the keyboard",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]");const ye=a.getByText(l[0].name,{selector:"span"}),ge=xe(a.getByTestId("hidden-select-container")).getByDisplayValue(l[0].name);await n(ge).toBeVisible(),await n(ye).toBeVisible()}),await i("it should change size according to size prop",async()=>{await n(a.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},p={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected value",async()=>{await n(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},d={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:l.map(({id:e})=>e)},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{await n(e.getByText(`${l.length} valda`,{selector:"span"})).toBeVisible()})}},m={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},u={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},b={args:{isInvalid:!0,errorMessage:"Error msg"}},y={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{const i=e.getByText("2 valda",{selector:"span"});await n(i).toBeVisible(),await n(e.getByText("Apple",{selector:"div"})).toBeVisible(),await n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},g={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:a})=>{await a("It should be possible to select all items",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.tab({shift:!0}),await s.keyboard("[Space]"),await s.keyboard("[Escape]");const i=e.getByText(`${l.length} valda`,{selector:"span"});await n(i).toBeVisible()})}},h={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[a,i]=we.useState(null);return t.jsx(I,{...e,value:a,onChange:i,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:a})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]");const i=a.getByText("tolv",{selector:"span"});await n(i).toBeVisible()})}},w={args:{children:t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:[t.jsx(V,{children:"Fruit"}),t.jsx(o,{id:"Apple",children:"Apple"}),t.jsx(o,{id:"Banana",children:"Banana"})]}),t.jsxs(B,{children:[t.jsx(V,{children:"Vegetables"}),t.jsx(o,{id:"Cabbage",children:"Cabbage"}),t.jsx(o,{id:"Broccoli",children:"Broccoli"})]})]})}},v={args:{...r.args,items:he,children:e=>t.jsxs(B,{id:e.name,children:[t.jsx(V,{children:e.name}),t.jsx(ve,{items:e.children,children:a=>t.jsx(o,{id:a.id,children:a.name})})]})},play:async({step:e})=>{const a=Se(console,"warn").mockImplementation(f());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await n(a).toHaveBeenCalledTimes(0)})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>t.jsxs("form",{onSubmit:a=>{a.preventDefault(),k()},children:[t.jsx(I,{...e}),t.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await s.tab(),await s.tab(),await s.keyboard("[Enter]"),await n(k).not.toHaveBeenCalled()})}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should be possible to deselect all items to empty the selection",async()=>{await s.tab(),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await s.keyboard("[Space]"),await s.keyboard("[Escape]");const i=e.getByText("Select an option",{selector:"span"});await n(i).toBeVisible()})}};var E,L,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var j,D,M;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(D=r.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var K,A,C;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,O,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,$,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=($=m.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var q,F,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var W,G,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(P=(G=b.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var U,Y,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,re,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,pe,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,be;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const Ma=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{d as AllKeysSelected,h as DS872,p as DefaultValue,m as Disabled,u as DisabledOption,v as DynamicSections,b as Invalid,x as MultiSelectTests,r as Normal,S as RequiredSingleSelect,g as SelectAllEnabled,c as StaticItems,w as StaticSections,y as WithTags,Ma as __namedExportsOrder,Da as default};
