import{j as e}from"./iframe-CyQuNDa_.js";import{C as m}from"./CheckboxGroup-BicsGxMj.js";import{C as p}from"./Checkbox-DJwfYni0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dtv9Wp9N.js";import"./utils-De8VIsoO.js";import"./clsx-B-dksMZM.js";import"./Text-Drr12cDy.js";import"./useFocusRing-93IF2U5F.js";import"./index-DRL4XcYu.js";import"./index-C8uVDAXw.js";import"./clsx-Ciqy0D92.js";import"./Text-CG8yCix2.js";import"./Label-e2CmuZvn.js";import"./Button-D1KGFQek.js";import"./Hidden-BoG65Xnl.js";import"./useLabels-BHGFLz3i.js";import"./useButton-Cx8w0lie.js";import"./Dialog-ByKazc15.js";import"./RSPContexts-BMz3QfBP.js";import"./OverlayArrow-B4rTpM3Y.js";import"./useResizeObserver-CrGRu0_c.js";import"./useControlledState-Ck_EK0EF.js";import"./Collection-D6SDSig5.js";import"./index-CqcnKqMu.js";import"./Separator-BkmBDJUy.js";import"./SelectionManager-QPOpbuGg.js";import"./useEvent-DNQdelf8.js";import"./scrollIntoView-Y5KcGlCw.js";import"./SelectionIndicator-CuFdSqsr.js";import"./useDescription-C-n2MYH0.js";import"./ListKeyboardDelegate-DMp9v8Xh.js";import"./PressResponder-bmuaUl5X.js";import"./useLocalizedStringFormatter-ZuVYcFkz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-K7GV_lSu.js";import"./VisuallyHidden-DDCx75rq.js";import"./useLocalizedStringFormatter-BNnUJ3nN.js";import"./Button-DJzGs5Og.js";import"./Button.module-CtQ1deO8.js";import"./x-CghFsWJf.js";import"./createLucideIcon-CHYxtA9m.js";import"./Heading-Cx9iBC6d.js";import"./info-Cx07oTWd.js";import"./Popover-Bf4f4NsA.js";import"./useFormValidation-OzFDShPm.js";import"./useField-Cy6intjQ.js";import"./Form-BY0WFOgB.js";import"./check-DQ2ubgik.js";import"./useToggleState-BYhsgFks.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
