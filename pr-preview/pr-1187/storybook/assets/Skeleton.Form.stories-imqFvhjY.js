import{j as e,l}from"./iframe-B04rcWcX.js";import{S as t}from"./Skeleton-Dwa9Wq0l.js";import{T as p}from"./TextField-lT3w2zt9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D_yy3fRQ.js";import"./utils-5SWrrdiI.js";import"./FieldError-sVMV4FJK.js";import"./Text-b-jINt27.js";import"./useFocusRing-DOTrmHAk.js";import"./index-DR4XYI1U.js";import"./index-Co-GRlRp.js";import"./Text-CLa1xROh.js";import"./RSPContexts-vJw7lJG0.js";import"./Form-CZN0lRlC.js";import"./Group-VGjwpAmn.js";import"./Input-DT608YfG.js";import"./Hidden-CsiOlUYT.js";import"./Button-BsMpdhm5.js";import"./useLabel-CuMqu2Vz.js";import"./useLabels-gSO7jKxM.js";import"./useButton-CqaBofGl.js";import"./useTextField-Yln5g1nZ.js";import"./useControlledState-C9VnzheA.js";import"./useField-M3tSI_SU.js";import"./TextField.module-DdivwlC8.js";import"./Label-CJq39tjp.js";import"./Dialog-DHTxuggn.js";import"./OverlayArrow-DJ22-BOT.js";import"./useResizeObserver-BSb8Szfs.js";import"./Collection-CrsfpYCF.js";import"./index-CVsQAfIo.js";import"./Separator-C_SJbcIr.js";import"./SelectionManager-DdJ7u2hC.js";import"./useEvent-0NoNGJv_.js";import"./scrollIntoView-BAmPtIRu.js";import"./SelectionIndicator-WM-tAzaM.js";import"./useDescription-CIjr0h8X.js";import"./ListKeyboardDelegate-R7NtbQO_.js";import"./PressResponder-yvF--Wmz.js";import"./useLocalizedStringFormatter-D6BZiHkU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmiF16cr.js";import"./getScrollParent-JaIoxddM.js";import"./VisuallyHidden-wR3lvsEV.js";import"./x-BCKhYY4g.js";import"./createLucideIcon-VXkpW6uL.js";import"./useLocalizedStringFormatter-C68HHjER.js";import"./Heading-Eb1FE2dJ.js";import"./Button-9yaBleaj.js";import"./Button.module-BB7N-cLd.js";import"./info-BFzXO6ej.js";import"./Popover-C0Q7WM39.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
