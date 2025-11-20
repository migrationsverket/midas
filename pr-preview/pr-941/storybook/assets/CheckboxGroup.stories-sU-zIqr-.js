import{j as e}from"./iframe-BCXW1_i0.js";import{C as m}from"./CheckboxGroup-CeHqE8MM.js";import{C as p}from"./Checkbox-B_bGDc-G.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-zUMBVfs0.js";import"./utils-BQj-xKr5.js";import"./clsx-B-dksMZM.js";import"./Text-BRLrffF_.js";import"./useFocusRing-Cbg95h9l.js";import"./index-CG2AamNc.js";import"./index-CJ47wOzG.js";import"./clsx-Ciqy0D92.js";import"./Text-DwKMZYPU.js";import"./Label-JI5vB7ps.js";import"./Button-DY4JEqdp.js";import"./Hidden-CDiDpivh.js";import"./useLabels-BdTTmJ_V.js";import"./useButton-V3C9Q0iI.js";import"./Dialog-BGozPSU8.js";import"./RSPContexts-DUSTzirW.js";import"./OverlayArrow-95mDz3t9.js";import"./useResizeObserver-DhqlsnSi.js";import"./useControlledState-B_lkycFk.js";import"./Collection-XGMiWDNU.js";import"./index-DKlW5HAp.js";import"./Separator-DTtrVEPn.js";import"./SelectionManager-B6YMPDR8.js";import"./useEvent-BLUB4_Bw.js";import"./scrollIntoView-B_Jw_5aw.js";import"./SelectionIndicator-LDNAU2Um.js";import"./useDescription-DXlhDdlP.js";import"./ListKeyboardDelegate-FLKKQ2IO.js";import"./PressResponder-DFWjl5Vc.js";import"./useLocalizedStringFormatter-CNw7cMsH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BkFzyuEm.js";import"./VisuallyHidden-Ca69gFn7.js";import"./Button-C_naedx-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C1fxLZgu.js";import"./createLucideIcon-BmOKhA97.js";import"./x-D8TzOJRE.js";import"./Heading-iBuxhWN6.js";import"./info-BCtl6ubQ.js";import"./Popover-TN5INWFJ.js";import"./useFormValidation-CFjYe5Gf.js";import"./useField-DpULJbLS.js";import"./Form-CaqyBj0L.js";import"./check-DkFnU7UM.js";import"./useToggleState-i7TFDGae.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
