import{j as e}from"./iframe-DAmvnAWM.js";import{C as m}from"./CheckboxGroup-BcDzJY40.js";import{C as p}from"./Checkbox-DLeZsQYR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CC3CownB.js";import"./utils-DYzArhpk.js";import"./clsx-B-dksMZM.js";import"./Text-BHD5lpJL.js";import"./useFocusRing-QsJJnFOd.js";import"./index-smKRG6Ei.js";import"./index-iQgIb4dd.js";import"./clsx-Ciqy0D92.js";import"./Text-CSZqV0cb.js";import"./Label-DZzLHIqr.js";import"./Button-DrLU6fB6.js";import"./Hidden-BYI0l7bh.js";import"./useLabels-xfye1LU6.js";import"./useButton-DE9dKRCV.js";import"./Dialog-Ci_aUo6D.js";import"./RSPContexts-SFPpukGj.js";import"./OverlayArrow-D2HkM_v8.js";import"./useResizeObserver-Cf3C6UeM.js";import"./useControlledState-BjmKk3Qz.js";import"./Collection-C66Lj0rx.js";import"./index-Nu6RYaow.js";import"./Separator-kVJUjc11.js";import"./SelectionManager-B-T3Q6de.js";import"./useEvent-DfaC2w5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpfuH37l.js";import"./useDescription-CYqVIVXJ.js";import"./ListKeyboardDelegate-DBzt-ToB.js";import"./PressResponder-lw3aftXV.js";import"./useLocalizedStringFormatter-B4UBrv2w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgXXWlXd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BneHcT7D.js";import"./Button-CI9p286k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtExqc3U.js";import"./createLucideIcon-BXDZxBO_.js";import"./x-BtpaJG07.js";import"./Heading-DhgmXja-.js";import"./info-D2SmloP4.js";import"./Popover-hGYNeJ-f.js";import"./useFormValidation-BCE_H7GP.js";import"./useField-3CFuHcV3.js";import"./Form-B1LrfJNY.js";import"./check-BJZQmyXj.js";import"./useToggleState-CwxmSBnv.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
