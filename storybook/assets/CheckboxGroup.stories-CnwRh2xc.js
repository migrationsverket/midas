import{j as e}from"./iframe-Cg9cst3Z.js";import{C as m}from"./CheckboxGroup-CtfzHvaG.js";import{C as p}from"./Checkbox-Cmc0oNg-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-VvIdynkJ.js";import"./utils-D2II4bp7.js";import"./clsx-B-dksMZM.js";import"./Text-B_9OfGMe.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./clsx-Ciqy0D92.js";import"./Text-Bie4Jf82.js";import"./Label-Cc07-XwP.js";import"./Button-ou8EhBUQ.js";import"./Hidden-BgIlWTMH.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./Dialog-qbthertG.js";import"./RSPContexts-CP6-3Q2F.js";import"./OverlayArrow-BJ-UO43V.js";import"./useResizeObserver-C3fGE7gx.js";import"./useControlledState-L5_oq_SX.js";import"./Collection-Ce5K4RD7.js";import"./index-Li7LmgrW.js";import"./Separator-De7LVMOu.js";import"./SelectionManager-CE7XN0iM.js";import"./useEvent-CEsrahCK.js";import"./scrollIntoView-DwU_eyNu.js";import"./SelectionIndicator-D78Fscba.js";import"./useDescription-BzGroFUq.js";import"./ListKeyboardDelegate-0O8vG3nd.js";import"./PressResponder-B7Fmu7KZ.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YicOoIp9.js";import"./getScrollParent-D0UAKGdc.js";import"./VisuallyHidden-CqMj_RBf.js";import"./x-BSr4SWE3.js";import"./createLucideIcon-DCEeRogg.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";import"./Heading-Csha1cFf.js";import"./Button-rHVBUcPU.js";import"./Button.module-BB7N-cLd.js";import"./info-DPFQ6gO1.js";import"./Popover-DBhzyzXV.js";import"./Form-_xeBhpeE.js";import"./useField-BKczmHIS.js";import"./check-cEkWtzDL.js";import"./useToggleState-DFfdy8A8.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
