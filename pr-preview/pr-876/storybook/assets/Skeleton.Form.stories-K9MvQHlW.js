import{j as e,l}from"./iframe-XCmPjT_D.js";import{S as t}from"./Skeleton-DSVICLgn.js";import{T as p}from"./TextField-0Ou4rMTy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CFRY7vcA.js";import"./utils-UE4RAygH.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-BuJILbtP.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./Text-RTx-QT4L.js";import"./RSPContexts-BqTpYPqw.js";import"./Form-ClIjAo6w.js";import"./Group-C1BkV6KF.js";import"./Input-PfFttH7r.js";import"./Hidden-YeCUxupi.js";import"./Button-CNsl3901.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./useTextField-CzF4rdmg.js";import"./useControlledState-CJRuvBEJ.js";import"./useField-a2ZWKilV.js";import"./TextField.module-DdivwlC8.js";import"./Label-D93AZRaQ.js";import"./Dialog-B1tyGkHL.js";import"./OverlayArrow-BFvM54Jt.js";import"./useResizeObserver-vSLgG7Oa.js";import"./Collection-DDyfzr5r.js";import"./index-yftg3tvi.js";import"./Separator-lXYIHM10.js";import"./SelectionManager-bkciLoD-.js";import"./useEvent-CkgGcE1e.js";import"./scrollIntoView-Dci8aQFD.js";import"./SelectionIndicator-DJNyyuP1.js";import"./useDescription-DSdmSZs4.js";import"./ListKeyboardDelegate-C8lf82aC.js";import"./PressResponder-B5-Ptcqo.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYd3A0RE.js";import"./getScrollParent-BZMbo4m2.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./ModalOverlay-Ci7eJJOn.js";import"./x-DXC51em7.js";import"./createLucideIcon-dj1Mp7UM.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Heading-827tCZrs.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./info-CIkts6Hb.js";import"./Popover-CJ-Xf8wX.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
