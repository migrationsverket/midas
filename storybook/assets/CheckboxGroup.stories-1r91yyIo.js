import{j as e}from"./iframe-90IRllkR.js";import{C as m}from"./CheckboxGroup-BTaUXd43.js";import{C as p}from"./Checkbox-DK6yOCb7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DOJlLELe.js";import"./utils-DrgpBlOV.js";import"./clsx-B-dksMZM.js";import"./Text-BEFgBVJd.js";import"./useFocusRing-D9xLokmm.js";import"./index-BQ655Sgl.js";import"./index-BT0vxHj_.js";import"./clsx-Ciqy0D92.js";import"./Text-CPIt8eLh.js";import"./Label-DcuERFfw.js";import"./Button-DHs9eQM0.js";import"./Hidden-DTiIbjRg.js";import"./useLabels-mqYWaiYP.js";import"./useButton-D-5xgDmf.js";import"./Dialog-DzMgtgVX.js";import"./RSPContexts-ewAwOmpc.js";import"./OverlayArrow-oVWlFfgv.js";import"./useResizeObserver-CsECYvrM.js";import"./useControlledState-DZmUU_C7.js";import"./Collection-CtKAbfrw.js";import"./index-Dsx8D9ux.js";import"./Separator-d_zf_vUQ.js";import"./SelectionManager-CmByyIgb.js";import"./useEvent-BIjQLxNz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CVvG_5B7.js";import"./useDescription-Dl1QAAnn.js";import"./ListKeyboardDelegate-C-sq8yPB.js";import"./PressResponder-2GX0tm9o.js";import"./useLocalizedStringFormatter-DKf9ituJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsHJv5_Q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-v16yXfjK.js";import"./Button-Bhqr8Mcz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-37ueXPbA.js";import"./createLucideIcon-Dz-TUHWJ.js";import"./x-G-MrfCj1.js";import"./Heading-Drc42Blr.js";import"./info--yAdTo-I.js";import"./Popover-f7XpZFas.js";import"./useFormValidation-D-cI-26o.js";import"./useField-krxXExoX.js";import"./Form-DBTrq9IK.js";import"./check-CNhwziy5.js";import"./useToggleState-nq3_9ua3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
