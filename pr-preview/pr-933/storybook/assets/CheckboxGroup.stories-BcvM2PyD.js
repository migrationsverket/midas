import{j as e}from"./iframe-C4DKiwYN.js";import{C as m}from"./CheckboxGroup-DB24kF-y.js";import{C as p}from"./Checkbox-CeKB-00S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BAHDkvqC.js";import"./utils-DvVj6zXb.js";import"./clsx-B-dksMZM.js";import"./Text-ChfCx7em.js";import"./useFocusRing-BQmbmOM8.js";import"./index-D1Zq3tBT.js";import"./index-DvRPFHJM.js";import"./clsx-Ciqy0D92.js";import"./Text-jvPpr9wI.js";import"./Label-UFvL7pWA.js";import"./Button-OpXtZSl7.js";import"./Hidden-DarF7sEh.js";import"./useLabels-D-Cj8mvW.js";import"./useButton-Bbt7Qg1l.js";import"./Dialog-CIJaVQyg.js";import"./RSPContexts-Cha8J0tK.js";import"./OverlayArrow-BvfWhz5J.js";import"./useResizeObserver-riwookom.js";import"./useControlledState-Brso7pLD.js";import"./Collection-Dre_FaGo.js";import"./index-B-v93OJQ.js";import"./Separator-Bfxq8Bvm.js";import"./SelectionManager-B5ezXdJU.js";import"./useEvent-Bhfw0g_4.js";import"./scrollIntoView-TnIig3ea.js";import"./SelectionIndicator-B9betjwg.js";import"./useDescription-CR4Bo9uy.js";import"./ListKeyboardDelegate-5GAeO4Zs.js";import"./PressResponder-C9cb-6zf.js";import"./useLocalizedStringFormatter-DS8l-HPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DibiPfLO.js";import"./VisuallyHidden-BMy73pnR.js";import"./useLocalizedStringFormatter-BcVnMSxQ.js";import"./Button-DEY78OrD.js";import"./Button.module-CtQ1deO8.js";import"./x-DhtcgaRQ.js";import"./createLucideIcon-lniO6bka.js";import"./Heading-BMIX2CLE.js";import"./info-cnvZ88e2.js";import"./Popover-xVqALW3T.js";import"./useFormValidation-zdvVuc6w.js";import"./useField-BsA1_DsF.js";import"./Form-B3jMaxJX.js";import"./check-BHk1mwFi.js";import"./useToggleState-Dr_EQowX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
