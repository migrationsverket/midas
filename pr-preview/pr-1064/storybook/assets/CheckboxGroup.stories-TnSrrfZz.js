import{j as e}from"./iframe-D9H9xcS2.js";import{C as m}from"./CheckboxGroup-DkMggPjC.js";import{C as p}from"./Checkbox-CK12u8D0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CVRuJPZY.js";import"./utils-fDye7Hn-.js";import"./clsx-B-dksMZM.js";import"./Text-CVrEtWWi.js";import"./useFocusRing-Ceh5Z1MC.js";import"./index-BnIUjihK.js";import"./index-BmeqR-Yx.js";import"./clsx-Ciqy0D92.js";import"./Text-Dg1l2GcJ.js";import"./Label-CYlHnNlu.js";import"./Button-Dy6Jv4XA.js";import"./Hidden-DbKUAskx.js";import"./useLabels-B07HLygv.js";import"./useButton-DlcBDUmj.js";import"./Dialog-BYvb6Isi.js";import"./RSPContexts-BdMR1EyJ.js";import"./OverlayArrow-DWRl7OHB.js";import"./useResizeObserver-DaHbRVle.js";import"./useControlledState-CAi_EPd5.js";import"./Collection-QXVY0Vqa.js";import"./index-CNTvhnoW.js";import"./Separator-DOLfmUqA.js";import"./SelectionManager-Bufj-R-c.js";import"./useEvent-DlZFMt0I.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B32U9fK1.js";import"./useDescription-Bb7bc4Rr.js";import"./ListKeyboardDelegate-CW31MGEJ.js";import"./PressResponder-ExeSBZ8G.js";import"./useLocalizedStringFormatter-CC37Fr-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D88WmgFz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C7ARzOYG.js";import"./Button-DGBu_aXN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJEgiUI-.js";import"./createLucideIcon-mT-ajzIy.js";import"./x-DeuWguVB.js";import"./Heading-Ccms1psw.js";import"./info-U0J78tqC.js";import"./Popover-cippIc05.js";import"./useFormValidation-B3qtubIU.js";import"./useField-CqvzVwOJ.js";import"./Form-DvYiAud_.js";import"./check-B2AsAI9O.js";import"./useToggleState-CbNNRceA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
