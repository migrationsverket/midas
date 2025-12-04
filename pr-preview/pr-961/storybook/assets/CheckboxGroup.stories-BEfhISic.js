import{j as e}from"./iframe-DzWavng1.js";import{C as m}from"./CheckboxGroup-CfkDzmoh.js";import{C as p}from"./Checkbox-C35cjKSa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B0hGaN2H.js";import"./utils-DZ771gTW.js";import"./clsx-B-dksMZM.js";import"./Text-ePkty29E.js";import"./useFocusRing-BOScdwIf.js";import"./index-BqUojVv0.js";import"./index-3sde6yQY.js";import"./clsx-Ciqy0D92.js";import"./Text-DA35gZzh.js";import"./Label-pIcxOt8i.js";import"./Button-BvaWFHt-.js";import"./Hidden-ZA6QDtq5.js";import"./useLabels-roEh_XUF.js";import"./useButton-CgRo_gBu.js";import"./Dialog-ByrVMFC8.js";import"./RSPContexts-DGc80Od4.js";import"./OverlayArrow-CzXrQ9SA.js";import"./useResizeObserver-CQn7OSpd.js";import"./useControlledState-lHw30NeI.js";import"./Collection-DS74y2Hd.js";import"./index-DJ9boy3L.js";import"./Separator-bMTI7EmG.js";import"./SelectionManager-BbeYuJOR.js";import"./useEvent-5ivb094s.js";import"./scrollIntoView-BAE8WRGI.js";import"./SelectionIndicator-BvQjS5SY.js";import"./useDescription-B5og04Tz.js";import"./ListKeyboardDelegate-Dq9zMlZb.js";import"./PressResponder-BG4AA7ZS.js";import"./useLocalizedStringFormatter-DkL1-w21.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-dwiGZhPf.js";import"./VisuallyHidden-u0dD8pVG.js";import"./Button-C9cedukw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-enb0CHJT.js";import"./createLucideIcon-CC0DruiB.js";import"./x-CWmC_5LK.js";import"./Heading-BDScHeSe.js";import"./info-DpnZATZq.js";import"./Popover-wDjiywCJ.js";import"./useFormValidation-Bm0uK9_x.js";import"./useField-DgP7ROp1.js";import"./Form-AOBXIEea.js";import"./check-CJ7TDnVT.js";import"./useToggleState-DKstj26z.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
