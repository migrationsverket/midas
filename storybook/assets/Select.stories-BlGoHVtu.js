import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as x}from"./Select-ClLQxnuA.js";import{u as a,e as n}from"./index-DtSMq7G1.js";import{R as le,r as de}from"./index-BbAIUH2N.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cn0G9B-O.js";import"./Tag-DpPFsmBF.js";import"./Collection-BgAVdhih.js";import"./index-DwWe6W7f.js";import"./ListBox-CGWl2s1j.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useListState-BXyU8taG.js";import"./useField-Dtc4qbuX.js";import"./useHighlightSelectionDescription-DCwKHqhB.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BwVvzJgw.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-D99ljjtP.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-dpiMNlKd.js";import"./Form-BWK6xyH1.js";import"./useFormValidation-tLTeCxiF.js";import"./Input-C7Zh-d3_.js";import"./useTextField-CRWtxm2p.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./VisuallyHidden-9izUKr4W.js";import"./useModal-BdzBpG_k.js";import"./useSingleSelectListState-BWMzh-3D.js";import"./FieldError-Ds0Dd64h.js";import"./chevron-down-U1dNK9nR.js";const l=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(t=>({name:t,id:t.toLocaleLowerCase()})),yt={component:x,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:l,placeholder:"Select an option",selectionMode:"single",showTags:!1}},p={play:async({args:t,canvas:e,step:s})=>{await s("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(l[0].name,{selector:"span"});n(i).toHaveDisplayValue([l[0].name]),n(o).toBeVisible()})}},u={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{var B;const i=(B=l.find(ce=>ce.id===t.defaultSelectedKeys[0]))==null?void 0:B.name,o=e.getByLabelText(`${t.label}-hidden`),c=e.getByText(i,{selector:"span"});n(o).toHaveDisplayValue([i]),n(c).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(/valda/,{selector:"span"});n(i).toHaveDisplayValue(l.map(({name:c})=>c)),n(o).toBeVisible()})}},b={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},v={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]},play:async({args:t,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Apple","Kiwi"]),n(o).toBeVisible(),n(e.getByText("Apple",{selector:"div"})).toBeVisible(),n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},S={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:t,canvas:e,step:s})=>{await s("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=e.getByLabelText(`${t.label}-hidden`),o=e.getByText(`${l.length} valda`,{selector:"span"});n(i).toHaveDisplayValue(l.map(({name:c})=>c)),n(o).toBeVisible()})}},d={args:{selectionMode:"multiple",isClearable:!1}},w={tags:["!dev"],args:{selectionMode:"multiple",isRequired:!0},render:t=>{const[e,s]=le.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs("form",{onSubmit:i=>{i.preventDefault(),s(!0)},children:[r.jsx(x,{...t}),r.jsx("button",{type:"submit",children:"Submit"})]}),e&&"success"]})},play:async({canvas:t,step:e})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),n(t.queryByText("success")).not.toBeInTheDocument()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await a.tab(),await a.tab(),await a.keyboard("[Enter]"),n(await t.findByText("success")).toBeInTheDocument()})}},h={tags:["!dev","!autodocs"],args:{selectionMode:"single",isRequired:!0},render:t=>{const[e,s]=le.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs("form",{onSubmit:i=>{i.preventDefault(),s(!0)},children:[r.jsx(x,{...t}),r.jsx("button",{type:"submit",children:"Submit"})]}),e&&"success"]})},play:async({canvas:t,step:e})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),n(t.queryByText("success")).not.toBeInTheDocument()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.tab(),await a.keyboard("[Enter]"),n(await t.findByText("success")).toBeInTheDocument()})}},f={tags:["!dev"],args:{...p.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[e,s]=de.useState("");return r.jsx(x,{...t,selectedKeys:e,onSelectionChange:i=>s(i.toString()),options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:t,step:e,canvas:s})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),n(s.getByLabelText(t.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var E,T,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var V,k,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected value', async () => {
      const selectedOptionName = options.find(option => option.id === (args.defaultSelectedKeys as string[])[0])?.name as string;
      const hiddenSelect = canvas.getByLabelText(\`\${args.label}-hidden\`);
      const visibleValue = canvas.getByText(selectedOptionName, {
        selector: 'span'
      });
      expect(hiddenSelect).toHaveDisplayValue([selectedOptionName]);
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var K,M,A;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(A=(M=m.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,C,R;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(C=b.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var j,q,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(H=(q=y.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var $,N,O;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,F,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi']
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
}`,...(W=(F=v.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var G,_,z;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(_=S.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,Q,U,X,Y;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    selectionMode: 'multiple',
    isRequired: true
  },
  render: args => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    return <>
        <form onSubmit={e => {
        e.preventDefault();
        setIsSubmitted(true);
      }}>
          <Select {...args} />
          <button type='submit'>Submit</button>
        </form>
        {isSubmitted && 'success'}
      </>;
  },
  play: async ({
    canvas,
    step
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.queryByText('success')).not.toBeInTheDocument();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(await canvas.findByText('success')).toBeInTheDocument();
    });
  }
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,se,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: args => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    return <>
        <form onSubmit={e => {
        e.preventDefault();
        setIsSubmitted(true);
      }}>
          <Select {...args} />
          <button type='submit'>Submit</button>
        </form>
        {isSubmitted && 'success'}
      </>;
  },
  play: async ({
    canvas,
    step
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.queryByText('success')).not.toBeInTheDocument();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(await canvas.findByText('success')).toBeInTheDocument();
    });
  }
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,re,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...Normal.args,
    selectionMode: 'single',
    isClearable: false,
    label: 'Ärende',
    placeholder: 'Välj ärende'
  },
  render: args => {
    const [selectedItem, setSelectedItem] = useState('');
    return <Select {...args} selectedKeys={selectedItem} onSelectionChange={item => setSelectedItem(item.toString())} options={[{
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
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const gt=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","RequiredMultiple","RequiredSingle","DS872"];export{m as AllKeysSelected,f as DS872,u as DefaultSelectedKey,b as Disabled,y as DisabledOption,g as Invalid,p as Normal,d as NotClearable,w as RequiredMultiple,h as RequiredSingle,S as SelectAllEnabled,v as WithTags,gt as __namedExportsOrder,yt as default};
