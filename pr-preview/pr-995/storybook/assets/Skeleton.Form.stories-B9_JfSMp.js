import{j as e,l}from"./iframe-Dor4ircF.js";import{S as t}from"./Skeleton-Ducd1Ju9.js";import{T as p}from"./TextField-VQLExYtU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BNOxtluU.js";import"./utils-DMuGTtMS.js";import"./TextField-C-NSJek-.js";import"./FieldError-CwY-5fO_.js";import"./Text-B-FP0CmP.js";import"./useFocusRing-CI_ISeqX.js";import"./index-BRWlJPJW.js";import"./index-qWyL7EHC.js";import"./Text-BhYbgXGv.js";import"./RSPContexts-CxfAfl7o.js";import"./Form-PC2GFGky.js";import"./useFormValidation-CT2uGaah.js";import"./Group-DXJMExwX.js";import"./Input-Cieaqa26.js";import"./Hidden-Dp-Crghp.js";import"./Button-CwntTkhI.js";import"./useLabels-CpLLuEK0.js";import"./useButton-CwfL82kC.js";import"./useTextField-CJvkV0oq.js";import"./useControlledState-DvR4e7YP.js";import"./useField-DjgNXvlM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DoMVJZ1W.js";import"./Dialog-tR6ZL6WY.js";import"./OverlayArrow-C1tPV9MD.js";import"./useResizeObserver-DHS0iUPg.js";import"./Collection-Cl9mpUrY.js";import"./index-B6HabYp9.js";import"./Separator-BtiURR58.js";import"./SelectionManager-BbQqTeL4.js";import"./useEvent-Bb7RUZ2F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CTEwBRy7.js";import"./useDescription-Drpzw2S9.js";import"./ListKeyboardDelegate-DdhKtesC.js";import"./PressResponder-VqOr_Qee.js";import"./useLocalizedStringFormatter-BWgIDVv3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqKIFYFG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIjKH1Nn.js";import"./Button-DlFMUaPv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Hlva-IBM.js";import"./createLucideIcon-Db-iAtDf.js";import"./x-pETj6_df.js";import"./Heading-TEjQ0Xg3.js";import"./info-75RXVdD6.js";import"./Popover-BS_gm3hV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
