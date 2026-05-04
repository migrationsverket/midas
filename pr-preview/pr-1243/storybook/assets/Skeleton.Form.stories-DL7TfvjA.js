import{j as e,l}from"./iframe-BLFVAebz.js";import{S as t}from"./Skeleton-pwU64O2O.js";import{T as p}from"./TextField-B3lU204n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BgexEukM.js";import"./utils-COORazi9.js";import"./FieldError-CotC56cl.js";import"./Text-CMpPyQHQ.js";import"./useFocusRing-BtgCc4uS.js";import"./index-DxSzAXil.js";import"./index-MFhL1fTj.js";import"./Text-BI792DVZ.js";import"./RSPContexts-dhIaIC8d.js";import"./Form-C0uqP4DY.js";import"./Group-CzvfKl4j.js";import"./Input-B_ew_Foh.js";import"./Hidden-DwfkqXbu.js";import"./Button-CDRPkfYl.js";import"./useLabel-C9MLZ0ZV.js";import"./useLabels-DsM9HmY4.js";import"./useButton-Dkva8HAQ.js";import"./useTextField-ccfcKYd7.js";import"./useControlledState-DKdXVV8i.js";import"./useField-B551ugOM.js";import"./TextField.module-DdivwlC8.js";import"./Label-1-HCjcm8.js";import"./Dialog-Bl4fLT1e.js";import"./OverlayArrow-DurWaezh.js";import"./useResizeObserver-BmehkLjg.js";import"./Collection-BYB_FHMU.js";import"./index-BX_LU5SM.js";import"./Separator-hikbHwg6.js";import"./SelectionManager-DOBraOrU.js";import"./useEvent-BSHnIrcj.js";import"./scrollIntoView-D0PGn0f2.js";import"./SelectionIndicator-DJw2BmtQ.js";import"./useDescription-ChbjjRBw.js";import"./ListKeyboardDelegate-BhTruHSe.js";import"./PressResponder-BY0zFBW6.js";import"./useLocalizedStringFormatter-D6yZmrtf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C16O_xko.js";import"./getScrollParent-VrUltlJn.js";import"./VisuallyHidden-BFj9mjRF.js";import"./ModalOverlay-8Wbn4Vub.js";import"./x-czyhHEQN.js";import"./createLucideIcon-ioBnSaPP.js";import"./useLocalizedStringFormatter-DZSD3y5K.js";import"./Heading-CDtobJ4y.js";import"./Button-DNuEBjZY.js";import"./Button.module-BB7N-cLd.js";import"./info-Bp6IousO.js";import"./Popover-BL5F3GnO.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
