import{j as e,l}from"./iframe-D_tI-LG6.js";import{S as t}from"./Skeleton-DobDg_DJ.js";import{T as p}from"./TextField-BeZkjP_X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BxKhpMo9.js";import"./utils-BmuT-4CL.js";import"./FieldError-CvwrOOlF.js";import"./Text-CULJXyXM.js";import"./useFocusRing-DXI1PCCK.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./Text-C08wpa18.js";import"./RSPContexts-C1Z7Vm5X.js";import"./Form-CS_16PeS.js";import"./Group-D4TlFZLJ.js";import"./Input-BKFyFcr2.js";import"./Hidden-D7jFD7Zq.js";import"./Button-hSHq5h1Q.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./useTextField-hLSUVIVT.js";import"./useControlledState-D0L1s8oX.js";import"./useField-kyr3UNB4.js";import"./TextField.module-DdivwlC8.js";import"./Label-BQu2VcZX.js";import"./Dialog-eXPf3smd.js";import"./OverlayArrow-BGTLKWnm.js";import"./useResizeObserver-BsODJpzd.js";import"./Collection-B7H5xaqM.js";import"./index-BH9s9hTH.js";import"./Separator-Da8IBImH.js";import"./SelectionManager-g-9xTfpe.js";import"./useEvent-BeOXJju6.js";import"./scrollIntoView-Bwch4vY3.js";import"./SelectionIndicator-B_gIlSD6.js";import"./useDescription-T8zc5UX5.js";import"./ListKeyboardDelegate-D_cKU6vh.js";import"./PressResponder-TY9kKsKw.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMgKQrZS.js";import"./getScrollParent-BgKCMS-7.js";import"./VisuallyHidden-DzLaLv62.js";import"./ModalOverlay-DA3YGCTz.js";import"./x-QsPpT9iF.js";import"./createLucideIcon-Cjn_t3BL.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./Heading-DHTQxhhY.js";import"./Button-GXHEwtjb.js";import"./Button.module-BB7N-cLd.js";import"./info-bmcdp-s_.js";import"./Popover-xs5lyvhu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
