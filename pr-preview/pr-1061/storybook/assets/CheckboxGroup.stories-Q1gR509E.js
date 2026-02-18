import{j as e}from"./iframe-PN707gYe.js";import{C as m}from"./CheckboxGroup-CL4sqJKg.js";import{C as p}from"./Checkbox-DDZz-EP6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C-jlNPwu.js";import"./utils-BfTV9i6h.js";import"./clsx-B-dksMZM.js";import"./Text-Dv_zo2E3.js";import"./useFocusRing-zDf2sWnR.js";import"./index-ecqOFxv8.js";import"./index-2RsljFiJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Dwlf9er-.js";import"./Label-mmhWKT1f.js";import"./Button-DWVM9qi7.js";import"./Hidden-CDS304l1.js";import"./useLabels-BzSl-k1d.js";import"./useButton-Cx8Tw01D.js";import"./Dialog-CsWNjz47.js";import"./RSPContexts-CFSlWKUW.js";import"./OverlayArrow-DkXz51rs.js";import"./useResizeObserver-DkmLIbdP.js";import"./useControlledState-i6i54Khk.js";import"./Collection-DLFMKLxI.js";import"./index-Ch04P57V.js";import"./Separator-Dur5NM1u.js";import"./SelectionManager-NiOyR-Xw.js";import"./useEvent-C1yj769m.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1_lBUMe.js";import"./useDescription-BG2p2wOz.js";import"./ListKeyboardDelegate-ChFw6tO5.js";import"./PressResponder-8tQLozne.js";import"./useLocalizedStringFormatter-CwDyz_8k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tVX4sRHe.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BDvY-Erb.js";import"./Button-2ve-agNS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhPVws9w.js";import"./createLucideIcon-BSnI4rQ0.js";import"./x-C7LyQ1nR.js";import"./Heading-CI0F15qK.js";import"./info-DKyt8xDh.js";import"./Popover-DGwpcnJ5.js";import"./useFormValidation-joHmUQOI.js";import"./useField-CE5dFQKQ.js";import"./Form-CceAq0SA.js";import"./check-B3rU_jgj.js";import"./useToggleState-3a7kQ4OL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
