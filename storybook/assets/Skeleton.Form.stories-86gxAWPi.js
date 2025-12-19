import{j as e,l}from"./iframe-hiMgqW0o.js";import{S as t}from"./Skeleton-BV6i-ihO.js";import{T as p}from"./TextField-C-HZ52By.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CgY_SUsD.js";import"./utils-bOnY6DnA.js";import"./TextField-BgMOBLVA.js";import"./FieldError-CYiGGuhL.js";import"./Text-Cs9T2I4A.js";import"./useFocusRing-DgygcgT4.js";import"./index-EY6_MA1c.js";import"./index-CZjbkyzZ.js";import"./Text-BiYaIxZf.js";import"./RSPContexts-Bv08kDFB.js";import"./Form-BktoSPgT.js";import"./useFormValidation-CBe-85YS.js";import"./Group-DqkVNwN_.js";import"./Input-B_Ox3LNb.js";import"./Hidden-BwH6JGlk.js";import"./Button-Nx19MEw4.js";import"./useLabels-CZOrLkCJ.js";import"./useButton-jWlGAFFg.js";import"./useTextField-B9NgK4Il.js";import"./useControlledState-nqlfkxpV.js";import"./useField-XdbO1scp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cw4FHS5Q.js";import"./Dialog-CdxWOMeL.js";import"./OverlayArrow-B2MH2h_R.js";import"./useResizeObserver-2nRjoHwy.js";import"./Collection--Cr6p3A_.js";import"./index-Bo0FTuaT.js";import"./Separator-Bz7MglOI.js";import"./SelectionManager-BMgFHoZb.js";import"./useEvent-CLzxZrGf.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zyWPfFRK.js";import"./useDescription-BS7dus5h.js";import"./ListKeyboardDelegate-GTM4GyCw.js";import"./PressResponder-BuXRs-Y5.js";import"./useLocalizedStringFormatter-CNGHg5CX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-4zJnIxaj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BQSRSjgI.js";import"./Button-BlGZsutW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLWDM17i.js";import"./createLucideIcon-D6WxDmvc.js";import"./x-s42iZrY-.js";import"./Heading-C4aZzm39.js";import"./info-CMNp_Gnb.js";import"./Popover-C3A9HBq_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
