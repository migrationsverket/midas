import{j as e,l}from"./iframe-BqxXwJvW.js";import{S as t}from"./Skeleton-CSqJlFKU.js";import{T as p}from"./TextField-CVzQIp_P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CepB7X7q.js";import"./utils-B-LUwfNM.js";import"./TextField-Ae-iUmAy.js";import"./FieldError-BJ23uTJc.js";import"./Text-POKFtH9S.js";import"./useFocusRing-DRB9GHUu.js";import"./index-DaPmNw3z.js";import"./index-DnASvcrD.js";import"./Text-CN0Rba2k.js";import"./RSPContexts-B2PTEsUQ.js";import"./Form-8dObOJRH.js";import"./useFormValidation-B5-yItUz.js";import"./Group-DwOB3Gfp.js";import"./Input-DLsOwb3b.js";import"./Hidden-Bzkr_wjp.js";import"./Button-C0pllIm8.js";import"./useLabels-DQzS7WhL.js";import"./useButton-Cj_RDJUs.js";import"./useTextField-BV3Nt8ev.js";import"./useControlledState-DGI1N2va.js";import"./useField-DwRopjyw.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-U4M1Zv0j.js";import"./Dialog-bORBCgW2.js";import"./OverlayArrow-CCvd9rNx.js";import"./useResizeObserver-CEFin7z6.js";import"./Collection-WRVPAV2J.js";import"./index-DSlMsjV2.js";import"./Separator-C0uBNAbQ.js";import"./SelectionManager-B8Rp-4Hs.js";import"./useEvent-BnnUnxNN.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-815jzngV.js";import"./useDescription-BoAi9bEV.js";import"./ListKeyboardDelegate-m7or5xuQ.js";import"./PressResponder-BMuPjytM.js";import"./useLocalizedStringFormatter-CfrYnOvZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_avnMiF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQls1uVt.js";import"./Button-CY_lcceX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4Z7JSsl.js";import"./createLucideIcon-DAQszgUd.js";import"./x-BelE39Lb.js";import"./Heading-DX1KZl86.js";import"./info-BGDq0Gmh.js";import"./Popover-Cq1Xp21Q.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
