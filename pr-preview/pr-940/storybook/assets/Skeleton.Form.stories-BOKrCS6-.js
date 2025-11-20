import{j as e,l}from"./iframe-BBV6b5lG.js";import{S as t}from"./Skeleton-CfFV7Vx-.js";import{T as d}from"./TextField-6qAY3QVm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--a5sydyX.js";import"./utils-Cl8pVGWb.js";import"./TextField-BtOXys8w.js";import"./FieldError-Dn4KLTgh.js";import"./Text-CxqhfGOZ.js";import"./useFocusRing-BKoWjM3h.js";import"./index-BzpXdeZq.js";import"./index-D_KHeT1o.js";import"./Text-BpMSL69-.js";import"./RSPContexts-hzdcErwp.js";import"./Form-CdyuF1WR.js";import"./useFormValidation-DK1VssBA.js";import"./Group-BPGuVPcW.js";import"./Input-CaLwBHBa.js";import"./Hidden-Ds8YvxI_.js";import"./Button-DLszx2Y7.js";import"./useLabels-pCbqYqJF.js";import"./useButton-tezIzvTx.js";import"./useTextField-BPKBCyFY.js";import"./useControlledState-DB16enQ5.js";import"./useField-CJHeRl7h.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-h4NsAjk6.js";import"./Dialog-BFEWe8TO.js";import"./OverlayArrow-BomDHho0.js";import"./useResizeObserver-CAjCmXVf.js";import"./Collection-qoeOD1CS.js";import"./index-CYJ9XJJR.js";import"./Separator-Dh0tBHbj.js";import"./SelectionManager-Durd4biJ.js";import"./useEvent-BthYEK7x.js";import"./scrollIntoView-DPNGSIfh.js";import"./SelectionIndicator-Dny4s1sY.js";import"./useDescription-CgE8AlaE.js";import"./ListKeyboardDelegate-DnVSv-_P.js";import"./PressResponder-BNJfbrMZ.js";import"./useLocalizedStringFormatter-DxPLpvAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSPXvemZ.js";import"./VisuallyHidden-DebLyYO_.js";import"./Button-D_woJjNv.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-8FdOFj4F.js";import"./createLucideIcon-CQjagoR0.js";import"./x-Cq4GRLQZ.js";import"./Heading-yZSSjkRN.js";import"./info-VT6Pjcpf.js";import"./Popover-BMbwZ4Q9.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
