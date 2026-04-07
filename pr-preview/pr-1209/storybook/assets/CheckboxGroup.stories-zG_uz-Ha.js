import{j as e}from"./iframe-DWnL6zvQ.js";import{C as m}from"./CheckboxGroup-Dgf9Zy6I.js";import{C as p}from"./Checkbox-CE49hd5z.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ans3DohR.js";import"./utils-ZOmRnVQp.js";import"./clsx-B-dksMZM.js";import"./Text-BFKc_gYr.js";import"./useFocusRing-T-08Y7EQ.js";import"./index-BKrgJF-5.js";import"./index-BdkXzYOX.js";import"./clsx-Ciqy0D92.js";import"./Text-BYUx4Ue_.js";import"./Label-CSU5sIKr.js";import"./Button-aAs4bXFc.js";import"./Hidden-D-JZUsjj.js";import"./useLabel-0R8_MAd9.js";import"./useLabels-D-eiwoeG.js";import"./useButton-Da9Ah83K.js";import"./Dialog-DHzT-dr3.js";import"./RSPContexts-Ce97Jw3e.js";import"./OverlayArrow-CVd40JMC.js";import"./useResizeObserver-BxmaOb-a.js";import"./useControlledState-BFA4HXY0.js";import"./Collection-BmKKOi01.js";import"./index-CutLW6j0.js";import"./Separator-Cs7o4V5s.js";import"./SelectionManager-x-FMyY7a.js";import"./useEvent-Dnzvg3-j.js";import"./scrollIntoView-CVWuYFBu.js";import"./SelectionIndicator-MWBRlw8e.js";import"./useDescription-DfYNITNj.js";import"./ListKeyboardDelegate-RRIEgPTP.js";import"./PressResponder-Bp22SaiB.js";import"./useLocalizedStringFormatter-B7dpYpQH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKOknMal.js";import"./getScrollParent-DhTLAxD9.js";import"./VisuallyHidden-DbmKXf8Z.js";import"./x-uyk-3eD_.js";import"./createLucideIcon--0_c509q.js";import"./useLocalizedStringFormatter-BGNOMAGR.js";import"./Heading-C9qHsJhG.js";import"./Button-DLalHH7Q.js";import"./Button.module-BB7N-cLd.js";import"./info-2fwOAd9I.js";import"./Popover-YHz5pupv.js";import"./Form-Klc040-z.js";import"./useField-JVOxqYJx.js";import"./check-TMZS5QZQ.js";import"./useToggleState-c79PZ5Aj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
