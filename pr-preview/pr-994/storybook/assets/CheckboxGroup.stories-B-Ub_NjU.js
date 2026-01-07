import{j as e}from"./iframe-CubTBBGo.js";import{C as m}from"./CheckboxGroup-Cn65CZ1A.js";import{C as p}from"./Checkbox-BgH3y1-F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DW_zkLWT.js";import"./utils-DU8A25ha.js";import"./clsx-B-dksMZM.js";import"./Text-73NkOSuw.js";import"./useFocusRing-lzGIxQWj.js";import"./index-C4yCgsVr.js";import"./index-CaW2QasO.js";import"./clsx-Ciqy0D92.js";import"./Text-LbE64-eX.js";import"./Label-BR6wmk2v.js";import"./Button-CDJANkr2.js";import"./Hidden-GxRiQCKq.js";import"./useLabels-BNDUUXFn.js";import"./useButton-BsD5A1Wy.js";import"./Dialog-BDG-lI8N.js";import"./RSPContexts-DwpwGrnI.js";import"./OverlayArrow-D8pUe5XH.js";import"./useResizeObserver-CnAhUcv7.js";import"./useControlledState-B8OTRD6B.js";import"./Collection-SjVOhSFn.js";import"./index-Cj6z-_bn.js";import"./Separator-IUq9kbtg.js";import"./SelectionManager-Bm5mftVH.js";import"./useEvent-D8cbhnM-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-aG6BKLJi.js";import"./useDescription-hs9K73Tm.js";import"./ListKeyboardDelegate-CkPzLbVj.js";import"./PressResponder-CXfj-3xu.js";import"./useLocalizedStringFormatter-CUeB_ZYl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DW2fzw8F.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-5NlIvA6X.js";import"./Button-CkP2HO-W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJ2CiOfY.js";import"./createLucideIcon-Bs7Zj_V7.js";import"./x-r5WQKcoU.js";import"./Heading-BhSpU1m6.js";import"./info-CBgZdiGL.js";import"./Popover-C69Xpgdt.js";import"./useFormValidation-9VOZWhD_.js";import"./useField-AFvgVfpl.js";import"./Form-DlrIIVAy.js";import"./check-CbnyPY70.js";import"./useToggleState-VbHctcYA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
