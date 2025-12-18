import{j as e,l}from"./iframe-COQoy-tb.js";import{S as t}from"./Skeleton-DdtZJMte.js";import{T as p}from"./TextField-B3ysj6DB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CfakONcC.js";import"./utils-dUj1FPII.js";import"./TextField-CopoqudJ.js";import"./FieldError-lHGiCpDB.js";import"./Text-B03ZqDJP.js";import"./useFocusRing-KEMdm9OC.js";import"./index-D-LNSu5d.js";import"./index-Cy0cFfBq.js";import"./Text-C_IsDOQl.js";import"./RSPContexts-DCzfJS37.js";import"./Form-CmrvpxjU.js";import"./useFormValidation-Dac5P0TX.js";import"./Group-HhbW5Hrt.js";import"./Input-9NKvsT-l.js";import"./Hidden-CNwHy1Fg.js";import"./Button-6ISKDJI6.js";import"./useLabels-Dul859Iz.js";import"./useButton-C5PyE_o4.js";import"./useTextField-ikblrldl.js";import"./useControlledState-BLJZbN0w.js";import"./useField-CuZTH_zG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BAeCiMAa.js";import"./Dialog-BoMfLrpd.js";import"./OverlayArrow-D-16Msc0.js";import"./useResizeObserver-CINr2uq2.js";import"./Collection-DeELs6uo.js";import"./index-Ds4njVEF.js";import"./Separator-DsnV07Uk.js";import"./SelectionManager--QHTMY6o.js";import"./useEvent-CZ9ssVuG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-U84AkFGF.js";import"./useDescription-QKLqNAEk.js";import"./ListKeyboardDelegate-zd14mAth.js";import"./PressResponder-aykRGwze.js";import"./useLocalizedStringFormatter-CW4fmwCZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmp8MD13.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cxp4MCQV.js";import"./Button-COWVz2rh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-ESf0SP.js";import"./createLucideIcon-uFOmHGhK.js";import"./x-BN0kx0eU.js";import"./Heading-DKzcd0sJ.js";import"./info-DYjCWrRJ.js";import"./Popover-C0tA_zXq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
