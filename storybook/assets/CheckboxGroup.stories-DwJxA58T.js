import{j as e}from"./iframe-Bs8KTy6C.js";import{C as m}from"./CheckboxGroup-Dh3e0xV_.js";import{C as p}from"./Checkbox-8aUQszfa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C99gwkco.js";import"./utils-7Wht2g-Y.js";import"./clsx-B-dksMZM.js";import"./Text-Is5sK9kM.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./clsx-Ciqy0D92.js";import"./Text-BoHNsdRj.js";import"./Label-CJ6V0bgk.js";import"./Button-CxAHhwgQ.js";import"./Hidden-BrvGFfZa.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./Dialog-SKg3OPGS.js";import"./RSPContexts-Cn0wIx3g.js";import"./OverlayArrow-DHI9hthx.js";import"./useResizeObserver-Dn32OBqP.js";import"./useControlledState-6XUuECgK.js";import"./Collection--YMenRmj.js";import"./index-D9oWzMTR.js";import"./Separator-f7sMysnx.js";import"./SelectionManager-BpOfB2LQ.js";import"./useEvent-5ZwgKb7q.js";import"./scrollIntoView-BBlkQq5K.js";import"./SelectionIndicator-Cxkz7MSn.js";import"./useDescription-B2R3OifQ.js";import"./ListKeyboardDelegate-BVzuzsm6.js";import"./PressResponder-dS2wrVHY.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1oST7N2-.js";import"./getScrollParent-CPUsdWMS.js";import"./VisuallyHidden-BBTIfzW0.js";import"./x-DmyzL7jy.js";import"./createLucideIcon-TcTXJfKq.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./Heading-BZGNUUY1.js";import"./Button-hEmbppXg.js";import"./Button.module-D_C6WeTN.js";import"./info-CEBu5sf2.js";import"./Popover-DIMUMzwb.js";import"./useFormValidation-knURiIi0.js";import"./useField-Ccklh0cv.js";import"./Form-KKn6Lh2V.js";import"./check-DsGwW2u8.js";import"./useToggleState-SEglJwmJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
