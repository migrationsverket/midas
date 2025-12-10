import{j as e}from"./iframe-BTV99Gms.js";import{C as m}from"./CheckboxGroup-Dal5jtD9.js";import{C as p}from"./Checkbox-CLZOifLK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C71HvWKC.js";import"./utils-BacIRvZM.js";import"./clsx-B-dksMZM.js";import"./Text-CxND1lZJ.js";import"./useFocusRing-Dhw79Z84.js";import"./index-CFuROd4a.js";import"./index-C6EfjArq.js";import"./clsx-Ciqy0D92.js";import"./Text-CrWtCM-W.js";import"./Label-Dbcie4Q0.js";import"./Button-024Yw0Lw.js";import"./Hidden-DXOsHJk6.js";import"./useLabels-CKLLx1Rq.js";import"./useButton-BB6MUNWj.js";import"./Dialog-CySIORSr.js";import"./RSPContexts-XEziQn35.js";import"./OverlayArrow-05iu1tYZ.js";import"./useResizeObserver-DHLol4yZ.js";import"./useControlledState-tl9lkRKT.js";import"./Collection-DsRRCVPM.js";import"./index-DXtvVARP.js";import"./Separator-BHnnJmzo.js";import"./SelectionManager-rWibqhMR.js";import"./useEvent-xXPEAsn3.js";import"./scrollIntoView-BLih6di_.js";import"./SelectionIndicator-DA-YaFOm.js";import"./useDescription-CMXTR9Po.js";import"./ListKeyboardDelegate-CwaS4WW9.js";import"./PressResponder-QKqy0Rbg.js";import"./useLocalizedStringFormatter-BL0xzeyk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQV0LzaM.js";import"./VisuallyHidden-B8ZdR9Qv.js";import"./Button-BLFTRxuR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B3b85il2.js";import"./createLucideIcon-CTaohzwX.js";import"./x-nny4ZO7m.js";import"./Heading-fpYlOz7n.js";import"./info-j2ebPvtW.js";import"./Popover-Dxbyje2X.js";import"./useFormValidation-CvyP8liB.js";import"./useField-D6tha74p.js";import"./Form-KOn24wkR.js";import"./check-Bmkr3-dp.js";import"./useToggleState-TIhASqIy.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
