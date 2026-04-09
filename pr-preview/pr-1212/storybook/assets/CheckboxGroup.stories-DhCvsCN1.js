import{j as e}from"./iframe-CFC4xcGk.js";import{C as m}from"./CheckboxGroup-Ba9O2lj7.js";import{C as p}from"./Checkbox-Cy0nPndC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DPjUPYFy.js";import"./utils-YAjyJ6o5.js";import"./clsx-B-dksMZM.js";import"./Text-AmqWzkOV.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./clsx-Ciqy0D92.js";import"./Text-ZUooKx_2.js";import"./Label-Dag3MGi1.js";import"./Button-Dlhy25YO.js";import"./Hidden-BvfitbEd.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./Dialog-bC6Mtm0x.js";import"./RSPContexts-BaTuXADK.js";import"./OverlayArrow-CELddGWW.js";import"./useResizeObserver-Bzr-P-UD.js";import"./useControlledState-CPr8PZqM.js";import"./Collection-Usc2d9zU.js";import"./index-3mOn_vPA.js";import"./Separator-CvBitslZ.js";import"./SelectionManager-CAmHqMfl.js";import"./useEvent-BUJ9aQ4c.js";import"./scrollIntoView-CKdxk-E0.js";import"./SelectionIndicator-DeAU8qDC.js";import"./useDescription-BsBgpIxP.js";import"./ListKeyboardDelegate-BO04bF22.js";import"./PressResponder-BiBghsJL.js";import"./useLocalizedStringFormatter-dA5DnFaT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-noZqyxMd.js";import"./getScrollParent-v4OBvkmq.js";import"./VisuallyHidden-BPhSZleF.js";import"./Dialog-Citvnq0B.js";import"./x-BlcNnfbx.js";import"./createLucideIcon-BfFQGVhS.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./Heading-DngLrKmF.js";import"./Button-DmKKfG5W.js";import"./Button.module-BB7N-cLd.js";import"./info-DBq6z6SB.js";import"./Popover-BpelOKcf.js";import"./Form-DaGSyuCS.js";import"./useField-UMG9k_p-.js";import"./check-CxhYpS8G.js";import"./useToggleState-BlBTFW8l.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
