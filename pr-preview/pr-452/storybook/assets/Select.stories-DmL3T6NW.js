import{j as te}from"./jsx-runtime-DtgEGaVE.js";import{S as ae}from"./Select-ChBsOQLP.js";import{u as i,e as s}from"./index-DtSMq7G1.js";import{r as se}from"./index-BbAIUH2N.js";import"./useButton-DFPcodtW.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cs9agisI.js";import"./Tag-Bwvo9nBL.js";import"./Button-Co7pWk88.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Collection-NOC_B7ao.js";import"./index-DwWe6W7f.js";import"./ListBox-7ZCVxv_K.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CRU-4-uR.js";import"./SelectionManager-2oMtjjZz.js";import"./useEvent-DnmuJhSu.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-CA_BFpv4.js";import"./useCollator-CouJQU85.js";import"./Text-D0cNLqf0.js";import"./useListState-DH6o7Nso.js";import"./useField-BWvtu4tG.js";import"./useHighlightSelectionDescription-CtcqEmyW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DA8E_9Dc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bh3e4XK9.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-G4MXe-hE.js";import"./Button.module-BbIEL4Kw.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-CUfpBFUi.js";import"./Form-BMyPeP3B.js";import"./useFormValidation-BrFQy5aA.js";import"./Input-Dj8a3env.js";import"./useTextField-qc1ulPWn.js";import"./useOverlayTriggerState-Bjtc1fMu.js";import"./useMenuTriggerState-D4kT7gee.js";import"./VisuallyHidden-DiGk2ECL.js";import"./useModal-j8uWYn4E.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Label-ClRk-i9L.js";import"./Text-BO1MQlio.js";import"./FieldError-BI5lou7e.js";const r=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(a=>({name:a,id:a.toLocaleLowerCase()})),ma={component:ae,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:r,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top"}},c={play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.keyboard("[Space]");const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(r[0].name,{selector:"span"});s(n).toHaveDisplayValue([r[0].name]),s(l).toBeVisible()})}},p={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("Kiwi",{selector:"span"});s(n).toHaveDisplayValue(["Kiwi"]),s(l).toBeVisible()})}},d={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(n).toHaveDisplayValue(["Banana","Kiwi"]),s(l).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(/valda/,{selector:"span"});s(n).toHaveDisplayValue(r.map(({name:h})=>h)),s(l).toBeVisible()})}},u={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},b={args:{isInvalid:!0,errorMessage:"Error msg"}},g={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(n).toHaveDisplayValue(["Apple","Kiwi"]),s(l).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},v={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.tab({shift:!0}),await i.keyboard("[Space]"),await i.keyboard("[Escape]");const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(`${r.length} valda`,{selector:"span"});s(n).toHaveDisplayValue(r.map(({name:h})=>h)),s(l).toBeVisible()})}},o={args:{selectionMode:"multiple",isClearable:!1}},S={tags:["!dev","!autodocs"],args:{...c.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,t]=se.useState(new Set);return te.jsx(ae,{...a,selectedKeys:e,onSelectionChange:t,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.keyboard("[Space]"),s(t.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var w,x,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      expect(hiddenSelect).toHaveDisplayValue([options[0].name]);
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var V,f,K;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(f=p.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};var T,D,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var E,I,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var A,M,C;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    },
    a11y: {
      element: 'body',
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
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var H,$,P;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=($=y.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var N,j,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(O=(j=b.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var R,W,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var _,F,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(F=v.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var z,J,Q,U,X;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(Q=(J=o.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(X=(U=o.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ua=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872"];export{m as AllKeysSelected,S as DS872,p as DefaultSelectedKey,d as DefaultSelectedKeys,u as Disabled,y as DisabledOption,b as Invalid,c as Normal,o as NotClearable,v as SelectAllEnabled,g as WithTags,ua as __namedExportsOrder,ma as default};
