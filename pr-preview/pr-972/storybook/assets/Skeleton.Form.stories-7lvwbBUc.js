import{j as e,l}from"./iframe-BTV99Gms.js";import{S as t}from"./Skeleton-Dg1rqd3B.js";import{T as p}from"./TextField-DRM39PkC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D6gq1ArN.js";import"./utils-BacIRvZM.js";import"./TextField-BAwAzVJ3.js";import"./FieldError-C71HvWKC.js";import"./Text-CxND1lZJ.js";import"./useFocusRing-Dhw79Z84.js";import"./index-CFuROd4a.js";import"./index-C6EfjArq.js";import"./Text-CrWtCM-W.js";import"./RSPContexts-XEziQn35.js";import"./Form-KOn24wkR.js";import"./useFormValidation-CvyP8liB.js";import"./Group-C5SpczIw.js";import"./Input-BdNxQql2.js";import"./Hidden-DXOsHJk6.js";import"./Button-024Yw0Lw.js";import"./useLabels-CKLLx1Rq.js";import"./useButton-BB6MUNWj.js";import"./useTextField-DzCuOa-s.js";import"./useControlledState-tl9lkRKT.js";import"./useField-D6tha74p.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dbcie4Q0.js";import"./Dialog-CySIORSr.js";import"./OverlayArrow-05iu1tYZ.js";import"./useResizeObserver-DHLol4yZ.js";import"./Collection-DsRRCVPM.js";import"./index-DXtvVARP.js";import"./Separator-BHnnJmzo.js";import"./SelectionManager-rWibqhMR.js";import"./useEvent-xXPEAsn3.js";import"./scrollIntoView-BLih6di_.js";import"./SelectionIndicator-DA-YaFOm.js";import"./useDescription-CMXTR9Po.js";import"./ListKeyboardDelegate-CwaS4WW9.js";import"./PressResponder-QKqy0Rbg.js";import"./useLocalizedStringFormatter-BL0xzeyk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQV0LzaM.js";import"./VisuallyHidden-B8ZdR9Qv.js";import"./Button-BLFTRxuR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B3b85il2.js";import"./createLucideIcon-CTaohzwX.js";import"./x-nny4ZO7m.js";import"./Heading-fpYlOz7n.js";import"./info-j2ebPvtW.js";import"./Popover-Dxbyje2X.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
