import{j as e,l}from"./iframe-DJxIXxf2.js";import{S as t}from"./Skeleton-B9Li-b8L.js";import{T as p}from"./TextField-DmohrDm3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BwF94Jng.js";import"./utils-B_KlqI5i.js";import"./FieldError-DYGSUEKV.js";import"./Text--wP8bLIY.js";import"./useFocusRing-COgDf2QV.js";import"./index-B08RvMtD.js";import"./index-QDuJYXlY.js";import"./Text-fN96k5_K.js";import"./RSPContexts-aF70D7kh.js";import"./Form-DQvhgMmm.js";import"./useFormValidation-IBNADZfB.js";import"./Group-BmWaMflL.js";import"./Input-r_OTHy9I.js";import"./Hidden-DoMNzo3F.js";import"./Button-CIL_abe4.js";import"./useLabels-B8ZHiySF.js";import"./useButton-CDOgKioF.js";import"./useTextField-CqOvbwYV.js";import"./useControlledState-C1p1aY8E.js";import"./useField-BXl4tVWh.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-DFpaY83Q.js";import"./Dialog-BPh53Xc3.js";import"./OverlayArrow-C5bDCdxJ.js";import"./useResizeObserver-hUeUZzVF.js";import"./Collection-CNHbJK5e.js";import"./index-81brxfSB.js";import"./Separator-BTxwBYLq.js";import"./SelectionManager-BIKAQhZe.js";import"./useEvent-BKeRbScP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-EFKob9mQ.js";import"./useDescription-8DpELlxG.js";import"./ListKeyboardDelegate-8IRcIyPc.js";import"./PressResponder-_QMUbjdk.js";import"./useLocalizedStringFormatter-BJvVBtx8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bg2vaEFc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-fBTKN9Mv.js";import"./Button-YUjToJ3r.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CBcMRp9p.js";import"./createLucideIcon-82x2wRy4.js";import"./x-Bp5hmktp.js";import"./Heading-BIkBuKDH.js";import"./info-Ce6SdQZE.js";import"./Popover-r6lwygSk.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
