import{j as e}from"./iframe-CSxi486h.js";import{C as m}from"./CheckboxGroup-Ct1agCMU.js";import{C as p}from"./Checkbox-C2yUljV9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CGgFGY0t.js";import"./utils-BzDTrZyA.js";import"./clsx-B-dksMZM.js";import"./Text-DJ3-XheA.js";import"./useFocusRing-RkfB8tx5.js";import"./index-0hY5d2pY.js";import"./index-D8s8gplW.js";import"./clsx-Ciqy0D92.js";import"./Text-KTapkgrB.js";import"./Label-BX9fucSG.js";import"./Button-DDo42slW.js";import"./Hidden-CGbLzxlP.js";import"./useLabels-ku0pOgJ6.js";import"./useButton-CMpob_a_.js";import"./Dialog-GnEu9DKR.js";import"./RSPContexts-DQM45vj6.js";import"./OverlayArrow-DpU-LYF6.js";import"./useResizeObserver-3FjlZ3dM.js";import"./useControlledState-DtteSLbz.js";import"./Collection-BSTiSYw8.js";import"./index-GB43V8eJ.js";import"./Separator-DcGKTPuu.js";import"./SelectionManager-Ach9z1ok.js";import"./useEvent-CI6BS7N3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-4DQ1JiJ8.js";import"./useDescription-BVlN4h3o.js";import"./ListKeyboardDelegate-B9cKvqzL.js";import"./PressResponder-DyYothjc.js";import"./useLocalizedStringFormatter-BOm7oqwy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ClGvaNRF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-z1hnMekp.js";import"./Button-iQDKHLWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DY5vjUoo.js";import"./createLucideIcon-CayTLY9E.js";import"./x-uPsz_3EK.js";import"./Heading-CLKVrjeR.js";import"./info-lH0y66bL.js";import"./Popover-CzW9-JSe.js";import"./useFormValidation-D6gouEPs.js";import"./useField-KJZxfhtX.js";import"./Form-vycxbIa7.js";import"./check-BNNIX2Cz.js";import"./useToggleState-wKvR8NJq.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
