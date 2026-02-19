import{j as e,l}from"./iframe-C8C_T9pK.js";import{S as t}from"./Skeleton-Cw_nV-Ms.js";import{T as p}from"./TextField-CbrPzdyl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-T5IEZ4OZ.js";import"./utils-665vdH3I.js";import"./FieldError--KTQss0Q.js";import"./Text-oN8gJ-0T.js";import"./useFocusRing-aErJaiMB.js";import"./index-BgFSJS_x.js";import"./index-Bnqj0GEH.js";import"./Text-B2x6FBCA.js";import"./RSPContexts-heE_-Jeu.js";import"./Form-BLLYgCAY.js";import"./useFormValidation-DeBAaOac.js";import"./Group-BCjufN1z.js";import"./Input-CTA-aUOv.js";import"./Hidden-BK2dTpyi.js";import"./Button-DgcJy71N.js";import"./number-DfkVkf0F.js";import"./useLabels-DLIgyPIl.js";import"./useButton-Bir6pOh3.js";import"./useTextField-Dg0o6C-K.js";import"./useControlledState-CVPSNT_z.js";import"./useField-D6-PoPba.js";import"./TextField.module-Dhscz2t0.js";import"./Label-BuLTpC8X.js";import"./Dialog-B14tOGd2.js";import"./OverlayArrow-CFiMoUoE.js";import"./useResizeObserver-C3Mb9prk.js";import"./Collection-DujBSbvT.js";import"./index-nk6UQK0x.js";import"./Separator-DNSZ5KKI.js";import"./SelectionManager-Bq1JnUnl.js";import"./useEvent-CmeL3S54.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-HavseNTU.js";import"./useDescription-B3b6CwtQ.js";import"./ListKeyboardDelegate-CEPsIi7y.js";import"./PressResponder-BOIRIx9Y.js";import"./useLocalizedStringFormatter-D9h1UHb6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0KE5JXY.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-H5Q5oE0x.js";import"./Modal-DZdM0zBg.js";import"./Button-BjszVOBG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFq-SMx0.js";import"./createLucideIcon-CyML3fXz.js";import"./x-DusTrbha.js";import"./Heading-DNNw60WL.js";import"./info-4Gmv43T1.js";import"./Popover-Df-Fld4f.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};
