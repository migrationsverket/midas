import{j as e,l}from"./iframe-BsX4-fHl.js";import{S as t}from"./Skeleton-BOScg7zD.js";import{T as p}from"./TextField-BDbR4qei.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BtaB9cpJ.js";import"./utils-WmpgZI0L.js";import"./FieldError-HDj_VpLo.js";import"./Text-BO6cVHx4.js";import"./useFocusRing-DHGOOITS.js";import"./index--eTuDDLm.js";import"./index-8LgWGc9O.js";import"./Text-AfY7AoQf.js";import"./RSPContexts-BsBjgKsl.js";import"./Form-4piklxqR.js";import"./Group-DlBgbd63.js";import"./Input-DD6RnW7N.js";import"./Hidden-Du6MB-px.js";import"./Button-mui9UUMM.js";import"./useLabel-C3_xLHTN.js";import"./useLabels-DE2ohQQR.js";import"./useButton-bzYxxfaT.js";import"./useTextField-BEbEcOue.js";import"./useControlledState-1XtDDM6q.js";import"./useField-CewvwuqF.js";import"./TextField.module-DdivwlC8.js";import"./Label-D2IHaoLE.js";import"./Dialog-KFqQTREb.js";import"./OverlayArrow-DIPN8uXE.js";import"./useResizeObserver-B-FLPDT_.js";import"./Collection-DVl1ojre.js";import"./index-gZsATta3.js";import"./Separator-PXJPG1AZ.js";import"./SelectionManager-Bc5M-RvQ.js";import"./useEvent-CFNavKzw.js";import"./scrollIntoView-DpHrXS9N.js";import"./SelectionIndicator-Bof2haaj.js";import"./useDescription-DyxUU18y.js";import"./ListKeyboardDelegate-DTw-pDRt.js";import"./PressResponder-BJJBB5Rp.js";import"./useLocalizedStringFormatter-D_5fwse8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B77ezQWY.js";import"./getScrollParent-DSKEhVJg.js";import"./VisuallyHidden-BUS8JXkv.js";import"./x-BRKCJtiN.js";import"./createLucideIcon-lE9BzsE-.js";import"./useLocalizedStringFormatter-tfIgws8_.js";import"./Heading-pG8bapog.js";import"./Button-BTWfCVSc.js";import"./Button.module-BB7N-cLd.js";import"./info-D8Pcw3AW.js";import"./Popover-t_xggqzY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
