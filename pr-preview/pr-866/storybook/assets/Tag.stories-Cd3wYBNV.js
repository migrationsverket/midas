import{j as a}from"./iframe-C9wj9Yuq.js";import{T as o,a as i,s as D}from"./Tag-UjxAf_sl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-iNazgIWI.js";import"./utils-DPU2exi4.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5FQ65cX.js";import"./useFocusRing-DrrUfgfk.js";import"./index-CMyzvkgD.js";import"./index-BSgmhg_b.js";import"./useLabels-CKsy4CxE.js";import"./useButton-DRJPO0Fn.js";import"./Collection-DrBhLm_D.js";import"./index-kDMs2lFp.js";import"./ListBox-HiXlqcWG.js";import"./DragAndDrop-DgdRFDjM.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BBdvWuvK.js";import"./SelectionManager-C9N8F2Lc.js";import"./useEvent-CTlyYnNE.js";import"./FocusScope-CIcTcowB.js";import"./useDescription-C6UzzpjS.js";import"./useControlledState-BulyiYsl.js";import"./context-DADpvuAZ.js";import"./Text-S0VTzck5.js";import"./inertValue-B2q0MEuY.js";import"./useListState-CnNreIOQ.js";import"./useHighlightSelectionDescription-vpnAk6Oo.js";import"./useUpdateEffect-BcLCJRtr.js";import"./useLocalizedStringFormatter-CTcwzQCA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CBSYfKb5.js";import"./useField-rFPwm0R6.js";import"./clsx-Ciqy0D92.js";import"./Button-D5osK_gy.js";import"./Button.module-DRhvPh0f.js";import"./x-CVuTved_.js";import"./createLucideIcon-cJDp0qou.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
