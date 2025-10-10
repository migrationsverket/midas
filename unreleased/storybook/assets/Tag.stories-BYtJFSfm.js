import{j as a}from"./iframe-B96hDU8A.js";import{T as o,a as i,s as D}from"./Tag-D1GpxHwe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CWlo6-JY.js";import"./utils-BcJCS4wR.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cy9ull5y.js";import"./useFocusRing-JiBArVjZ.js";import"./index-SHOFs2pS.js";import"./index-PnvR3kzh.js";import"./useLabels-DvKS9dCW.js";import"./useButton-BBYiG9gp.js";import"./Collection-CfS7B_cg.js";import"./index-CgRLWl7p.js";import"./ListBox-DZ6Cj6dl.js";import"./DragAndDrop-ClooykxJ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C8yKegvR.js";import"./SelectionManager-BsQzRsU9.js";import"./useEvent-C-m_GKFE.js";import"./FocusScope-Cj2thfdb.js";import"./useDescription-k6I8Hoqj.js";import"./useControlledState-JJIJdzOh.js";import"./context-CE6UG221.js";import"./Text-BTIFiNyv.js";import"./inertValue-BFOFR-1o.js";import"./useListState-DmRQUYkW.js";import"./useHighlightSelectionDescription-CvCfBcrS.js";import"./useUpdateEffect-CpMZUPVc.js";import"./useLocalizedStringFormatter-BjoTV97m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Ckt8HsWW.js";import"./useField-DBp0oSWm.js";import"./clsx-Ciqy0D92.js";import"./Button-v90KC6Pu.js";import"./Button.module-CcWMkJAG.js";import"./x-CTb4guQE.js";import"./createLucideIcon-BHDz4Fz-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
