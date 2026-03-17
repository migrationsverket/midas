import{j as e}from"./iframe-FsNXgqe6.js";import{C as m}from"./CheckboxGroup-5vpyLDnP.js";import{C as p}from"./Checkbox-BoXbZsfq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-p7x1oei0.js";import"./utils-CHHHSM11.js";import"./clsx-B-dksMZM.js";import"./Text-CjmdaRq5.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./clsx-Ciqy0D92.js";import"./Text-C8W6Aunw.js";import"./Label-BIdbphBx.js";import"./Button-BlUHKe-n.js";import"./Hidden-B6vp6jMs.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./Dialog-B8uY3jGW.js";import"./RSPContexts-L16IbbAV.js";import"./OverlayArrow-DmsvKZX4.js";import"./useResizeObserver-IhCfOiMN.js";import"./useControlledState-cgOhGnIF.js";import"./Collection-DDaYa3-Y.js";import"./index--E2Dvaj6.js";import"./Separator-Bd83B3mj.js";import"./SelectionManager-h8lDah4m.js";import"./useEvent-ClOxTEoa.js";import"./scrollIntoView-C5rWQYSS.js";import"./SelectionIndicator-CvwVJIfe.js";import"./useDescription-B03GWqqQ.js";import"./ListKeyboardDelegate-CFzjx7yi.js";import"./PressResponder-4pNBWveI.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeKVnalW.js";import"./getScrollParent--flH2mcI.js";import"./VisuallyHidden-CDgolLOv.js";import"./x-B7cAzNtk.js";import"./createLucideIcon-Dz3AmHpK.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";import"./Heading-B37BGmC_.js";import"./Button-YzrNlavS.js";import"./Button.module-BB7N-cLd.js";import"./info-B9ibTQnB.js";import"./Popover-BUi0eHZY.js";import"./Form-B6wupcKh.js";import"./useField-C0plC4Rc.js";import"./check-CCWeZY36.js";import"./useToggleState-CcGsJUPB.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
