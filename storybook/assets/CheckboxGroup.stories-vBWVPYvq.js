import{j as e}from"./iframe-CiqJOzxF.js";import{C as m}from"./CheckboxGroup-BQF9NEQk.js";import{C as p}from"./Checkbox-ByYZPP4I.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CwZpQUJo.js";import"./utils-0GsTBzJl.js";import"./clsx-B-dksMZM.js";import"./Text-Ch9Sljly.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./clsx-Ciqy0D92.js";import"./Text-Dn4hqnjy.js";import"./Label-BJMWqc0W.js";import"./Button-BXds3-7Z.js";import"./Hidden-CFvcIHES.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./Dialog-Dxwwv4Kn.js";import"./RSPContexts-C0dEMWbh.js";import"./OverlayArrow-BzRu9K3f.js";import"./useResizeObserver-gqMwxCuL.js";import"./useControlledState-B5UnhFwk.js";import"./Collection-BizYL9zZ.js";import"./index-PGwKz-re.js";import"./Separator-sBb7m_eW.js";import"./SelectionManager-Cs_75vrL.js";import"./useEvent-lRnGMY-c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ChpEnvYL.js";import"./useDescription-CTOINnPD.js";import"./ListKeyboardDelegate-DZDwGlUz.js";import"./PressResponder-Bx05VmIl.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-x2twpE3n.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./Button-CxRmwJHW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./createLucideIcon-DT02zB1r.js";import"./x-zbQhWPRB.js";import"./Heading-RSqUFAKa.js";import"./info-B1L5jFLY.js";import"./Popover-Br5z27dt.js";import"./useFormValidation-BHCltIgr.js";import"./useField-BKRlvos-.js";import"./Form-CRxifOsu.js";import"./check-Ci7kXBpi.js";import"./useToggleState-Dk-qrfKI.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
