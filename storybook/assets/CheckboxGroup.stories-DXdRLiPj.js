import{j as e}from"./iframe-2y2Syr64.js";import{C as m}from"./CheckboxGroup-D2sVT4yR.js";import{C as p}from"./Checkbox-D_Z7kvnV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C0y0OPWO.js";import"./utils-QeTQioJq.js";import"./clsx-B-dksMZM.js";import"./Text-CjKUI5Vp.js";import"./useFocusRing-g5rhpMio.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./clsx-Ciqy0D92.js";import"./Text-BstWv5qu.js";import"./Label-DHfEEJL8.js";import"./Button-9fFVOiJo.js";import"./Hidden-B__XOjR0.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./Dialog-BvJ8m6YM.js";import"./RSPContexts-B0u5lwvT.js";import"./OverlayArrow-CUvmsQQP.js";import"./useResizeObserver-BDZH0uIC.js";import"./useControlledState-CNntbmuw.js";import"./Collection-BqbqFyGC.js";import"./index-DGABZHHf.js";import"./Separator-D2nDJNFV.js";import"./SelectionManager-CxkhtBsq.js";import"./useEvent-BoNgmAiC.js";import"./scrollIntoView-lPomJvMQ.js";import"./SelectionIndicator-DICBnb9I.js";import"./useDescription-DxQUmr3s.js";import"./ListKeyboardDelegate-SQ3uUgz7.js";import"./PressResponder-gDAf_1sv.js";import"./useLocalizedStringFormatter-ChuRjCa_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ChgNtnmZ.js";import"./getScrollParent-DZSok8Rc.js";import"./VisuallyHidden-CwQymDfp.js";import"./x-CmHq6MLN.js";import"./createLucideIcon-CukoxtoU.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./Heading-CWLS9XtN.js";import"./Button-D69d27MT.js";import"./Button.module-BB7N-cLd.js";import"./info-Do6oJr7z.js";import"./Popover-BdZRKvJY.js";import"./Form-BxZc3HF8.js";import"./useField-DPhi4f-8.js";import"./check-IeCNBJHc.js";import"./useToggleState-BdyqZ7Tk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
