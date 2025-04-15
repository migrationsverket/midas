import{j as ie}from"./jsx-runtime-DtgEGaVE.js";import{S as le}from"./Select-D4zQNJCe.js";import{u as i,e as s}from"./index-DtSMq7G1.js";import{r as oe}from"./index-BbAIUH2N.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cn0G9B-O.js";import"./Tag-DGoztdpS.js";import"./Collection-CrlQSNFM.js";import"./index-DwWe6W7f.js";import"./ListBox-DZlCOpr3.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-D1KbA0aG.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useListState-BXyU8taG.js";import"./useField-Dtc4qbuX.js";import"./useHighlightSelectionDescription-DCwKHqhB.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BwVvzJgw.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-CeSjRE6x.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-dpiMNlKd.js";import"./Form-BWK6xyH1.js";import"./useFormValidation-tLTeCxiF.js";import"./Input-C7Zh-d3_.js";import"./useTextField-CRWtxm2p.js";import"./Label-DjHNQKaV.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./VisuallyHidden-9izUKr4W.js";import"./useModal-BdzBpG_k.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const o=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(a=>({name:a,id:a.toLocaleLowerCase()})),re=[{name:"Vegetables",children:[{name:"Carrot",id:"carrot"},{name:"Broccoli",id:"broccoli"},{name:"Spinach",id:"spinach"},{name:"Potato",id:"potato"},{name:"Tomato",id:"tomato"}]},{name:"Fruits",children:o}],ba={component:le,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:o,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top"}},r={play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.keyboard("[Space]");const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(o[0].name,{selector:"span"});s(n).toHaveDisplayValue([o[0].name]),s(l).toBeVisible()})}},d={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("Kiwi",{selector:"span"});s(n).toHaveDisplayValue(["Kiwi"]),s(l).toBeVisible()})}},p={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(n).toHaveDisplayValue(["Banana","Kiwi"]),s(l).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(/valda/,{selector:"span"});s(n).toHaveDisplayValue(o.map(({name:w})=>w)),s(l).toBeVisible()})}},u={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},b={args:{isInvalid:!0,errorMessage:"Error msg"}},g={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(n).toHaveDisplayValue(["Apple","Kiwi"]),s(l).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},v={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.tab({shift:!0}),await i.keyboard("[Space]"),await i.keyboard("[Escape]");const n=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(`${o.length} valda`,{selector:"span"});s(n).toHaveDisplayValue(o.map(({name:w})=>w)),s(l).toBeVisible()})}},c={args:{selectionMode:"multiple",isClearable:!1}},S={tags:["!dev","!autodocs"],args:{...r.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,t]=oe.useState(new Set);return ie.jsx(le,{...a,selectedKeys:e,onSelectionChange:t,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await i.tab(),await i.keyboard("[Space]"),await i.keyboard("[Space]"),s(t.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},h={args:{...r.args,options:re}};var x,B,V;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(B=r.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var f,K,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(K=d.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var D,k,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,L,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var C,M,H;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var $,P,N;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(P=y.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var j,O,W;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var R,F,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var _,q,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,U,X,Y;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    options: optionsWithSections
  }
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const ga=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned"];export{m as AllKeysSelected,S as DS872,d as DefaultSelectedKey,p as DefaultSelectedKeys,u as Disabled,y as DisabledOption,b as Invalid,r as Normal,c as NotClearable,h as Sectioned,v as SelectAllEnabled,g as WithTags,ga as __namedExportsOrder,ba as default};
