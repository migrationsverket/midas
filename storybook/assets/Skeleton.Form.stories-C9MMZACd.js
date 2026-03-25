import{j as e,l}from"./iframe-BGuMGxmc.js";import{S as t}from"./Skeleton-BLI9ylG3.js";import{T as d}from"./TextField-DTSXlYhG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B7O6NkNb.js";import"./utils-Ca8G7ZGu.js";import"./FieldError-CrkbqQXw.js";import"./Text-D1Wivcto.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./Text-X11QTVVP.js";import"./RSPContexts-CnYkPQTV.js";import"./Form-BbF92qNF.js";import"./Group-DZWeYlEJ.js";import"./Input-B__HRY_B.js";import"./Hidden-Blt3qGK-.js";import"./Button-C3vJklaf.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./useTextField-DaevbFQ7.js";import"./useControlledState-7HU2cwdp.js";import"./useField-DD2NBLXV.js";import"./TextField.module-DdivwlC8.js";import"./Label-DgyJX_Fc.js";import"./Dialog-BJQvF6PQ.js";import"./OverlayArrow-ld_Fcod1.js";import"./useResizeObserver-CeeUBLia.js";import"./Collection-DE67HbN5.js";import"./index-PiVRGSsF.js";import"./Separator-DRH7_b0z.js";import"./SelectionManager-GAh7yBJ1.js";import"./useEvent-B0xi010u.js";import"./scrollIntoView-DUfrCx46.js";import"./SelectionIndicator-DuhzZcnq.js";import"./useDescription-CkSrBGkd.js";import"./ListKeyboardDelegate-C6e2aQfG.js";import"./PressResponder-k2rJyGDQ.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjTqUlHX.js";import"./getScrollParent-B6QXkZoK.js";import"./VisuallyHidden-D0q9pbf-.js";import"./x-DjU_SE9r.js";import"./createLucideIcon-YpCIaABn.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./Heading-Cle64A_X.js";import"./Button-ClNKt42i.js";import"./Button.module-BB7N-cLd.js";import"./info-D2_z502h.js";import"./Popover-CIjuEgaB.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
