import{j as e}from"./iframe-BTaDbuxu.js";import{C as m}from"./CheckboxGroup-DuGNxpxN.js";import{C as p}from"./Checkbox-FIzzQDGi.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BSmb6mHx.js";import"./utils-1uCA-_jS.js";import"./clsx-B-dksMZM.js";import"./Text-DMH4kU1u.js";import"./useFocusRing-BHhR7R8K.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./clsx-Ciqy0D92.js";import"./Text-BgkGdlQT.js";import"./Label-C6YyueRh.js";import"./Button-V9h2N0md.js";import"./Hidden-DHaMiUFe.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./Dialog-Cu8HywJD.js";import"./RSPContexts-BHVdxW7V.js";import"./OverlayArrow-CJLkq1Il.js";import"./useResizeObserver-BfE_d8Ln.js";import"./useControlledState-CpRYTvJt.js";import"./Collection-DjeNEEmf.js";import"./index-DdZfCU1H.js";import"./Separator-ChU6sIgy.js";import"./SelectionManager-DeqISQES.js";import"./useEvent-DlwZgChj.js";import"./scrollIntoView-BMucG0RA.js";import"./SelectionIndicator-lL4f1q1r.js";import"./useDescription-DJkbGKg1.js";import"./ListKeyboardDelegate-Ddis9XgJ.js";import"./PressResponder-Cr7mUyzZ.js";import"./useLocalizedStringFormatter-XUeJ46d1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gv079wbl.js";import"./getScrollParent-D2rHfLmL.js";import"./VisuallyHidden-CqahcWwX.js";import"./ModalOverlay-D3dqdf8I.js";import"./x--XPZcdcH.js";import"./createLucideIcon-B7TgxeN_.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./Heading-Bly3ER8A.js";import"./Button-Cy0fOhbL.js";import"./Button.module-BB7N-cLd.js";import"./info-C7_Arssk.js";import"./Popover-4Cm-SRAq.js";import"./Form-CRVSZQwH.js";import"./useField-12NpjcQ6.js";import"./check-0Rjjnyk-.js";import"./useToggleState-DhqMLYue.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
