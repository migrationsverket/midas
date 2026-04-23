import{j as e}from"./iframe-CUW_txz6.js";import{C as m}from"./CheckboxGroup-CJcRW33h.js";import{C as p}from"./Checkbox-CkRoptQj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BBiP0jfO.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./Text-Bi2kB5GC.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./clsx-Ciqy0D92.js";import"./Text-DvPi9pFM.js";import"./Label-CzaPhy5Y.js";import"./Button-DJT34vsz.js";import"./Hidden-C6dZGZNF.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./Dialog-D7fJEhAE.js";import"./RSPContexts-DYx0iF5j.js";import"./OverlayArrow-B36CX_JF.js";import"./useResizeObserver-B50A-UTA.js";import"./useControlledState-BuDrosJG.js";import"./Collection-3mxxC9eU.js";import"./index-DjmmA6Oh.js";import"./Separator-CbzyhqqZ.js";import"./SelectionManager-aJ-j4EKa.js";import"./useEvent-CHrrjSKK.js";import"./scrollIntoView-D8kVtkIc.js";import"./SelectionIndicator-Byd9q1Hf.js";import"./useDescription-DeV7fvLF.js";import"./ListKeyboardDelegate-DyYd3gII.js";import"./PressResponder-DTTKATG8.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGNa_fMh.js";import"./getScrollParent-DWW6JN_D.js";import"./VisuallyHidden-C2eTcyAK.js";import"./ModalOverlay-Dd-5tipM.js";import"./x-pwSsQ8xV.js";import"./createLucideIcon-Cc0DwuLE.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Heading-rIzkF3u3.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./info-BGBnsoll.js";import"./Popover-DgFfSiXP.js";import"./Form-DNzUj6ms.js";import"./useField-CLP_zsZ0.js";import"./check-LolfXL1H.js";import"./useToggleState-DfZegFVL.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
