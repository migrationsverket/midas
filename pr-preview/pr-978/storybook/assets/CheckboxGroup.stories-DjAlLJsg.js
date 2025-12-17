import{j as e}from"./iframe-QHZf_0KR.js";import{C as m}from"./CheckboxGroup-2qK206Po.js";import{C as p}from"./Checkbox-DJ5zk1MK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-kIYsyYtJ.js";import"./utils-DMdfkNzG.js";import"./clsx-B-dksMZM.js";import"./Text-DKbBjvoe.js";import"./useFocusRing-ClHcu_zQ.js";import"./index-CHGNqM_2.js";import"./index-xKnCm_n3.js";import"./clsx-Ciqy0D92.js";import"./Text-DUZE8-2g.js";import"./Label-CeWwRU1V.js";import"./Button-f4n0U-wU.js";import"./Hidden-nvOr4Cn2.js";import"./useLabels-D7QHi2xh.js";import"./useButton-3BOwEEH4.js";import"./Dialog-BiBMiZ0z.js";import"./RSPContexts-Bcx0Nn0O.js";import"./OverlayArrow-ernfB7Nw.js";import"./useResizeObserver-u_Xx3lsm.js";import"./useControlledState-pIXeoVBI.js";import"./Collection-b5B6W6Vo.js";import"./index-oYBSpW0s.js";import"./Separator-VNN2H7Re.js";import"./SelectionManager-Db7clpaK.js";import"./useEvent-CsAl9Ry7.js";import"./scrollIntoView-CWY7HxDb.js";import"./SelectionIndicator-Cnyb-EQH.js";import"./useDescription-BeJE8Y-1.js";import"./ListKeyboardDelegate-BI6SQagQ.js";import"./PressResponder-BgcIarS0.js";import"./useLocalizedStringFormatter-GxiQzKTn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BL3CA0PQ.js";import"./VisuallyHidden-DFyPHr9C.js";import"./Button-mxQSmzlb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDkPYuns.js";import"./createLucideIcon-BceMF_ih.js";import"./x-4jZqf9VP.js";import"./Heading-DhUF6nKg.js";import"./info-BSrDdLUr.js";import"./Popover-DvGSOMTM.js";import"./useFormValidation-wuEhW6nY.js";import"./useField-CVccv3lq.js";import"./Form-BD1cx3un.js";import"./check-DIFewHK2.js";import"./useToggleState-v82cJgec.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
