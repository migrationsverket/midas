import{j as e,l}from"./iframe-CXDxfhKB.js";import{S as t}from"./Skeleton-D_DyqxMK.js";import{T as p}from"./TextField-BCYTIHUd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-51sFtZe5.js";import"./utils-BlE_s_bB.js";import"./FieldError-CRkZofSG.js";import"./Text-w7WBT89W.js";import"./useFocusRing-V1VB5dDl.js";import"./index-C3fyWD75.js";import"./index-0GWGer8Z.js";import"./Text-NatKauD4.js";import"./RSPContexts-Nbqg0I0B.js";import"./Form-Dq6C18ap.js";import"./Group--G8Z4Ct_.js";import"./Input-DmvSStnV.js";import"./Hidden-DFs8xn-0.js";import"./Button-rApmyro7.js";import"./useLabel-BQWuOrga.js";import"./useLabels-CzD1PIZv.js";import"./useButton-CHfNFaSS.js";import"./useTextField-BuP-1XG_.js";import"./useControlledState-C3yTnT2d.js";import"./useField-ljYOypBN.js";import"./TextField.module-DdivwlC8.js";import"./Label-C4_le61q.js";import"./Dialog-myaI4Vl6.js";import"./OverlayArrow-CP7L6kx6.js";import"./useResizeObserver-DxjY8Qtl.js";import"./Collection-C03GyHMY.js";import"./index-B283YcJ4.js";import"./Separator-DWCUmXh_.js";import"./SelectionManager-Dej9q5IQ.js";import"./useEvent-BMdy9ETw.js";import"./scrollIntoView-CrmCmhFj.js";import"./SelectionIndicator-BeTSBWNA.js";import"./useDescription-DvZUghvu.js";import"./ListKeyboardDelegate-U_DFw0WQ.js";import"./PressResponder-DIGAZNi_.js";import"./useLocalizedStringFormatter-DFZeYHJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYO-5mxD.js";import"./getScrollParent-DpF68pAX.js";import"./VisuallyHidden-D1jOK9_R.js";import"./x-8JNHbqX6.js";import"./createLucideIcon-DfHQJbWK.js";import"./useLocalizedStringFormatter-BSYNBMcv.js";import"./Heading-BGATdE4Y.js";import"./Button-BZAdL-F6.js";import"./Button.module-BB7N-cLd.js";import"./info-zT8FnlVl.js";import"./Popover-CWGWHrZU.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
