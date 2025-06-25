import{j as m}from"./jsx-runtime-BYYWji4R.js";import{S as V}from"./Select-CtCYNv-a.js";import{f as K,u as t,e as n,s as ke}from"./index-CqmFxPum.js";import{r as xe}from"./index-ClcD9ViR.js";import{s as fe}from"./modes-BX-MOWoB.js";import"./clsx-B-dksMZM.js";import"./utils-BLyg3OOq.js";import"./Tag-DujWEtrJ.js";import"./Button-D5YfTa-t.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./context-d6PNTTSe.js";import"./useButton-rs5PgjfN.js";import"./Collection-nQ4RBMPG.js";import"./index-NDK0uC61.js";import"./ListBox-CdVvN_oI.js";import"./DragAndDrop-BqnrhZqQ.js";import"./getScrollParent-FdZGTYO5.js";import"./scrollIntoView-BivqL63c.js";import"./Separator-u34oIBUJ.js";import"./SelectionManager-sKkAcYRw.js";import"./useEvent-B0l3XC2n.js";import"./FocusScope-C-SsV_ba.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-Bkg2cFa9.js";import"./Text-w6ZeLcO4.js";import"./inertValue-C_mH9YkE.js";import"./useListState-Cih6x7dw.js";import"./useField-BBXNKLtY.js";import"./useHighlightSelectionDescription-DhJ4M3pb.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./useHasTabbableChild-DSrCCBGW.js";import"./Button-iueQwWtj.js";import"./Button.module-AG3JZ-l4.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./TextField-1PekMpnH.js";import"./FieldError-Bc4GcTNT.js";import"./Text-ObKd9RkE.js";import"./Form-CLBgFqGB.js";import"./useFormValidation-Cwkq_bn0.js";import"./Input-BWAASqba.js";import"./useTextField-Bz4YJk8U.js";import"./Checkbox-DRC0FnPY.js";import"./RSPContexts-HQcWPJyv.js";import"./VisuallyHidden-DWQ0FsMN.js";import"./useToggleState-DcHMzLVj.js";import"./check-Dn7CvcrD.js";import"./ListBoxSection-BFJHLAYs.js";import"./OverlayArrow-BZcOvAjo.js";import"./Dialog-yN6YlsCK.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CVNiYbvV.js";import"./Label-DWnqOFYq.js";import"./Dialog-m8iaEWUH.js";import"./Heading-DncQzqB_.js";import"./info-DTm9uzms.js";const c=["Äpple","Banan","Kiwi","Fläder","Nektarin","Vattenmelon","Ananas","Aprikos","Hjortron","Mango","Jordgubbe","Blåbär","Hallon","Björnbär","Körsbär","Persika","Plommon","Druva","Apelsin","Citron","Lime","Kokosnöt","Fikon","Papaya","Guava","Granatäpple","Drakfrukt","Stjärnfrukt","Passionsfrukt"].map(a=>({name:a,id:a.toLocaleLowerCase()})),Be=[{name:"Grönsaker",children:[{name:"Morot",id:"morot"},{name:"Broccoli",id:"broccoli"},{name:"Spenat",id:"spenat"},{name:"Potatis",id:"potatis"},{name:"Tomat",id:"tomat"}]},{name:"Bär",children:[{name:"Jordgubbe",id:"jordgubbe"},{name:"Blåbär",id:"blåbär"},{name:"Hallon",id:"hallon"},{name:"Björnbär",id:"björnbär"}]},{name:"Citrusfrukter",children:[{name:"Apelsin",id:"apelsin"},{name:"Citron",id:"citron"},{name:"Lime",id:"lime"},{name:"Grapefrukt",id:"grapefrukt"}]},{name:"Tropiska Frukter",children:[{name:"Ananas",id:"ananas"},{name:"Mango",id:"mango"},{name:"Papaya",id:"papaya"},{name:"Guava",id:"guava"}]},{name:"Stenfrukter",children:[{name:"Persika",id:"persika"},{name:"Plommon",id:"plommon"},{name:"Körsbär",id:"körsbär"},{name:"Aprikos",id:"aprikos"}]},{name:"Meloner",children:[{name:"Vattenmelon",id:"vattenmelon"},{name:"Cantaloupe",id:"cantaloupe"},{name:"Honungsmelon",id:"honungsmelon"}]},{name:"Exotiska Frukter",children:[{name:"Drakfrukt",id:"drakfrukt"},{name:"Stjärnfrukt",id:"stjärnfrukt"},{name:"Passionsfrukt",id:"passionsfrukt"}]},{name:"Torkade Frukter",children:[{name:"Russin",id:"russin"},{name:"Fikon",id:"fikon"},{name:"Dadlar",id:"dadlar"}]},{name:"Nötter",children:[{name:"Mandel",id:"mandel"},{name:"Valnöt",id:"valnöt"},{name:"Pistage",id:"pistage"}]},{name:"Örter",children:[{name:"Basilika",id:"basilika"},{name:"Mynta",id:"mynta"},{name:"Koriander",id:"koriander"}]},{name:"Kryddor",children:[{name:"Kanel",id:"kanel"},{name:"Ingefära",id:"ingefära"},{name:"Gurkmeja",id:"gurkmeja"}]},{name:"Baljväxter",children:[{name:"Linser",id:"linser"},{name:"Kikärtor",id:"kikartor"},{name:"Svarta Bönor",id:"svarta-bönor"}]}],Ve=K(),T=K(),La={component:V,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:c,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:Ve},parameters:{chromatic:{modes:fe}},render:(a,{globals:{size:e}})=>m.jsx(V,{...a,size:e})},o={play:async({args:a,canvas:e,step:s,globals:{size:i}})=>{await s("It should be possible to select an item using the keyboard",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]");const r=e.getByLabelText(`${a.label}-hidden`),d=e.getByText(c[0].name,{selector:"span"});await n(r).toHaveDisplayValue([c[0].name]),await n(d).toBeVisible()}),await s("it should change size according to size prop",async()=>{await n(e.getByRole("button")).toHaveStyle({height:i==="large"?"48px":"40px"})})}},u={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("Kiwi",{selector:"span"});n(i).toHaveDisplayValue(["Kiwi"]),n(r).toBeVisible()})}},b={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banan"]),selectionMode:"multiple"},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Banan","Kiwi"]),n(r).toBeVisible()})}},y={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText(/valda/,{selector:"span"});n(i).toHaveDisplayValue(c.map(({name:d})=>d)),n(r).toBeVisible()})}},g={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},h={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},w={args:{isInvalid:!0,errorMessage:"Error msg"}},v={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["äpple","kiwi"])},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Äpple","Kiwi"]),n(r).toBeVisible(),n(e.getByText("Äpple",{selector:"div"})).toBeVisible(),n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},S={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:s})=>{await s("It should be possible to select all items",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.tab({shift:!0}),await t.keyboard("[Space]"),await t.keyboard("[Escape]");const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText(`${c.length} valda`,{selector:"span"});n(i).toHaveDisplayValue(c.map(({name:d})=>d)),n(r).toBeVisible()})}},p={args:{selectionMode:"multiple",isClearable:!1}},k={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,s]=xe.useState(new Set);return m.jsx(V,{...a,selectedKeys:e,onSelectionChange:s,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:s})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),n(s.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},x={args:{...o.args,options:Be},play:async({step:a})=>{const e=ke(console,"warn").mockImplementation(K());await a("It should not warn about missing aria labels when toggling the select open state",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await n(e).toHaveBeenCalledTimes(0)})}},l={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:a=>m.jsxs("form",{onSubmit:e=>{e.preventDefault(),T()},children:[m.jsx(V,{...a}),m.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:a})=>{await a("It should give a validation error if the user submitted without selecting an option",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await n(T).not.toHaveBeenCalled()})}},f={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...l,args:{...l.args,selectionMode:"multiple"}},B={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:a,step:e,args:{label:s}})=>{await e("It should be possible to deselect all items to empty the selection",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await t.keyboard("[Escape]"),await n(a.getByLabelText(`${s}-hidden`)).toHaveDisplayValue([])}),await e("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await t.keyboard("[Space]"),await t.keyboard("[ArrowDown]"),await t.keyboard("[Space]"),await t.keyboard("[Escape]"),await n(a.getByLabelText(`${s}-hidden`)).not.toHaveDisplayValue([])})}};var E,D,M;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    step,
    globals: {
      size
    }
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
        height: size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(M=(D=o.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,H,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var C,j,A;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultSelectedKeys: new Set(['kiwi', 'banan']),
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
      expect(hiddenSelect).toHaveDisplayValue(['Banan', 'Kiwi']);
      expect(visibleValue).toBeVisible();
    });
  }
}`,...(A=(j=b.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var $,R,P;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(R=y.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var q,N,z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(N=g.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var F,G,O;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(O=(G=h.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var W,J,_;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(_=(J=w.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: new Set(['äpple', 'kiwi'])
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
      expect(hiddenSelect).toHaveDisplayValue(['Äpple', 'Kiwi']);
      expect(visibleValue).toBeVisible();
      expect(canvas.getByText('Äpple', {
        selector: 'div'
      })).toBeVisible();
      expect(canvas.getByText('Kiwi', {
        selector: 'div'
      })).toBeVisible();
    });
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne,se,ie;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ie=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var re,oe,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,pe;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,be;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(be=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var ye,ge,he;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var we,ve,Se;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(Se=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const Ca=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{y as AllKeysSelected,k as DS872,u as DefaultSelectedKey,b as DefaultSelectedKeys,g as Disabled,h as DisabledOption,w as Invalid,B as MultiSelectTests,o as Normal,p as NotClearable,f as RequiredMultiSelect,l as RequiredSingleSelect,x as Sectioned,S as SelectAllEnabled,v as WithTags,Ca as __namedExportsOrder,La as default};
