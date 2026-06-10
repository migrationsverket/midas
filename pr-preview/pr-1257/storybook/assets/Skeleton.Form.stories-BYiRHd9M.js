import{j as e,l}from"./iframe-BEEFzEsx.js";import{S as t}from"./Skeleton-BKDKgN7_.js";import{T as p}from"./TextField-Bomjtu2Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-N3X7KU8v.js";import"./utils-BVGeTo1z.js";import"./FieldError-HGo-eDX1.js";import"./Text-C3TPO5Ck.js";import"./useFocusRing-DayYpa6h.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./Text-UbV7blhr.js";import"./RSPContexts-BmjfNHwO.js";import"./Form-BGu38tuQ.js";import"./Group-4XxyF67-.js";import"./Input-DVbGj_jy.js";import"./Hidden-C5MrPpGY.js";import"./Button-DEUQgxtQ.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./useTextField-CSz5zs0C.js";import"./useControlledState-DWXRJogA.js";import"./useField-BfF4G1fX.js";import"./TextField.module-DdivwlC8.js";import"./Label-UegRM3NN.js";import"./Dialog-D5TRopuw.js";import"./OverlayArrow-ROnHuORT.js";import"./useResizeObserver-DNYc8s-v.js";import"./Collection-Dr9ShMWk.js";import"./index-DtekuTHO.js";import"./Separator-C07IJJjh.js";import"./SelectionManager-Bxd3V494.js";import"./useEvent-DC72q5eP.js";import"./scrollIntoView-z3uFmj1G.js";import"./SelectionIndicator-CBUlw6yG.js";import"./useDescription-Cvt0OA1S.js";import"./ListKeyboardDelegate-DP9rBTKu.js";import"./PressResponder-DQFnH3Jx.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CcmLfJBi.js";import"./getScrollParent-DF6Cs9JC.js";import"./VisuallyHidden-CkEbrnwS.js";import"./ModalOverlay-CUzYcfU4.js";import"./x-BRbO8G8P.js";import"./createLucideIcon-DyvpJvxd.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Heading-Bqj6Dsy8.js";import"./Button-BTzHjp2C.js";import"./Button.module-BB7N-cLd.js";import"./info-lgeWUgSs.js";import"./Popover-VJ-uAztt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
