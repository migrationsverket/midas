import{j as e,l}from"./iframe-ZU-VlsmC.js";import{S as t}from"./Skeleton-BkvZf-29.js";import{T as p}from"./TextField-PGyrf4y-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BxecevLM.js";import"./utils-CwYPazgz.js";import"./TextField-CVTlRYt3.js";import"./FieldError-CW123qup.js";import"./Text-Bk-OwW6a.js";import"./useFocusRing-DeDg3Wm1.js";import"./index-BJjzhiid.js";import"./index-B-c5mNFM.js";import"./Text-Der4VdMW.js";import"./RSPContexts-yZiAzvBR.js";import"./Form-DjYb9RJ8.js";import"./useFormValidation-MYNTqaJp.js";import"./Group-TUO58pNa.js";import"./Input-BujrdVjT.js";import"./Hidden-DuFt3Wpn.js";import"./Button-CeMV39iZ.js";import"./useLabels-t8k_Uoah.js";import"./useButton-C2Rk3x3w.js";import"./useTextField-DeLDtA3g.js";import"./useControlledState-CLKMAA4K.js";import"./useField-C3-0p5Cj.js";import"./TextField.module-DpzeWGpt.js";import"./Label-hRDO7vUK.js";import"./Dialog-CNtFJAIp.js";import"./OverlayArrow-dNrd_64E.js";import"./useResizeObserver-BZ-bVwf1.js";import"./Collection-D5K1FB_c.js";import"./index-DYvT57Od.js";import"./Separator-CSrmJdP5.js";import"./SelectionManager-FtklnvhE.js";import"./useEvent-TDbxnCp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpQVp4iw.js";import"./useDescription-aAdr_LiL.js";import"./ListKeyboardDelegate-BbodKWK9.js";import"./PressResponder-t6zmAEeH.js";import"./useLocalizedStringFormatter-DKJg5-Yp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7N7_P6f.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CGc8iUr3.js";import"./Button-CkFCptv_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9gOm9LYJ.js";import"./createLucideIcon-zhU_S5bE.js";import"./x-CyPK6XsU.js";import"./Heading-C2qvWc5u.js";import"./info-DAxJiLAo.js";import"./Popover-CkvdHAJ-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
