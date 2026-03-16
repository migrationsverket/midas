import{j as e,l}from"./iframe-Bs8KTy6C.js";import{S as t}from"./Skeleton-mttORiBS.js";import{T as p}from"./TextField-jToee8MG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--GIrCs0J.js";import"./utils-7Wht2g-Y.js";import"./FieldError-C99gwkco.js";import"./Text-Is5sK9kM.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./Text-BoHNsdRj.js";import"./RSPContexts-Cn0wIx3g.js";import"./Form-KKn6Lh2V.js";import"./useFormValidation-knURiIi0.js";import"./Group--RXBMCou.js";import"./Input-Cj5pKMLH.js";import"./Hidden-BrvGFfZa.js";import"./Button-CxAHhwgQ.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./useTextField-DrruEHXD.js";import"./useControlledState-6XUuECgK.js";import"./useField-Ccklh0cv.js";import"./TextField.module-DdivwlC8.js";import"./Label-CJ6V0bgk.js";import"./Dialog-SKg3OPGS.js";import"./OverlayArrow-DHI9hthx.js";import"./useResizeObserver-Dn32OBqP.js";import"./Collection--YMenRmj.js";import"./index-D9oWzMTR.js";import"./Separator-f7sMysnx.js";import"./SelectionManager-BpOfB2LQ.js";import"./useEvent-5ZwgKb7q.js";import"./scrollIntoView-BBlkQq5K.js";import"./SelectionIndicator-Cxkz7MSn.js";import"./useDescription-B2R3OifQ.js";import"./ListKeyboardDelegate-BVzuzsm6.js";import"./PressResponder-dS2wrVHY.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1oST7N2-.js";import"./getScrollParent-CPUsdWMS.js";import"./VisuallyHidden-BBTIfzW0.js";import"./x-DmyzL7jy.js";import"./createLucideIcon-TcTXJfKq.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./Heading-BZGNUUY1.js";import"./Button-hEmbppXg.js";import"./Button.module-D_C6WeTN.js";import"./info-CEBu5sf2.js";import"./Popover-DIMUMzwb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
