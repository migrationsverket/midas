import{j as e,l}from"./iframe-BWPy1RBq.js";import{S as t}from"./Skeleton-DsIZtgtI.js";import{T as p}from"./TextField-DceYCPwm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D4huBM5I.js";import"./utils-K3-6RYqB.js";import"./FieldError-Cz5zi-ZF.js";import"./Text-Cia4oSWl.js";import"./useFocusRing-RbbtUgdg.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./Text-NU9ujCYW.js";import"./RSPContexts-nAVSp4dG.js";import"./Form-DbQxgntm.js";import"./Group-FvQbGEnE.js";import"./Input-HeYl3kzw.js";import"./Hidden-Tw89Zkrb.js";import"./Button-CpSzsQmu.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./useTextField-Dls8T7AD.js";import"./useControlledState-D92tKPK_.js";import"./useField-CUHsbM6E.js";import"./TextField.module-DdivwlC8.js";import"./Label-D7QmrN_D.js";import"./Dialog-CIUqtcL0.js";import"./OverlayArrow-BO4KWVXd.js";import"./useResizeObserver-g8GOm3Mq.js";import"./Collection-BNyZ9c9Q.js";import"./index-h_8LGHd6.js";import"./Separator-7AMSuRjK.js";import"./SelectionManager-DwZVDrXj.js";import"./useEvent-BFfcpkt9.js";import"./scrollIntoView-BPThSa08.js";import"./SelectionIndicator-CSEVtPet.js";import"./useDescription-DKa3yvbb.js";import"./ListKeyboardDelegate-DEEdN1cX.js";import"./PressResponder-BlIcO9FE.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qiytIb7X.js";import"./getScrollParent-Bz2Jpk0G.js";import"./VisuallyHidden-Bglg35TW.js";import"./x-28n2c5kv.js";import"./createLucideIcon-B4kCR5jG.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Heading-CimGNnkR.js";import"./Button-DrPZXGaG.js";import"./Button.module-BB7N-cLd.js";import"./info-NbLkrYYQ.js";import"./Popover-C1PtYzxv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
