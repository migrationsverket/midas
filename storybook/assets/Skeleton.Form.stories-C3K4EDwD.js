import{j as e,l}from"./iframe-CLvF6Z40.js";import{S as t}from"./Skeleton-DZAhazaj.js";import{T as p}from"./TextField-CwbcYS75.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DojV8uL0.js";import"./utils-CJoHmjoo.js";import"./FieldError-VeyWLyeT.js";import"./Text-D9kACuMI.js";import"./useFocusRing-DA8pMfhu.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./Text-DSAnxviu.js";import"./RSPContexts-CTL5xx9Q.js";import"./Form-H5Vy5h3q.js";import"./Group-CF1mdGZd.js";import"./Input-CW2TDEkD.js";import"./Hidden-DDGoYcTF.js";import"./Button-IXlIqRd7.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./useTextField-D5r6PF3z.js";import"./useControlledState-aZqY8xT5.js";import"./useField-BiXCEzZa.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dzbpu6C1.js";import"./Dialog-B-uj8xkF.js";import"./OverlayArrow-C7K_hjxv.js";import"./useResizeObserver-DPj-8Knk.js";import"./Collection-CsSqZXfS.js";import"./index-BFpG02G3.js";import"./Separator-Hn1z5orb.js";import"./SelectionManager-B6jt3tF-.js";import"./useEvent-DVQ3dgzr.js";import"./scrollIntoView-D0r91Cjt.js";import"./SelectionIndicator-CaRCxqEQ.js";import"./useDescription-Ctzm8kKf.js";import"./ListKeyboardDelegate-DkyBJYE4.js";import"./PressResponder-DglPZp8V.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-q93KrM-a.js";import"./getScrollParent-CPZW7HPG.js";import"./VisuallyHidden-Ckm5OILG.js";import"./ModalOverlay-DEQ13mvL.js";import"./x-DROlonvj.js";import"./createLucideIcon-BkSuVCZc.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Heading-QPqQYzxD.js";import"./Button-CVKy4fAF.js";import"./Button.module-BB7N-cLd.js";import"./info-DQ35Koxp.js";import"./Popover-CWwYuwT5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
