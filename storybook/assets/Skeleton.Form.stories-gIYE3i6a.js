import{j as e,l}from"./iframe-Ci13ld7O.js";import{S as t}from"./Skeleton-BVcpYXIH.js";import{T as p}from"./TextField-Cm-e-4BR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CYoBRq0Z.js";import"./utils-Cd0LQrts.js";import"./TextField-CafKGUPV.js";import"./FieldError-CNS2gCFK.js";import"./Text-BVmiYMQy.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./Text-BPRonoR2.js";import"./RSPContexts-CFalA0-F.js";import"./Form-BgjGPFuC.js";import"./useFormValidation-lyydmePw.js";import"./Group-Copzji_A.js";import"./Input-Ds05aGdD.js";import"./Hidden-BWsE9twn.js";import"./Button-YvURXki4.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./useTextField-DcnpuNkd.js";import"./useControlledState-BPjdf_b0.js";import"./useField-CG62_5pp.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CyjO9gbY.js";import"./Dialog-CepYnuLi.js";import"./OverlayArrow-C6lCqXBu.js";import"./useResizeObserver-J-bRjOGS.js";import"./Collection-CdINeEAb.js";import"./index-CQwP3ol2.js";import"./Separator-CHl0NPOa.js";import"./SelectionManager-D5qHVcdA.js";import"./useEvent-C4x00_RR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D7GO9bBt.js";import"./useDescription-4N3M-fgK.js";import"./ListKeyboardDelegate-B417rgL2.js";import"./PressResponder-CkrDdV11.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBYeZb5I.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1I07cqa.js";import"./Button-fdROVxmt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./createLucideIcon-Bj58XDKs.js";import"./x-CkflMYc7.js";import"./Heading-DYM89nr5.js";import"./info-dlDyX20E.js";import"./Popover-qyXGcSll.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
