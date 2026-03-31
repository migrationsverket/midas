import{j as e}from"./iframe-BB-tPRzQ.js";import{C as m}from"./CheckboxGroup-B7xDONuB.js";import{C as p}from"./Checkbox-CaBRmP1X.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BmvkTOqd.js";import"./utils-BktV0bPW.js";import"./clsx-B-dksMZM.js";import"./Text-Bl05kWUq.js";import"./useFocusRing-Ddeo6vcg.js";import"./index-BUPWnhQ_.js";import"./index-DlKD8ct_.js";import"./clsx-Ciqy0D92.js";import"./Text-DbHLBiJa.js";import"./Label-DB3td5uV.js";import"./Button-BE24gnSa.js";import"./Hidden-DvrkBpIw.js";import"./useLabel-DIhHpIun.js";import"./useLabels-C4NHgo-V.js";import"./useButton-DatsifZv.js";import"./Dialog-CVMFylbH.js";import"./RSPContexts-BmgBGX_c.js";import"./OverlayArrow-u9GpBW35.js";import"./useResizeObserver-DY3a3G5M.js";import"./useControlledState-C03m2Mt3.js";import"./Collection-BRjDfviX.js";import"./index-Bx-krfMx.js";import"./Separator-BL3Y2Reb.js";import"./SelectionManager-COjlATtX.js";import"./useEvent-3yj0JxfP.js";import"./scrollIntoView-Cj-EggrR.js";import"./SelectionIndicator-BMNmgUmk.js";import"./useDescription-DnTL-4Et.js";import"./ListKeyboardDelegate-BcAY3NJ0.js";import"./PressResponder-ITxRPBR7.js";import"./useLocalizedStringFormatter-BzEzuq1k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CNRvt5U_.js";import"./getScrollParent-D-jmBja6.js";import"./VisuallyHidden-B0KgTif7.js";import"./x-FcVwT7Bo.js";import"./createLucideIcon-BAkvEDNb.js";import"./useLocalizedStringFormatter-Btt7l4WJ.js";import"./Heading-gGjQ1CPE.js";import"./Button-C-wbQlf4.js";import"./Button.module-BB7N-cLd.js";import"./info-MhYsNASq.js";import"./Popover-jSePYUcy.js";import"./Form-DFI39c1h.js";import"./useField-DTyHvujF.js";import"./check-DzS--0T7.js";import"./useToggleState-DKuutd8E.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
