import{j as e,l}from"./iframe-BRlibj-k.js";import{S as t}from"./Skeleton-B64jr4zy.js";import{T as p}from"./TextField-BbLn56Mv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Co6iZRl6.js";import"./utils-Bx0A40Hz.js";import"./FieldError-CFA3HJLW.js";import"./Text-Ck72NiTG.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./Text-fpqzAeYU.js";import"./RSPContexts-CV3yeRAb.js";import"./Form-CSA3u7JB.js";import"./Group-FTG5sa6I.js";import"./Input-D_W1be-q.js";import"./Hidden-BrLnFV9D.js";import"./Button-B0keB5Wy.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./useTextField-CxB4Xjd_.js";import"./useControlledState-CerSLXPK.js";import"./useField-BVUz0JML.js";import"./TextField.module-DdivwlC8.js";import"./Label-CNSCezuu.js";import"./Dialog-i8Of-r3D.js";import"./OverlayArrow-ALUXgoOq.js";import"./useResizeObserver-BsDMDtB2.js";import"./Collection-m61hGjFH.js";import"./index-Djsdy0km.js";import"./Separator-BxZTZnnw.js";import"./SelectionManager-BL0dIx3d.js";import"./useEvent-CVRknVnX.js";import"./scrollIntoView-DIdzgJq7.js";import"./SelectionIndicator-6jBuleUJ.js";import"./useDescription-By1zY_hH.js";import"./ListKeyboardDelegate-Dpjn_onP.js";import"./PressResponder-Cd--8JpT.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DHkAtzL7.js";import"./getScrollParent-BNETjxTj.js";import"./VisuallyHidden-DAewgK18.js";import"./x-KlHF_jbs.js";import"./createLucideIcon-p72J_6hu.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./Heading-aBBagRC2.js";import"./Button-BCeszJe0.js";import"./Button.module-BB7N-cLd.js";import"./info-DSvN1o-C.js";import"./Popover-BKrQFK9O.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
