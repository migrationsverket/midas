import{j as e,l}from"./iframe-C6zRxPwt.js";import{S as t}from"./Skeleton-BkikZjX3.js";import{T as p}from"./TextField-DmjzMBxP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-jEjPj82s.js";import"./utils-BEZo77lv.js";import"./FieldError-CzljslfK.js";import"./Text-BdoBf6Jw.js";import"./useFocusRing-BPpPWTKG.js";import"./index-iboGWBaX.js";import"./index-DnknE0l7.js";import"./Text-DJ32dSE7.js";import"./RSPContexts-DPB_5Wnw.js";import"./Form-PpHcZF8L.js";import"./Group-BQUgB0PV.js";import"./Input-cBzcpn5k.js";import"./Hidden-IUN1uUBY.js";import"./Button-C8Zk09p7.js";import"./useLabel-ecSwuXG2.js";import"./useLabels-BCAoW4uD.js";import"./useButton-BrsN7x1k.js";import"./useTextField-CGcSuHK2.js";import"./useControlledState-BY6_m9cF.js";import"./useField-CUNsCkrM.js";import"./TextField.module-DdivwlC8.js";import"./Label-B4qiadPW.js";import"./Dialog-BOpzQ1MH.js";import"./OverlayArrow-DDfGMFSJ.js";import"./useResizeObserver-BPKQSG2Q.js";import"./Collection-CH3bxv8u.js";import"./index-BdieSrJG.js";import"./Separator-DqV_Oq0w.js";import"./SelectionManager-Idt-0Wa2.js";import"./useEvent-BvwOn5ub.js";import"./scrollIntoView-zTEWqLUD.js";import"./SelectionIndicator-B_zx6GlP.js";import"./useDescription-D1QyVa4Z.js";import"./ListKeyboardDelegate-BmFgQiWl.js";import"./PressResponder-R2OLyqx9.js";import"./useLocalizedStringFormatter-D9_WmAaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYiIYqDx.js";import"./getScrollParent-CSa9bUGq.js";import"./VisuallyHidden-9r_S3aDL.js";import"./ModalOverlay-4wsF43EW.js";import"./x-Dji1ZwpV.js";import"./createLucideIcon-ANvKNx91.js";import"./useLocalizedStringFormatter-B15xbeUv.js";import"./Heading-CrgNBsxh.js";import"./Button-DHMnWLGJ.js";import"./Button.module-BB7N-cLd.js";import"./info-BMmqubIS.js";import"./Popover-DLbKNTks.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
