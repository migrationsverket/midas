import{j as e,l}from"./iframe-D-REpNT2.js";import{S as t}from"./Skeleton-BvB1NjRv.js";import{T as p}from"./TextField-VuYzg-k_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CqmQtgj7.js";import"./utils-BDMdsvrX.js";import"./TextField-Bv-CtPda.js";import"./FieldError-CA_O69rJ.js";import"./Text-C9Slm4PY.js";import"./useFocusRing-BWmdFu0w.js";import"./index-CBX90dgQ.js";import"./index-Bb_XCQXS.js";import"./Text-MiHH5yI1.js";import"./RSPContexts-CXb92NO5.js";import"./Form-BfFx0FHq.js";import"./useFormValidation-vWol_pr5.js";import"./Group-BmM75P_6.js";import"./Input-8tjaEJPd.js";import"./Hidden-DBxbBPM8.js";import"./Button-CSGruNvs.js";import"./useLabels-CL0mObZW.js";import"./useButton-BVLm7XF-.js";import"./useTextField-Cj6RKvRJ.js";import"./useControlledState-CRTz0NCq.js";import"./useField-pGjh_xZt.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BLUj1SK8.js";import"./Dialog-CrHh5riv.js";import"./OverlayArrow-DfQnH08H.js";import"./useResizeObserver-B9yDolf1.js";import"./Collection-Bu1IPCuJ.js";import"./index-C3LxNUCX.js";import"./Separator-BVe-YMpx.js";import"./SelectionManager-zKJSBzzj.js";import"./useEvent-D-eD8_or.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYwlpBgk.js";import"./useDescription-5inR-ZqS.js";import"./ListKeyboardDelegate-CibTaz9W.js";import"./PressResponder-oUkAjckc.js";import"./useLocalizedStringFormatter-D5aBFhGc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sckNPW58.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CjlKzDWm.js";import"./Button-MhaT5nTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cz89ib5x.js";import"./createLucideIcon-BcZu8RhE.js";import"./x-gtZDJ8br.js";import"./Heading-C72zqHqg.js";import"./info-DRFXZmmo.js";import"./Popover-DsVfs9l5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
