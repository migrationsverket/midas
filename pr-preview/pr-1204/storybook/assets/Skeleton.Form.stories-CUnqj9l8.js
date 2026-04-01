import{j as e,l}from"./iframe-Bp0IlJF2.js";import{S as t}from"./Skeleton-D-UGSwME.js";import{T as p}from"./TextField-c1NQxTVk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Id4iEo6N.js";import"./utils-CjNbFGiN.js";import"./FieldError-wBwSD7iB.js";import"./Text-BZtrmicZ.js";import"./useFocusRing-DY1AMT3v.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./Text-DQDnVDGB.js";import"./RSPContexts-CYpW2htd.js";import"./Form-wrPeumQm.js";import"./Group-CFFXu7W6.js";import"./Input-B0mYY1Vp.js";import"./Hidden-D7-h4wXt.js";import"./Button-JPYQALf4.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./useTextField-uQIvQpAv.js";import"./useControlledState-ClzZCqkV.js";import"./useField-DvLvioZE.js";import"./TextField.module-DdivwlC8.js";import"./Label-D3-CQKdx.js";import"./Dialog-DZwT3NdJ.js";import"./OverlayArrow-7LmansMg.js";import"./useResizeObserver-CM8gp6cO.js";import"./Collection-B-doHFhu.js";import"./index-CUA_AUUL.js";import"./Separator-CE3_JLpD.js";import"./SelectionManager-C2XmfmHN.js";import"./useEvent-CSrgknyI.js";import"./scrollIntoView-BIHn6aZC.js";import"./SelectionIndicator-COAzCbhB.js";import"./useDescription-Dhw9gkBv.js";import"./ListKeyboardDelegate-DOXl-tDp.js";import"./PressResponder-miulPv98.js";import"./useLocalizedStringFormatter-BXFHs5VP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dkj0nb8S.js";import"./getScrollParent-BXxENsSc.js";import"./VisuallyHidden-BVXE9jAl.js";import"./x-C5nPMzLL.js";import"./createLucideIcon-DC4UrGzm.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./Heading-B6DJelp8.js";import"./Button-CuWSXiv5.js";import"./Button.module-BB7N-cLd.js";import"./info-D6wXztrE.js";import"./Popover-BaSI-_2S.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
