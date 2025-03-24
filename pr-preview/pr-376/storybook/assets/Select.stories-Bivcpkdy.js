import{j as ee}from"./jsx-runtime-DtgEGaVE.js";import{S as Y}from"./Select-Cr58m97Q.js";import{u as l,e as s}from"./index-DtSMq7G1.js";import{r as ae}from"./index-BbAIUH2N.js";import"./Button-AXOEyd3Z.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-Bdg4Lht-.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-BNsiIlBy.js";import"./Form-BDyp70qB.js";import"./Text-CbyHDQDf.js";import"./useFormValidation-CE6QEibh.js";import"./Tag-dVVRwO1y.js";import"./Collection-B-nlreot.js";import"./index-DwWe6W7f.js";import"./ListBox-CVC5Uzz_.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Cwyjh9kf.js";import"./SelectionManager-BcUGuGhA.js";import"./useEvent-D4_b5_Hb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-qaFvQZnw.js";import"./useDescription-B1EhVr9u.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Bfw3o6i2.js";import"./useCollator-DpeVXYFV.js";import"./useListState-KH1mqqtE.js";import"./useField-jnpLLrbi.js";import"./useHighlightSelectionDescription-52Zrb9Xr.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./useHasTabbableChild-BvUbQUYt.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-D0GiBZoP.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-Cj13MBVm.js";import"./Input-B2v7qRwt.js";import"./useTextField-CPdDRbKg.js";import"./useOverlayTriggerState-CV3ul9Cj.js";import"./DismissButton-CGedck5U.js";import"./VisuallyHidden-BWFG7hRI.js";import"./useModal-CG93Z3Sb.js";import"./useMenuTrigger-BdwqjeQL.js";import"./useMenuTriggerState-k6Ma9Cog.js";import"./useSingleSelectListState-BNQZxBui.js";import"./chevron-down-U1dNK9nR.js";const r=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"].map(a=>({name:a,id:a.toLocaleLowerCase()})),la={component:Y,title:"Components/Select",tags:["autodocs"],args:{description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",options:r,placeholder:"Select an option",selectionMode:"single",showTags:!1}},p={play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await l.tab(),await l.keyboard("[Space]"),await l.keyboard("[Space]");const n=e.getByLabelText(`${a.label}-hidden`),i=e.getByText(r[0].name,{selector:"span"});s(n).toHaveDisplayValue([r[0].name]),s(i).toBeVisible()})}},d={args:{description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{var S;const n=(S=r.find(Z=>Z.id===a.defaultSelectedKeys[0]))==null?void 0:S.name,i=e.getByLabelText(`${a.label}-hidden`),o=e.getByText(n,{selector:"span"});s(i).toHaveDisplayValue([n]),s(o).toBeVisible()})}},m={args:{selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),i=e.getByText(/valda/,{selector:"span"});s(n).toHaveDisplayValue(r.map(({name:o})=>o)),s(i).toBeVisible()})}},u={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},b={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},y={args:{isInvalid:!0,errorMessage:"Error msg"}},g={args:{selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]},play:async({args:a,canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByLabelText(`${a.label}-hidden`),i=e.getByText("2 valda",{selector:"span"});s(n).toHaveDisplayValue(["Apple","Kiwi"]),s(i).toBeVisible(),s(e.getByText("Apple",{selector:"div"})).toBeVisible(),s(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},v={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({args:a,canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await l.tab(),await l.keyboard("[Space]"),await l.tab({shift:!0}),await l.keyboard("[Space]"),await l.keyboard("[Escape]");const n=e.getByLabelText(`${a.label}-hidden`),i=e.getByText(`${r.length} valda`,{selector:"span"});s(n).toHaveDisplayValue(r.map(({name:o})=>o)),s(i).toBeVisible()})}},c={args:{selectionMode:"multiple",isClearable:!1}},h={args:{...p.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:a=>{const[e,t]=ae.useState("");return ee.jsx(Y,{...a,selectedKeys:e,onSelectionChange:n=>t(n.toString()),options:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({args:a,step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await l.tab(),await l.keyboard("[Space]"),await l.keyboard("[Space]"),s(t.getByLabelText(a.label+"-hidden")).toHaveDisplayValue(["tolv"])})}};var w,x,f;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,V,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var D,K,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(K=m.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var I,E,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(E=u.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,C,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(M=(C=b.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var H,$,N;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(N=($=y.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var O,P,j;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var F,R,W;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(R=v.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,_,q,z,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(J=(z=c.parameters)==null?void 0:z.docs)==null?void 0:J.description}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ia=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","FixThisBug"];export{m as AllKeysSelected,d as DefaultSelectedKey,u as Disabled,b as DisabledOption,h as FixThisBug,y as Invalid,p as Normal,c as NotClearable,v as SelectAllEnabled,g as WithTags,ia as __namedExportsOrder,la as default};
