import{j as e,l}from"./iframe-UKNJQjU7.js";import{S as t}from"./Skeleton-MSqlqD8A.js";import{T as p}from"./TextField-DRl5zA1W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DVt3TLue.js";import"./utils-ZaspRvtG.js";import"./FieldError-D2l5qYM7.js";import"./Text-DJmal9QH.js";import"./useFocusRing-BeIXTmL-.js";import"./index-BeTr8JYW.js";import"./index-Cs6Wfmrv.js";import"./Text-DpfK05TX.js";import"./RSPContexts-hVdnM1Ff.js";import"./Form-B99ZdxCN.js";import"./useFormValidation-CUAGv13k.js";import"./Group-Dy9IC02P.js";import"./Input-DjCKsZjM.js";import"./Hidden-DcgeNwze.js";import"./Button-ktQggvc6.js";import"./useLabels-Egh2Tmf-.js";import"./useButton-B8VBkWrX.js";import"./useTextField-BEeFRIUC.js";import"./useControlledState-DMxiQw5s.js";import"./useField-BOrveTUw.js";import"./TextField.module-Cm6797Xw.js";import"./Label-BrmcvhP9.js";import"./Dialog-3_q4gWI4.js";import"./OverlayArrow-Y-5tvVZV.js";import"./useResizeObserver-D8XJbOID.js";import"./Collection-D1NK0Ykh.js";import"./index-DbODyXeb.js";import"./Separator-DIuEPkwj.js";import"./SelectionManager-rMVQjgor.js";import"./useEvent-CAWk4ACy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BckInOsy.js";import"./useDescription-tMahdvfR.js";import"./ListKeyboardDelegate-B-Q8YBCs.js";import"./PressResponder-D4l6m8v9.js";import"./useLocalizedStringFormatter-DzhvNqYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-MuZs9ecS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B64N4Qj2.js";import"./Button-CwlpoN3f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B6bHgHU4.js";import"./createLucideIcon-VUHoQ9n0.js";import"./x-Dq6kRcYA.js";import"./Heading-DtOHVxxT.js";import"./info-CNzqLKXc.js";import"./Popover-BhgJnOJL.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
