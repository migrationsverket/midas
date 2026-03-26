import{j as e}from"./iframe-CmYiK-n6.js";import{C as m}from"./CheckboxGroup-CWfyYMLO.js";import{C as p}from"./Checkbox-aBlFfK7w.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BH0tEXew.js";import"./utils-DuGECbYJ.js";import"./clsx-B-dksMZM.js";import"./Text-BjHkHRHl.js";import"./useFocusRing-fb67MZCG.js";import"./index-uTF0zBZg.js";import"./index-3su9nmIU.js";import"./clsx-Ciqy0D92.js";import"./Text-Do0OahUX.js";import"./Label-BVPNJsjF.js";import"./Button-qoG5XtEP.js";import"./Hidden-DYp0pP8Z.js";import"./useLabel-DORwbiEm.js";import"./useLabels-CWIg4FvW.js";import"./useButton-DI4TpKGO.js";import"./Dialog-CLpbbMpG.js";import"./RSPContexts-CLCgQCox.js";import"./OverlayArrow-D4pIW5NP.js";import"./useResizeObserver-BjEw7e_p.js";import"./useControlledState-CmhxWbu6.js";import"./Collection-BKbSWMGW.js";import"./index-CEYCKRCR.js";import"./Separator-JoZh57sB.js";import"./SelectionManager-C5mi1PZ6.js";import"./useEvent-DiUqwjRb.js";import"./scrollIntoView-BEc6bXLo.js";import"./SelectionIndicator-DAOEJSSR.js";import"./useDescription-D-5y-MeU.js";import"./ListKeyboardDelegate-B1h2DZXt.js";import"./PressResponder-XBIVH6QP.js";import"./useLocalizedStringFormatter-DtH6xDXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-adBdCafr.js";import"./getScrollParent-CGgBb0lV.js";import"./VisuallyHidden-3nqwjOvK.js";import"./x-BVGBl3EY.js";import"./createLucideIcon-tBOZLxvE.js";import"./useLocalizedStringFormatter-Bg3jxnyj.js";import"./Heading-5TAFJO2x.js";import"./Button-CF9FU3kY.js";import"./Button.module-BB7N-cLd.js";import"./info-BBYdgOic.js";import"./Popover-C353YzOT.js";import"./Form-b_mzsJNr.js";import"./useField-BPzngyvH.js";import"./check-CUY1Q-BZ.js";import"./useToggleState-DOErwd6q.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
