import{j as e,l}from"./iframe-CrvsXgmc.js";import{S as t}from"./Skeleton-2FYBcTYx.js";import{T as p}from"./TextField-B0Kgqf1m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-yfsF5dfM.js";import"./utils-gzCDVK3q.js";import"./FieldError-5hEdY4LM.js";import"./Text-CF9Q2mcX.js";import"./useFocusRing-Y3IR8t1i.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./Text-CA7uWGGn.js";import"./RSPContexts-DH1zBAtU.js";import"./Form-bos5N932.js";import"./Group-BbSxKl7e.js";import"./Input-DXCRAbnb.js";import"./Hidden-DAMs1NRQ.js";import"./Button-BJCsZZXs.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./useTextField-CLgkkZtp.js";import"./useControlledState-CFUIREeB.js";import"./useField-ctyqcCoa.js";import"./TextField.module-DdivwlC8.js";import"./Label-DC1BslHI.js";import"./Dialog-BAorNuLL.js";import"./OverlayArrow-j-4w6ptt.js";import"./useResizeObserver-DS_Mr__l.js";import"./Collection-DgAx05eF.js";import"./index-CXAqSaFB.js";import"./Separator-Cfr8Q9pc.js";import"./SelectionManager-uwLQE_60.js";import"./useEvent-DI2Xn_Gs.js";import"./scrollIntoView-C_cKPCXn.js";import"./SelectionIndicator-o2cRMrjj.js";import"./useDescription-Cw3L3Xvg.js";import"./ListKeyboardDelegate-BxUpHfVv.js";import"./PressResponder-DQ6SDLVP.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7nDb7Uq.js";import"./getScrollParent-DN_amqRA.js";import"./VisuallyHidden-GavGRjxA.js";import"./ModalOverlay-CUkgOGL-.js";import"./x-_k-E3REV.js";import"./createLucideIcon-C4drZqEd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Heading-BYcCu-yi.js";import"./Button-C1guSp-1.js";import"./Button.module-BB7N-cLd.js";import"./info-_82HXk6z.js";import"./Popover-BlcHhC3m.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
