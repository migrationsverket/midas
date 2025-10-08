import{j as a}from"./iframe-ChcYoqp0.js";import{T as o,a as i,s as D}from"./Tag-rdIfU1Az.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CNtiianZ.js";import"./utils-FAb_T-tI.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgEPPNTm.js";import"./useFocusRing-BV0DM0gs.js";import"./index-CS3J1VTA.js";import"./index-Ben3sRLH.js";import"./useLabels-Cc-mMV6O.js";import"./useButton-BREGaknK.js";import"./Collection-XXU3n9ay.js";import"./index-BBUGM01_.js";import"./ListBox-K4Y5ByCS.js";import"./DragAndDrop-Cb7iyEHe.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B9zBAfg8.js";import"./SelectionManager-B7RmVXow.js";import"./useEvent-CVYJxl0E.js";import"./FocusScope-D21DfXro.js";import"./useDescription-Ba72oDKG.js";import"./useControlledState-DJkD2lck.js";import"./context-CKiW0CJi.js";import"./Text-CdJbnvsV.js";import"./inertValue-tHyl3zj0.js";import"./useListState-Bl3XcKB3.js";import"./useHighlightSelectionDescription-DOMN1vrL.js";import"./useUpdateEffect-ea7XnZfl.js";import"./useLocalizedStringFormatter-B77bzjt3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-XBfKkKDw.js";import"./useField-Crmo2tZv.js";import"./clsx-Ciqy0D92.js";import"./Button-Ba7gXLh4.js";import"./Button.module-CcWMkJAG.js";import"./x-CJ4aAxfz.js";import"./createLucideIcon-CyelcNEh.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
