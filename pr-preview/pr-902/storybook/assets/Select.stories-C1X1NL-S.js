import{o as c,j as e,d as je,r as Ee}from"./iframe-DrByI1Fo.js";import{$ as De}from"./Collection-DvpnTzAP.js";import{L as V,a as I}from"./ListBoxSection-CYeTDRPu.js";import{i as fe}from"./useFocusRing-C4-3e4v2.js";import{S as L}from"./Select-rK-C2Was.js";import{L as i}from"./ListBoxItem-BoXqcEUl.js";import{T as Ve,a as Ie}from"./Tooltip-DHN-4kOK.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-DAcl8tHX.js";import"./index-eIP63gSP.js";import"./index-uzwGyWJG.js";import"./index-DgkQc4ss.js";import"./ListBox-CCKEyKTY.js";import"./utils-C6XZ-5EW.js";import"./clsx-B-dksMZM.js";import"./DragAndDrop-69U_e4jw.js";import"./getScrollParent-C8ccmskU.js";import"./scrollIntoView-B_FbhFwv.js";import"./Separator-3ATD0lTh.js";import"./SelectionManager-BefHMGbf.js";import"./useEvent-df7PkkIB.js";import"./SelectionIndicator-a7U74W1s.js";import"./useDescription-Pw9Bz1Pn.js";import"./useControlledState-C11SuRRm.js";import"./ListKeyboardDelegate-DDCQaVxe.js";import"./RSPContexts-DHI0H1Qi.js";import"./Text-B9ZsOLqW.js";import"./inertValue-CDaa7mtW.js";import"./Button-DfM26PWp.js";import"./useLabels-DzvbRR0Z.js";import"./useButton-BprXOfXa.js";import"./useListState-D0-FzQn3.js";import"./clsx-Ciqy0D92.js";import"./FieldError-CE4qhV_q.js";import"./Text-DWqDISrj.js";import"./Form-BwJk_5y9.js";import"./useFormValidation-B8RmggZo.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-BrW7nR15.js";import"./OverlayArrow-BK4NzNNc.js";import"./useResizeObserver-DBjDnZOF.js";import"./PressResponder-DGj1zY5M.js";import"./useLocalizedStringFormatter-B0wJVnfs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-in2ehF2a.js";import"./useField-CvLly0yO.js";import"./Label-9MnMa7FR.js";import"./useLocalizedStringFormatter-Bi3fFhAK.js";import"./Button-wOJqkAJe.js";import"./Button.module-CcWMkJAG.js";import"./x-CTrnaU6d.js";import"./createLucideIcon-4DNbp_aV.js";import"./Heading-ChR-cnrH.js";import"./info-BRuzo_so.js";import"./Popover-C2sJ0zUH.js";import"./Checkbox-ZttJeOyg.js";import"./useToggleState-CojnRaMM.js";import"./Tag-B_d8zwp5.js";import"./useHighlightSelectionDescription-BokeCFmg.js";import"./useUpdateEffect-kb822vEs.js";import"./useHasTabbableChild-B1qlHKg5.js";import"./chevron-down-PRgBMF7l.js";import"./Virtualizer-apTUVE-8.js";const{expect:s,fn:k,spyOn:Ae,userEvent:n,within:Me}=__STORYBOOK_MODULE_TEST__,He=k(),j=k(),qt={component:L,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(i,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:c,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:He,size:"large"}},p={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Hello"}),e.jsx(i,{children:"Goodbye"})]})}},r={play:async({args:t,canvas:a,step:o})=>{await o("It should be possible to select an item using the keyboard",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]");const Le=a.getByText(c[0].name,{selector:"span"}),ke=Me(a.getByTestId("hidden-select-container")).getByDisplayValue(c[0].name);await s(ke).toBeVisible(),await s(Le).toBeVisible()}),await o("it should change size according to size prop",async()=>{await s(a.getByRole("button")).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},d={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:t,step:a})=>{await a("It should display and reflect the pre-selected value",async()=>{await s(t.getByText("2 valda",{selector:"span"})).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:c.map(({id:t})=>t)},play:async({canvas:t,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{await s(t.getByText(`${c.length} valda`,{selector:"span"})).toBeVisible()})}},u={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},b={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},y={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:t,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{const o=t.getByText("2 valda",{selector:"span"});await s(o).toBeVisible(),await s(t.getByText("Apple",{selector:"div"})).toBeVisible(),await s(t.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},h={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:t,step:a})=>{await a("It should be possible to select all items",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.tab({shift:!0}),await n.keyboard("[Space]"),await n.keyboard("[Escape]");const o=t.getByText(`${c.length} valda`,{selector:"span"});await s(o).toBeVisible()})}},x={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[a,o]=Ee.useState(null);return e.jsx(L,{...t,value:a,onChange:o,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:t,canvas:a})=>{await t("It should be possible to select an item with an ID greater than 9",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]");const o=a.getByText("tolv",{selector:"span"});await s(o).toBeVisible()})}},w={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(I,{children:"Fruit"}),e.jsx(i,{id:"Apple",children:"Apple"}),e.jsx(i,{id:"Banana",children:"Banana"})]}),e.jsxs(V,{children:[e.jsx(I,{children:"Vegetables"}),e.jsx(i,{id:"Cabbage",children:"Cabbage"}),e.jsx(i,{id:"Broccoli",children:"Broccoli"})]})]})}},v={args:{...r.args,items:je,children:t=>e.jsxs(V,{id:t.name,children:[e.jsx(I,{children:t.name}),e.jsx(De,{items:t.children,children:a=>e.jsx(i,{id:a.id,children:a.name})})]})},play:async({step:t})=>{const a=Ae(console,"warn").mockImplementation(k());await t("It should not warn about missing aria labels when toggling the select open state",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]"),await s(a).toHaveBeenCalledTimes(0)})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:a=>{a.preventDefault(),j()},children:[e.jsx(L,{...t}),e.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:t})=>{await t("It should give a validation error if the user submitted without selecting an option",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),await s(j).not.toHaveBeenCalled()})}},B={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:t,step:a})=>{await a("It should be possible to deselect all items to empty the selection",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]"),await n.keyboard("[Space]"),await n.keyboard("[Escape]");const o=t.getByText("Select an option",{selector:"span"});await s(o).toBeVisible()})}},l="Flaggstångsknoppsmålarbyxor",T={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{textValue:l,children:e.jsxs(Ve,{children:[e.jsx(fe,{children:e.jsx("div",{role:"button",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l})}),e.jsx(Ie,{style:{maxWidth:"none"},placement:"bottom",children:l})]})}),e.jsx(i,{children:"Hello"})]})}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{textValue:l,children:e.jsxs(Ve,{delay:1500,children:[e.jsx(fe,{children:e.jsx("div",{role:"button",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l})}),e.jsx(Ie,{style:{maxWidth:"none"},placement:"bottom",children:l})]})}),e.jsx(i,{children:"Hello"})]})}};var E,D,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,H,K;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(K=(H=r.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var C,O,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var $,W,R;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,z,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(z=u.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var N,G,P;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=(G=b.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var U,Y,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,re,le;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,pe,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var ge,ye,he;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,we,ve;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxItem textValue={longText}>
          <TooltipTrigger>
            <Focusable>
              <div role='button' style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
                {longText}
              </div>
            </Focusable>
            <Tooltip style={{
            maxWidth: 'none'
          }} placement='bottom'>
              {longText}
            </Tooltip>
          </TooltipTrigger>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
  }
}`,...(ve=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Se,Be,Te;f.parameters={...f.parameters,docs:{...(Se=f.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxItem textValue={longText}>
          <TooltipTrigger delay={1500}>
            <Focusable>
              <div role='button' style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
                {longText}
              </div>
            </Focusable>
            <Tooltip style={{
            maxWidth: 'none'
          }} placement='bottom'>
              {longText}
            </Tooltip>
          </TooltipTrigger>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
  }
}`,...(Te=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};const Nt=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests","TruncationAndTooltip","TruncationAndTooltipWithDelay"];export{m as AllKeysSelected,x as DS872,d as DefaultValue,u as Disabled,b as DisabledOption,v as DynamicSections,g as Invalid,B as MultiSelectTests,r as Normal,S as RequiredSingleSelect,h as SelectAllEnabled,p as StaticItems,w as StaticSections,T as TruncationAndTooltip,f as TruncationAndTooltipWithDelay,y as WithTags,Nt as __namedExportsOrder,qt as default};
