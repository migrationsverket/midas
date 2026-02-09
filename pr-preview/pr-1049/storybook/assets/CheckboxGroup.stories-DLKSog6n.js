import{j as e}from"./iframe-ZU-VlsmC.js";import{C as m}from"./CheckboxGroup-nJwuBq_Q.js";import{C as p}from"./Checkbox-E0YJuDgl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CW123qup.js";import"./utils-CwYPazgz.js";import"./clsx-B-dksMZM.js";import"./Text-Bk-OwW6a.js";import"./useFocusRing-DeDg3Wm1.js";import"./index-BJjzhiid.js";import"./index-B-c5mNFM.js";import"./clsx-Ciqy0D92.js";import"./Text-Der4VdMW.js";import"./Label-hRDO7vUK.js";import"./Button-CeMV39iZ.js";import"./Hidden-DuFt3Wpn.js";import"./useLabels-t8k_Uoah.js";import"./useButton-C2Rk3x3w.js";import"./Dialog-CNtFJAIp.js";import"./RSPContexts-yZiAzvBR.js";import"./OverlayArrow-dNrd_64E.js";import"./useResizeObserver-BZ-bVwf1.js";import"./useControlledState-CLKMAA4K.js";import"./Collection-D5K1FB_c.js";import"./index-DYvT57Od.js";import"./Separator-CSrmJdP5.js";import"./SelectionManager-FtklnvhE.js";import"./useEvent-TDbxnCp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpQVp4iw.js";import"./useDescription-aAdr_LiL.js";import"./ListKeyboardDelegate-BbodKWK9.js";import"./PressResponder-t6zmAEeH.js";import"./useLocalizedStringFormatter-DKJg5-Yp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7N7_P6f.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CGc8iUr3.js";import"./Button-CkFCptv_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9gOm9LYJ.js";import"./createLucideIcon-zhU_S5bE.js";import"./x-CyPK6XsU.js";import"./Heading-C2qvWc5u.js";import"./info-DAxJiLAo.js";import"./Popover-CkvdHAJ-.js";import"./useFormValidation-MYNTqaJp.js";import"./useField-C3-0p5Cj.js";import"./Form-DjYb9RJ8.js";import"./check-HATkEPam.js";import"./useToggleState-DBmlZS4J.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
