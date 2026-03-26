import{j as e,l}from"./iframe-GWyqpu_M.js";import{S as t}from"./Skeleton-Dcn5X-rK.js";import{T as p}from"./TextField-CL3bx3yF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BCblquBQ.js";import"./utils-Dt2I5FC1.js";import"./FieldError-BY8gNanm.js";import"./Text-BzWdciNH.js";import"./useFocusRing-BEBkue70.js";import"./index-D2WS1qCH.js";import"./index-CwQDUu6A.js";import"./Text-P__SInd9.js";import"./RSPContexts-BgONfnva.js";import"./Form-sABXXLqd.js";import"./Group-HQhXS4fd.js";import"./Input-C0LTVSrQ.js";import"./Hidden-i5KMI_eW.js";import"./Button-DaVw9Yu8.js";import"./useLabel-DHRJ-v17.js";import"./useLabels-BvrpK5k3.js";import"./useButton-BCnnqreW.js";import"./useTextField-DzFMhfOD.js";import"./useControlledState-Cjxvjhkl.js";import"./useField-hN3b_TA5.js";import"./TextField.module-DdivwlC8.js";import"./Label-DgUb8fOi.js";import"./Dialog-oY0pmn7C.js";import"./OverlayArrow-B85WIKz-.js";import"./useResizeObserver-D3FtZQzK.js";import"./Collection-Ci3sGuOc.js";import"./index-CI86LNLw.js";import"./Separator-9KhRpHul.js";import"./SelectionManager-CJExYech.js";import"./useEvent-BwgGsclp.js";import"./scrollIntoView-DV8eY3AZ.js";import"./SelectionIndicator-BVo-aGf1.js";import"./useDescription-DOshPb0-.js";import"./ListKeyboardDelegate-Cb__stUi.js";import"./PressResponder-D7YFbhmH.js";import"./useLocalizedStringFormatter-BQ4PapsB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYU0HbgZ.js";import"./getScrollParent-YkPIfx5c.js";import"./VisuallyHidden-d58nTTlD.js";import"./x-UXvlZnGy.js";import"./createLucideIcon-BoYLuSqv.js";import"./useLocalizedStringFormatter-CybCfRF3.js";import"./Heading-DeUIK1O6.js";import"./Button-CSLm8s2k.js";import"./Button.module-BB7N-cLd.js";import"./info-Dv1ZC6cQ.js";import"./Popover-EbSwkAEv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
