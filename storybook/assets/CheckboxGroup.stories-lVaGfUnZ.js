import{j as e}from"./iframe-Ci13ld7O.js";import{C as m}from"./CheckboxGroup-DB2tknmi.js";import{C as p}from"./Checkbox-7MG-6uPV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNS2gCFK.js";import"./utils-Cd0LQrts.js";import"./clsx-B-dksMZM.js";import"./Text-BVmiYMQy.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./clsx-Ciqy0D92.js";import"./Text-BPRonoR2.js";import"./Label-CyjO9gbY.js";import"./Button-YvURXki4.js";import"./Hidden-BWsE9twn.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./Dialog-CepYnuLi.js";import"./RSPContexts-CFalA0-F.js";import"./OverlayArrow-C6lCqXBu.js";import"./useResizeObserver-J-bRjOGS.js";import"./useControlledState-BPjdf_b0.js";import"./Collection-CdINeEAb.js";import"./index-CQwP3ol2.js";import"./Separator-CHl0NPOa.js";import"./SelectionManager-D5qHVcdA.js";import"./useEvent-C4x00_RR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D7GO9bBt.js";import"./useDescription-4N3M-fgK.js";import"./ListKeyboardDelegate-B417rgL2.js";import"./PressResponder-CkrDdV11.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBYeZb5I.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1I07cqa.js";import"./Button-fdROVxmt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./createLucideIcon-Bj58XDKs.js";import"./x-CkflMYc7.js";import"./Heading-DYM89nr5.js";import"./info-dlDyX20E.js";import"./Popover-qyXGcSll.js";import"./useFormValidation-lyydmePw.js";import"./useField-CG62_5pp.js";import"./Form-BgjGPFuC.js";import"./check-D9VBBJoR.js";import"./useToggleState-Ge7wqY3I.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
