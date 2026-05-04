import{j as e,l}from"./iframe-CcoWXO6B.js";import{S as t}from"./Skeleton-l50cvQUz.js";import{T as p}from"./TextField-DjpCpqCg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--JzlWS8S.js";import"./utils-CvmzGVmn.js";import"./FieldError-C7pmBmh_.js";import"./Text-C1aI8N19.js";import"./useFocusRing-G8rwOJ76.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./Text-_y8SHX-J.js";import"./RSPContexts-2FrTYNtF.js";import"./Form-JzoeJJ8G.js";import"./Group-Co4Z1JTg.js";import"./Input-PZkAC2eI.js";import"./Hidden-CvcA5WHf.js";import"./Button-CqtDw1Oq.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./useTextField-By0xorr9.js";import"./useControlledState-6QHQ6cmR.js";import"./useField-DGwwU4v2.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dz5b3s2x.js";import"./Dialog-YcwYl4gJ.js";import"./OverlayArrow-0UDGu89H.js";import"./useResizeObserver-B8a0kWth.js";import"./Collection-Csy7u5cV.js";import"./index-BYbSV4b0.js";import"./Separator-BGyYcMKt.js";import"./SelectionManager-BsDWfXhd.js";import"./useEvent-HAa0P1KD.js";import"./scrollIntoView-DAiNmZGo.js";import"./SelectionIndicator-Cv50w2_h.js";import"./useDescription-YzAHNiST.js";import"./ListKeyboardDelegate-BRi_rYns.js";import"./PressResponder-Cog0uUsK.js";import"./useLocalizedStringFormatter-BR6J7xDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gGfbTkXn.js";import"./getScrollParent-CrWEQW42.js";import"./VisuallyHidden-D34CPKZD.js";import"./ModalOverlay-NcdcMjL3.js";import"./x-CN2QjC-O.js";import"./createLucideIcon-CUodyQE8.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./Heading-CQkLHTFo.js";import"./Button-tDMUeh37.js";import"./Button.module-BB7N-cLd.js";import"./info-rb3vhgVU.js";import"./Popover-CIVNeZMg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
