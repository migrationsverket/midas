import{j as e}from"./iframe-DAdLp1QF.js";import{C as m}from"./CheckboxGroup-LXg2tPhL.js";import{C as p}from"./Checkbox-smWI1dws.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-FVxfyxcS.js";import"./utils-ByUIGDWY.js";import"./clsx-B-dksMZM.js";import"./Text-SxkkCqAs.js";import"./useFocusRing-D53tZ_0K.js";import"./index-DoL8Y7w4.js";import"./index-QU8jILku.js";import"./clsx-Ciqy0D92.js";import"./Text-CopR-Qh3.js";import"./Label-B_97ycLG.js";import"./Button-fvyThmWu.js";import"./Hidden-B_XHwn2B.js";import"./useLabels-Ca5jvo4m.js";import"./useButton-D93eGxVU.js";import"./Dialog-Do83UJSD.js";import"./RSPContexts-D2jy_A4X.js";import"./OverlayArrow-DLensElf.js";import"./useResizeObserver-EV8RWbU7.js";import"./useControlledState-Cjv7AWlH.js";import"./Collection-MgqcXUJ1.js";import"./index-9ORdlLf0.js";import"./Separator-j1BXl5YZ.js";import"./SelectionManager-Drlu2O8r.js";import"./useEvent-DlPeIjzj.js";import"./scrollIntoView-DYxQjL77.js";import"./SelectionIndicator-B-OFG3Yf.js";import"./useDescription-CybEfZFS.js";import"./ListKeyboardDelegate-Xd6EmlYN.js";import"./PressResponder-DCu-6Uju.js";import"./useLocalizedStringFormatter-CNpWk1vP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ijb0Zcwq.js";import"./VisuallyHidden-Ctoge_gF.js";import"./Button-DQbQp0QJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzYUMjPp.js";import"./createLucideIcon-DWkxk0NR.js";import"./x-D7c1f2O5.js";import"./Heading-CaYbTykr.js";import"./info-hzhf19VQ.js";import"./Popover-BWE5DCEV.js";import"./useFormValidation-Csyf_1Q2.js";import"./useField-I0_MMok3.js";import"./Form-CunIAvBc.js";import"./check-xa5wE6hA.js";import"./useToggleState-BUuO-Xt0.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
