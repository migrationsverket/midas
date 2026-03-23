import{j as e}from"./iframe-BDBC-eBH.js";import{C as m}from"./CheckboxGroup-hYlt4MUL.js";import{C as p}from"./Checkbox-1_GWwEWZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ATBv1U6u.js";import"./utils-BF3dZFMw.js";import"./clsx-B-dksMZM.js";import"./Text-DO7PXPW2.js";import"./useFocusRing-CgfezvW6.js";import"./index-BWNKyBGD.js";import"./index-C54ey478.js";import"./clsx-Ciqy0D92.js";import"./Text-B8jtlyCQ.js";import"./Label-QGoDMz15.js";import"./Button-C0bwvCnL.js";import"./Hidden-BOnSBQrS.js";import"./useLabels-C2GA6JVF.js";import"./useButton-CdFak1iR.js";import"./Dialog-C57uVoNZ.js";import"./RSPContexts-BqLHknP6.js";import"./OverlayArrow-YEz0fSIa.js";import"./useResizeObserver-pxKKxM_5.js";import"./useControlledState-BUM3bHka.js";import"./Collection-D9GufsRS.js";import"./index-DacEL6WZ.js";import"./Separator-D_PZVkuw.js";import"./SelectionManager-BcCkiuN_.js";import"./useEvent-DajtHI1Q.js";import"./scrollIntoView-DiugVx5R.js";import"./SelectionIndicator-wn9XV9Cs.js";import"./useDescription-BjmAj66h.js";import"./ListKeyboardDelegate-B2SKj4TS.js";import"./PressResponder-Drf7ODE0.js";import"./useLocalizedStringFormatter-DJ0cN-Xn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BNCIq6SV.js";import"./getScrollParent-CCOLkLjE.js";import"./VisuallyHidden-Cj48UhMD.js";import"./x-k_b3OfRX.js";import"./createLucideIcon-B9PoiMSr.js";import"./useLocalizedStringFormatter-C0PyQwpA.js";import"./Heading-Z8tR6iFR.js";import"./Button-z3f5m6Cn.js";import"./Button.module-BB7N-cLd.js";import"./info-DqX_b7pM.js";import"./Popover-al7ioVi7.js";import"./Form-DtNN1KWP.js";import"./useField-BV9_GpNs.js";import"./check-CPUWpziA.js";import"./useToggleState-CRStVO_-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
