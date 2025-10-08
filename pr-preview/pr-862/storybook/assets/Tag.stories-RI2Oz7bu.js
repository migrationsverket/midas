import{j as a}from"./iframe-D6D3K-aQ.js";import{T as o,a as i,s as D}from"./Tag-C6V9M03H.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dutn2UJh.js";import"./utils-8NXnZt9D.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bnv0XruJ.js";import"./useFocusRing-BDdoqUbs.js";import"./index-B111u4e2.js";import"./index-CkH952uE.js";import"./useLabels-7CJ5XO9x.js";import"./useButton-CBuzLm6I.js";import"./Collection-BarC4WRT.js";import"./index-Bx8ZkdzW.js";import"./ListBox-BHRdsuEF.js";import"./DragAndDrop-D0TP5j6F.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D0JYxpFR.js";import"./SelectionManager-DCPdtUb2.js";import"./useEvent-BbiwRRw4.js";import"./FocusScope-HtELhbvT.js";import"./useDescription-DcLxz0oY.js";import"./useControlledState-DSMKeP6m.js";import"./context-CeqNEQ9w.js";import"./Text-CRwR8S11.js";import"./inertValue-DPhYL9WI.js";import"./useListState-B9iUmLA7.js";import"./useHighlightSelectionDescription-BVMTyrsQ.js";import"./useUpdateEffect-Blp1YTdd.js";import"./useLocalizedStringFormatter-B5_FKKgr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CXGjJKlD.js";import"./useField-C4B2WCZE.js";import"./clsx-Ciqy0D92.js";import"./Button-C89H8vUo.js";import"./Button.module-CcWMkJAG.js";import"./x-R9yZnylX.js";import"./createLucideIcon-ZlwLd3nc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
