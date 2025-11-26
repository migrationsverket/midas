import{j as e}from"./iframe-CNs3Hc78.js";import{C as m}from"./CheckboxGroup-C3Kj0xDA.js";import{C as p}from"./Checkbox-Ctg72ARI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-zFhVoF9-.js";import"./utils-BCAzWPEC.js";import"./clsx-B-dksMZM.js";import"./Text-wtOrpJHq.js";import"./useFocusRing-zj2lvc57.js";import"./index-B3WrROuP.js";import"./index-D4SN8WxL.js";import"./clsx-Ciqy0D92.js";import"./Text-BgKg61nJ.js";import"./Label-BHxTCLjC.js";import"./Button-tVHEZQYV.js";import"./Hidden-DgJuJ0IA.js";import"./useLabels-CT5lp67H.js";import"./useButton-BXGXxck1.js";import"./Dialog-CoIngXy8.js";import"./RSPContexts-BrkOvu8M.js";import"./OverlayArrow-B_pIAp34.js";import"./useResizeObserver-D6XN12W9.js";import"./useControlledState-TNI0bjBI.js";import"./Collection-DFfxkGXX.js";import"./index-CDein1hB.js";import"./Separator-2-T3Ee-g.js";import"./SelectionManager-CplIeKd3.js";import"./useEvent-CPgKTkC-.js";import"./scrollIntoView-C3r_DWJ9.js";import"./SelectionIndicator-DEn9IElk.js";import"./useDescription-DCIm4kSk.js";import"./ListKeyboardDelegate-B54wTjfW.js";import"./PressResponder-BaXSQ7LF.js";import"./useLocalizedStringFormatter-BN9wWTBZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BCP-FySj.js";import"./VisuallyHidden-DpNrlenL.js";import"./Button-Co8s4gf_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CV3R0Jov.js";import"./createLucideIcon-gnxpVPhb.js";import"./x-r97zZEq7.js";import"./Heading-6lhQ2fmS.js";import"./info-DRs9hkc-.js";import"./Popover-CDYrlnhi.js";import"./useFormValidation-D30uUmE0.js";import"./useField-Cw6RQ1mB.js";import"./Form-DYRseO7L.js";import"./check-BDMqWWpb.js";import"./useToggleState-DKeAKlhx.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
