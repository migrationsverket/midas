import{j as a}from"./iframe-CxJRgTQX.js";import{T as o,a as i,s as D}from"./Tag-B-Xc2Ysi.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DtQ34qxv.js";import"./utils-BkvzCX_f.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0siC0q_.js";import"./useFocusRing-B_nhC6ZT.js";import"./index-Cdd1myvr.js";import"./index-CgRfzMIO.js";import"./useLabels-C2oHA4ZX.js";import"./useButton-C0jMDMD3.js";import"./Collection-CmS0hjMl.js";import"./index-DQ_tJ4w-.js";import"./ListBox-CwrkGndo.js";import"./DragAndDrop-BGtzalla.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D7al4AAw.js";import"./SelectionManager-BDXX588P.js";import"./useEvent-92cP9L5M.js";import"./FocusScope-cy58cpqa.js";import"./useDescription-DLpMLpdo.js";import"./useControlledState-Cfljn82m.js";import"./context-DJEOAlPc.js";import"./Text-D0Jo9yin.js";import"./inertValue-BNVYFeaG.js";import"./useListState-BAtHj7HO.js";import"./useHighlightSelectionDescription-s_bJWLIJ.js";import"./useUpdateEffect-BglXX1JD.js";import"./useLocalizedStringFormatter-BZwtBxRW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-w1cclgLQ.js";import"./useField-CO0ow9Zu.js";import"./clsx-Ciqy0D92.js";import"./Button-D2RrfULL.js";import"./Button.module-CcWMkJAG.js";import"./x-uvMThtlG.js";import"./createLucideIcon-D_qvwBi3.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
