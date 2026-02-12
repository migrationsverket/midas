import{j as e,l}from"./iframe-Chekwr6M.js";import{S as t}from"./Skeleton-CnYCfbaz.js";import{T as p}from"./TextField-Ch_uiyuf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ctjBT7tv.js";import"./utils-Dj64B4Ck.js";import"./TextField-DF3UR0qa.js";import"./FieldError-DCB-eHPb.js";import"./Text-d5-92hiR.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./Text-CNbIZlGx.js";import"./RSPContexts-B-5HPXFu.js";import"./Form-C1k2uELU.js";import"./useFormValidation-DohLj8tG.js";import"./Group-BPxDsLqx.js";import"./Input-DBCMd8rL.js";import"./Hidden-Dy--Tx0W.js";import"./Button-Z4awFVTj.js";import"./number-DfkVkf0F.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./useTextField-BPdk6fHk.js";import"./useControlledState-CLkXqHsM.js";import"./useField-CXgMMZV1.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CIhWk8XG.js";import"./Dialog-BkMCqRU4.js";import"./OverlayArrow-C_kKr4TA.js";import"./useResizeObserver-Dp5qH922.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./Separator-BsKQl79r.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5UMCGiW.js";import"./useDescription-BaU05DyX.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./PressResponder-jE3E7TsH.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mznppo_U.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfeHWJtp.js";import"./Modal-B37h07YR.js";import"./Button-D5FNdohA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./createLucideIcon-CPHdlOig.js";import"./x-DVt_hLRk.js";import"./Heading-CaO4mVhn.js";import"./info-DnwbVtMC.js";import"./Popover-BCPIG4gw.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};
