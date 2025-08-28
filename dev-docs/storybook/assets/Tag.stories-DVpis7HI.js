import{j as a}from"./iframe-DhAOCxVN.js";import{T as o,a as i,s as _}from"./Tag-B2DFFJfE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-U8vp_YZM.js";import"./utils-BzX55kZw.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgzyjEys.js";import"./useFocusRing-D9YfDeiq.js";import"./index-CRlzHYXR.js";import"./index-jZJUgnDE.js";import"./useLabels-mlo8aLYZ.js";import"./useButton-C6-4Qlv7.js";import"./Collection-BE5zUVNd.js";import"./index-CZeCO9Y2.js";import"./ListBox-KoFJA4Ip.js";import"./DragAndDrop-Ciey3sQZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DIP0wQ2T.js";import"./SelectionManager-DoRKjjHz.js";import"./useEvent-D_rLS3yW.js";import"./FocusScope-BscklGPH.js";import"./useDescription-BxVunDy9.js";import"./useControlledState-BqQl71pi.js";import"./ListKeyboardDelegate-B_9YaRgO.js";import"./Text-Df0xGPIV.js";import"./inertValue-4eDuFTet.js";import"./useListState-DSCwm8yU.js";import"./useField-Dx44f6us.js";import"./useHighlightSelectionDescription-DDJP49eo.js";import"./useUpdateEffect-OvTt5k04.js";import"./useLocalizedStringFormatter-8J_BHZbW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CkIjzbyh.js";import"./Button-DVb4cN1-.js";import"./Button.module-DKVuWS4g.js";import"./x-D7TLJ6QK.js";import"./createLucideIcon-BUNyOUb1.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
