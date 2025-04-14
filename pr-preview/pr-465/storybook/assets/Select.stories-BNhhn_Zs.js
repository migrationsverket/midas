import{j as x}from"./jsx-runtime-DtgEGaVE.js";import{S as B}from"./Select-Bs-mYCLG.js";import{u as a,e as n}from"./index-DtSMq7G1.js";import{r as pe}from"./index-BbAIUH2N.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cn0G9B-O.js";import"./Tag-BFJNaan9.js";import"./Collection-DkSAS5rs.js";import"./index-DwWe6W7f.js";import"./ListBox-CrTeI0gh.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useListState-BXyU8taG.js";import"./useField-Dtc4qbuX.js";import"./useHighlightSelectionDescription-DCwKHqhB.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BwVvzJgw.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-WEqBQ0lK.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-dpiMNlKd.js";import"./Form-BWK6xyH1.js";import"./useFormValidation-tLTeCxiF.js";import"./Input-C7Zh-d3_.js";import"./useTextField-CRWtxm2p.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./VisuallyHidden-9izUKr4W.js";import"./useModal-BdzBpG_k.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Label-DjHNQKaV.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const r=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(t=>({name:t,id:t.toLocaleLowerCase()})),wa={component:B,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:r,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top"}},c={play:async({args:t,canvas:e,step:s})=>{await s("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText(r[0].name,{selector:"span"});n(i).toHaveDisplayValue([r[0].name]),n(l).toBeVisible()})}},p={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText("Kiwi",{selector:"span"});n(i).toHaveDisplayValue(["Kiwi"]),n(l).toBeVisible()})}},u={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Banana","Kiwi"]),n(l).toBeVisible()})}},b={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText(/valda/,{selector:"span"});n(i).toHaveDisplayValue(r.map(({name:f})=>f)),n(l).toBeVisible()})}},m={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},v={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Apple","Kiwi"]),n(l).toBeVisible(),n(e.getByText("Apple",{selector:"div"})).toBeVisible(),n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},w={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:t,canvas:e,step:s})=>{await s("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=e.getByLabelText(`${t.label}-hidden`),l=e.getByText(`${r.length} valda`,{selector:"span"});n(i).toHaveDisplayValue(r.map(({name:f})=>f)),n(l).toBeVisible()})}},o={args:{selectionMode:"multiple",isClearable:!1}},d={tags:["!dev","!autodocs"],args:{selectionMode:"multiple",isRequired:!0},render:t=>x.jsxs("form",{onSubmit:e=>{e.preventDefault()},children:[x.jsx(B,{...t}),x.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:t,step:e,args:s})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await n(t.getByLabelText(`${s.label}-hidden`)).toBeInvalid()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await n(t.getByLabelText(`${s.label}-hidden`)).toBeValid()})}},h={tags:["!dev","!autodocs"],args:{selectionMode:"single",isRequired:!0},render:d.render,play:async({canvas:t,step:e,args:s})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await n(t.getByLabelText(`${s.label}-hidden`)).toBeInvalid()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.tab(),await a.keyboard("[Enter]"),await n(t.getByLabelText(`${s.label}-hidden`)).toBeValid()})}},S={tags:["!dev","!autodocs"],args:{...c.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[e,s]=pe.useState(new Set);return x.jsx(B,{...t,selectedKeys:e,onSelectionChange:s,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:t,step:e,canvas:s})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),n(s.getByLabelText(t.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var V,E,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var T,K,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(K=p.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var I,L,M;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var $,A,C;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(C=(A=b.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,R,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var j,P,N;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(P=y.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var O,W,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var _,F,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(F=v.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z,ee,ae;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,se,ne;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    selectionMode: 'multiple',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
  }}>
      <Select {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(canvas.getByLabelText(\`\${args.label}-hidden\`)).toBeInvalid();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(canvas.getByLabelText(\`\${args.label}-hidden\`)).toBeValid();
    });
  }
}`,...(ne=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,le,re;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: RequiredMultiple.render,
  play: async ({
    canvas,
    step,
    args
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(canvas.getByLabelText(\`\${args.label}-hidden\`)).toBeInvalid();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(canvas.getByLabelText(\`\${args.label}-hidden\`)).toBeValid();
    });
  }
}`,...(re=(le=h.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ce,de;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const ha=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","RequiredMultiple","RequiredSingle","DS872"];export{b as AllKeysSelected,S as DS872,p as DefaultSelectedKey,u as DefaultSelectedKeys,m as Disabled,y as DisabledOption,g as Invalid,c as Normal,o as NotClearable,d as RequiredMultiple,h as RequiredSingle,w as SelectAllEnabled,v as WithTags,ha as __namedExportsOrder,wa as default};
