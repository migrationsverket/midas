import{j as e}from"./iframe-BkVzc2jf.js";import{C as m}from"./CheckboxGroup-CQK1RDL3.js";import{C as p}from"./Checkbox-C53229aR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BwPk1h0q.js";import"./utils-BygJjxp_.js";import"./clsx-B-dksMZM.js";import"./Text-Cl9gTfqF.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./clsx-Ciqy0D92.js";import"./Text-B79zESTX.js";import"./Label-C1pMcWrQ.js";import"./Button-DC3ZjroM.js";import"./Hidden-R6jv-Zbn.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./Dialog-B11UlQIO.js";import"./RSPContexts-LbRQIp3l.js";import"./OverlayArrow-B9D8DwA5.js";import"./useResizeObserver-CJBdYodv.js";import"./useControlledState-LZdmvusm.js";import"./Collection-CFuYVz80.js";import"./index-CqLT7pz4.js";import"./Separator-CvqaBUS5.js";import"./SelectionManager-HKzWsq0f.js";import"./useEvent-D9_iLH0i.js";import"./scrollIntoView-Yjo_y5ur.js";import"./SelectionIndicator-CMspJvvR.js";import"./useDescription-CYDZbRK4.js";import"./ListKeyboardDelegate-CRHKUCzm.js";import"./PressResponder-X-v42Ff3.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BuKlwr_J.js";import"./getScrollParent-CTmctxBz.js";import"./VisuallyHidden-BWjyWmb6.js";import"./x-BsyZ_dlH.js";import"./createLucideIcon-BjNI9TSY.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./Heading-DO0prvhr.js";import"./Button-ZTyLTH5E.js";import"./Button.module-BB7N-cLd.js";import"./info-DKnOLspn.js";import"./Popover-D0a-Z8Kn.js";import"./Form-DyPSg3uh.js";import"./useField-C412GoGD.js";import"./check-CaYG-ERe.js";import"./useToggleState-B2M_Q020.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
