import{j as e,l}from"./iframe-DyVZO6Jd.js";import{S as t}from"./Skeleton-b18Rr7ft.js";import{T as p}from"./TextField-BACQYFxP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-a5BLYsbX.js";import"./utils-B4PADexm.js";import"./FieldError-BOgY85Mx.js";import"./Text-CipKPPoF.js";import"./useFocusRing-D32E8y-A.js";import"./index-CPCUhuiH.js";import"./index-Co6SSMDt.js";import"./Text-BNccgVJc.js";import"./RSPContexts-X7l1b1Jy.js";import"./Form-yAw-6d1b.js";import"./Group-ua2ZQATg.js";import"./Input-C7xr_WRa.js";import"./Hidden-DIN7ehBk.js";import"./Button-B6InbNDy.js";import"./useLabel-BjmSwcyg.js";import"./useLabels-C-NvnRdm.js";import"./useButton-B-EgkQxS.js";import"./useTextField-CE085p0z.js";import"./useControlledState-DG-0bHR_.js";import"./useField-CC79MtWI.js";import"./TextField.module-DdivwlC8.js";import"./Label-DDtsq2Wq.js";import"./Dialog-D_FaPuWp.js";import"./OverlayArrow-CPYtt0k7.js";import"./useResizeObserver-BH7K4kN2.js";import"./Collection-QZGn261N.js";import"./index-Cu-r39qe.js";import"./Separator-DeBXtHoc.js";import"./SelectionManager-kVWkFxi1.js";import"./useEvent-BZfyFw7i.js";import"./scrollIntoView-FtsWToTZ.js";import"./SelectionIndicator-BMPLzHtu.js";import"./useDescription-BgvtJJFO.js";import"./ListKeyboardDelegate-RR5K6vur.js";import"./PressResponder-VZsHLFDr.js";import"./useLocalizedStringFormatter-BIY6CwSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkovJave.js";import"./getScrollParent-CATvZmdv.js";import"./VisuallyHidden-CBSXawwP.js";import"./ModalOverlay-CXQuZI2f.js";import"./x-bmse7woB.js";import"./createLucideIcon-CjUPJyft.js";import"./useLocalizedStringFormatter-Dt4-iLHW.js";import"./Heading-AKd3Rpar.js";import"./Button-DFXCpOJf.js";import"./Button.module-BB7N-cLd.js";import"./info--19NV615.js";import"./Popover-DoZts5Wt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
