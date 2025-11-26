import{j as e,l}from"./iframe-07RTUryM.js";import{S as t}from"./Skeleton-m8Zo1r-g.js";import{T as d}from"./TextField-02pm3Hkw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CNeJWpcK.js";import"./utils-DDlZCoEX.js";import"./TextField-CPvZe0f2.js";import"./FieldError-BmLNCWmj.js";import"./Text-CFGS2jnp.js";import"./useFocusRing-COYx92Jj.js";import"./index-BcjdZjMV.js";import"./index-D6uG8lGX.js";import"./Text-5bsUq1RJ.js";import"./RSPContexts-Cz-G6zUG.js";import"./Form-Bg3oU93k.js";import"./useFormValidation-BzmuUnZ8.js";import"./Group-DmfhIqlB.js";import"./Input-DgGlF8Ub.js";import"./Hidden-DkxnzuZ8.js";import"./Button-Dv0y-JoZ.js";import"./useLabels-DD2GJFDM.js";import"./useButton-B55nQo6r.js";import"./useTextField-D_2nfVke.js";import"./useControlledState-Cs7nFh0s.js";import"./useField-xDB56E6O.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C0vUzMAR.js";import"./Dialog-C92XYQFG.js";import"./OverlayArrow-BnlShkCD.js";import"./useResizeObserver-2mY5lHnH.js";import"./Collection-Bqjq0FKg.js";import"./index-LXNm5jM6.js";import"./Separator-EoupohYG.js";import"./SelectionManager-BUEZ8fPb.js";import"./useEvent-Bu-Z66ye.js";import"./scrollIntoView-J_HIj5YT.js";import"./SelectionIndicator-CQgF41ZE.js";import"./useDescription-B5YWaF2b.js";import"./ListKeyboardDelegate-COL_K4eM.js";import"./PressResponder-BZbfZcU6.js";import"./useLocalizedStringFormatter-C5QLgnKh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BVpU91Lz.js";import"./VisuallyHidden-Cm74pgqq.js";import"./Button-Bog976hN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B39D6IqO.js";import"./createLucideIcon-BoFHMCBo.js";import"./x-DYmOm4A6.js";import"./Heading-DkJBZZSw.js";import"./info-CbfQfqH5.js";import"./Popover-9ucJesFL.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
