import{j as e}from"./iframe-CFaxLqEa.js";import{C as m}from"./CheckboxGroup-DxK5cE02.js";import{C as p}from"./Checkbox-kJfxr9cP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CWVv_ne6.js";import"./utils-BgY9U9Qr.js";import"./clsx-B-dksMZM.js";import"./Text-LU79jMy_.js";import"./useFocusRing-B3QBGcNF.js";import"./index-GxleSbEr.js";import"./index-g5CyflDh.js";import"./clsx-Ciqy0D92.js";import"./Text-B0xzN78n.js";import"./Label-BtcDCSuE.js";import"./Button-CRZFTWuY.js";import"./Hidden-Cw9STqj5.js";import"./useLabels-ClJSaiIH.js";import"./useButton-DZkgje5C.js";import"./Dialog-Bzr23H7G.js";import"./RSPContexts-CKwAPfOb.js";import"./OverlayArrow-BW1bAGv8.js";import"./useResizeObserver-Csuma0yr.js";import"./useControlledState-lnm2btlX.js";import"./Collection-Dg55PgvO.js";import"./index-Dtj87kt5.js";import"./Separator-P9MdtsbI.js";import"./SelectionManager-Bk1PTlDQ.js";import"./useEvent-Cb-Pr1Jl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cbzi_KBz.js";import"./useDescription-BMyeVBGj.js";import"./ListKeyboardDelegate-Cz9dpHB8.js";import"./PressResponder-bv_9uGzA.js";import"./useLocalizedStringFormatter-BhBXUazm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dr53HehO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYWYy-1_.js";import"./Button-NFqaYpQd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-LFhdxWG_.js";import"./createLucideIcon-0-aYMEMi.js";import"./x-DVurtZys.js";import"./Heading-BOTyYXmi.js";import"./info-DD1bMW4r.js";import"./Popover-BwbmJqMI.js";import"./useFormValidation-CNrnZzUV.js";import"./useField-Da0jDZEi.js";import"./Form-3RCJ_QBt.js";import"./check-Db2cS1fr.js";import"./useToggleState-C0SfuOTE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
