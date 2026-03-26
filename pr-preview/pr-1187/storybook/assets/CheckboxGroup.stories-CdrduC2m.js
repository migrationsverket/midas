import{j as e}from"./iframe-CM25YVMI.js";import{C as m}from"./CheckboxGroup-BHedy3rR.js";import{C as p}from"./Checkbox-BmtzQdj4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DrjYFklj.js";import"./utils-B96ufrPs.js";import"./clsx-B-dksMZM.js";import"./Text-DDiDpkRq.js";import"./useFocusRing-leQD3u2F.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./clsx-Ciqy0D92.js";import"./Text-D4mHh6eT.js";import"./Label-DbArHAot.js";import"./Button-vkdXqgie.js";import"./Hidden-Bkjvz6Ri.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./Dialog-CXgkCXNO.js";import"./RSPContexts-BEyD-TmB.js";import"./OverlayArrow-ChaPryvr.js";import"./useResizeObserver-CFbbKVqW.js";import"./useControlledState-FG_bUeqE.js";import"./Collection-DyNLDyBt.js";import"./index-CLVOANuP.js";import"./Separator-Bz2npnjj.js";import"./SelectionManager-DAIHpPMl.js";import"./useEvent-BJWNvlK2.js";import"./scrollIntoView-CM-wWI7V.js";import"./SelectionIndicator-CXCiqDeB.js";import"./useDescription-D-2ki_PT.js";import"./ListKeyboardDelegate-B1WwTEns.js";import"./PressResponder-urDmkW73.js";import"./useLocalizedStringFormatter-B8uPJVbi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnwPZMvr.js";import"./getScrollParent-CcTlIiv2.js";import"./VisuallyHidden-CwsE6PRe.js";import"./x-B7ImzBTw.js";import"./createLucideIcon-Br4oCZrR.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./Heading-Bq6iHTA4.js";import"./Button-CImuJsqD.js";import"./Button.module-BB7N-cLd.js";import"./info-Dv7psBLN.js";import"./Popover-CZRhKMgS.js";import"./Form-COfnJ4dZ.js";import"./useField-BcLvgBhR.js";import"./check-BAMyXGGo.js";import"./useToggleState-BQAAMLqx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
