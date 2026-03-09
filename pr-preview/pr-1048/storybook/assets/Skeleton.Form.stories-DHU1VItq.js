import{j as e,l}from"./iframe-CWutqfKR.js";import{S as t}from"./Skeleton-u5yhBIPB.js";import{T as p}from"./TextField-CX0caWv1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-COuZDzUE.js";import"./utils-qZdmNmO1.js";import"./FieldError-ClytNfPk.js";import"./Text-CJlC6srz.js";import"./useFocusRing-BuUfrlQY.js";import"./index-B_sF5hyi.js";import"./index-CvMFxXqB.js";import"./Text-BwTFzJBU.js";import"./RSPContexts-BHcnN_pC.js";import"./Form-DTiAf4kb.js";import"./useFormValidation-Db_RhjoB.js";import"./Group-D23KeAYf.js";import"./Input-8HQTyppq.js";import"./Hidden-MRIgxKO_.js";import"./Button-BnWrQLFg.js";import"./useLabels-CV5H4iTO.js";import"./useButton-_SFucHjZ.js";import"./useTextField-CUWSY0RD.js";import"./useControlledState-BVGmSD4F.js";import"./useField-BwhXtUtI.js";import"./TextField.module-DdivwlC8.js";import"./Label-11xtnvnT.js";import"./Dialog-trGi10Xe.js";import"./OverlayArrow-yUix7CLZ.js";import"./useResizeObserver-DgcakaNv.js";import"./Collection-BPl_BKTc.js";import"./index-DAg4bfWV.js";import"./Separator-DPcn-Y4d.js";import"./SelectionManager-BkT6stK1.js";import"./useEvent-2mXEMkLk.js";import"./scrollIntoView-CxEfx6Cs.js";import"./SelectionIndicator-E3cIqDFo.js";import"./useDescription-B-mxcc0_.js";import"./ListKeyboardDelegate-_yjJx8ut.js";import"./PressResponder-B01988vb.js";import"./useLocalizedStringFormatter-TUhhiYru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeoBHGOs.js";import"./getScrollParent-DpRlBU94.js";import"./VisuallyHidden-D9EFy6-j.js";import"./Button-CRDZmgjm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-7pnUr10b.js";import"./createLucideIcon-CEH_8uo-.js";import"./x-DIkHBrE3.js";import"./Heading-CNCisP1S.js";import"./info-CMr84NBJ.js";import"./Popover-Cd9NSi0K.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
