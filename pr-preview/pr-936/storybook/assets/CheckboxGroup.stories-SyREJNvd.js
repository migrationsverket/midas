import{j as e}from"./iframe-1ypBIpqt.js";import{C as m}from"./CheckboxGroup-BXf_Gz11.js";import{C as p}from"./Checkbox-CV1c_2Az.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4xQIw7Q.js";import"./utils-B8wMECB5.js";import"./clsx-B-dksMZM.js";import"./Text-0r7LapIC.js";import"./useFocusRing-BE60GF6p.js";import"./index-OME_eh5M.js";import"./index-bt6Kq2KN.js";import"./clsx-Ciqy0D92.js";import"./Text-B5RNhX_R.js";import"./Label-O-uuT901.js";import"./Button-sTPpWxn_.js";import"./Hidden-JN6h68tz.js";import"./useLabels-LwVbPde8.js";import"./useButton-CiHam1fw.js";import"./Dialog-BaNJ9vqK.js";import"./RSPContexts-BL8PJjGn.js";import"./OverlayArrow-Ot35ddh7.js";import"./useResizeObserver-BwXd_kUk.js";import"./useControlledState-Dh7cHA4x.js";import"./Collection-Coqx6eiU.js";import"./index-DEwtnGH3.js";import"./Separator-D4ZgytYp.js";import"./SelectionManager-C3-Fl_-R.js";import"./useEvent-Cutut5XJ.js";import"./scrollIntoView-C9GMTZXb.js";import"./SelectionIndicator-CSJULSgo.js";import"./useDescription-BbB1SG_e.js";import"./ListKeyboardDelegate-D_W7JyfP.js";import"./PressResponder-DbFB1V-x.js";import"./useLocalizedStringFormatter-DyDkLKc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CZ3e9-X3.js";import"./VisuallyHidden-C69N3wb4.js";import"./useLocalizedStringFormatter-WJZfuSlE.js";import"./Button-Cxrzoy92.js";import"./Button.module-CtQ1deO8.js";import"./x-CBuOp1N4.js";import"./createLucideIcon-C531gWR5.js";import"./Heading-yWckuHhd.js";import"./info-BNJPoxUQ.js";import"./Popover-y-XhwUhv.js";import"./useFormValidation-BQeFm4UE.js";import"./useField-BDAsYkFm.js";import"./Form-DAQzpkwF.js";import"./check-BDDdXbbv.js";import"./useToggleState-CoBG1jtK.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
