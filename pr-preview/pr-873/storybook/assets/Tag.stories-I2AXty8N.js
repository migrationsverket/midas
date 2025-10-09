import{j as a}from"./iframe-Bx0y_hZI.js";import{T as o,a as i,s as D}from"./Tag-CAlTEpXA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-udRKHCrk.js";import"./utils-DAZ9gyj-.js";import"./clsx-B-dksMZM.js";import"./Hidden-AP42aOv5.js";import"./useFocusRing-CMfkT0k9.js";import"./index-Iw44YVkD.js";import"./index-_paGpl9S.js";import"./useLabels-DcsOQAhb.js";import"./useButton-dGUEcizV.js";import"./Collection-0NGcEHWW.js";import"./index-D2DIO1NQ.js";import"./ListBox-cks3MUYi.js";import"./DragAndDrop-hKoSIoPT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B_xsxTfu.js";import"./SelectionManager-qQzxwa7O.js";import"./useEvent-0QJMHOJU.js";import"./FocusScope-BmwGxGmT.js";import"./useDescription-D6tFyyo-.js";import"./useControlledState-ttdOuVt3.js";import"./context-COlZbL8H.js";import"./Text-C9hbfyV6.js";import"./inertValue-yH95Al-a.js";import"./useListState-9N_aG7nL.js";import"./useHighlightSelectionDescription-CGIkXCqs.js";import"./useUpdateEffect-B7fOez8t.js";import"./useLocalizedStringFormatter-Clfk4U1U.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CfcXsNGm.js";import"./useField-_NbGAX9p.js";import"./clsx-Ciqy0D92.js";import"./Button-vOgN4U6J.js";import"./Button.module-CcWMkJAG.js";import"./x-SNwXQSph.js";import"./createLucideIcon-DvJ-fGEo.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
