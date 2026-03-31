import{j as e}from"./iframe-CKynqbsT.js";import{C as m}from"./CheckboxGroup-D_1ILjE0.js";import{C as p}from"./Checkbox-Bii8o5dJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D5ePyvQL.js";import"./utils-Cz4s-P07.js";import"./clsx-B-dksMZM.js";import"./Text-CFqReYPn.js";import"./useFocusRing-DW03qt76.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./clsx-Ciqy0D92.js";import"./Text-CV3rC3lw.js";import"./Label-Cj0m3eJA.js";import"./Button-odKdBChn.js";import"./Hidden-CxwF48Ci.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./Dialog-DVM7mKIq.js";import"./RSPContexts-1kvrZnW_.js";import"./OverlayArrow-D0jqam5s.js";import"./useResizeObserver-DNcvKGTB.js";import"./useControlledState-CkRmHnNo.js";import"./Collection-D_pg0gvp.js";import"./index-Cxs-RWp5.js";import"./Separator-0vZKTzuL.js";import"./SelectionManager-YoIizi1X.js";import"./useEvent-Dya9lerV.js";import"./scrollIntoView-DZna20aA.js";import"./SelectionIndicator-DGMQG1Fl.js";import"./useDescription-CppHAd8O.js";import"./ListKeyboardDelegate-CenhieDP.js";import"./PressResponder-CJ6egYRx.js";import"./useLocalizedStringFormatter-1siNxGD0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRCICGFF.js";import"./getScrollParent-BDZEhSWz.js";import"./VisuallyHidden-BxWxnvxB.js";import"./x-CO1sdvqd.js";import"./createLucideIcon-B7xcXnKD.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./Heading-C555MQzz.js";import"./Button-DQDk8v-k.js";import"./Button.module-BB7N-cLd.js";import"./info-BGR9n40f.js";import"./Popover-DNkodFnc.js";import"./Form-P19_AeiU.js";import"./useField-d_mLWNBx.js";import"./check-Dfcj8Uuh.js";import"./useToggleState-CBmzvW7i.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
