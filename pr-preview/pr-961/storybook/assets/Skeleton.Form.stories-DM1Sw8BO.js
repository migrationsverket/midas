import{j as e,l}from"./iframe-CxtXgaif.js";import{S as t}from"./Skeleton-uu07hZr8.js";import{T as d}from"./TextField-C2XBEytM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bdc1qi4w.js";import"./utils-BHaXAsAf.js";import"./TextField-BCEG5Xun.js";import"./FieldError-DOlGeurh.js";import"./Text-hsuWdQJy.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./Text-BZPjmLfW.js";import"./RSPContexts-Bpq_c5A9.js";import"./Form-Bl8bNA0o.js";import"./useFormValidation-BiSVu55b.js";import"./Group-jcW0aViO.js";import"./Input-C8hkcakQ.js";import"./Hidden-BtogIfXa.js";import"./Button-QJx86_Xy.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./useTextField-SxjIWiZn.js";import"./useControlledState-va708PFm.js";import"./useField-fI3yCLSZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B3d6t7ov.js";import"./Dialog-CgqKWoFh.js";import"./OverlayArrow-BKY1QcVg.js";import"./useResizeObserver-mh8bib83.js";import"./Collection-CdnIVEB-.js";import"./index-BSkO2kw7.js";import"./Separator-8R5I02kA.js";import"./SelectionManager-BIHQBZZj.js";import"./useEvent-BLEaEyxT.js";import"./scrollIntoView-DVjFN4rN.js";import"./SelectionIndicator-GniDyRJ4.js";import"./useDescription-BJDx3EcI.js";import"./ListKeyboardDelegate-CRqh4x3V.js";import"./PressResponder-DtdN1iJv.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B9reZdFx.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./Button-CZkEUMhX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";import"./createLucideIcon-CsCGHR6v.js";import"./x-CBvx6r4u.js";import"./Heading-BKwB8iEY.js";import"./info-BPl_s5-n.js";import"./Popover-B2f3b-vi.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
