import{j as a}from"./iframe-Dzy9hy4l.js";import{T as o,a as i,s as D}from"./Tag-CqyWiHXR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OY8Expnb.js";import"./utils-C0iEKdza.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ch9hKUZJ.js";import"./useFocusRing-RgPniExG.js";import"./index-Dhk8X4W_.js";import"./index-BYC5lzU2.js";import"./useLabels-5Q27vLXe.js";import"./useButton-CsIm97wX.js";import"./Collection-BTmXeJ8Z.js";import"./index-DmaZtL6M.js";import"./ListBox-BwZKhZZ-.js";import"./DragAndDrop-DxPkC5ES.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BOy60UKY.js";import"./SelectionManager-BRQLb4IF.js";import"./useEvent-C2su_ULi.js";import"./FocusScope-Q0u_FsAn.js";import"./useDescription--yBVT0ZO.js";import"./useControlledState-CJScFGOE.js";import"./context-CQagkUkT.js";import"./Text-Cb1R5zpO.js";import"./inertValue-BiJWgTAB.js";import"./useListState-L-WOrTMs.js";import"./useHighlightSelectionDescription-CnziClJD.js";import"./useUpdateEffect-C3lToCeq.js";import"./useLocalizedStringFormatter-CV1IB2Oz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D51yM137.js";import"./useField-CJ1AGaP0.js";import"./clsx-Ciqy0D92.js";import"./Button-Cw-811II.js";import"./Button.module-DRhvPh0f.js";import"./x-BFZodHSb.js";import"./createLucideIcon-94-YUKZW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
