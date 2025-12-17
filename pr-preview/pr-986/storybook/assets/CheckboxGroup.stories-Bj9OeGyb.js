import{j as e}from"./iframe-BIgVwRzi.js";import{C as m}from"./CheckboxGroup-Bm-VzvoM.js";import{C as p}from"./Checkbox-DeV4Q0kq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYKhEZDB.js";import"./utils-zlmf3cg_.js";import"./clsx-B-dksMZM.js";import"./Text-igUMio9r.js";import"./useFocusRing-BbQ4IaHs.js";import"./index-BR_IV3ka.js";import"./index-D26pB2kE.js";import"./clsx-Ciqy0D92.js";import"./Text-Bgt8anl_.js";import"./Label-DaaCuiXS.js";import"./Button-BbaSeMTk.js";import"./Hidden-UQDm3VtM.js";import"./useLabels-Dvj8ZU2I.js";import"./useButton-I1p8fH58.js";import"./Dialog-BQp6Xln0.js";import"./RSPContexts-Derb496R.js";import"./OverlayArrow-DUdlZ50r.js";import"./useResizeObserver-CLZNJQNI.js";import"./useControlledState-CBUPCzMg.js";import"./Collection-DWh6W0bq.js";import"./index-jt0eOPBg.js";import"./Separator-BEVZtFra.js";import"./SelectionManager-1kG5QFWW.js";import"./useEvent-Buf3aweS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BeW-ijUI.js";import"./useDescription-6EDhH15h.js";import"./ListKeyboardDelegate-B1feCyCI.js";import"./PressResponder-jzmT9_sa.js";import"./useLocalizedStringFormatter-CHL49Mx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4GAzZkr.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BLTljg8L.js";import"./Button-cszjA275.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSORq7VR.js";import"./createLucideIcon-38Nuhk7x.js";import"./x-DPcPp3JM.js";import"./Heading-BR88Fj1o.js";import"./info-CGA3vxGD.js";import"./Popover-Dh-zN2eA.js";import"./useFormValidation-Dq_KdnpS.js";import"./useField-CFzmANgi.js";import"./Form-J4r0bCDd.js";import"./check-D3icI7AC.js";import"./useToggleState-DjZE38QG.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
