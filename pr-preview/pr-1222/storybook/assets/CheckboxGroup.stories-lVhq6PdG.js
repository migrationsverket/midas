import{j as e}from"./iframe-DyVZO6Jd.js";import{C as m}from"./CheckboxGroup-DuDVtt9I.js";import{C as p}from"./Checkbox-DteT7cCl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BOgY85Mx.js";import"./utils-B4PADexm.js";import"./clsx-B-dksMZM.js";import"./Text-CipKPPoF.js";import"./useFocusRing-D32E8y-A.js";import"./index-CPCUhuiH.js";import"./index-Co6SSMDt.js";import"./clsx-Ciqy0D92.js";import"./Text-BNccgVJc.js";import"./Label-DDtsq2Wq.js";import"./Button-B6InbNDy.js";import"./Hidden-DIN7ehBk.js";import"./useLabel-BjmSwcyg.js";import"./useLabels-C-NvnRdm.js";import"./useButton-B-EgkQxS.js";import"./Dialog-D_FaPuWp.js";import"./RSPContexts-X7l1b1Jy.js";import"./OverlayArrow-CPYtt0k7.js";import"./useResizeObserver-BH7K4kN2.js";import"./useControlledState-DG-0bHR_.js";import"./Collection-QZGn261N.js";import"./index-Cu-r39qe.js";import"./Separator-DeBXtHoc.js";import"./SelectionManager-kVWkFxi1.js";import"./useEvent-BZfyFw7i.js";import"./scrollIntoView-FtsWToTZ.js";import"./SelectionIndicator-BMPLzHtu.js";import"./useDescription-BgvtJJFO.js";import"./ListKeyboardDelegate-RR5K6vur.js";import"./PressResponder-VZsHLFDr.js";import"./useLocalizedStringFormatter-BIY6CwSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkovJave.js";import"./getScrollParent-CATvZmdv.js";import"./VisuallyHidden-CBSXawwP.js";import"./ModalOverlay-CXQuZI2f.js";import"./x-bmse7woB.js";import"./createLucideIcon-CjUPJyft.js";import"./useLocalizedStringFormatter-Dt4-iLHW.js";import"./Heading-AKd3Rpar.js";import"./Button-DFXCpOJf.js";import"./Button.module-BB7N-cLd.js";import"./info--19NV615.js";import"./Popover-DoZts5Wt.js";import"./Form-yAw-6d1b.js";import"./useField-CC79MtWI.js";import"./check-CcE4ewrx.js";import"./useToggleState-Pq_3XLbm.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
