import{j as e,l}from"./iframe-HOh296WD.js";import{S as t}from"./Skeleton-DbUXaoz2.js";import{T as p}from"./TextField-CvCuoDLw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-d1VYf9Is.js";import"./utils-DZ8gsIC2.js";import"./FieldError-D6lU0Pje.js";import"./Text-B6416v9E.js";import"./useFocusRing-DYVJSnUE.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./Text-Bv9eh8EN.js";import"./RSPContexts-d4Cds5di.js";import"./Form-MZ71z1xz.js";import"./Group-HvG2Yti2.js";import"./Input-DB_-mc8n.js";import"./Hidden-Cnam6lCF.js";import"./Button-WtWoZgXq.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./useTextField-ChoDBSx4.js";import"./useControlledState-Bg0Nqr_y.js";import"./useField-BFtU-cbq.js";import"./TextField.module-DdivwlC8.js";import"./Label-By7b658h.js";import"./Dialog-BxROUpc5.js";import"./OverlayArrow-BfXMfHms.js";import"./useResizeObserver-CVvZeKJF.js";import"./Collection-BZa-_VGk.js";import"./index-BDx-WWmG.js";import"./Separator-CYyZ8P4I.js";import"./SelectionManager-CjAAe4Dw.js";import"./useEvent-CtSfpuPP.js";import"./scrollIntoView-lPtJp7l_.js";import"./SelectionIndicator-CoYjaNwA.js";import"./useDescription-D6Cyf8Wc.js";import"./ListKeyboardDelegate-BOVwko3u.js";import"./PressResponder-Bx_uvq9y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8NkdEJU.js";import"./getScrollParent-CvmsooRi.js";import"./VisuallyHidden-C9pq-kak.js";import"./ModalOverlay-CtckkWP9.js";import"./x-DOfhN6f-.js";import"./createLucideIcon-NVlRk-Ze.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Heading-CFbybLxg.js";import"./Button-BYcFvZWu.js";import"./Button.module-BB7N-cLd.js";import"./info-LLhf2hmC.js";import"./Popover-BtdQxMqg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
