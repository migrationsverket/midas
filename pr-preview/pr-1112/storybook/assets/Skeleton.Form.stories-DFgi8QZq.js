import{j as e,l}from"./iframe-CPuYvm8s.js";import{S as t}from"./Skeleton-B8PCYIvi.js";import{T as d}from"./TextField-CqYNUxwG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CL077tff.js";import"./utils-CE1Vntqw.js";import"./FieldError-G-kOnKNy.js";import"./Text-fDukTeyt.js";import"./useFocusRing-QQHGmBCu.js";import"./index-DBbEfBNG.js";import"./index-D0qZXW9E.js";import"./Text-DVquWBhJ.js";import"./RSPContexts-B80FC-gZ.js";import"./Form-73T4bL8w.js";import"./Group-DmK9oZhm.js";import"./Input-6ZVMyxQx.js";import"./Hidden-BWUoGLqJ.js";import"./Button-CPLgo8WB.js";import"./useLabels-DXd6EmCJ.js";import"./useButton-CRB1vlh0.js";import"./useTextField-wpiYh644.js";import"./useControlledState-BltVdFKI.js";import"./useField-BBgvhRQz.js";import"./TextField.module-DdivwlC8.js";import"./Label-DNnKgy8d.js";import"./Dialog-DsT2J9Wt.js";import"./OverlayArrow-DiI0m-Ge.js";import"./useResizeObserver-Cz5Xt0AE.js";import"./Collection-BDFUB0zS.js";import"./index-BfJi_mRf.js";import"./Separator-Dc-oFM6B.js";import"./SelectionManager-BsJSLxME.js";import"./useEvent-Dhfs_hD8.js";import"./scrollIntoView-BxCcwxL9.js";import"./SelectionIndicator-CWCP1nsE.js";import"./useDescription-CiB6T9-T.js";import"./ListKeyboardDelegate-BHBk4Gfh.js";import"./PressResponder-ChG3RNYp.js";import"./useLocalizedStringFormatter-B0oCO7RT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ZSgkUXDz.js";import"./getScrollParent-BCbGbaUX.js";import"./VisuallyHidden-Di6zhsCH.js";import"./x-Mxy9Nn72.js";import"./createLucideIcon-DGj_OZpv.js";import"./useLocalizedStringFormatter-CLkxGaNH.js";import"./Heading-BO5x4INr.js";import"./Button-B6VpCJV_.js";import"./Button.module-BB7N-cLd.js";import"./info-D9cD3jmN.js";import"./Popover-uhYcdg0c.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
