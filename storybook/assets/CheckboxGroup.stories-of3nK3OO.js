import{j as e}from"./iframe-D-REpNT2.js";import{C as m}from"./CheckboxGroup-cfuODo5V.js";import{C as p}from"./Checkbox-CVJsqz0x.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CA_O69rJ.js";import"./utils-BDMdsvrX.js";import"./clsx-B-dksMZM.js";import"./Text-C9Slm4PY.js";import"./useFocusRing-BWmdFu0w.js";import"./index-CBX90dgQ.js";import"./index-Bb_XCQXS.js";import"./clsx-Ciqy0D92.js";import"./Text-MiHH5yI1.js";import"./Label-BLUj1SK8.js";import"./Button-CSGruNvs.js";import"./Hidden-DBxbBPM8.js";import"./useLabels-CL0mObZW.js";import"./useButton-BVLm7XF-.js";import"./Dialog-CrHh5riv.js";import"./RSPContexts-CXb92NO5.js";import"./OverlayArrow-DfQnH08H.js";import"./useResizeObserver-B9yDolf1.js";import"./useControlledState-CRTz0NCq.js";import"./Collection-Bu1IPCuJ.js";import"./index-C3LxNUCX.js";import"./Separator-BVe-YMpx.js";import"./SelectionManager-zKJSBzzj.js";import"./useEvent-D-eD8_or.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYwlpBgk.js";import"./useDescription-5inR-ZqS.js";import"./ListKeyboardDelegate-CibTaz9W.js";import"./PressResponder-oUkAjckc.js";import"./useLocalizedStringFormatter-D5aBFhGc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sckNPW58.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CjlKzDWm.js";import"./Button-MhaT5nTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cz89ib5x.js";import"./createLucideIcon-BcZu8RhE.js";import"./x-gtZDJ8br.js";import"./Heading-C72zqHqg.js";import"./info-DRFXZmmo.js";import"./Popover-DsVfs9l5.js";import"./useFormValidation-vWol_pr5.js";import"./useField-pGjh_xZt.js";import"./Form-BfFx0FHq.js";import"./check-m9YQjB35.js";import"./useToggleState-DIveHdpr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
