import{j as e,l}from"./iframe-pduEcsSH.js";import{S as t}from"./Skeleton-ClgJzxdL.js";import{T as p}from"./TextField-CbsgIwDz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D1pxvMkQ.js";import"./utils-BDr4Ozea.js";import"./FieldError-NJ_dGOmM.js";import"./Text-rxoULlv-.js";import"./useFocusRing-DIwubJgO.js";import"./index-CLoMZda8.js";import"./index-BcjOI7az.js";import"./Text-CSwEFBIi.js";import"./RSPContexts-sVFmam6L.js";import"./Form-CsCBj_Pu.js";import"./useFormValidation-DEYOuSXO.js";import"./Group-BH3H-2T6.js";import"./Input-DNt3FWb6.js";import"./Hidden-CcVqblB0.js";import"./Button-C9Zkv-mX.js";import"./useLabels-vBTL4yFU.js";import"./useButton-CrWzEdIJ.js";import"./useTextField-B5nqPH39.js";import"./useControlledState-BOnL6wJ7.js";import"./useField-C535uo8a.js";import"./TextField.module-DdivwlC8.js";import"./Label-DjLBvEdr.js";import"./Dialog-CadUvqs2.js";import"./OverlayArrow-DhmkHveD.js";import"./useResizeObserver-CPrsykkS.js";import"./Collection-kYIQkrfn.js";import"./index-BhxNLflr.js";import"./Separator-0deFmAkJ.js";import"./SelectionManager-mJ_b45K5.js";import"./useEvent-DIbok-p1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSmbPReq.js";import"./useDescription-DMdZFyiC.js";import"./ListKeyboardDelegate-Bhxs3C87.js";import"./PressResponder-GpeM64gV.js";import"./useLocalizedStringFormatter-DvjpYU0E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAAIuDXT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-g_-Wgf1Q.js";import"./Button-ZdIQo3Zg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CWZjMemu.js";import"./createLucideIcon-CqNy4haF.js";import"./x-BXHSIKq2.js";import"./Heading-BBhzrPee.js";import"./info-D0OJy1pr.js";import"./Popover-CoYaOIFS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
