import{j as e}from"./iframe-Co4-ZyV5.js";import{C as m}from"./CheckboxGroup-C54Gx1HN.js";import{C as p}from"./Checkbox-BFHRE8Ap.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CSfnBoG7.js";import"./utils-vPvXRE8s.js";import"./clsx-B-dksMZM.js";import"./Text-Bx2UjQld.js";import"./useFocusRing-CbWbCyA2.js";import"./index-D1TXxQim.js";import"./index-BKiR4w34.js";import"./clsx-Ciqy0D92.js";import"./Text-CUkg7ETr.js";import"./Label-Cg0PnWuC.js";import"./Button-vLKPKh4I.js";import"./Hidden-CYasrRch.js";import"./useLabels-K3nzkU17.js";import"./useButton-D9ay2y--.js";import"./Dialog-Dud2RglH.js";import"./RSPContexts-tZwB9aRP.js";import"./OverlayArrow-CQ5am-7L.js";import"./useResizeObserver-Dt5BqhmZ.js";import"./useControlledState-DDOdSbPg.js";import"./Collection-BuZqzAjC.js";import"./index-9onNA-i4.js";import"./Separator-CWMT8vJ-.js";import"./SelectionManager-D8RWiL9F.js";import"./useEvent-DQKm_hMB.js";import"./scrollIntoView-DG1uVoNN.js";import"./SelectionIndicator-Brr7wOT6.js";import"./useDescription-COIi7tGW.js";import"./ListKeyboardDelegate-livHJMAo.js";import"./PressResponder-k3eT1X3U.js";import"./useLocalizedStringFormatter-BWJA3tAg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-XNd_6Ui7.js";import"./VisuallyHidden-BuTNJIhE.js";import"./Button-DLfCs3xE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2nFP8uYy.js";import"./createLucideIcon-B4KpWunU.js";import"./x-Dz3fvaRV.js";import"./Heading-AMjd11G8.js";import"./info-CvdA68jv.js";import"./Popover-FzGA_rZP.js";import"./useFormValidation-CI-48dgm.js";import"./useField-_kwhBzfX.js";import"./Form-5LJYEI1L.js";import"./check-CHDnd_Y_.js";import"./useToggleState-Du3JTmev.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
