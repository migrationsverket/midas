import{j as e}from"./iframe-1_iu-uVv.js";import{C as m}from"./CheckboxGroup-myTjMiLt.js";import{C as p}from"./Checkbox-D6goytZp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError--XBiql7z.js";import"./utils-D8XDfVqo.js";import"./clsx-B-dksMZM.js";import"./Text-Cs17jUaF.js";import"./useFocusRing-CLMMEccq.js";import"./index-DaFkej-O.js";import"./index-8FVPoEJc.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvi52zQo.js";import"./Label-b4Ao6UWf.js";import"./Button-C-cqr9pq.js";import"./Hidden-7JO0YZlM.js";import"./useLabel-DW7Clw8B.js";import"./useLabels-CD6qsxzR.js";import"./useButton-QeuVXvqT.js";import"./Dialog-Ctp56gQK.js";import"./RSPContexts-Bv3dZUJW.js";import"./OverlayArrow-Df3ze1GC.js";import"./useResizeObserver-kRwAA-on.js";import"./useControlledState-DeicQIqX.js";import"./Collection-D99_FTQW.js";import"./index-YIsAHUGT.js";import"./Separator-BdJZ52iU.js";import"./SelectionManager-DGCLs2FY.js";import"./useEvent-CZV_7zjz.js";import"./scrollIntoView-CoHaVyLh.js";import"./SelectionIndicator-BGZ-Uahi.js";import"./useDescription-C3hybjUT.js";import"./ListKeyboardDelegate-BgFHXkfP.js";import"./PressResponder-BUUh4_Ij.js";import"./useLocalizedStringFormatter-DQ-EATPr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df6nzKP2.js";import"./getScrollParent-CfG8ol6W.js";import"./VisuallyHidden-CLNANI2G.js";import"./ModalOverlay-DUHRlyt4.js";import"./x-BuusROzJ.js";import"./createLucideIcon-BbCelBYg.js";import"./useLocalizedStringFormatter-ByENZTtA.js";import"./Heading-Bete7LDT.js";import"./Button-3xGdYp6o.js";import"./Button.module-BB7N-cLd.js";import"./info-s8OwWpCJ.js";import"./Popover-BumnY0wg.js";import"./Form-Bs2TzZTt.js";import"./useField-D0gCtfzu.js";import"./check-BY6MOyur.js";import"./useToggleState-Culx0Igr.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
