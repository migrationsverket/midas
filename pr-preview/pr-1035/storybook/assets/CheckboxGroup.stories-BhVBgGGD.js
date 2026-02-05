import{j as e}from"./iframe-jXOFY8ly.js";import{C as m}from"./CheckboxGroup-ChwUv0Zb.js";import{C as p}from"./Checkbox-D_nC9nzj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DpwWyisz.js";import"./utils-DMRbnQmp.js";import"./clsx-B-dksMZM.js";import"./Text-NASTJ5SQ.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./clsx-Ciqy0D92.js";import"./Text-DBF8n_Yj.js";import"./Label-DVP45lyQ.js";import"./Button-_V1yAu90.js";import"./Hidden-C1RMCDHa.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./Dialog-BrEfRH6h.js";import"./RSPContexts-uCM8UasA.js";import"./OverlayArrow-BJctWX9e.js";import"./useResizeObserver-CrFKK_i-.js";import"./useControlledState-B_hf4unm.js";import"./Collection-BVIzqqsG.js";import"./index-LDBGwil4.js";import"./Separator-D4LjqWD4.js";import"./SelectionManager-ygzmuEbh.js";import"./useEvent-Dx7k8S5m.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy3GAmbU.js";import"./useDescription-DuiYQhpC.js";import"./ListKeyboardDelegate-DXqM7Z8I.js";import"./PressResponder-CBabZcxm.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DEZnhysQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B9izHnXN.js";import"./Button-BJ-Glf4b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./createLucideIcon-CZVrkezG.js";import"./x-CoKzMXDs.js";import"./Heading-CtLvrIy9.js";import"./info-BiRxp_ck.js";import"./Popover-ySfzcF21.js";import"./useFormValidation-Q4VomWZv.js";import"./useField-d3f_aUfY.js";import"./Form-Td99cGHp.js";import"./check-BULYkbZs.js";import"./useToggleState-CdfG7wRA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
