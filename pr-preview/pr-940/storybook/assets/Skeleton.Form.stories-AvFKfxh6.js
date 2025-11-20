import{j as e,l}from"./iframe-BAs73RPL.js";import{S as t}from"./Skeleton-Br4mCNtF.js";import{T as d}from"./TextField-iJ6WbCh0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dyhc_J1S.js";import"./utils-BNvagvwB.js";import"./TextField-B4A5LW7M.js";import"./FieldError-CvqgXdke.js";import"./Text-DfkU3vzw.js";import"./useFocusRing-B5MTwkWu.js";import"./index-mTKHe5Za.js";import"./index-CPUct8TH.js";import"./Text-s8L5UkWk.js";import"./RSPContexts-DtBvA3Cm.js";import"./Form-BlMDUzBD.js";import"./useFormValidation-B9dJiJfE.js";import"./Group-8wuy1mNm.js";import"./Input-DUI1_ON3.js";import"./Hidden-ExRgjons.js";import"./Button-DOsNf8Ag.js";import"./useLabels-DIezZ8D1.js";import"./useButton-Dq9Jdi2X.js";import"./useTextField-DAnIDVMe.js";import"./useControlledState-NZanUP6y.js";import"./useField-BGz-Myg2.js";import"./TextField.module-1-_3qsJZ.js";import"./Label--ILklwI8.js";import"./Dialog-kEZUTLX1.js";import"./OverlayArrow-BTSL5NzX.js";import"./useResizeObserver-DK1yqie0.js";import"./Collection-BGWcOl6j.js";import"./index-BvK2kbM1.js";import"./Separator-DqPdO17M.js";import"./SelectionManager-g1bpR8-9.js";import"./useEvent-DWzVrgBg.js";import"./scrollIntoView-BRZESjne.js";import"./SelectionIndicator-Bne31ylu.js";import"./useDescription-p_4Zvj2G.js";import"./ListKeyboardDelegate-DD0AmbAY.js";import"./PressResponder-BOSkUlJT.js";import"./useLocalizedStringFormatter-zi0cj8Ji.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CJ1xMZJl.js";import"./VisuallyHidden-HHC4KR7u.js";import"./Button-DpzX3_Fu.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-lGSf489A.js";import"./createLucideIcon-D8g6b5V3.js";import"./x-DbOIoYEK.js";import"./Heading-B5FaUfwe.js";import"./info-BZ84f21k.js";import"./Popover-CVdbfnV8.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
