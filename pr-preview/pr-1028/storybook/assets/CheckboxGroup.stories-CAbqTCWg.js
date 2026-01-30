import{j as e}from"./iframe-D7hgefFi.js";import{C as m}from"./CheckboxGroup-GhI8O5gt.js";import{C as p}from"./Checkbox-CvxqOXZZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CIHFT2OA.js";import"./utils-1x5w2eFs.js";import"./clsx-B-dksMZM.js";import"./Text-bVuSsYW4.js";import"./useFocusRing-BEIKl4Np.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./clsx-Ciqy0D92.js";import"./Text-DGN2slpv.js";import"./Label-DZswzBQt.js";import"./Button-BkQQAf76.js";import"./Hidden-BPthAdp1.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./Dialog-CPp57JpH.js";import"./RSPContexts-edSBr0y1.js";import"./OverlayArrow-CshA3CdM.js";import"./useResizeObserver-CoBEwF8j.js";import"./useControlledState-C_xkaUiB.js";import"./Collection-DT-GXrOm.js";import"./index-lLpdZDLW.js";import"./Separator-PRL3nm89.js";import"./SelectionManager-DizDU1Yl.js";import"./useEvent-Bq0KSq8o.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSpOUr3d.js";import"./useDescription-BnUO2d3M.js";import"./ListKeyboardDelegate-B4SqK4yR.js";import"./PressResponder-GJNPmhvW.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ba7Bng00.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./Button-rPxCLKTe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";import"./createLucideIcon-B4zeiAHI.js";import"./x-DLgV2fM1.js";import"./Heading-CjrbX93v.js";import"./info-zy5dga28.js";import"./Popover-CgvIwbeH.js";import"./useFormValidation-DyceQfcW.js";import"./useField-C4uTTXDp.js";import"./Form-dGELDKxX.js";import"./check-BbXSzyfX.js";import"./useToggleState-EXB5HIQo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
