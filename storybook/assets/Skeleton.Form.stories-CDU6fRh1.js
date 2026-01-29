import{j as e,l}from"./iframe-D3uV68TR.js";import{S as t}from"./Skeleton-BHQvnKwk.js";import{T as p}from"./TextField-Bp-CwXUK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-4lMBZxB9.js";import"./utils-7nr-C6ys.js";import"./TextField-teelpkKs.js";import"./FieldError-DuEfq7zL.js";import"./Text-C9SR50_u.js";import"./useFocusRing-DfPZHRVl.js";import"./index-INuPvpIH.js";import"./index-DUb-e4iZ.js";import"./Text-DahtYGrH.js";import"./RSPContexts-Cp9yvvLl.js";import"./Form-B33azaQ8.js";import"./useFormValidation-CyzYdU7h.js";import"./Group-Y6f_xvup.js";import"./Input-DXpPU7xa.js";import"./Hidden-0XUUlgXf.js";import"./Button-BeBrTPVv.js";import"./useLabels-D4jFczgK.js";import"./useButton-B0sADiYr.js";import"./useTextField-C863LH_y.js";import"./useControlledState-uFjFm_rq.js";import"./useField-D48HVbT8.js";import"./TextField.module-1fNSVGjT.js";import"./Label-Buo218Sc.js";import"./Dialog-BRQ3Z91e.js";import"./OverlayArrow-DIkwCjhP.js";import"./useResizeObserver-UeGHsBBS.js";import"./Collection-DGF7qU3T.js";import"./index-DqtRELXK.js";import"./Separator-Br_OEoJ9.js";import"./SelectionManager-kc8cebYT.js";import"./useEvent-C0nrqgpJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COEdmALQ.js";import"./useDescription-DOabLsSP.js";import"./ListKeyboardDelegate-Skhb0kqg.js";import"./PressResponder-COEQs3jX.js";import"./useLocalizedStringFormatter-R3NfFNfF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-bSYUc5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B8aOQmln.js";import"./Button-DmYYanIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdjluxKF.js";import"./createLucideIcon-Pfr8ga1h.js";import"./x-Bx0ljM1v.js";import"./Heading-CKBS1yVh.js";import"./info-DoMB6U7o.js";import"./Popover-B9b7qbaZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
