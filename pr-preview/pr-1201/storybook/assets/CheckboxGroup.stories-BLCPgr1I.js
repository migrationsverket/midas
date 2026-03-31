import{j as e}from"./iframe-BBhwDnFO.js";import{C as m}from"./CheckboxGroup-DpQRNKzL.js";import{C as p}from"./Checkbox-Cp1pHjDy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYJ3UXof.js";import"./utils-Bd87UzLz.js";import"./clsx-B-dksMZM.js";import"./Text-CuEErEoe.js";import"./useFocusRing-B_sqHjIH.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./clsx-Ciqy0D92.js";import"./Text-DjN1krRx.js";import"./Label-CaJmjuJ5.js";import"./Button-CckDCqMW.js";import"./Hidden-QElrSbG6.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./Dialog-GIzabknY.js";import"./RSPContexts-DMx7X0Ic.js";import"./OverlayArrow-B-qzSycV.js";import"./useResizeObserver-CewxdJh_.js";import"./useControlledState-Kegn83S3.js";import"./Collection-C2tsxlnT.js";import"./index-DNxb9PD6.js";import"./Separator-1eoqrbWU.js";import"./SelectionManager-CUTXwG43.js";import"./useEvent-Cdz6o0we.js";import"./scrollIntoView-JBdO06P0.js";import"./SelectionIndicator-B6969qPK.js";import"./useDescription-eBvBmjGe.js";import"./ListKeyboardDelegate-0wBwb-w9.js";import"./PressResponder-BrERX3FG.js";import"./useLocalizedStringFormatter-BEHHwBjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D5xmnnHd.js";import"./getScrollParent-CyUBos4k.js";import"./VisuallyHidden-CeBruMUu.js";import"./x-CHXjKLnv.js";import"./createLucideIcon-DfX1ZOng.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./Heading-CvaAxUO0.js";import"./Button-xHV73jzN.js";import"./Button.module-BB7N-cLd.js";import"./info-Bksr5BsN.js";import"./Popover-CtAVOKe7.js";import"./Form-CqRiR74T.js";import"./useField-awkoEfr0.js";import"./check-DrKFvzHI.js";import"./useToggleState-k8n8MC05.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
