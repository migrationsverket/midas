import{j as e,l}from"./iframe-9MdBivRm.js";import{S as t}from"./Skeleton-Cpcg9i8w.js";import{T as p}from"./TextField-DMIfYcZi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-J3M81N3e.js";import"./utils-Bn94QCjx.js";import"./FieldError-C2tntPOB.js";import"./Text-DqogYLWC.js";import"./useFocusRing-r9TCofSe.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./Text-B_WlxrH5.js";import"./RSPContexts-yk-QUR19.js";import"./Form-Crvut_kx.js";import"./Group-DyeXIgcv.js";import"./Input-BRdi36Yt.js";import"./Hidden-mlaG9dyz.js";import"./Button-CB5roEUk.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./useTextField-C6LMpBsJ.js";import"./useControlledState-DASGxOGH.js";import"./useField-B-NHG1Dy.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bs41Ym4u.js";import"./Dialog-DaF6TB58.js";import"./OverlayArrow-CqrmYGFz.js";import"./useResizeObserver-CZjLM8fY.js";import"./Collection-DOip7Or5.js";import"./index-dnLCjEtw.js";import"./Separator-TmOyzQOi.js";import"./SelectionManager-BfxyxeUx.js";import"./useEvent-CzJ1Xvo0.js";import"./scrollIntoView--qBAJMrU.js";import"./SelectionIndicator-BAejuz9T.js";import"./useDescription-u6RsoVs5.js";import"./ListKeyboardDelegate-BTGk-Kg0.js";import"./PressResponder-CblWJY4v.js";import"./useLocalizedStringFormatter-BqBDGzJt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAWiQObg.js";import"./getScrollParent-B8busNPw.js";import"./VisuallyHidden-B5GjKkS-.js";import"./ModalOverlay-LJAR0MMG.js";import"./x-m6itTsWf.js";import"./createLucideIcon-w3wG1Pu8.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./Heading-CyZPaCxb.js";import"./Button-oaXlsJtI.js";import"./Button.module-BB7N-cLd.js";import"./info-B6K8NiBh.js";import"./Popover-tdWd4ACh.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
