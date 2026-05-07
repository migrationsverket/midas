import{j as e,l}from"./iframe-OzXVe_TX.js";import{S as t}from"./Skeleton-CcO3sdAY.js";import{T as p}from"./TextField-BgM_Vrt1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DqLULINZ.js";import"./utils-tCr9uINw.js";import"./FieldError-homDiWH4.js";import"./Text-DQmoUTPX.js";import"./useFocusRing-DizgMThA.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./Text-C8tynj-R.js";import"./RSPContexts-DzC-BhmG.js";import"./Form-9T3ORTNA.js";import"./Group-iCUipsL9.js";import"./Input-_dhISMKx.js";import"./Hidden-B1yqLm5L.js";import"./Button-CQhvXyK9.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./useTextField-CqobKicN.js";import"./useControlledState-CLatC1WA.js";import"./useField-DcJnjYwN.js";import"./TextField.module-DdivwlC8.js";import"./Label-DKR0q6rL.js";import"./Dialog-DJg2LapA.js";import"./OverlayArrow-BdoGvgat.js";import"./useResizeObserver-D5tRWBq5.js";import"./Collection-Clk-CiQ7.js";import"./index-DarIc387.js";import"./Separator-B-x_JRMK.js";import"./SelectionManager-SS5akqNZ.js";import"./useEvent-Ch2KziZH.js";import"./scrollIntoView-B2EduiaM.js";import"./SelectionIndicator-B6nqEXJJ.js";import"./useDescription-w2FiPpGY.js";import"./ListKeyboardDelegate-77l68lVC.js";import"./PressResponder-DDFKCcfj.js";import"./useLocalizedStringFormatter-CQl_xHp6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByUkEsGI.js";import"./getScrollParent-MM6xXv8T.js";import"./VisuallyHidden-Bi7DvSRw.js";import"./ModalOverlay-BZJv-dlU.js";import"./x-BQ6XFr0a.js";import"./createLucideIcon-COmw-XaN.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./Heading-CnXfeumr.js";import"./Button-BPALFDJW.js";import"./Button.module-BB7N-cLd.js";import"./info-DXapmhn-.js";import"./Popover-QbhEXv06.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
