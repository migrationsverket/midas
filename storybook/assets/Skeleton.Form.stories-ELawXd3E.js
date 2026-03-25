import{j as e,l}from"./iframe-CS97_aKA.js";import{S as t}from"./Skeleton-CoHuNaqP.js";import{T as d}from"./TextField-B_R2GWPD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6UYy8dHX.js";import"./utils-Csn9hih_.js";import"./FieldError-Bgv3wgUX.js";import"./Text-DllmWVRt.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./Text-BsEp3Lpg.js";import"./RSPContexts-CFWUJItL.js";import"./Form-DngweuD1.js";import"./Group-DvRkNrGw.js";import"./Input-D-LLVgDa.js";import"./Hidden-CZHel-hh.js";import"./Button-BEBLvHt_.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./useTextField-CX6Bbuo4.js";import"./useControlledState-DJ6meZbb.js";import"./useField-nSphnUF2.js";import"./TextField.module-DdivwlC8.js";import"./Label-BDm2au-6.js";import"./Dialog-De7-YKVD.js";import"./OverlayArrow-UYFu1rrw.js";import"./useResizeObserver-1dwTHbMM.js";import"./Collection-BApChUOw.js";import"./index-Cu6_2N_X.js";import"./Separator-B7QslHwr.js";import"./SelectionManager-BjwXPLp2.js";import"./useEvent-D0H0aX9U.js";import"./scrollIntoView-BRhOFysU.js";import"./SelectionIndicator-CwDxAhdf.js";import"./useDescription-ChcQRQvy.js";import"./ListKeyboardDelegate-Dk3x5F9m.js";import"./PressResponder-W0HbzxSx.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvqAEV7Q.js";import"./getScrollParent-BvsZnnQg.js";import"./VisuallyHidden-XYRUvUKq.js";import"./x-BZc_-WXG.js";import"./createLucideIcon-CpkX-fVF.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./Heading-9Vi9Qzh3.js";import"./Button-BxQXJJlf.js";import"./Button.module-BB7N-cLd.js";import"./info-CeBQhmNt.js";import"./Popover-CTKC9Jvy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
