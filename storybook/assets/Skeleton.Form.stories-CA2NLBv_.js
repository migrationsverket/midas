import{j as e,l}from"./iframe-BUzSQYPC.js";import{S as t}from"./Skeleton-CBJyHoLR.js";import{T as p}from"./TextField-BEXPWfOS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-vOvP5Qo6.js";import"./utils-Btzcj3N0.js";import"./TextField-Dk0Lc96h.js";import"./FieldError-Bhel02KK.js";import"./Text-Bd7HxiMM.js";import"./useFocusRing-YU2uIjvV.js";import"./index-GFhdUWhY.js";import"./index-Co6p1tFH.js";import"./Text-Bj5T73Aj.js";import"./RSPContexts-Cz2k_HNM.js";import"./Form-CGQpIRs2.js";import"./useFormValidation-De4Eb6_6.js";import"./Group-a5LyW-d1.js";import"./Input-IpKiaRbI.js";import"./Hidden-BnEE9Gsk.js";import"./Button-OR1vhKiL.js";import"./useLabels-cBc_DTaL.js";import"./useButton-DY9W__1v.js";import"./useTextField-CLCRB6R6.js";import"./useControlledState-DRPCclAj.js";import"./useField-DI1Z0UEr.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DVAz7ns9.js";import"./Dialog-9nXcosHR.js";import"./OverlayArrow-B544f2HB.js";import"./useResizeObserver-BauP1qVp.js";import"./Collection-BdzN0GFu.js";import"./index-CLJhNb_Q.js";import"./Separator-Bb8iAwHX.js";import"./SelectionManager-Cysrbh2q.js";import"./useEvent-Bdun3CtA.js";import"./scrollIntoView-DVdSjfTj.js";import"./SelectionIndicator-BNE4DlHv.js";import"./useDescription-DUYplGlv.js";import"./ListKeyboardDelegate-BkEk9pDN.js";import"./PressResponder-DNmbnAh3.js";import"./useLocalizedStringFormatter-Df3fxnIS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BETkQzAi.js";import"./VisuallyHidden-DxzlT-nw.js";import"./Button-BNm8f_W9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGyxLrTg.js";import"./createLucideIcon-DHyF6-IS.js";import"./x-m8OdfwS0.js";import"./Heading-BAJI1xjf.js";import"./info-CrIUTLUS.js";import"./Popover-BLQSaase.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
