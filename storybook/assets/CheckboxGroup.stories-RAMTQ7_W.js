import{j as e}from"./iframe-CrvsXgmc.js";import{C as m}from"./CheckboxGroup-DPXraKHN.js";import{C as p}from"./Checkbox-BZUk4yn4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-5hEdY4LM.js";import"./utils-gzCDVK3q.js";import"./clsx-B-dksMZM.js";import"./Text-CF9Q2mcX.js";import"./useFocusRing-Y3IR8t1i.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./clsx-Ciqy0D92.js";import"./Text-CA7uWGGn.js";import"./Label-DC1BslHI.js";import"./Button-BJCsZZXs.js";import"./Hidden-DAMs1NRQ.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./Dialog-BAorNuLL.js";import"./RSPContexts-DH1zBAtU.js";import"./OverlayArrow-j-4w6ptt.js";import"./useResizeObserver-DS_Mr__l.js";import"./useControlledState-CFUIREeB.js";import"./Collection-DgAx05eF.js";import"./index-CXAqSaFB.js";import"./Separator-Cfr8Q9pc.js";import"./SelectionManager-uwLQE_60.js";import"./useEvent-DI2Xn_Gs.js";import"./scrollIntoView-C_cKPCXn.js";import"./SelectionIndicator-o2cRMrjj.js";import"./useDescription-Cw3L3Xvg.js";import"./ListKeyboardDelegate-BxUpHfVv.js";import"./PressResponder-DQ6SDLVP.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7nDb7Uq.js";import"./getScrollParent-DN_amqRA.js";import"./VisuallyHidden-GavGRjxA.js";import"./ModalOverlay-CUkgOGL-.js";import"./x-_k-E3REV.js";import"./createLucideIcon-C4drZqEd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Heading-BYcCu-yi.js";import"./Button-C1guSp-1.js";import"./Button.module-BB7N-cLd.js";import"./info-_82HXk6z.js";import"./Popover-BlcHhC3m.js";import"./Form-bos5N932.js";import"./useField-ctyqcCoa.js";import"./check-CaH8XxLm.js";import"./useToggleState-71MHAyi2.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
