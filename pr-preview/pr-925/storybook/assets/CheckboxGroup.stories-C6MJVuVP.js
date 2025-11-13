import{j as e}from"./iframe-CIM0DofB.js";import{C as m}from"./CheckboxGroup-SYjefzKe.js";import{C as p}from"./Checkbox-Bu9r7H3p.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DwO_S0KA.js";import"./utils-B9P7pKe_.js";import"./clsx-B-dksMZM.js";import"./Text-Ct6VpsXr.js";import"./useFocusRing-CoxC0ffE.js";import"./index-z3A9RS1V.js";import"./index-Bmtd_4Bw.js";import"./clsx-Ciqy0D92.js";import"./Text-B9vOzllF.js";import"./Label-DE2w-lGG.js";import"./Button-ropdusrp.js";import"./Hidden-C_nZwzti.js";import"./useLabels-CBzADNBy.js";import"./useButton-C0Vwpaou.js";import"./Dialog-Cx-VRntz.js";import"./RSPContexts-w2tebVZn.js";import"./OverlayArrow-DwS08NJf.js";import"./useResizeObserver-BtiIzByl.js";import"./useControlledState-BbgbYRMe.js";import"./Collection-I3LsPIZG.js";import"./index-PNTU5C8X.js";import"./Separator-C1snTB51.js";import"./SelectionManager-C7niJKZ4.js";import"./useEvent-B-sCjbeA.js";import"./scrollIntoView-DzA6p2P1.js";import"./SelectionIndicator-NgqT78hr.js";import"./useDescription-DJZrXI9Y.js";import"./ListKeyboardDelegate-DgPC8zv-.js";import"./PressResponder-Csrl3Erf.js";import"./useLocalizedStringFormatter-Mrh-6xvo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BlYXZfSQ.js";import"./VisuallyHidden-CT-e_S4x.js";import"./useLocalizedStringFormatter-Cd3WX5f1.js";import"./Button-5M1jZ4FR.js";import"./Button.module-CtQ1deO8.js";import"./x-D17FT-An.js";import"./createLucideIcon-BthRmSsd.js";import"./Heading-DJQ2j_aH.js";import"./info-CViFlcu8.js";import"./Popover-zreMjoeW.js";import"./useFormValidation-C4G2ZagI.js";import"./useField-Dagtd4Zi.js";import"./Form-Bz9p_8XF.js";import"./check-CwqVaG7_.js";import"./useToggleState-C9fQO9aC.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
