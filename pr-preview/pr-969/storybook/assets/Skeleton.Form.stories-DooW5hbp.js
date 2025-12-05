import{j as e,l}from"./iframe-qDdxYEqa.js";import{S as t}from"./Skeleton-vXq4IioP.js";import{T as p}from"./TextField-DaVt31xp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DueyDM_b.js";import"./utils-BM4vGe7B.js";import"./TextField-CBypKEaN.js";import"./FieldError-BwMuefB_.js";import"./Text-bywFbAb4.js";import"./useFocusRing-B6vuZu2_.js";import"./index-DzlCj9Y4.js";import"./index-BVyj6e23.js";import"./Text-WW175J0Z.js";import"./RSPContexts-D7OWPLkC.js";import"./Form-DHIfqyz9.js";import"./useFormValidation-Bfy44XK_.js";import"./Group-BxVvIgzZ.js";import"./Input-Cm9ntmBI.js";import"./Hidden-DtSTyAaE.js";import"./Button-B6p9EZnf.js";import"./useLabels-xEn6R_2b.js";import"./useButton-5HeDBVBJ.js";import"./useTextField-J7IA3gDt.js";import"./useControlledState-0uhYfAk6.js";import"./useField-CJ3GOAY5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DF3OtJmd.js";import"./Dialog-Eqalv399.js";import"./OverlayArrow-DjOJ1kKX.js";import"./useResizeObserver-CV1JOXVl.js";import"./Collection-B60oJRdy.js";import"./index-RB1hbU1x.js";import"./Separator-D0zma50k.js";import"./SelectionManager-DEex84lG.js";import"./useEvent-BfpnWR31.js";import"./scrollIntoView-HxGvSmTa.js";import"./SelectionIndicator-DDjrOMDd.js";import"./useDescription-CKkIcbk2.js";import"./ListKeyboardDelegate-CVi4IbZo.js";import"./PressResponder-KMkNkSXb.js";import"./useLocalizedStringFormatter-DIrmbVtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-pPUmGKBq.js";import"./VisuallyHidden-CKY1T34r.js";import"./Button-Cs7TGJjB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8GJkiEc.js";import"./createLucideIcon-G8J66sNp.js";import"./x-CLUEOlar.js";import"./Heading-C-pdQTkz.js";import"./info-BeLQrudJ.js";import"./Popover-DXxmk8LO.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
