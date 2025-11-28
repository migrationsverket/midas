import{j as e}from"./iframe-B_gFPxCX.js";import{C as m}from"./CheckboxGroup-33lzRS05.js";import{C as p}from"./Checkbox-C8N2OX3U.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BRP4YCh0.js";import"./utils-Du2m8pi6.js";import"./clsx-B-dksMZM.js";import"./Text-Cy6zixyL.js";import"./useFocusRing-B_f_9ZIB.js";import"./index-BmP6HVCy.js";import"./index-Bk1XN2WI.js";import"./clsx-Ciqy0D92.js";import"./Text-Ccf4bkuw.js";import"./Label-BH4o83cx.js";import"./Button-Dh_N8FAk.js";import"./Hidden-OS0LVvpv.js";import"./useLabels-CKCRW4zl.js";import"./useButton-CXzrlu1a.js";import"./Dialog-DOPSq2FJ.js";import"./RSPContexts-DOLdHzZj.js";import"./OverlayArrow-_O_zpamE.js";import"./useResizeObserver-BDLi-sOw.js";import"./useControlledState-x6V7bWVY.js";import"./Collection-B5g4Ji_P.js";import"./index-r0j0FupA.js";import"./Separator-CH6clOTP.js";import"./SelectionManager-DjNIWJ5d.js";import"./useEvent-C8IsYOHI.js";import"./scrollIntoView-vBXGo_Pf.js";import"./SelectionIndicator-arulDhFq.js";import"./useDescription-BgYJLdYq.js";import"./ListKeyboardDelegate-B7RsbFFa.js";import"./PressResponder-CpdHDAqB.js";import"./useLocalizedStringFormatter-DfaT6UQu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cy2bhqUS.js";import"./VisuallyHidden-Ds2FNi3l.js";import"./Button-CMmiPFF7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DSk1S1l2.js";import"./createLucideIcon-C8OA8uCW.js";import"./x-BWZmfWmr.js";import"./Heading-CTpAMjcl.js";import"./info-B5JFIP-w.js";import"./Popover-Dpw8Pi7B.js";import"./useFormValidation-6JoG4g-D.js";import"./useField-DtPq_gCn.js";import"./Form-EaBlFtq8.js";import"./check-_6DbxIZV.js";import"./useToggleState-B_B4aZ-b.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
