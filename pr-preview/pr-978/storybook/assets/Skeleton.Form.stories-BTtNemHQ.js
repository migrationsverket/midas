import{j as e,l}from"./iframe-D-ypYuwn.js";import{S as t}from"./Skeleton-Dq0k_9w4.js";import{T as p}from"./TextField-Do7J5Aea.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ClowRUWZ.js";import"./utils-DQGhytbb.js";import"./TextField--naRKpFH.js";import"./FieldError-C0J98PPl.js";import"./Text-BuEv763R.js";import"./useFocusRing-ClaQwJdN.js";import"./index-DHSfPRsN.js";import"./index-DBHvdizX.js";import"./Text-DJIv6PG1.js";import"./RSPContexts-CmOqvCB5.js";import"./Form-C8Tr2sr6.js";import"./useFormValidation-D6-jghXl.js";import"./Group-BP2wtaAS.js";import"./Input-DNBo8YV5.js";import"./Hidden-Dz6be0Sh.js";import"./Button-89RGHRHn.js";import"./useLabels-kssSLeVE.js";import"./useButton-DhjrBguy.js";import"./useTextField-bD-VrVS6.js";import"./useControlledState-C653rY7f.js";import"./useField-lmNM_fT4.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BepKlGCv.js";import"./Dialog-di-kXyUH.js";import"./OverlayArrow-DCCM0y5p.js";import"./useResizeObserver-B3IJoa9y.js";import"./Collection-BbnMthkp.js";import"./index-BvfrIAUP.js";import"./Separator-1xL4orhw.js";import"./SelectionManager-D3zkJviI.js";import"./useEvent-D3gR2SWY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy8yIasa.js";import"./useDescription-BE4gCwvi.js";import"./ListKeyboardDelegate-rsQDn0w1.js";import"./PressResponder-Dq_MVEpe.js";import"./useLocalizedStringFormatter-qVUCbyvG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3dGmggM_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4W03Dkt.js";import"./Button-U4O3N2IF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-rNpKh-Hw.js";import"./createLucideIcon-C4YzC_QF.js";import"./x-8_fCH_nT.js";import"./Heading-BkJ_tAnG.js";import"./info-BKKuJF_q.js";import"./Popover-Q9huNjjx.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
