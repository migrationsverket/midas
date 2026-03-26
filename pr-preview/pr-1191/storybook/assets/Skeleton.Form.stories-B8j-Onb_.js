import{j as e,l}from"./iframe-pPxe0wf0.js";import{S as t}from"./Skeleton-D7sjCdP4.js";import{T as p}from"./TextField-Bd5rAWTO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DnrCJgQK.js";import"./utils-B9dfa99f.js";import"./FieldError-CL01H_85.js";import"./Text-CfRTLfl7.js";import"./useFocusRing-Brybz-Mb.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./Text-DnWwzkAf.js";import"./RSPContexts-B0SlvVRf.js";import"./Form-C0IhYbR-.js";import"./Group-CnOF1J4U.js";import"./Input-BSGVEsK2.js";import"./Hidden-BcuSkgl5.js";import"./Button-C0xfSFPn.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./useTextField-CIELF70r.js";import"./useControlledState-DALrvKda.js";import"./useField-D4Zx8Ibn.js";import"./TextField.module-DdivwlC8.js";import"./Label-DU9snSYc.js";import"./Dialog-35Xbgg__.js";import"./OverlayArrow-obiWU4t_.js";import"./useResizeObserver-BDUEt38X.js";import"./Collection-cPoObmDE.js";import"./index-DrsTtITg.js";import"./Separator-gRLDdmXz.js";import"./SelectionManager-DlxymtZc.js";import"./useEvent-CKwa_4Ly.js";import"./scrollIntoView-Cgwn1ATY.js";import"./SelectionIndicator-BAq8fmHB.js";import"./useDescription-Ci3Nojex.js";import"./ListKeyboardDelegate-CU8jHYVL.js";import"./PressResponder-pdEfm1mj.js";import"./useLocalizedStringFormatter-BNao4Mdf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh-JrWpK.js";import"./getScrollParent-Cau9qeJE.js";import"./VisuallyHidden-ByZgoMRK.js";import"./x-Ck7RLK17.js";import"./createLucideIcon-DWvekaMf.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./Heading-BoHH1Xau.js";import"./Button-KC2D_O3S.js";import"./Button.module-BB7N-cLd.js";import"./info-CNv7SUCq.js";import"./Popover-DjvwO6bw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
