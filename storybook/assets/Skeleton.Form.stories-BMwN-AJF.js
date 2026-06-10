import{j as e,l}from"./iframe-Dtb7hqk6.js";import{S as t}from"./Skeleton-CKbEFD1k.js";import{T as p}from"./TextField-D4EDsAAX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CCWTRSOY.js";import"./utils-DwGYJ0wo.js";import"./FieldError-CymQbIva.js";import"./Text-Dub-joLT.js";import"./useFocusRing-RCYgGSJe.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./Text-wLzVGxAi.js";import"./RSPContexts-BRMTqOVY.js";import"./Form-Cgua6hQf.js";import"./Group-C8i1Lk7e.js";import"./Input-CEKUG48_.js";import"./Hidden-DQwBNi6i.js";import"./Button-BTwY4tVw.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./useTextField-BZdcatsz.js";import"./useControlledState-B0XIHWrT.js";import"./useField-BGrWgRXS.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bed8VhVZ.js";import"./Dialog-C-AlgTuC.js";import"./OverlayArrow-BjZbWS1M.js";import"./useResizeObserver-Ck20i0Zq.js";import"./Collection-BD38zrZ2.js";import"./index--ZHyBOuJ.js";import"./Separator-BuMeoZ_r.js";import"./SelectionManager-LaKed2sG.js";import"./useEvent-CrQdtEE9.js";import"./scrollIntoView-1v2Kx20c.js";import"./SelectionIndicator-CI77rCMa.js";import"./useDescription-BRXkpFwc.js";import"./ListKeyboardDelegate-C7bJgaTj.js";import"./PressResponder-B2KeLg43.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCOTFe1W.js";import"./getScrollParent-DsHrkiO1.js";import"./VisuallyHidden-BB5g-TMV.js";import"./ModalOverlay-GQ2O729M.js";import"./x-BPYm2e-6.js";import"./createLucideIcon-CMh4hIEg.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Heading-pmehtflV.js";import"./Button-CgYfRdd2.js";import"./Button.module-BB7N-cLd.js";import"./info-QxePBk5N.js";import"./Popover-CnnSplSw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
