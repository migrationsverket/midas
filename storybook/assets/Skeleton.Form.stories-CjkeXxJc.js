import{j as e,l}from"./iframe-CCQfngwq.js";import{S as t}from"./Skeleton-D57ztWed.js";import{T as d}from"./TextField-CAnYn0ID.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CZzRr7yB.js";import"./utils-CgsB8-M-.js";import"./TextField-DZxBHtEH.js";import"./FieldError-Bdi6QzIL.js";import"./Text-Cw_qglJK.js";import"./useFocusRing-DrqjHVCw.js";import"./index-ByVvlwyD.js";import"./index-Cw_5Evfx.js";import"./Text-Cc3exSDh.js";import"./RSPContexts-5wOIRLjy.js";import"./Form-BPQSERZX.js";import"./useFormValidation-Bde0T_x_.js";import"./Group-bdfqTrkL.js";import"./Input-B3Kg1zbO.js";import"./Hidden-CbIGjTgf.js";import"./Button-5oXIvCJG.js";import"./useLabels-ChtSCMDo.js";import"./useButton-C3KQprnb.js";import"./useTextField-BuTt4Boo.js";import"./useControlledState-D-jefNLs.js";import"./useField-BbQHz5Sg.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-VRnRTiQi.js";import"./Dialog-2pOyPZi5.js";import"./OverlayArrow-BKIb9vHV.js";import"./useResizeObserver-CAQkbVjr.js";import"./Collection-CFGCNd8k.js";import"./index-Bh78NwXD.js";import"./Separator-CTVimljj.js";import"./SelectionManager-CDxR94nf.js";import"./useEvent-DvrGnkNh.js";import"./scrollIntoView-BGFG9DOp.js";import"./SelectionIndicator-CX-Ak5JY.js";import"./useDescription-Cp__ppAa.js";import"./ListKeyboardDelegate-vJISlKib.js";import"./PressResponder-BPmSRe7N.js";import"./useLocalizedStringFormatter-fWmNxkyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-EuR23wxh.js";import"./VisuallyHidden-QnJstid8.js";import"./Button-Bab2JnFs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-1-g-Qi.js";import"./createLucideIcon-mKithfj1.js";import"./x-BkcaeSqw.js";import"./Heading-BbgRD-Zw.js";import"./info-0M2ejYG_.js";import"./Popover-CQsjUmkL.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
