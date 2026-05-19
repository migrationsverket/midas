import{j as e,l}from"./iframe-B1G803WZ.js";import{S as t}from"./Skeleton-BaVjLS22.js";import{T as p}from"./TextField-DFUxYTER.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-JtgCCSXA.js";import"./utils-ZnrybaQS.js";import"./FieldError-BgDbsvpf.js";import"./Text-CAOAbmad.js";import"./useFocusRing-BRG6MU6i.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./Text-B-AGxk9K.js";import"./RSPContexts-CUgMF8uD.js";import"./Form-B7gF1kuZ.js";import"./Group-CyICP2Gz.js";import"./Input-CHYIWEI4.js";import"./Hidden-DDSSvdX3.js";import"./Button-BLDI2QQO.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./useTextField-DOyU3cBb.js";import"./useControlledState-BlM9LERq.js";import"./useField-BpNxarce.js";import"./TextField.module-DdivwlC8.js";import"./Label-DXBeXx8q.js";import"./Dialog-Ch1EbeUc.js";import"./OverlayArrow-Cc1DaLcZ.js";import"./useResizeObserver-C-4yQLxN.js";import"./Collection-DabhM5jB.js";import"./index-2DG0SJGy.js";import"./Separator-CO6vWGxM.js";import"./SelectionManager-D1bQmGXg.js";import"./useEvent-AANzrBKs.js";import"./scrollIntoView-D6LN4GJ6.js";import"./SelectionIndicator-BsObSX7g.js";import"./useDescription-CwTth-CD.js";import"./ListKeyboardDelegate-CauOf7DY.js";import"./PressResponder-Dy-yCG68.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C54_hIOs.js";import"./getScrollParent-CigfJhrW.js";import"./VisuallyHidden-B__tRjGj.js";import"./ModalOverlay-BO3lRZyj.js";import"./x-C-I1ixf_.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Heading-D9vzlIYK.js";import"./Button-DU4dwGZ1.js";import"./Button.module-BB7N-cLd.js";import"./info-DauHfwG7.js";import"./Popover-DdKXcdAo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
