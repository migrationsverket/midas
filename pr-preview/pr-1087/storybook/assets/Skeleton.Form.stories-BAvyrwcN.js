import{j as e,l}from"./iframe-DZcdf5IT.js";import{S as t}from"./Skeleton-1WEFQVr0.js";import{T as p}from"./TextField-DJcLRkPI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-duhoB7YS.js";import"./utils-CiNm3Qeg.js";import"./FieldError-DM82MGqL.js";import"./Text-Cr9EbC1Z.js";import"./useFocusRing-D7vWP6Oc.js";import"./index-D2C9G4F0.js";import"./index-CZ7e-jOg.js";import"./Text-C3ytoZ0p.js";import"./RSPContexts-t528C0-R.js";import"./Form-C6UMk9z-.js";import"./useFormValidation-nGNEbK2Q.js";import"./Group-Bl1cpGiQ.js";import"./Input-CC7EUsKd.js";import"./Hidden-iA_GYfuG.js";import"./Button-CLvrgtgS.js";import"./useLabels-CS1CNfia.js";import"./useButton-CzqG6NzO.js";import"./useTextField-BntTv2Qi.js";import"./useControlledState-vKZEA0Q3.js";import"./useField-DhXwoamE.js";import"./TextField.module-DdivwlC8.js";import"./Label-D-pQZBxw.js";import"./Dialog-D0qcpCsw.js";import"./OverlayArrow-C54chPPt.js";import"./useResizeObserver-S9maVfBL.js";import"./Collection-DOBVywAo.js";import"./index-OfYdkwnf.js";import"./Separator-BXFv3uYw.js";import"./SelectionManager-DP5WacrU.js";import"./useEvent-DLq_Qgr9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BUKB6LFr.js";import"./useDescription-Cin-5YQg.js";import"./ListKeyboardDelegate-5OkbUwLz.js";import"./PressResponder-C8u0XAz_.js";import"./useLocalizedStringFormatter-BvvnikhE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DH5imeVC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXj8zTTi.js";import"./Button-BczSxBEC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BcqTdo_g.js";import"./createLucideIcon-DZnqfe9t.js";import"./x-kt49nsQj.js";import"./Heading-CF5i_zDs.js";import"./info-DHouu10t.js";import"./Popover-C-_vgrwU.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
