import{j as e}from"./iframe-DGitGBwd.js";import{C as m}from"./CheckboxGroup-CPaQpZPk.js";import{C as p}from"./Checkbox-DU9IcgWj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BLFTeUPi.js";import"./utils-DlxgMN-X.js";import"./clsx-B-dksMZM.js";import"./Text-BBS_R9Lb.js";import"./useFocusRing-BSQFeV26.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./clsx-Ciqy0D92.js";import"./Text-BHRP82y-.js";import"./Label-BpQy6_dP.js";import"./Button-CFc7ZkBU.js";import"./Hidden-BTbvwN5u.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./Dialog-T51nnNds.js";import"./RSPContexts-BNal8wWj.js";import"./OverlayArrow-CDYvBswo.js";import"./useResizeObserver-CiWUltQW.js";import"./useControlledState-Dj3Q8cMg.js";import"./Collection-DLiHOCN2.js";import"./index-CU63vF8i.js";import"./Separator-KXVn-reU.js";import"./SelectionManager-B9az4Zc6.js";import"./useEvent-DNR96Pag.js";import"./scrollIntoView-CQlM3xNO.js";import"./SelectionIndicator-Dqps-ADK.js";import"./useDescription-DIrfQQU3.js";import"./ListKeyboardDelegate-9t6rl9Vm.js";import"./PressResponder-DOYOU7BC.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKmOhXBP.js";import"./getScrollParent-BD_bpobV.js";import"./VisuallyHidden-BUTi2bAi.js";import"./ModalOverlay-BVWZrGiy.js";import"./x-B5AWcWMp.js";import"./createLucideIcon-CcqKhbRQ.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Heading-B0sINXDi.js";import"./Button-CJ16F3mz.js";import"./Button.module-BB7N-cLd.js";import"./info-BKUPn93-.js";import"./Popover-BeXM43G5.js";import"./Form-D5bu5HNp.js";import"./useField-dgIiq1Nz.js";import"./check-BXM6CgTt.js";import"./useToggleState-q3BSSBJW.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
