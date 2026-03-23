import{j as e,l}from"./iframe-8UJkVthP.js";import{S as t}from"./Skeleton-TGls0cOK.js";import{T as d}from"./TextField-Cq3s2urE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dl-2CGfg.js";import"./utils-BDWBmxXy.js";import"./FieldError-BeuaPtx6.js";import"./Text-CV-khTPA.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./Text-FE_S5mZr.js";import"./RSPContexts-qbHEhELM.js";import"./Form-Dl9b4CYf.js";import"./Group-B9EFJzsK.js";import"./Input-JY_Jkgvs.js";import"./Hidden-D2CAjC8z.js";import"./Button-5Crp6oLI.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./useTextField-paqyKGLD.js";import"./useControlledState-CQGiwWre.js";import"./useField-adX3beuP.js";import"./TextField.module-DdivwlC8.js";import"./Label-CGAcaIkm.js";import"./Dialog-CrNctySC.js";import"./OverlayArrow-D1WaM4Ij.js";import"./useResizeObserver-DR8kIdUi.js";import"./Collection-BjLu6E75.js";import"./index-CiiwR1vG.js";import"./Separator-C-rwZau5.js";import"./SelectionManager-DN6QIcY4.js";import"./useEvent-CbYAf6vF.js";import"./scrollIntoView-BW2PYDKv.js";import"./SelectionIndicator-BMVKAfis.js";import"./useDescription-BTR78MKM.js";import"./ListKeyboardDelegate-D2hlOZCJ.js";import"./PressResponder-DCf-TYC-.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-td24gFyo.js";import"./getScrollParent-6Dr3zswo.js";import"./VisuallyHidden-vq1pC-28.js";import"./x-Bx_hLSbE.js";import"./createLucideIcon-KCEZs7i4.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";import"./Heading-BTDJmRUD.js";import"./Button-ByNh2qq9.js";import"./Button.module-BB7N-cLd.js";import"./info-Cue81AHl.js";import"./Popover-DF28tWtL.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
