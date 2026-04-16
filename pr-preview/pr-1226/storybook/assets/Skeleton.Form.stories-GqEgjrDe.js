import{j as e,l}from"./iframe-CCfLQD4z.js";import{S as t}from"./Skeleton-BKXfIKfP.js";import{T as p}from"./TextField-CEIJllys.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DE9GZmEi.js";import"./utils-6cPY1nOj.js";import"./FieldError-DW0YkXyi.js";import"./Text-GlhP0ZNt.js";import"./useFocusRing-EcVjUqlw.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./Text-DZ79u1iH.js";import"./RSPContexts-CsNweyO-.js";import"./Form-DhfgivJc.js";import"./Group-DtvfQHam.js";import"./Input-Bqf6rAoJ.js";import"./Hidden-DWjl7TwO.js";import"./Button-CmCCWuSi.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./useTextField-CuX06wNe.js";import"./useControlledState-Dk8QnFuU.js";import"./useField-CFZKlJFB.js";import"./TextField.module-DdivwlC8.js";import"./Label-CLlGL0ZY.js";import"./Dialog-DSLsGM2x.js";import"./OverlayArrow-D0J3kQcJ.js";import"./useResizeObserver-DH4vzh-U.js";import"./Collection-CEgiOuRD.js";import"./index-Hj45Acj7.js";import"./Separator-D-2HUCAD.js";import"./SelectionManager-MwGpS50M.js";import"./useEvent-BIylNxfJ.js";import"./scrollIntoView-B56Z4Qb3.js";import"./SelectionIndicator-Dy5SxFYz.js";import"./useDescription-DfOXojso.js";import"./ListKeyboardDelegate-B_7IHCzD.js";import"./PressResponder--0lj0NF9.js";import"./useLocalizedStringFormatter-BA4949mp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUDg1ogU.js";import"./getScrollParent-Cy4s0DF2.js";import"./VisuallyHidden-BkMvzT9s.js";import"./ModalOverlay-D_f_Y5N7.js";import"./x-Bib5fKG4.js";import"./createLucideIcon-DWEKCqmg.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./Heading-BT23bQxk.js";import"./Button-DJVlOFkK.js";import"./Button.module-BB7N-cLd.js";import"./info-BjAtYUiZ.js";import"./Popover-CJ4AVohE.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
