import{j as e,l}from"./iframe-CZvMPihu.js";import{S as t}from"./Skeleton-Bk1FtI0u.js";import{T as p}from"./TextField-DH5vgmRd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BMHhbdlV.js";import"./utils-Cqj1DeIe.js";import"./FieldError-BTAbwmK2.js";import"./Text-Dw0gnghQ.js";import"./useFocusRing-B8JnrIcb.js";import"./index-GihrdCeH.js";import"./index-BkbhKg_o.js";import"./Text-DgbEXfJ4.js";import"./RSPContexts-rKUrJdMM.js";import"./Form-o2rb1jhL.js";import"./Group-DMivJjDQ.js";import"./Input-Mf2rTIYQ.js";import"./Hidden-DWCJo24h.js";import"./Button-cyaqw3RD.js";import"./useLabel-CaU9RgyQ.js";import"./useLabels-DwUdsAUl.js";import"./useButton-DBJlOvpF.js";import"./useTextField-BaSAP6Vi.js";import"./useControlledState-FTjsg_U3.js";import"./useField-Ce8tB8jB.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cwwy-uVX.js";import"./Dialog-D8ZYrMfm.js";import"./OverlayArrow-289ws-2M.js";import"./useResizeObserver-CCIHhEzp.js";import"./Collection-Bc6fSmVS.js";import"./index-DYYCl4w-.js";import"./Separator-C0Jwfzsf.js";import"./SelectionManager-BO7qKHfi.js";import"./useEvent-CdJapIWn.js";import"./scrollIntoView-DuwlJzJe.js";import"./SelectionIndicator-DoPI1KKj.js";import"./useDescription-Di037rLQ.js";import"./ListKeyboardDelegate-DhhwE-OE.js";import"./PressResponder-DGNkfhIq.js";import"./useLocalizedStringFormatter-DcVcSICC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0DkVVOH.js";import"./getScrollParent-CWdG5ZLM.js";import"./VisuallyHidden-CgB8hx88.js";import"./ModalOverlay-rg8WRRv_.js";import"./x-COwp3eV_.js";import"./createLucideIcon-w0hL8zu1.js";import"./useLocalizedStringFormatter-CQr6tlIE.js";import"./Heading-ViyAyNFK.js";import"./Button-DHBiSvIz.js";import"./Button.module-BB7N-cLd.js";import"./info-U2EGid5T.js";import"./Popover-Dd-0iVOw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
