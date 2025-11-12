import{j as e,l}from"./iframe-B_wOJzak.js";import{S as t}from"./Skeleton-CPtewcd8.js";import{T as d}from"./TextField-DP6fTckF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaVCTVE2.js";import"./utils-CqdFBANG.js";import"./FieldError-BQuMjgpB.js";import"./Text-Bdvl2sVE.js";import"./useFocusRing-DoMqkbPM.js";import"./index-CY391PiH.js";import"./index-CXI-rU25.js";import"./Text-BdfzGXfI.js";import"./RSPContexts-BZAsk-Iz.js";import"./Form-CkkDfgTN.js";import"./useFormValidation-D6Cow3X7.js";import"./Group-B2eYvv8Z.js";import"./Input-DJd_oELw.js";import"./Hidden-DVTPrRLd.js";import"./Button--YbSiPHP.js";import"./useLabels-DczO-y-_.js";import"./useButton-BIdPbjci.js";import"./useTextField-DY-SR3re.js";import"./useControlledState-CsUwFHf6.js";import"./useField-D9FdjpPa.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CO6rcrcd.js";import"./Dialog-3JU20ovF.js";import"./OverlayArrow-BcJbbY_U.js";import"./useResizeObserver-DpCMZhvf.js";import"./Collection-CuQ8oPEC.js";import"./index-eYZA4XVd.js";import"./Separator-Bwe8r19Z.js";import"./SelectionManager-cP-W_LbB.js";import"./useEvent-D4_dQ-oV.js";import"./scrollIntoView-Bd8U5JDo.js";import"./SelectionIndicator-C1Il5AV0.js";import"./useDescription-DogmSaKs.js";import"./ListKeyboardDelegate-QPe1nmxo.js";import"./PressResponder-CNRjDx-C.js";import"./useLocalizedStringFormatter-C7fIyH4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-X93ZPV66.js";import"./VisuallyHidden-DvToQpL6.js";import"./useLocalizedStringFormatter-DpdUZ6AV.js";import"./Button-T6l_wraQ.js";import"./Button.module-CtQ1deO8.js";import"./x-DhCjNDOQ.js";import"./createLucideIcon-CrRdlSwf.js";import"./Heading-DFOhIGaT.js";import"./info-1rgM776K.js";import"./Popover-B0vlmQyA.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
