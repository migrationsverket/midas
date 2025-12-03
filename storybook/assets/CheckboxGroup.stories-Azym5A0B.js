import{j as e}from"./iframe-CCQfngwq.js";import{C as m}from"./CheckboxGroup-CFNUBgLy.js";import{C as p}from"./Checkbox-DAvuPFse.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bdi6QzIL.js";import"./utils-CgsB8-M-.js";import"./clsx-B-dksMZM.js";import"./Text-Cw_qglJK.js";import"./useFocusRing-DrqjHVCw.js";import"./index-ByVvlwyD.js";import"./index-Cw_5Evfx.js";import"./clsx-Ciqy0D92.js";import"./Text-Cc3exSDh.js";import"./Label-VRnRTiQi.js";import"./Button-5oXIvCJG.js";import"./Hidden-CbIGjTgf.js";import"./useLabels-ChtSCMDo.js";import"./useButton-C3KQprnb.js";import"./Dialog-2pOyPZi5.js";import"./RSPContexts-5wOIRLjy.js";import"./OverlayArrow-BKIb9vHV.js";import"./useResizeObserver-CAQkbVjr.js";import"./useControlledState-D-jefNLs.js";import"./Collection-CFGCNd8k.js";import"./index-Bh78NwXD.js";import"./Separator-CTVimljj.js";import"./SelectionManager-CDxR94nf.js";import"./useEvent-DvrGnkNh.js";import"./scrollIntoView-BGFG9DOp.js";import"./SelectionIndicator-CX-Ak5JY.js";import"./useDescription-Cp__ppAa.js";import"./ListKeyboardDelegate-vJISlKib.js";import"./PressResponder-BPmSRe7N.js";import"./useLocalizedStringFormatter-fWmNxkyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-EuR23wxh.js";import"./VisuallyHidden-QnJstid8.js";import"./Button-Bab2JnFs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-1-g-Qi.js";import"./createLucideIcon-mKithfj1.js";import"./x-BkcaeSqw.js";import"./Heading-BbgRD-Zw.js";import"./info-0M2ejYG_.js";import"./Popover-CQsjUmkL.js";import"./useFormValidation-Bde0T_x_.js";import"./useField-BbQHz5Sg.js";import"./Form-BPQSERZX.js";import"./check-CxguyC84.js";import"./useToggleState-Cgp9cBx_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
