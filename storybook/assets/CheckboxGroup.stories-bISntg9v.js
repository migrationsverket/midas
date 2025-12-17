import{j as e}from"./iframe-BGyjMY2A.js";import{C as m}from"./CheckboxGroup-oOAMXj5v.js";import{C as p}from"./Checkbox-BWJXjaop.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B1WUXMvL.js";import"./utils-CTEL-aPn.js";import"./clsx-B-dksMZM.js";import"./Text-yiC38_9n.js";import"./useFocusRing-Qz5ydHqq.js";import"./index-BSnPUmLp.js";import"./index-CExSyphq.js";import"./clsx-Ciqy0D92.js";import"./Text-ZEUEevv6.js";import"./Label-CAG2bXHf.js";import"./Button-DI8VxDKE.js";import"./Hidden-7YyYTdjK.js";import"./useLabels-BKJWTw5n.js";import"./useButton-Cgw_GPMG.js";import"./Dialog-oeGtedrh.js";import"./RSPContexts-DcfdI7Bu.js";import"./OverlayArrow-C3Djjy-R.js";import"./useResizeObserver-4-qSZuBz.js";import"./useControlledState-tPA4VUhi.js";import"./Collection-K_Rojnh4.js";import"./index-CfzByka8.js";import"./Separator-BKNSwlgI.js";import"./SelectionManager-8OCXfYv4.js";import"./useEvent-ERybvefB.js";import"./scrollIntoView-BWfcBpus.js";import"./SelectionIndicator-3VQJzvPK.js";import"./useDescription-Cn9clWz2.js";import"./ListKeyboardDelegate-BbYHlOOG.js";import"./PressResponder-Cmm_PXKw.js";import"./useLocalizedStringFormatter-CHCXaTKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cml6bqId.js";import"./VisuallyHidden-CeB8DNep.js";import"./Button-DoINo-pg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_mvD30RP.js";import"./createLucideIcon-Dt69t0iG.js";import"./x-o3LNZlJS.js";import"./Heading-CIYG4bW9.js";import"./info-CymFzWAt.js";import"./Popover-D6XACcMx.js";import"./useFormValidation-CatHWqP6.js";import"./useField-BU525k87.js";import"./Form-BgNO24kW.js";import"./check-DwHtLiU5.js";import"./useToggleState-DhIVYrB2.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
