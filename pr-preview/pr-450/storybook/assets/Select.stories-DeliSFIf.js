import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as V}from"./Select-DbrnyA36.js";import{u as n,e as s}from"./index-DtSMq7G1.js";import{r as ye}from"./index-BbAIUH2N.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cn0G9B-O.js";import"./Tag-DawzL8iM.js";import"./Collection-DkSAS5rs.js";import"./index-DwWe6W7f.js";import"./ListBox-CrTeI0gh.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useListState-BXyU8taG.js";import"./useField-Dtc4qbuX.js";import"./useHighlightSelectionDescription-DCwKHqhB.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BwVvzJgw.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-Cq9Cf_da.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-dpiMNlKd.js";import"./Form-BWK6xyH1.js";import"./useFormValidation-tLTeCxiF.js";import"./Input-C7Zh-d3_.js";import"./useTextField-CRWtxm2p.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./VisuallyHidden-9izUKr4W.js";import"./useModal-BdzBpG_k.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Label-DjHNQKaV.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const d=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(a=>({name:a,id:a.toLocaleLowerCase()})),Ba={component:V,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:d,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top"}},c={play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]");const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(d[0].name,{selector:"span"});s(i).toHaveDisplayValue([d[0].name]),s(l).toBeVisible()})}},m={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("Kiwi",{selector:"span"});s(i).toHaveDisplayValue(["Kiwi"]),s(l).toBeVisible()})}},b={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banana"]),selectionMode:"multiple"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Banana","Kiwi"]),s(l).toBeVisible()})}},y={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(/valda/,{selector:"span"});s(i).toHaveDisplayValue(d.map(({name:o})=>o)),s(l).toBeVisible()})}},g={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},w={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},v={args:{isInvalid:!0,errorMessage:"Error msg"}},S={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["apple","kiwi"])},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Apple","Kiwi"]),s(l).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},h={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.tab({shift:!0}),await n.keyboard("[Space]"),await n.keyboard("[Escape]");const i=e.getByLabelText(`${a.label}-hidden`),l=e.getByText(`${d.length} valda`,{selector:"span"});s(i).toHaveDisplayValue(d.map(({name:o})=>o)),s(l).toBeVisible()})}},p={args:{selectionMode:"multiple",isClearable:!1}},u={tags:["!dev","!autodocs"],args:{selectionMode:"multiple",isRequired:!0},render:a=>r.jsxs("form",{onSubmit:e=>{e.preventDefault()},children:[r.jsx(V,{...a}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:e,args:t})=>{await e("It should not be possible to submit the form",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),await s(a.getByLabelText(`${t.label}-hidden`)).toBeInvalid()}),await e("It should be possible to submit the form if a value was selected",async()=>{await n.keyboard("[Space]"),await n.keyboard("[Space]"),await n.keyboard("[Escape]"),await n.tab(),await n.tab(),await n.keyboard("[Enter]"),await s(a.getByLabelText(`${t.label}-hidden`)).toBeValid()})}},f={tags:["!dev","!autodocs"],args:{selectionMode:"single",isRequired:!0},render:u.render,play:async({canvas:a,step:e,args:t})=>{await e("It should not be possible to submit the form",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),await s(a.getByLabelText(`${t.label}-hidden`)).toBeInvalid()}),await e("It should be possible to submit the form if a value was selected",async()=>{await n.keyboard("[Space]"),await n.keyboard("[Space]"),await n.tab(),await n.keyboard("[Enter]"),await s(a.getByLabelText(`${t.label}-hidden`)).toBeValid()})}},x={args:{...c.args,selectionMode:"multiple",label:"Controlled mode",placeholder:"Välj flera"},render:a=>{const e=[{id:"banan",name:"Banan"},{id:"melon",name:"Melon"},{id:"kiwi",name:"Kiwi"},{id:"citron",name:"Citron"}],[t,i]=ye.useState(new Set),l=o=>i(o==="all"?new Set(e.map(({id:ge})=>ge)):o);return r.jsxs(r.Fragment,{children:[r.jsx(V,{...a,selectedKeys:t,onSelectionChange:l,options:[{id:"banan",name:"Banan"},{id:"melon",name:"Melon"},{id:"kiwi",name:"Kiwi"},{id:"citron",name:"Citron"}],isSelectableAll:!0}),r.jsxs("pre",{children:["Valda frukter:",typeof t=="string"?t:t&&Array.from(t).join(", ")]})]})}},B={tags:["!dev","!autodocs"],args:{...c.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,t]=ye.useState(new Set);return r.jsx(V,{...a,selectedKeys:e,onSelectionChange:t,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await n.tab(),await n.keyboard("[Space]"),await n.keyboard("[Space]"),s(t.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var k,E,K;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(E=c.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var T,D,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,C,L;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(C=b.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,$,j;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=($=y.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var H,F,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,N,P;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(P=(N=w.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,W,G;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(G=(W=v.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var _,z,J;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(z=S.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee,ae,te;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var ne,se,ie;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,re,oe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,de,pe;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  // tags: ['!dev', '!autodocs'],
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    label: 'Controlled mode',
    placeholder: 'Välj flera'
  },
  render: args => {
    const options = [{
      id: 'banan',
      name: 'Banan'
    }, {
      id: 'melon',
      name: 'Melon'
    }, {
      id: 'kiwi',
      name: 'Kiwi'
    }, {
      id: 'citron',
      name: 'Citron'
    }];
    const [selectedFruit, setSelectedFruit] = useState<Selection>(new Set());
    const handleSelectionChange = (keys: Selection) => {
      if (keys === 'all') {
        return setSelectedFruit(new Set(options.map(({
          id
        }) => id)));
      }
      return setSelectedFruit(keys);
    };
    return <>
        <Select {...args} selectedKeys={selectedFruit} onSelectionChange={handleSelectionChange} options={[{
        id: 'banan',
        name: 'Banan'
      }, {
        id: 'melon',
        name: 'Melon'
      }, {
        id: 'kiwi',
        name: 'Kiwi'
      }, {
        id: 'citron',
        name: 'Citron'
      }]} isSelectableAll />
        <pre>
          Valda frukter:
          {typeof selectedFruit === 'string' ? selectedFruit : selectedFruit && Array.from(selectedFruit).join(', ')}
        </pre>
      </>;
  }
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,be;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(me=B.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const Va=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","RequiredMultiple","RequiredSingle","Controlled","DS872"];export{y as AllKeysSelected,x as Controlled,B as DS872,m as DefaultSelectedKey,b as DefaultSelectedKeys,g as Disabled,w as DisabledOption,v as Invalid,c as Normal,p as NotClearable,u as RequiredMultiple,f as RequiredSingle,h as SelectAllEnabled,S as WithTags,Va as __namedExportsOrder,Ba as default};
