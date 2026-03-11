import{j as e,l}from"./iframe-apXpK-Ym.js";import{S as t}from"./Skeleton-BiJ9uWyl.js";import{T as p}from"./TextField-BaHewEnC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bv0kADgI.js";import"./utils-D_IsDdxh.js";import"./FieldError-D5-eAkFz.js";import"./Text-C8sRdSzE.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./Text-i6zD5ogA.js";import"./RSPContexts-faUp0Odp.js";import"./Form-CrNVZ_qL.js";import"./useFormValidation-CKfmowTq.js";import"./Group-mXAeyzXe.js";import"./Input-DCKvh9b4.js";import"./Hidden-Bx4MJY4P.js";import"./Button-B7ztBAPt.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./useTextField-DvTY5e1I.js";import"./useControlledState-Be_pRaEQ.js";import"./useField-iX3RzpJx.js";import"./TextField.module-DdivwlC8.js";import"./Label-B61B8CW5.js";import"./Dialog-ddjz0mGh.js";import"./OverlayArrow-Dzflbc9a.js";import"./useResizeObserver-aKQBpFeO.js";import"./Collection-D3gx8QV5.js";import"./index-Dgx-sPIC.js";import"./Separator-DyNwjiUX.js";import"./SelectionManager-ClJLzM8L.js";import"./useEvent-Cb7uf1PC.js";import"./scrollIntoView-CTB_aNM2.js";import"./SelectionIndicator-DWN5x0c4.js";import"./useDescription-WAW3EvIG.js";import"./ListKeyboardDelegate-aRoWOpht.js";import"./PressResponder-D5cEEySH.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bel213k_.js";import"./getScrollParent-KYVriqsz.js";import"./VisuallyHidden-DkYm7gZi.js";import"./Button-B3oZe3e3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./createLucideIcon-BVTX869z.js";import"./x-CdTIprco.js";import"./Heading-TOojHhu6.js";import"./info-DkiDzn4t.js";import"./Popover-C-f5b7BH.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
