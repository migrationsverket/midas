import{j as l}from"./jsx-runtime-DtgEGaVE.js";import{S as B}from"./Select-gii508hv.js";import{f as de,u as a,e as s}from"./index-DtSMq7G1.js";import{r as pe}from"./index-BbAIUH2N.js";import"./Button-BAmjpgnq.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Dh0Vg3qS.js";import"./Label-Bf-bZThx.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-5VAxOUE-.js";import"./Form-Cr76Dr7U.js";import"./Text-BkowhAon.js";import"./useFormValidation-BT6lxpQu.js";import"./Tag-gZLMbFBP.js";import"./Collection-CC9oGC21.js";import"./index-DwWe6W7f.js";import"./ListBox-CKwgwK3H.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Q6oUd1rz.js";import"./SelectionManager-DeX5238t.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-B7ZOkgD-.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-xVJLa59h.js";import"./useCollator-C3PRVItH.js";import"./useListState-CMHXyEJa.js";import"./useField-9Cy_F6CL.js";import"./useHighlightSelectionDescription-CrqVFzKW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-CW7EX7UL.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-Y9xX5Okf.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-DD1PHP0y.js";import"./Input-COAkbJ34.js";import"./useTextField-CYsm1yTN.js";import"./useOverlayTriggerState-CykkZ-dk.js";import"./useMenuTriggerState-VaHMadTP.js";import"./VisuallyHidden-DRXW-gYG.js";import"./useModal-BWKj4cMF.js";import"./useSingleSelectListState-DlUIQo0C.js";import"./chevron-down-U1dNK9nR.js";const o=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(e=>({name:e,id:e.toLocaleLowerCase()})),c=de(),ma={component:B,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:o,placeholder:"Select an option",selectionMode:"single",showTags:!1}},u={play:async({args:e,canvas:t,step:n})=>{await n("It should be possible to select an item using the keyboard",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]");const i=t.getByLabelText(`${e.label}-hidden`),r=t.getByText(o[0].name,{selector:"span"});s(i).toHaveDisplayValue([o[0].name]),s(r).toBeVisible()})}},m={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]},play:async({args:e,canvas:t,step:n})=>{await n("It should display and reflect the pre-selected value",async()=>{var E;const i=(E=o.find(ce=>ce.id===e.defaultSelectedKeys[0]))==null?void 0:E.name,r=t.getByLabelText(`${e.label}-hidden`),d=t.getByText(i,{selector:"span"});s(r).toHaveDisplayValue([i]),s(d).toBeVisible()})}},b={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:e,canvas:t,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=t.getByLabelText(`${e.label}-hidden`),r=t.getByText(/valda/,{selector:"span"});s(i).toHaveDisplayValue(o.map(({name:d})=>d)),s(r).toBeVisible()})}},y={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},g={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},v={args:{isInvalid:!0,errorMessage:"Error msg"}},S={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]},play:async({args:e,canvas:t,step:n})=>{await n("It should display and reflect the pre-selected values",async()=>{const i=t.getByLabelText(`${e.label}-hidden`),r=t.getByText("2 valda",{selector:"span"});s(i).toHaveDisplayValue(["Apple","Kiwi"]),s(r).toBeVisible(),s(t.getByText("Apple",{selector:"div"})).toBeVisible(),s(t.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},w={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:e,canvas:t,step:n})=>{await n("It should be possible to select all items",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.tab({shift:!0}),await a.keyboard("[Space]"),await a.keyboard("[Escape]");const i=t.getByLabelText(`${e.label}-hidden`),r=t.getByText(`${o.length} valda`,{selector:"span"});s(i).toHaveDisplayValue(o.map(({name:d})=>d)),s(r).toBeVisible()})}},p={args:{selectionMode:"multiple",isClearable:!1}},h={tags:["!dev"],args:{selectionMode:"multiple",isRequired:!0},render:e=>l.jsxs("form",{onSubmit:t=>{t.preventDefault(),c()},children:[l.jsx(B,{...e}),l.jsx("button",{type:"submit",children:"Submit"})]}),play:async({step:e})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),s(c).not.toHaveBeenCalled()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.keyboard("[Escape]"),await a.tab(),await a.tab(),await a.keyboard("[Enter]"),s(c).toHaveBeenCalled()})}},f={tags:["!dev"],args:{selectionMode:"single",isRequired:!0},render:e=>l.jsxs("form",{onSubmit:t=>{t.preventDefault(),c()},children:[l.jsx(B,{...e}),l.jsx("button",{type:"submit",children:"Submit"})]}),play:async({step:e})=>{await e("It should not be possible to submit the form",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),s(c).not.toHaveBeenCalled()}),await e("It should be possible to submit the form if a value was selected",async()=>{await a.keyboard("[Space]"),await a.keyboard("[Space]"),await a.tab(),await a.keyboard("[Enter]"),s(c).toHaveBeenCalled()})}},x={tags:["!dev"],args:{...u.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[t,n]=pe.useState("");return l.jsx(B,{...e,selectedKeys:t,onSelectionChange:i=>n(i.toString()),options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:e,step:t,canvas:n})=>{await t("It should be possible to select an item with an ID greater than 9",async()=>{await a.tab(),await a.keyboard("[Space]"),await a.keyboard("[Space]"),s(n.getByLabelText(e.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var V,k,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var I,T,K;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(T=m.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var C,H,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(H=b.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var A,L,$;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(L=y.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var j,R,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(R=g.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var O,q,P;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(P=(q=v.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var W,G,_;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(G=S.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var F,z,J;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(z=w.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X,Y,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    selectionMode: 'multiple',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
    handleSubmit();
  }}>
      <Select {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    step
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(handleSubmit).not.toHaveBeenCalled();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(handleSubmit).toHaveBeenCalled();
    });
  }
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
    handleSubmit();
  }}>
      <Select {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    step
  }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(handleSubmit).not.toHaveBeenCalled();
    });

    // Select a value then submit again
    await step('It should be possible to submit the form if a value was selected', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(handleSubmit).toHaveBeenCalled();
    });
  }
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,le,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const ba=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","RequiredMultiple","RequiredSingle","DS872"];export{b as AllKeysSelected,x as DS872,m as DefaultSelectedKey,y as Disabled,g as DisabledOption,v as Invalid,u as Normal,p as NotClearable,h as RequiredMultiple,f as RequiredSingle,w as SelectAllEnabled,S as WithTags,ba as __namedExportsOrder,ma as default};
