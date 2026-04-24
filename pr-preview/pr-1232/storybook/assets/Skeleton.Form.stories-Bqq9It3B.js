import{j as e,l}from"./iframe-u611P0T1.js";import{S as t}from"./Skeleton-DbvAlVq_.js";import{T as p}from"./TextField-frYrKVsx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Y8BJ2T_R.js";import"./utils-BdhmhbmB.js";import"./FieldError-BUsLHsVx.js";import"./Text-C1ITd__M.js";import"./useFocusRing-x1014Y4C.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./Text-BiFS0ps1.js";import"./RSPContexts-CHqXj6wS.js";import"./Form-Ct-T4_sP.js";import"./Group-CJpHDVfm.js";import"./Input-DNUxzppg.js";import"./Hidden-BwAa9Aqn.js";import"./Button-DHuMXkEV.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./useTextField-DuE_Lsr4.js";import"./useControlledState-C8WxcwQm.js";import"./useField-DM_n0gFB.js";import"./TextField.module-DdivwlC8.js";import"./Label-C-LHc2be.js";import"./Dialog-DWlne9J1.js";import"./OverlayArrow-DAE7O7dg.js";import"./useResizeObserver-CbeqsHNK.js";import"./Collection-6utQT-aI.js";import"./index-CY3bk5JT.js";import"./Separator-BuPoNgXF.js";import"./SelectionManager-B545sqsy.js";import"./useEvent-NAjU2EOD.js";import"./scrollIntoView-XJLuBOkU.js";import"./SelectionIndicator-yCd4h3zR.js";import"./useDescription-Dz-E1gaV.js";import"./ListKeyboardDelegate-BSlu98Kz.js";import"./PressResponder-CUS5_lY9.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tAspbt5B.js";import"./getScrollParent-Dr2tWDHe.js";import"./VisuallyHidden-CPF-h8vx.js";import"./ModalOverlay-C1viWdRz.js";import"./x-BKnl8vZI.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Heading-CqJG1U4J.js";import"./Button-D0hAEojt.js";import"./Button.module-BB7N-cLd.js";import"./info-CNWJ9NT2.js";import"./Popover-C1J1shoo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
