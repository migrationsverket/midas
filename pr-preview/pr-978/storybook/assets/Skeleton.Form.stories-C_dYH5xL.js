import{j as e,l}from"./iframe-ByNEmIOU.js";import{S as t}from"./Skeleton-DyUQg62J.js";import{T as p}from"./TextField-CpaFpXAf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GelWT8wB.js";import"./utils-DTOyoAZG.js";import"./TextField-CkHj93nW.js";import"./FieldError-3BzwtZU_.js";import"./Text-BNZ-1xk8.js";import"./useFocusRing-CytbFWM3.js";import"./index-DBfj5PxR.js";import"./index-CGNcjuez.js";import"./Text-D_4I_8jd.js";import"./RSPContexts-BsQr0774.js";import"./Form-DTzydRAf.js";import"./useFormValidation-HiFPBIvf.js";import"./Group--mVlG6gQ.js";import"./Input-UneXnYHn.js";import"./Hidden-D8ivFDCG.js";import"./Button-CZ3GNczv.js";import"./useLabels-lfHEtpRl.js";import"./useButton-DMFyreMT.js";import"./useTextField-DFgnAszA.js";import"./useControlledState-BenzJtep.js";import"./useField-zV-3UPg2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D1vIF0mY.js";import"./Dialog-rhS8pjjc.js";import"./OverlayArrow-Cdo_-urs.js";import"./useResizeObserver-BvWv9OXJ.js";import"./Collection-ZYN-xnvk.js";import"./index-8PBKq18y.js";import"./Separator-Bo1xWXSP.js";import"./SelectionManager-Dc_WBs_T.js";import"./useEvent-C5ByhIa5.js";import"./scrollIntoView-BsCZGpGi.js";import"./SelectionIndicator-3-Vz_rSI.js";import"./useDescription-BQ4qbpcd.js";import"./ListKeyboardDelegate-C1GO73cs.js";import"./PressResponder-CkYRdWz_.js";import"./useLocalizedStringFormatter-YRte3exA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DTrxB9eS.js";import"./VisuallyHidden-B2loE3ZQ.js";import"./Button-BZj1eUaG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-WWUimbhC.js";import"./createLucideIcon-HuBhSAyF.js";import"./x-BC2uLgth.js";import"./Heading-B9sYL-oJ.js";import"./info-BJwkolSj.js";import"./Popover-XMptSfTl.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
