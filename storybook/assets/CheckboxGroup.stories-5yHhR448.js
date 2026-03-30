import{j as e}from"./iframe-BWPy1RBq.js";import{C as m}from"./CheckboxGroup-DEu75c3H.js";import{C as p}from"./Checkbox-B9ICRrXa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cz5zi-ZF.js";import"./utils-K3-6RYqB.js";import"./clsx-B-dksMZM.js";import"./Text-Cia4oSWl.js";import"./useFocusRing-RbbtUgdg.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./clsx-Ciqy0D92.js";import"./Text-NU9ujCYW.js";import"./Label-D7QmrN_D.js";import"./Button-CpSzsQmu.js";import"./Hidden-Tw89Zkrb.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./Dialog-CIUqtcL0.js";import"./RSPContexts-nAVSp4dG.js";import"./OverlayArrow-BO4KWVXd.js";import"./useResizeObserver-g8GOm3Mq.js";import"./useControlledState-D92tKPK_.js";import"./Collection-BNyZ9c9Q.js";import"./index-h_8LGHd6.js";import"./Separator-7AMSuRjK.js";import"./SelectionManager-DwZVDrXj.js";import"./useEvent-BFfcpkt9.js";import"./scrollIntoView-BPThSa08.js";import"./SelectionIndicator-CSEVtPet.js";import"./useDescription-DKa3yvbb.js";import"./ListKeyboardDelegate-DEEdN1cX.js";import"./PressResponder-BlIcO9FE.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qiytIb7X.js";import"./getScrollParent-Bz2Jpk0G.js";import"./VisuallyHidden-Bglg35TW.js";import"./x-28n2c5kv.js";import"./createLucideIcon-B4kCR5jG.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Heading-CimGNnkR.js";import"./Button-DrPZXGaG.js";import"./Button.module-BB7N-cLd.js";import"./info-NbLkrYYQ.js";import"./Popover-C1PtYzxv.js";import"./Form-DbQxgntm.js";import"./useField-CUHsbM6E.js";import"./check-BKFznksD.js";import"./useToggleState-jeQBOVoK.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
