import{j as e}from"./iframe-DALTSxsS.js";import{C as m}from"./CheckboxGroup-DL7gpk21.js";import{C as p}from"./Checkbox-1givwV6N.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNkTH6UQ.js";import"./utils-DhmNEjlk.js";import"./clsx-B-dksMZM.js";import"./Text-DUPMGpBd.js";import"./useFocusRing-D9a5eyQj.js";import"./index-ZpmiPRxE.js";import"./index-1lGZN6GB.js";import"./clsx-Ciqy0D92.js";import"./Text-QPtdxepC.js";import"./Label-DTr6YgZ2.js";import"./Button-BolZLxlI.js";import"./Hidden-BWGddJP9.js";import"./useLabels-RBjCfxHd.js";import"./useButton-DTVnyrV6.js";import"./Dialog-epNG4iu2.js";import"./RSPContexts-DWTJMTK0.js";import"./OverlayArrow-BbfpKb2i.js";import"./useResizeObserver-o677WSrE.js";import"./useControlledState-Db3CL_cp.js";import"./Collection-CoXo-z-m.js";import"./index-CQSewXcr.js";import"./Separator-YZjW7xUm.js";import"./SelectionManager-D4xIimb0.js";import"./useEvent-So3QqFJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D9XxgJ0V.js";import"./useDescription-CRMtKc5O.js";import"./ListKeyboardDelegate-Co-OCIhP.js";import"./PressResponder-BRhPcpR8.js";import"./useLocalizedStringFormatter-CYXYCABu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFOPqJoa.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DziWvBuP.js";import"./Button-Dq10fmnU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJVitUFs.js";import"./createLucideIcon-DnVmKfBY.js";import"./x-4TwixKAW.js";import"./Heading-CP8R22Yb.js";import"./info-DjN0Evpm.js";import"./Popover-ZeBtdQRy.js";import"./useFormValidation-DMuhtnrm.js";import"./useField-Bo5DVUfk.js";import"./Form-Dq7HVupu.js";import"./check-DS6iHNyv.js";import"./useToggleState-CjVuWbUV.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
