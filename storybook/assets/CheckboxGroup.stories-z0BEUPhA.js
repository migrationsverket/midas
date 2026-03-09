import{j as e}from"./iframe-570mREhY.js";import{C as m}from"./CheckboxGroup-D1rnujsw.js";import{C as p}from"./Checkbox-DTNHvSHe.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-yE8YByGw.js";import"./utils-BqlcL5rx.js";import"./clsx-B-dksMZM.js";import"./Text-Bv6LeWEW.js";import"./useFocusRing-D77kJS_m.js";import"./index-Bvld532n.js";import"./index-C5HPQFby.js";import"./clsx-Ciqy0D92.js";import"./Text-Dj2VLQFh.js";import"./Label-CmAS5ADu.js";import"./Button-C_kwnSXE.js";import"./Hidden-B4VHltGi.js";import"./useLabels-C-WDIhaI.js";import"./useButton-TVehMT5u.js";import"./Dialog-BVZec1Ps.js";import"./RSPContexts-Cb-2UirY.js";import"./OverlayArrow-B6QMYDAb.js";import"./useResizeObserver-BhXk13hV.js";import"./useControlledState-Bk880GAa.js";import"./Collection-MjJwGCCq.js";import"./index-Bh5caC_l.js";import"./Separator-C-bVNjjj.js";import"./SelectionManager-DiKYdGU5.js";import"./useEvent-BqxQVWwN.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D0FkfzIY.js";import"./useDescription-2ZAZ1q0L.js";import"./ListKeyboardDelegate-CEuvSmDQ.js";import"./PressResponder-CcuoOip4.js";import"./useLocalizedStringFormatter-CImBKygC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Zjc2478k.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BOerlFrD.js";import"./Button-dcNBfXXf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DkAO2Z2_.js";import"./createLucideIcon-BAw__jnC.js";import"./x-DUSrueAG.js";import"./Heading-CtGUg1Um.js";import"./info-C7dtd-j5.js";import"./Popover-Cry7KE-t.js";import"./useFormValidation-CR3Ou1E_.js";import"./useField-DLWgoaNu.js";import"./Form-Dra-fnmO.js";import"./check-cKH59LOM.js";import"./useToggleState-DoSIS8yA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
