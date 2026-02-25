import{j as e,l}from"./iframe-BI14_MVF.js";import{S as t}from"./Skeleton-D2-Sm24y.js";import{T as p}from"./TextField-CDAPjJhs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DoIIAKkF.js";import"./utils-CUoFg1P-.js";import"./FieldError-0gwuUdiP.js";import"./Text-CI44Yo6S.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./Text-RJrnIXBc.js";import"./RSPContexts-BdlFwrnM.js";import"./Form-CvFoCgv-.js";import"./useFormValidation-CI5p8J41.js";import"./Group-Bs1Awagm.js";import"./Input-Cb4l4yFY.js";import"./Hidden-fX2mzFJg.js";import"./Button-C1lGy2rc.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./useTextField-DVz2DBKg.js";import"./useControlledState-C7wUKhFW.js";import"./useField-10jeCMxt.js";import"./TextField.module-DdivwlC8.js";import"./Label-DNvudnHe.js";import"./Dialog-BN4p9wge.js";import"./OverlayArrow-Dkdcjg4e.js";import"./useResizeObserver-BHsIR3DY.js";import"./Collection-CZ9Jc2KR.js";import"./index-D2lykJvQ.js";import"./Separator-oY1bR7gh.js";import"./SelectionManager-BsrCfNRx.js";import"./useEvent-Cl7U-xPX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CJ9gdQ2K.js";import"./useDescription-DRcfnO6m.js";import"./ListKeyboardDelegate-B-MPQD6f.js";import"./PressResponder-Cud_auOR.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZXS549E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CyW44Voa.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./createLucideIcon-DENDzJzs.js";import"./x-BV47LBd3.js";import"./Heading-CbFl5iEv.js";import"./info-CBM0LSSb.js";import"./Popover-Awsv4SWr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
