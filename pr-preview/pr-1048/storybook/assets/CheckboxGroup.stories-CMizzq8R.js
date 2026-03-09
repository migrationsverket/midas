import{j as e}from"./iframe-Cvf5bOeL.js";import{C as m}from"./CheckboxGroup-CveeZ0qo.js";import{C as p}from"./Checkbox-JutZ4BVT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CiZkIitt.js";import"./utils-C1R7Byny.js";import"./clsx-B-dksMZM.js";import"./Text-kmtP8_oY.js";import"./useFocusRing-COt4M2p8.js";import"./index-ClZalfPt.js";import"./index-CXp7TptX.js";import"./clsx-Ciqy0D92.js";import"./Text-CBvf4Q07.js";import"./Label-DMF_iGTm.js";import"./Button-CxK6-t7a.js";import"./Hidden-BkiKYALS.js";import"./useLabels-Ds9sWjje.js";import"./useButton-CeaaOal7.js";import"./Dialog-RrAu1n3t.js";import"./RSPContexts-BhKMO7Rz.js";import"./OverlayArrow-Cqei2d8P.js";import"./useResizeObserver-BNoiFPdw.js";import"./useControlledState-C6H-hxLp.js";import"./Collection-BL8pLVDW.js";import"./index-cJes_YYu.js";import"./Separator-CIAPiImn.js";import"./SelectionManager-B2QUI9_y.js";import"./useEvent-HhEyoxIa.js";import"./scrollIntoView-BYEbTNmx.js";import"./SelectionIndicator-BhSrR2aJ.js";import"./useDescription-DvsSwlbW.js";import"./ListKeyboardDelegate-Dqm4dEGS.js";import"./PressResponder-B9dp42g-.js";import"./useLocalizedStringFormatter-C0qo-Kt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yF4RBYT8.js";import"./getScrollParent-UzGHslW5.js";import"./VisuallyHidden-BC_L462J.js";import"./Button-Cpd04SUc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Conpc6HM.js";import"./createLucideIcon-AeCqa4TH.js";import"./x-QFX-QYqm.js";import"./Heading-CahinXzf.js";import"./info-bzB77h75.js";import"./Popover-uNFH3mHh.js";import"./useFormValidation-BvzmB0lD.js";import"./useField-DbedPEp5.js";import"./Form-CEsc4aGb.js";import"./check-DR1Q-OOX.js";import"./useToggleState-Q3XA1JWk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
