import{j as e}from"./iframe-DLcF_cZb.js";import{C as m}from"./CheckboxGroup-B08uy4m5.js";import{C as p}from"./Checkbox-Bwn-MMn5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BM5NpMS1.js";import"./utils-DopDDGwO.js";import"./clsx-B-dksMZM.js";import"./Text-B98yE2PT.js";import"./useFocusRing-Dmrd4B4C.js";import"./index-B7geH7_-.js";import"./index-DK_aNcXz.js";import"./clsx-Ciqy0D92.js";import"./Text-Dh2DNKMg.js";import"./Label-DG6ahEDM.js";import"./Button-BirpzH-3.js";import"./Hidden-BmcCzQFm.js";import"./useLabels-BmzKzWd6.js";import"./useButton-CBJTXxEE.js";import"./Dialog-BcXqbI84.js";import"./RSPContexts-CTdkxWNV.js";import"./OverlayArrow-Cfn4lJ8Z.js";import"./useResizeObserver-BPN23z2n.js";import"./useControlledState-BjUzWb5o.js";import"./Collection-BeAco00g.js";import"./index-BwM4ZsvQ.js";import"./Separator-CabJx4mN.js";import"./SelectionManager-WvjmUz1m.js";import"./useEvent-6YdTv-vL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IjtRpl3q.js";import"./useDescription-Boa-MxLe.js";import"./ListKeyboardDelegate-BsPbU2Dn.js";import"./PressResponder-DI04bVwx.js";import"./useLocalizedStringFormatter-CschDt8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-7Dnmrw8M.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-SdRNs5sP.js";import"./Button-BbPLdLku.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfNFAn3n.js";import"./createLucideIcon-Bv8IvF6P.js";import"./x-YRI_uR-l.js";import"./Heading-CdMiYJad.js";import"./info-BvPC3fJN.js";import"./Popover-B2kGklUs.js";import"./useFormValidation-CNRHJKth.js";import"./useField-Bnx6_ry5.js";import"./Form-DNQ-f3m0.js";import"./check-CUkha0Yt.js";import"./useToggleState-CL34mAtN.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
