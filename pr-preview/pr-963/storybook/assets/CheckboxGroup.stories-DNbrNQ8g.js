import{j as e}from"./iframe-CqwJW-jH.js";import{C as m}from"./CheckboxGroup-BJyyLUDS.js";import{C as p}from"./Checkbox-Crwcy2Bz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DaAFNjv3.js";import"./utils-BjAcymq3.js";import"./clsx-B-dksMZM.js";import"./Text-Bb3z90XN.js";import"./useFocusRing-s8rZZkXP.js";import"./index-CEUh_mhN.js";import"./index-Ck3K3FLZ.js";import"./clsx-Ciqy0D92.js";import"./Text-BM7LeZYM.js";import"./Label-CwpP5SJI.js";import"./Button-DMS3IEls.js";import"./Hidden-CAXpsngw.js";import"./useLabels-B2L_aLjR.js";import"./useButton-CQ1blk8z.js";import"./Dialog-8xH5n5Xt.js";import"./RSPContexts-B9bfeA8n.js";import"./OverlayArrow-B9TZriMe.js";import"./useResizeObserver--DYTMICB.js";import"./useControlledState-D4ov5J9e.js";import"./Collection-CJEB1uW6.js";import"./index-Dwxugr1R.js";import"./Separator-B8maWmEE.js";import"./SelectionManager-Ce6MfZqv.js";import"./useEvent-BWxOnnow.js";import"./scrollIntoView-Dk_3y03O.js";import"./SelectionIndicator-CsZ9cGqi.js";import"./useDescription-1D91jdoC.js";import"./ListKeyboardDelegate-DcuWd9Mu.js";import"./PressResponder-Cw_gk09z.js";import"./useLocalizedStringFormatter-DemKPo_M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bz9DRPyV.js";import"./VisuallyHidden-kxJd-Cll.js";import"./Button-B0Mj2CMf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2-HvklD.js";import"./createLucideIcon-CufIcqRQ.js";import"./x-B_ppbZ4G.js";import"./Heading-BNyF6dE7.js";import"./info-NDf7usl3.js";import"./Popover-CTDz1koS.js";import"./useFormValidation-DApjsYBJ.js";import"./useField-CZGXvIYc.js";import"./Form-DYT1rW1R.js";import"./check-FQcm0qj0.js";import"./useToggleState-DbKI0Fzw.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
