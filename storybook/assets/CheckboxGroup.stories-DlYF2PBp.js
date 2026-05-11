import{j as e}from"./iframe-CLvF6Z40.js";import{C as m}from"./CheckboxGroup-JsQf9EeH.js";import{C as p}from"./Checkbox-CuiTZfz4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-VeyWLyeT.js";import"./utils-CJoHmjoo.js";import"./clsx-B-dksMZM.js";import"./Text-D9kACuMI.js";import"./useFocusRing-DA8pMfhu.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./clsx-Ciqy0D92.js";import"./Text-DSAnxviu.js";import"./Label-Dzbpu6C1.js";import"./Button-IXlIqRd7.js";import"./Hidden-DDGoYcTF.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./Dialog-B-uj8xkF.js";import"./RSPContexts-CTL5xx9Q.js";import"./OverlayArrow-C7K_hjxv.js";import"./useResizeObserver-DPj-8Knk.js";import"./useControlledState-aZqY8xT5.js";import"./Collection-CsSqZXfS.js";import"./index-BFpG02G3.js";import"./Separator-Hn1z5orb.js";import"./SelectionManager-B6jt3tF-.js";import"./useEvent-DVQ3dgzr.js";import"./scrollIntoView-D0r91Cjt.js";import"./SelectionIndicator-CaRCxqEQ.js";import"./useDescription-Ctzm8kKf.js";import"./ListKeyboardDelegate-DkyBJYE4.js";import"./PressResponder-DglPZp8V.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-q93KrM-a.js";import"./getScrollParent-CPZW7HPG.js";import"./VisuallyHidden-Ckm5OILG.js";import"./ModalOverlay-DEQ13mvL.js";import"./x-DROlonvj.js";import"./createLucideIcon-BkSuVCZc.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Heading-QPqQYzxD.js";import"./Button-CVKy4fAF.js";import"./Button.module-BB7N-cLd.js";import"./info-DQ35Koxp.js";import"./Popover-CWwYuwT5.js";import"./Form-H5Vy5h3q.js";import"./useField-BiXCEzZa.js";import"./check-whg681CN.js";import"./useToggleState-yDEujSJw.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
