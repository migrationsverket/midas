import{j as e,l}from"./iframe-C4DKiwYN.js";import{S as t}from"./Skeleton-C34FOcM9.js";import{T as d}from"./TextField-c9Ey14vL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D0id6w54.js";import"./utils-DvVj6zXb.js";import"./TextField-CjQY31W9.js";import"./FieldError-BAHDkvqC.js";import"./Text-ChfCx7em.js";import"./useFocusRing-BQmbmOM8.js";import"./index-D1Zq3tBT.js";import"./index-DvRPFHJM.js";import"./Text-jvPpr9wI.js";import"./RSPContexts-Cha8J0tK.js";import"./Form-B3jMaxJX.js";import"./useFormValidation-zdvVuc6w.js";import"./Group-CqZfvnM5.js";import"./Input-CHvHXKv7.js";import"./Hidden-DarF7sEh.js";import"./Button-OpXtZSl7.js";import"./useLabels-D-Cj8mvW.js";import"./useButton-Bbt7Qg1l.js";import"./useTextField-kU6Gmrvl.js";import"./useControlledState-Brso7pLD.js";import"./useField-BsA1_DsF.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-UFvL7pWA.js";import"./Dialog-CIJaVQyg.js";import"./OverlayArrow-BvfWhz5J.js";import"./useResizeObserver-riwookom.js";import"./Collection-Dre_FaGo.js";import"./index-B-v93OJQ.js";import"./Separator-Bfxq8Bvm.js";import"./SelectionManager-B5ezXdJU.js";import"./useEvent-Bhfw0g_4.js";import"./scrollIntoView-TnIig3ea.js";import"./SelectionIndicator-B9betjwg.js";import"./useDescription-CR4Bo9uy.js";import"./ListKeyboardDelegate-5GAeO4Zs.js";import"./PressResponder-C9cb-6zf.js";import"./useLocalizedStringFormatter-DS8l-HPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DibiPfLO.js";import"./VisuallyHidden-BMy73pnR.js";import"./useLocalizedStringFormatter-BcVnMSxQ.js";import"./Button-DEY78OrD.js";import"./Button.module-CtQ1deO8.js";import"./x-DhtcgaRQ.js";import"./createLucideIcon-lniO6bka.js";import"./Heading-BMIX2CLE.js";import"./info-cnvZ88e2.js";import"./Popover-xVqALW3T.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
