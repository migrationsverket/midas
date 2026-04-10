import{j as e,l}from"./iframe-eIKe2X_m.js";import{S as t}from"./Skeleton-Br2M9SEj.js";import{T as p}from"./TextField-BwAROaWM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DyHLHni8.js";import"./utils-BoPGT07A.js";import"./FieldError-xOrsoR1D.js";import"./Text-CiEoCLNV.js";import"./useFocusRing-ChUuwE-2.js";import"./index-DYK-fZpj.js";import"./index-DgJxkeaR.js";import"./Text-CuxH_tBg.js";import"./RSPContexts-CbT1tTzu.js";import"./Form-BbvKGnjc.js";import"./Group-CtPsluas.js";import"./Input-Dfdq0cPF.js";import"./Hidden-CXbku1y6.js";import"./Button-7V_IyEW5.js";import"./useLabel-BDJHN6yJ.js";import"./useLabels-CzQg4_Ye.js";import"./useButton-JGMEg_eW.js";import"./useTextField-CudkVjWt.js";import"./useControlledState-CGyGwo-A.js";import"./useField-DqbOOgGS.js";import"./TextField.module-DdivwlC8.js";import"./Label-DCe_tEzf.js";import"./Dialog-BzlUiw8w.js";import"./OverlayArrow-DbC8BzIE.js";import"./useResizeObserver-Bfe7G0ym.js";import"./Collection-BkqcoK6r.js";import"./index-CKqS6MCL.js";import"./Separator-4wodsL9H.js";import"./SelectionManager-BVEVky2i.js";import"./useEvent-CHBVldLN.js";import"./scrollIntoView-C35qIzu7.js";import"./SelectionIndicator-CBGgJV-O.js";import"./useDescription-C7d6IwkV.js";import"./ListKeyboardDelegate-jHRTOiqQ.js";import"./PressResponder-DKWD07tS.js";import"./useLocalizedStringFormatter-LPlwK2CH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAvKYVcx.js";import"./getScrollParent-DJBZNJub.js";import"./VisuallyHidden-CSQH58ck.js";import"./Modal-DJ0Yq2JH.js";import"./x-Dk3bNdoj.js";import"./createLucideIcon-CLkqqabX.js";import"./useLocalizedStringFormatter-C4qP-j6o.js";import"./Heading-D217TPLQ.js";import"./Button-B-V9quu1.js";import"./Button.module-BB7N-cLd.js";import"./info-A7J0CbzS.js";import"./Popover-CNP8I657.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
