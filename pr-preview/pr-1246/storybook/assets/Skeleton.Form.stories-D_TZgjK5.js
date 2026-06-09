import{j as e,l}from"./iframe-DGitGBwd.js";import{S as t}from"./Skeleton-DHngLB2H.js";import{T as p}from"./TextField-N_ziMY8e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-n6GhlOOc.js";import"./utils-DlxgMN-X.js";import"./FieldError-BLFTeUPi.js";import"./Text-BBS_R9Lb.js";import"./useFocusRing-BSQFeV26.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./Text-BHRP82y-.js";import"./RSPContexts-BNal8wWj.js";import"./Form-D5bu5HNp.js";import"./Group-D-AHlaPK.js";import"./Input-CH8YKgUw.js";import"./Hidden-BTbvwN5u.js";import"./Button-CFc7ZkBU.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./useTextField-IBB62wLm.js";import"./useControlledState-Dj3Q8cMg.js";import"./useField-dgIiq1Nz.js";import"./TextField.module-DdivwlC8.js";import"./Label-BpQy6_dP.js";import"./Dialog-T51nnNds.js";import"./OverlayArrow-CDYvBswo.js";import"./useResizeObserver-CiWUltQW.js";import"./Collection-DLiHOCN2.js";import"./index-CU63vF8i.js";import"./Separator-KXVn-reU.js";import"./SelectionManager-B9az4Zc6.js";import"./useEvent-DNR96Pag.js";import"./scrollIntoView-CQlM3xNO.js";import"./SelectionIndicator-Dqps-ADK.js";import"./useDescription-DIrfQQU3.js";import"./ListKeyboardDelegate-9t6rl9Vm.js";import"./PressResponder-DOYOU7BC.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKmOhXBP.js";import"./getScrollParent-BD_bpobV.js";import"./VisuallyHidden-BUTi2bAi.js";import"./ModalOverlay-BVWZrGiy.js";import"./x-B5AWcWMp.js";import"./createLucideIcon-CcqKhbRQ.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Heading-B0sINXDi.js";import"./Button-CJ16F3mz.js";import"./Button.module-BB7N-cLd.js";import"./info-BKUPn93-.js";import"./Popover-BeXM43G5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
