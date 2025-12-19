import{j as e,l}from"./iframe-Bbu1_rOe.js";import{S as t}from"./Skeleton-D1viNVZw.js";import{T as p}from"./TextField-X8JY8z2w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CGEszcab.js";import"./utils-DzUH-LiJ.js";import"./TextField-BEt2c27t.js";import"./FieldError-CkqjPv4F.js";import"./Text-I1JxsJhT.js";import"./useFocusRing-DktvivXH.js";import"./index-Gy34tXsq.js";import"./index-BjrDVlup.js";import"./Text-BWc7fTRi.js";import"./RSPContexts-DpwWeNGS.js";import"./Form-BNX8v5Tt.js";import"./useFormValidation-D_oZTZdh.js";import"./Group-C8leh0gu.js";import"./Input-CI0aR-jA.js";import"./Hidden-DIc6BQrj.js";import"./Button-BfBJNH2a.js";import"./useLabels-Dh87fkX6.js";import"./useButton-qeywHX_w.js";import"./useTextField-OHXXnM36.js";import"./useControlledState-C-Y-9GQh.js";import"./useField-DFlr4vf-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DoDLnRQs.js";import"./Dialog-BvFaO__U.js";import"./OverlayArrow-D9n0yWdO.js";import"./useResizeObserver-x1lsz8v9.js";import"./Collection-DNXXbKi1.js";import"./index-BYqhdPck.js";import"./Separator-CMgRjzDZ.js";import"./SelectionManager-DTdXD_WL.js";import"./useEvent-b0-AAngS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1ZSNCFY8.js";import"./useDescription-CKADf4-J.js";import"./ListKeyboardDelegate-BHKEotvc.js";import"./PressResponder-DCJkoKxb.js";import"./useLocalizedStringFormatter-B-Hd1imC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ClJN9I7W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bmla7vNF.js";import"./Button-DiLNuEQM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-7EqjOiW5.js";import"./createLucideIcon-QX8cppGT.js";import"./x-ByJYHghm.js";import"./Heading-6aaRBt_3.js";import"./info-CvR4PK9V.js";import"./Popover-PcKybAgC.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
