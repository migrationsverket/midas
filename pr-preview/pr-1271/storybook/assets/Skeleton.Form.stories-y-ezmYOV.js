import{j as e,l}from"./iframe-DULmNwRk.js";import{S as t}from"./Skeleton-DEqUiT0y.js";import{T as p}from"./TextField-BTX3Q5GP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-47dpOizZ.js";import"./utils-Ddt4lU09.js";import"./FieldError-xC4u7UR2.js";import"./Text-BCTwMZj4.js";import"./useFocusRing-BEpALdF5.js";import"./index-CkqvgeHq.js";import"./index-w5klJIx9.js";import"./Text-B3Zo93UV.js";import"./RSPContexts-WnZvTRJ2.js";import"./Form-csm8I6Hh.js";import"./Group-B_hq_Kbr.js";import"./Input-DcM9CWhd.js";import"./Hidden-CsQy7rZM.js";import"./Button-CqBmXAr6.js";import"./useLabel-CSl0614R.js";import"./useLabels-yc-GS4fI.js";import"./useButton-DpIUfVnU.js";import"./useTextField-2ZO3_3sa.js";import"./useControlledState-C9dDHRab.js";import"./useField-DH9B_Stt.js";import"./TextField.module-DdivwlC8.js";import"./Label-CExv_FeK.js";import"./Dialog-DVNDuI8r.js";import"./OverlayArrow-D9twC0Fm.js";import"./useResizeObserver-DevlliIh.js";import"./Collection-CFBqaUdA.js";import"./index-D9auj7kX.js";import"./Separator-D3kbLU6K.js";import"./SelectionManager-DY2iZIMm.js";import"./useEvent-CCkwPNMO.js";import"./scrollIntoView-nE0vKhc8.js";import"./SelectionIndicator-CdoqhPjb.js";import"./useDescription-CshJGrS7.js";import"./ListKeyboardDelegate-BR6ObpXU.js";import"./PressResponder-BLJ6NzCN.js";import"./useLocalizedStringFormatter-0ckZvhdt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DutLeN8h.js";import"./getScrollParent-03Uv99To.js";import"./VisuallyHidden-DGjr60RX.js";import"./ModalOverlay-IJVm24Z4.js";import"./x-B4k2jhKu.js";import"./createLucideIcon-vWWdbK2W.js";import"./useLocalizedStringFormatter-DkqmVuml.js";import"./Heading-DgnI2YOe.js";import"./Button-DD5PWbcS.js";import"./Button.module-BB7N-cLd.js";import"./info-C-Un5Fz0.js";import"./Popover-CCgRwQim.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
