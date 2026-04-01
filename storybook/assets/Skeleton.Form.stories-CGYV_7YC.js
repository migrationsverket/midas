import{j as e,l}from"./iframe-BBdvX6q7.js";import{S as t}from"./Skeleton-BVaXMOoI.js";import{T as p}from"./TextField-Cs7qJ-Qk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-nDc800N-.js";import"./utils-BhM9cLZz.js";import"./FieldError-W4WIQ6PE.js";import"./Text-DFmdAipG.js";import"./useFocusRing-CiIiFeie.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./Text-DZB5jszh.js";import"./RSPContexts-Dhr-dkrR.js";import"./Form-BdaOdDWJ.js";import"./Group-C6QOXau-.js";import"./Input-BLzkoyeG.js";import"./Hidden-BOrCZM9C.js";import"./Button-Dzf67HgD.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./useTextField-DnMCpGV2.js";import"./useControlledState-DuJYRQSo.js";import"./useField-cJot5tll.js";import"./TextField.module-DdivwlC8.js";import"./Label-CKm7X-rQ.js";import"./Dialog-BK86ItUw.js";import"./OverlayArrow-BLmQcFmh.js";import"./useResizeObserver-B1PgOilW.js";import"./Collection-CnZYrlip.js";import"./index-BoRceWYL.js";import"./Separator-bIr9biPg.js";import"./SelectionManager-CUppn1fa.js";import"./useEvent-ByURV-nf.js";import"./scrollIntoView-VD24PgV1.js";import"./SelectionIndicator-BHjSx8yF.js";import"./useDescription-CRjQLCoE.js";import"./ListKeyboardDelegate-D7hgOMLG.js";import"./PressResponder-CzjJsA8A.js";import"./useLocalizedStringFormatter-Be9Ugeet.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0vu237c.js";import"./getScrollParent-Cpdl4rHQ.js";import"./VisuallyHidden-BUp-onp8.js";import"./x-KAA9DnbB.js";import"./createLucideIcon-Bf-KaMYu.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./Heading-CR2vJkXf.js";import"./Button-DCS9i38V.js";import"./Button.module-BB7N-cLd.js";import"./info-C4IiL-WK.js";import"./Popover-C1CZ9jh7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
