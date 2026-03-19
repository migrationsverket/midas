import{j as e}from"./iframe-BIHPCSD7.js";import{C as m}from"./CheckboxGroup-Dq_ILrjV.js";import{C as p}from"./Checkbox-BpCMZ65p.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Kju1pqM0.js";import"./utils-DD1AhTmn.js";import"./clsx-B-dksMZM.js";import"./Text-41JxePIO.js";import"./useFocusRing-BMHnjiK5.js";import"./index-D8pKX7IM.js";import"./index-fodDxchC.js";import"./clsx-Ciqy0D92.js";import"./Text-BxyjZI9K.js";import"./Label-U2zTA6gA.js";import"./Button-CSz7Ih4-.js";import"./Hidden-BPDZ6gCs.js";import"./useLabels-j4j3caFA.js";import"./useButton-COi1XBPP.js";import"./Dialog-9-tMf1FG.js";import"./RSPContexts-DjrbWcHb.js";import"./OverlayArrow-H65onxC4.js";import"./useResizeObserver-CIdBe9yq.js";import"./useControlledState-7StlLOGr.js";import"./Collection-DuHg5sOR.js";import"./index-Bb61Zy6b.js";import"./Separator-BdKPCcph.js";import"./SelectionManager-DyuAahU5.js";import"./useEvent-DwulRvFz.js";import"./scrollIntoView-Cjdp4BaG.js";import"./SelectionIndicator-C8dljys4.js";import"./useDescription-B6Gpa9qj.js";import"./ListKeyboardDelegate-Df15MKn_.js";import"./PressResponder-CEgbzEyF.js";import"./useLocalizedStringFormatter-ruJF4A_C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgrWIzZC.js";import"./getScrollParent-C7NYmB80.js";import"./VisuallyHidden-CQeIgFd3.js";import"./x-BjMfPpOk.js";import"./createLucideIcon-CEpUHvVi.js";import"./useLocalizedStringFormatter-DgK4llAe.js";import"./Heading-De18PXua.js";import"./Button-B-WLyZXQ.js";import"./Button.module-BB7N-cLd.js";import"./info-hRabbH20.js";import"./Popover-h0KZta9r.js";import"./Form-DnedwBlt.js";import"./useField-N_ZHho5V.js";import"./check-Vo02emqU.js";import"./useToggleState-D19-eJHY.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
