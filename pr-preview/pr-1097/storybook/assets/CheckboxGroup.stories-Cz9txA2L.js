import{j as e}from"./iframe-apXpK-Ym.js";import{C as m}from"./CheckboxGroup-BI1bRZ4e.js";import{C as p}from"./Checkbox-D9nJSxUU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D5-eAkFz.js";import"./utils-D_IsDdxh.js";import"./clsx-B-dksMZM.js";import"./Text-C8sRdSzE.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./clsx-Ciqy0D92.js";import"./Text-i6zD5ogA.js";import"./Label-B61B8CW5.js";import"./Button-B7ztBAPt.js";import"./Hidden-Bx4MJY4P.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./Dialog-ddjz0mGh.js";import"./RSPContexts-faUp0Odp.js";import"./OverlayArrow-Dzflbc9a.js";import"./useResizeObserver-aKQBpFeO.js";import"./useControlledState-Be_pRaEQ.js";import"./Collection-D3gx8QV5.js";import"./index-Dgx-sPIC.js";import"./Separator-DyNwjiUX.js";import"./SelectionManager-ClJLzM8L.js";import"./useEvent-Cb7uf1PC.js";import"./scrollIntoView-CTB_aNM2.js";import"./SelectionIndicator-DWN5x0c4.js";import"./useDescription-WAW3EvIG.js";import"./ListKeyboardDelegate-aRoWOpht.js";import"./PressResponder-D5cEEySH.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bel213k_.js";import"./getScrollParent-KYVriqsz.js";import"./VisuallyHidden-DkYm7gZi.js";import"./Button-B3oZe3e3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./createLucideIcon-BVTX869z.js";import"./x-CdTIprco.js";import"./Heading-TOojHhu6.js";import"./info-DkiDzn4t.js";import"./Popover-C-f5b7BH.js";import"./useFormValidation-CKfmowTq.js";import"./useField-iX3RzpJx.js";import"./Form-CrNVZ_qL.js";import"./check-DdPjn7Ny.js";import"./useToggleState-BOfWrg06.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
