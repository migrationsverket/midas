import{j as e,l}from"./iframe-CO-gAPhX.js";import{S as t}from"./Skeleton-Ds0zcdBe.js";import{T as p}from"./TextField-Dosw8PlE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_Sg3kb_z.js";import"./utils-k2fUJOcg.js";import"./FieldError-BaYlcMBl.js";import"./Text-dYy03QVX.js";import"./useFocusRing-BUNiQTJz.js";import"./index-DMx7-GyY.js";import"./index-CwA1oRHE.js";import"./Text-B90d5phV.js";import"./RSPContexts-Bk8niJAv.js";import"./Form-BjE-JURH.js";import"./Group-CnsmZZ9G.js";import"./Input-B5Jua51h.js";import"./Hidden-BYpeRQWv.js";import"./Button-DXT5LjXI.js";import"./useLabel-CFHzh0vI.js";import"./useLabels-BDaY_wZ1.js";import"./useButton-M9CtI4R_.js";import"./useTextField-CzbKYk1w.js";import"./useControlledState-DiHS_28D.js";import"./useField-CIOLxdqj.js";import"./TextField.module-DdivwlC8.js";import"./Label-DrW4DKd2.js";import"./Dialog-BVfKyiYi.js";import"./OverlayArrow-CPUOI5VP.js";import"./useResizeObserver-ObMYHrXs.js";import"./Collection-D-oT_f_B.js";import"./index-Cieal__4.js";import"./Separator-GPFaG8PV.js";import"./SelectionManager-9bBdihZR.js";import"./useEvent-VKhVlozG.js";import"./scrollIntoView-D1OpogIN.js";import"./SelectionIndicator-DJatY3dn.js";import"./useDescription-tJJWr6K2.js";import"./ListKeyboardDelegate-CcIl3WSR.js";import"./PressResponder-0FTUwtlT.js";import"./useLocalizedStringFormatter-Ckla6k3E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sxXpLn2j.js";import"./getScrollParent-Byv4kQvn.js";import"./VisuallyHidden-CKCCpPT0.js";import"./ModalOverlay-BOuDr6jv.js";import"./x-q4leZoPv.js";import"./createLucideIcon-BnizQjgj.js";import"./useLocalizedStringFormatter-CP5Hjs4T.js";import"./Heading-Dh7jH3yH.js";import"./Button-CYSOGzux.js";import"./Button.module-BB7N-cLd.js";import"./info-CH1KK30F.js";import"./Popover-8bTYaVmE.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
