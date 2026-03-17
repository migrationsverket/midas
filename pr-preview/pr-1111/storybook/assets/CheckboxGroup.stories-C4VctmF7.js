import{j as e}from"./iframe-ZeXYQ1RW.js";import{C as m}from"./CheckboxGroup-DdUPawUX.js";import{C as p}from"./Checkbox-B9EHxwO4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bowa5wqw.js";import"./utils-DkAMXJPn.js";import"./clsx-B-dksMZM.js";import"./Text-Dve1S3pg.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./clsx-Ciqy0D92.js";import"./Text-DNs8wtir.js";import"./Label-CGOSgLuy.js";import"./Button-B1pz6NZE.js";import"./Hidden-Cw1xIodo.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./Dialog-DxpY5c2y.js";import"./RSPContexts-ByHBnrKz.js";import"./OverlayArrow-C52gtWcy.js";import"./useResizeObserver-BwCizU0M.js";import"./useControlledState-BI4OK_uN.js";import"./Collection-Ck9H6G3Z.js";import"./index-CnOsB38m.js";import"./Separator-B6-IVA09.js";import"./SelectionManager-BGiQ5DnI.js";import"./useEvent-CBzfijIc.js";import"./scrollIntoView-DeVdbosm.js";import"./SelectionIndicator-DpH7GgiJ.js";import"./useDescription-B2YHcwj0.js";import"./ListKeyboardDelegate-BD0FshjV.js";import"./PressResponder-CKYrEyDT.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fJG1DqlY.js";import"./getScrollParent-Dxv8a8bs.js";import"./VisuallyHidden-D_TH7fZb.js";import"./x-jvAHOITw.js";import"./createLucideIcon-NOl_qKmM.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./Heading-XJVIyJj6.js";import"./Button-D_9dtB_J.js";import"./Button.module-BB7N-cLd.js";import"./info-Bv_DOVod.js";import"./Popover-COVpWNht.js";import"./useFormValidation-CleU6jt7.js";import"./useField-CTy-1_Zz.js";import"./Form-Dy7AKgGH.js";import"./check-CnqCPZ1F.js";import"./useToggleState-Dy9P4wV5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
