import{j as e}from"./iframe-BhCsjan0.js";import{C as m}from"./CheckboxGroup-C8TLGy_I.js";import{C as p}from"./Checkbox-COx58OqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-d9D7STve.js";import"./utils-CtrZbhzi.js";import"./clsx-B-dksMZM.js";import"./Text-DhUSBMS-.js";import"./useFocusRing-Ws2f8SLu.js";import"./index-DDDUdMNC.js";import"./index-D_WqKMc5.js";import"./clsx-Ciqy0D92.js";import"./Text-CFjsaxmQ.js";import"./Label-DIjt93Sh.js";import"./Button-C2NaQWvO.js";import"./Hidden-D6UeEvFM.js";import"./useLabel-B7TVwUpE.js";import"./useLabels-BLj4vdHd.js";import"./useButton-By7DbLK9.js";import"./Dialog-6jn4yg57.js";import"./RSPContexts-CrHrywo6.js";import"./OverlayArrow-C6N_fte3.js";import"./useResizeObserver-BKu7HBuy.js";import"./useControlledState-CoCU8B0S.js";import"./Collection-DM4I3Ztv.js";import"./index-CoQv-Sjc.js";import"./Separator-DkPdqceJ.js";import"./SelectionManager-CNKK__7r.js";import"./useEvent-DNglUoLW.js";import"./scrollIntoView-DYsCjaxp.js";import"./SelectionIndicator-1Pn5e84b.js";import"./useDescription-B1CS-p0E.js";import"./ListKeyboardDelegate-BBCtkR3X.js";import"./PressResponder-BH8ZS3ke.js";import"./useLocalizedStringFormatter-DQmyBNjM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7iI9wL4.js";import"./getScrollParent-NPr2J27f.js";import"./VisuallyHidden-CfUMAOQ3.js";import"./x-DuKAZAyJ.js";import"./createLucideIcon-Bp2jaLbZ.js";import"./useLocalizedStringFormatter-K5Z3y1WJ.js";import"./Heading-ycVFTWje.js";import"./Button-1iG7gZrx.js";import"./Button.module-BB7N-cLd.js";import"./info-CD6NIFY9.js";import"./Popover-BMdUSeGF.js";import"./Form-rvJLQRoR.js";import"./useField-Cfm5ic33.js";import"./check-B2ujJPxQ.js";import"./useToggleState-D50vjHgf.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
