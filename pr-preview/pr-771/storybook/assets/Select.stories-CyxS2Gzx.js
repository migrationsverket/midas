import{j as B,r as ke}from"./iframe-C_VRINH-.js";import{S as V}from"./Select-96xWIvAT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./utils-DXayxLsy.js";import"./Tag-CEg53SFr.js";import"./Button-SSMmmdpd.js";import"./Hidden-Dbkmm61k.js";import"./useFocusRing-Dv_VN0Lg.js";import"./index-C0YVE2JG.js";import"./index-_yfYLSkX.js";import"./useLabels-DpkLBKsS.js";import"./useButton-Btlj9W1H.js";import"./Collection-jdpt3IAl.js";import"./index-C5RSfdKO.js";import"./ListBox-B0QOpfGf.js";import"./DragAndDrop-Bhn5PLAj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CqV_4uUz.js";import"./SelectionManager-DhGwotXn.js";import"./useEvent-DA_FrVTg.js";import"./FocusScope-D0osISWX.js";import"./useDescription-CqdztY3Y.js";import"./useControlledState-ClSEVNGl.js";import"./ListKeyboardDelegate-BW4ZihnH.js";import"./Text-BYhiGUIm.js";import"./inertValue-B_nIERYZ.js";import"./useListState-D1lZ1cpY.js";import"./useField-aPN2EXxb.js";import"./useHighlightSelectionDescription-DIxYT_mh.js";import"./useUpdateEffect-CsSB98iz.js";import"./useLocalizedStringFormatter-v0VkWtJs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B5qURtnl.js";import"./Button-BBm0Cwr-.js";import"./Button.module-CF2bVDCq.js";import"./x-DaNDt_LG.js";import"./createLucideIcon-QLEk5Dtq.js";import"./TextField-BkkRI3wc.js";import"./FieldError-BhJF61NB.js";import"./Text-Dtfb6fSx.js";import"./Form-Ckn2udqi.js";import"./useFormValidation-rCnA4OaW.js";import"./Input-DIMMfuXO.js";import"./useTextField-CP1PF1D9.js";import"./Checkbox-2mFSdpb5.js";import"./RSPContexts-CkY3kgMJ.js";import"./VisuallyHidden-TT6CKio2.js";import"./useToggleState-HAygyjGt.js";import"./check-DHuj8UYU.js";import"./ListBoxSection-B57pdavj.js";import"./Virtualizer-CItfprvR.js";import"./useResizeObserver-Ew5k0VCQ.js";import"./Dialog-BvIEXMYl.js";import"./OverlayArrow-Bry3CQxl.js";import"./PressResponder-CFRSOUCg.js";import"./useObserveElement-B4q-TaXJ.js";import"./useLocalizedStringFormatter-YtGKiDxC.js";import"./chevron-down-C67iRT0P.js";import"./Label-BBEeqK9F.js";import"./Dialog-CzAfcmDE.js";import"./Heading-BswdROBQ.js";import"./info-BXIihvoj.js";const c=["Äpple","Banan","Kiwi","Fläder","Nektarin","Vattenmelon","Ananas","Aprikos","Hjortron","Mango","Jordgubbe","Blåbär","Hallon","Björnbär","Körsbär","Persika","Plommon","Druva","Apelsin","Citron","Lime","Kokosnöt","Fikon","Papaya","Guava","Granatäpple","Drakfrukt","Stjärnfrukt","Passionsfrukt"].map(a=>({name:a,id:a.toLocaleLowerCase()})),xe=[{name:"Grönsaker",children:[{name:"Morot",id:"morot"},{name:"Broccoli",id:"broccoli"},{name:"Spenat",id:"spenat"},{name:"Potatis",id:"potatis"},{name:"Tomat",id:"tomat"}]},{name:"Bär",children:[{name:"Jordgubbe",id:"jordgubbe"},{name:"Blåbär",id:"blåbär"},{name:"Hallon",id:"hallon"},{name:"Björnbär",id:"björnbär"}]},{name:"Citrusfrukter",children:[{name:"Apelsin",id:"apelsin"},{name:"Citron",id:"citron"},{name:"Lime",id:"lime"},{name:"Grapefrukt",id:"grapefrukt"}]},{name:"Tropiska Frukter",children:[{name:"Ananas",id:"ananas"},{name:"Mango",id:"mango"},{name:"Papaya",id:"papaya"},{name:"Guava",id:"guava"}]},{name:"Stenfrukter",children:[{name:"Persika",id:"persika"},{name:"Plommon",id:"plommon"},{name:"Körsbär",id:"körsbär"},{name:"Aprikos",id:"aprikos"}]},{name:"Meloner",children:[{name:"Vattenmelon",id:"vattenmelon"},{name:"Cantaloupe",id:"cantaloupe"},{name:"Honungsmelon",id:"honungsmelon"}]},{name:"Exotiska Frukter",children:[{name:"Drakfrukt",id:"drakfrukt"},{name:"Stjärnfrukt",id:"stjärnfrukt"},{name:"Passionsfrukt",id:"passionsfrukt"}]},{name:"Torkade Frukter",children:[{name:"Russin",id:"russin"},{name:"Fikon",id:"fikon"},{name:"Dadlar",id:"dadlar"}]},{name:"Nötter",children:[{name:"Mandel",id:"mandel"},{name:"Valnöt",id:"valnöt"},{name:"Pistage",id:"pistage"}]},{name:"Örter",children:[{name:"Basilika",id:"basilika"},{name:"Mynta",id:"mynta"},{name:"Koriander",id:"koriander"}]},{name:"Kryddor",children:[{name:"Kanel",id:"kanel"},{name:"Ingefära",id:"ingefära"},{name:"Gurkmeja",id:"gurkmeja"}]},{name:"Baljväxter",children:[{name:"Linser",id:"linser"},{name:"Kikärtor",id:"kikartor"},{name:"Svarta Bönor",id:"svarta-bönor"}]}],{expect:n,fn:K,spyOn:Be,userEvent:t}=__STORYBOOK_MODULE_TEST__,fe=K(),T=K(),Aa={component:V,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:c,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:fe,size:"large"}},o={play:async({args:a,canvas:e,step:s})=>{await s("It should be possible to select an item using the keyboard",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]");const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText(c[0].name,{selector:"span"});await n(i).toHaveDisplayValue([c[0].name]),await n(r).toBeVisible()}),await s("it should change size according to size prop",async()=>{await n(e.getByRole("button")).toHaveStyle({height:a.size==="large"?"48px":"40px"})})}},p={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:new Set(["kiwi"])},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("Kiwi",{selector:"span"});n(i).toHaveDisplayValue(["Kiwi"]),n(r).toBeVisible()})}},m={args:{description:"Kiwi and banana are pre-selected",defaultSelectedKeys:new Set(["kiwi","banan"]),selectionMode:"multiple"},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected value",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Banan","Kiwi"]),n(r).toBeVisible()})}},u={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText(/valda/,{selector:"span"});n(i).toHaveDisplayValue(c.map(({name:f})=>f)),n(r).toBeVisible()})}},b={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},y={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},h={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:new Set(["äpple","kiwi"])},play:async({args:a,canvas:e,step:s})=>{await s("It should display and reflect the pre-selected values",async()=>{const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText("2 valda",{selector:"span"});n(i).toHaveDisplayValue(["Äpple","Kiwi"]),n(r).toBeVisible(),n(e.getByText("Äpple",{selector:"div"})).toBeVisible(),n(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},w={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:s})=>{await s("It should be possible to select all items",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.tab({shift:!0}),await t.keyboard("[Space]"),await t.keyboard("[Escape]");const i=e.getByLabelText(`${a.label}-hidden`),r=e.getByText(`${c.length} valda`,{selector:"span"});n(i).toHaveDisplayValue(c.map(({name:f})=>f)),n(r).toBeVisible()})}},d={args:{selectionMode:"multiple",isClearable:!1}},S={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,s]=ke.useState(new Set);return B.jsx(V,{...a,selectedKeys:e,onSelectionChange:s,options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:s})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),n(s.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}},v={args:{...o.args,options:xe},play:async({step:a})=>{const e=Be(console,"warn").mockImplementation(K());await a("It should not warn about missing aria labels when toggling the select open state",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await n(e).toHaveBeenCalledTimes(0)})}},l={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:a=>B.jsxs("form",{onSubmit:e=>{e.preventDefault(),T()},children:[B.jsx(V,{...a}),B.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:a})=>{await a("It should give a validation error if the user submitted without selecting an option",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await n(T).not.toHaveBeenCalled()})}},k={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...l,args:{...l.args,selectionMode:"multiple"}},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:a,step:e,args:{label:s}})=>{await e("It should be possible to deselect all items to empty the selection",async()=>{await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await t.keyboard("[Space]"),await t.keyboard("[Escape]"),await n(a.getByLabelText(`${s}-hidden`)).toHaveDisplayValue([])}),await e("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await t.keyboard("[Space]"),await t.keyboard("[ArrowDown]"),await t.keyboard("[Space]"),await t.keyboard("[Escape]"),await n(a.getByLabelText(`${s}-hidden`)).not.toHaveDisplayValue([])})}};var E,D,M;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      await expect(hiddenSelect).toHaveDisplayValue([options[0].name]);
      await expect(visibleValue).toBeVisible();
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(M=(D=o.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,H,L;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var C,A,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var $,R,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var O,q,N;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(q=b.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var _,z,F;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(F=(z=y.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,W,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(J=(W=g.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var U,Y,Q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne,se,ie;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(ne=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(ie=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var re,oe,le;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,be;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var ye,ge,he;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var we,Se,ve;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};const ja=["Normal","DefaultSelectedKey","DefaultSelectedKeys","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","Sectioned","RequiredSingleSelect","RequiredMultiSelect","MultiSelectTests"];export{u as AllKeysSelected,S as DS872,p as DefaultSelectedKey,m as DefaultSelectedKeys,b as Disabled,y as DisabledOption,g as Invalid,x as MultiSelectTests,o as Normal,d as NotClearable,k as RequiredMultiSelect,l as RequiredSingleSelect,v as Sectioned,w as SelectAllEnabled,h as WithTags,ja as __namedExportsOrder,Aa as default};
