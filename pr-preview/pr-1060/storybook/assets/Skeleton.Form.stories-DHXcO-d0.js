import{j as e,l}from"./iframe-DzQsNUlN.js";import{S as t}from"./Skeleton-CBx9RdJm.js";import{T as p}from"./TextField-B29SO7s-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CUXB2iMi.js";import"./utils-BK4Wbdgl.js";import"./TextField-D9vKoWQU.js";import"./FieldError-DdUwEQrU.js";import"./Text-B9j4IbHz.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./Text-DQ3iFp2f.js";import"./RSPContexts-Bo3qcagQ.js";import"./Form-BeAR6TLt.js";import"./useFormValidation-D42naTnG.js";import"./Group-DEVosZCD.js";import"./Input-BomnZ-U8.js";import"./Hidden-BJckUxlD.js";import"./Button-B-ooyoCL.js";import"./number-DfkVkf0F.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./useTextField-B_FDF847.js";import"./useControlledState-BDeuRVdh.js";import"./useField-B2ZM_ZrS.js";import"./TextField.module-DpzeWGpt.js";import"./Label-1qazq_on.js";import"./Dialog-LG_3aT-X.js";import"./OverlayArrow-CstN0B1C.js";import"./useResizeObserver-DL5KAaCe.js";import"./Collection-DfWP-8XQ.js";import"./index-CG45YEOG.js";import"./Separator-B9l0ixbi.js";import"./SelectionManager-G1dsFni-.js";import"./useEvent-DPJfrH0C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-KGcuLJQY.js";import"./useDescription-CghOEtAM.js";import"./ListKeyboardDelegate-C7E5D8Pm.js";import"./PressResponder-CJ1jfwsf.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Y2lLmc0U.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ukn47BBG.js";import"./Modal-C-1Lneyt.js";import"./Button-D9Fs-ZCK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./createLucideIcon-BcyF_Y89.js";import"./x-euwJmRQG.js";import"./Heading-DRrzocmn.js";import"./info-mZDG11IN.js";import"./Popover-BdJuk0ES.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};
