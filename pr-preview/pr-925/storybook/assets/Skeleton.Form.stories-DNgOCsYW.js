import{j as e,l}from"./iframe-nGNo9-8O.js";import{S as t}from"./Skeleton-C9qrRsKA.js";import{T as d}from"./TextField-BIpplY_R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DHCYZs00.js";import"./utils-UNFcTH9P.js";import"./TextField-oz5oXjB2.js";import"./FieldError-CT-Q184-.js";import"./Text-Z8AhytFT.js";import"./useFocusRing-C4tRJGEy.js";import"./index-Bofu8C1l.js";import"./index-C-K6rHqI.js";import"./Text-f2btrM1d.js";import"./RSPContexts-ows3dTJg.js";import"./Form-e9f5l1tz.js";import"./useFormValidation-C19cb3Zb.js";import"./Group-AGYwXqE7.js";import"./Input-CP3ekvfv.js";import"./Hidden-CvblkW9k.js";import"./Button-eRwgxovv.js";import"./useLabels-DhwZeyz8.js";import"./useButton-BNd8Ph1P.js";import"./useTextField-DT8IGrqM.js";import"./useControlledState-EHg2JhJE.js";import"./useField-DH9kUM2Z.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D1ThnQxp.js";import"./Dialog-DVjFppWp.js";import"./OverlayArrow-Jrfzd_ZO.js";import"./useResizeObserver-CHfgY-mk.js";import"./Collection-CBCPH2Em.js";import"./index-BTodbUVR.js";import"./Separator-lXn3a9pU.js";import"./SelectionManager-CZytaVal.js";import"./useEvent-xRdD90JH.js";import"./scrollIntoView-DCwh4uUE.js";import"./SelectionIndicator-DubU61JR.js";import"./useDescription-BAV84UvR.js";import"./ListKeyboardDelegate-cBnYG6a0.js";import"./PressResponder-C-n2AJzf.js";import"./useLocalizedStringFormatter-BA4G5uku.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-QuAjI_UN.js";import"./VisuallyHidden-GtNNRbXA.js";import"./Button-LUv1NTVn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BT8srvPn.js";import"./createLucideIcon-BBha-BqP.js";import"./x-BybCoCfR.js";import"./Heading-D7BtKegf.js";import"./info-DwMlbeR-.js";import"./Popover-CRtCaN9R.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
