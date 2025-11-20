import{j as e,l}from"./iframe-BCXW1_i0.js";import{S as t}from"./Skeleton-BatjkYW_.js";import{T as d}from"./TextField-BLb8j20x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CNtBlg5x.js";import"./utils-BQj-xKr5.js";import"./TextField-Cy1GccX-.js";import"./FieldError-zUMBVfs0.js";import"./Text-BRLrffF_.js";import"./useFocusRing-Cbg95h9l.js";import"./index-CG2AamNc.js";import"./index-CJ47wOzG.js";import"./Text-DwKMZYPU.js";import"./RSPContexts-DUSTzirW.js";import"./Form-CaqyBj0L.js";import"./useFormValidation-CFjYe5Gf.js";import"./Group-CoZWJLRv.js";import"./Input-BxW8ngfL.js";import"./Hidden-CDiDpivh.js";import"./Button-DY4JEqdp.js";import"./useLabels-BdTTmJ_V.js";import"./useButton-V3C9Q0iI.js";import"./useTextField-DyWXBKlN.js";import"./useControlledState-B_lkycFk.js";import"./useField-DpULJbLS.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-JI5vB7ps.js";import"./Dialog-BGozPSU8.js";import"./OverlayArrow-95mDz3t9.js";import"./useResizeObserver-DhqlsnSi.js";import"./Collection-XGMiWDNU.js";import"./index-DKlW5HAp.js";import"./Separator-DTtrVEPn.js";import"./SelectionManager-B6YMPDR8.js";import"./useEvent-BLUB4_Bw.js";import"./scrollIntoView-B_Jw_5aw.js";import"./SelectionIndicator-LDNAU2Um.js";import"./useDescription-DXlhDdlP.js";import"./ListKeyboardDelegate-FLKKQ2IO.js";import"./PressResponder-DFWjl5Vc.js";import"./useLocalizedStringFormatter-CNw7cMsH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BkFzyuEm.js";import"./VisuallyHidden-Ca69gFn7.js";import"./Button-C_naedx-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C1fxLZgu.js";import"./createLucideIcon-BmOKhA97.js";import"./x-D8TzOJRE.js";import"./Heading-iBuxhWN6.js";import"./info-BCtl6ubQ.js";import"./Popover-TN5INWFJ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
