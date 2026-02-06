import{j as e}from"./iframe-ATzl8XNu.js";import{C as m}from"./CheckboxGroup-TntV5VgE.js";import{C as p}from"./Checkbox-B6y1UGXM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C2MY82An.js";import"./utils-Cephp3rV.js";import"./clsx-B-dksMZM.js";import"./Text-aG-TJfe-.js";import"./useFocusRing-ukiZ3Ae7.js";import"./index-CaW5UWpb.js";import"./index-V5YcHX-r.js";import"./clsx-Ciqy0D92.js";import"./Text-B2jI714W.js";import"./Label-D6Gm1eFR.js";import"./Button-D92ovwB_.js";import"./Hidden-BWe0F6w6.js";import"./useLabels-tIVsswAO.js";import"./useButton-BsQSv027.js";import"./Dialog-BdxJMQJi.js";import"./RSPContexts-g44b3QqL.js";import"./OverlayArrow-pyy3CoI-.js";import"./useResizeObserver-CXP8YjLm.js";import"./useControlledState-BW_0fp0P.js";import"./Collection-ZnBZXNKj.js";import"./index-DR9JhBGy.js";import"./Separator-jps98X89.js";import"./SelectionManager-F7a4txdx.js";import"./useEvent-CSZRshWR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFa8mu4E.js";import"./useDescription-DCZ17iuR.js";import"./ListKeyboardDelegate-BCGM-8wK.js";import"./PressResponder-BQrkw8Wy.js";import"./useLocalizedStringFormatter-D8Kn80zC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bcg8ghzt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B7WhOGok.js";import"./Button-Bsz6RG7e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OfhFidRK.js";import"./createLucideIcon-JvePCe7s.js";import"./x-BmEx4eXF.js";import"./Heading-BTXgxYvk.js";import"./info-Bqh14NSG.js";import"./Popover-BpJW7gGU.js";import"./useFormValidation-BIKLk_Xn.js";import"./useField-CBkghgUG.js";import"./Form-D7ezNQUV.js";import"./check-B1fFJJeb.js";import"./useToggleState-Y2vrFfha.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
