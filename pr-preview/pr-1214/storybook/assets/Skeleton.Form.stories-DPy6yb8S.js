import{j as e,l}from"./iframe-O2McX3yB.js";import{S as t}from"./Skeleton-B7Tl_4y4.js";import{T as p}from"./TextField-DhbLGz3H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BGtBJDpo.js";import"./utils-DO-wSHzc.js";import"./FieldError-CWyB2qd4.js";import"./Text-7Ipy1BR9.js";import"./useFocusRing-C_4jX8C9.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./Text-YZ7QSVuR.js";import"./RSPContexts-D9PIXrmH.js";import"./Form-CM6Fo3tM.js";import"./Group-DIMSG4ag.js";import"./Input-KNFPZfcO.js";import"./Hidden-kbzwSHo-.js";import"./Button-2hnImx6E.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./useTextField-D567ds9S.js";import"./useControlledState-CDscPa5k.js";import"./useField-CdhU-8jB.js";import"./TextField.module-DdivwlC8.js";import"./Label-C90t5Qit.js";import"./Dialog-DssWk71x.js";import"./OverlayArrow-C3RzwJA8.js";import"./useResizeObserver-DmVTWwXU.js";import"./Collection-D_qCe12e.js";import"./index-CIqtmhd8.js";import"./Separator-D-dfcXvV.js";import"./SelectionManager-B61PS9GO.js";import"./useEvent-D1NiEUxW.js";import"./scrollIntoView-CYxkmzpX.js";import"./SelectionIndicator-AuNVYjmH.js";import"./useDescription-DyLngsul.js";import"./ListKeyboardDelegate-DKIOtHk3.js";import"./PressResponder-C85iqAbq.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-t_x6ksxO.js";import"./getScrollParent-DMJ8Owx1.js";import"./VisuallyHidden-CVECtPk8.js";import"./Dialog-C1EIBnuD.js";import"./x-Bexz8DwZ.js";import"./createLucideIcon-C4xn0wXs.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./Heading-D_UODxYf.js";import"./Button-D2h_fsiV.js";import"./Button.module-BB7N-cLd.js";import"./info-BHSu_h8w.js";import"./Popover-Ks-RtaT5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
