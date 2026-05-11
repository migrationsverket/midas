import{j as e,l}from"./iframe-XiCiIf0n.js";import{S as t}from"./Skeleton-CB6imcjk.js";import{T as p}from"./TextField-Cylb9xUz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C2EjtKAd.js";import"./utils-DN6l_A4f.js";import"./FieldError-BphdTUoK.js";import"./Text-BgntJj64.js";import"./useFocusRing-Du04ckjJ.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./Text-BB__0TpL.js";import"./RSPContexts-DA4QYsro.js";import"./Form-C0m5f7h4.js";import"./Group-kVlQGyc6.js";import"./Input-DJd9mlfc.js";import"./Hidden-B0NT9U_h.js";import"./Button-GBAKwEXf.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./useTextField-VxkvG0Xu.js";import"./useControlledState-CUbneG8a.js";import"./useField-COsFSqdw.js";import"./TextField.module-DdivwlC8.js";import"./Label-DGFBbDo_.js";import"./Dialog-vO0AIOir.js";import"./OverlayArrow-Bc8m4xfE.js";import"./useResizeObserver-jOGmv4td.js";import"./Collection-BXkkuLNi.js";import"./index-ChQWbGkq.js";import"./Separator-UcUuddN2.js";import"./SelectionManager-DJe5Oihj.js";import"./useEvent-Byt7kt62.js";import"./scrollIntoView-CPg7R5H1.js";import"./SelectionIndicator-zplcTWxq.js";import"./useDescription-D3XmSikn.js";import"./ListKeyboardDelegate-DwhOIuZ9.js";import"./PressResponder-3MamZval.js";import"./useLocalizedStringFormatter-D4lkYHou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS5_9QGV.js";import"./getScrollParent-Bk9-lSDZ.js";import"./VisuallyHidden-D8kosd8O.js";import"./ModalOverlay-BdBiBzCh.js";import"./x-AkXMb_P6.js";import"./createLucideIcon-Bi0GkdZT.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./Heading-CrR6P3Ih.js";import"./Button-34yPA4wA.js";import"./Button.module-BB7N-cLd.js";import"./info-ChSmfyLx.js";import"./Popover-DpMwRH-x.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
