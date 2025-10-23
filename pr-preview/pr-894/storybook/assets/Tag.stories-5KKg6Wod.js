import{j as a}from"./iframe-eh8mAhOf.js";import{T as o,a as i,s as D}from"./Tag-DIY1Auw9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-3YRCwqOe.js";import"./utils-BjmDDRvF.js";import"./clsx-B-dksMZM.js";import"./Hidden-BCl-ioj7.js";import"./useFocusRing-EcsuLChJ.js";import"./index-BsAkrju0.js";import"./index-ecooH8O-.js";import"./useLabels-BCKar6O9.js";import"./useButton-BHUcWVvH.js";import"./Collection-CiWoburO.js";import"./index-NAn2M6w_.js";import"./ListBox-BfGKkxxu.js";import"./DragAndDrop-DPGlMlET.js";import"./getScrollParent-D3sGm4CX.js";import"./scrollIntoView-B9q54VOH.js";import"./Separator-DuyHv74D.js";import"./SelectionManager-B6O0uCjd.js";import"./useEvent-DTSMQPYE.js";import"./SelectionIndicator-CDGT2L0H.js";import"./useDescription-ZLqideCZ.js";import"./useControlledState-CF9t1Cna.js";import"./ListKeyboardDelegate-Xw-9_8qy.js";import"./RSPContexts-B0INV8jV.js";import"./Text-DCmHA0AH.js";import"./inertValue-Yp7MTZpo.js";import"./useListState-D_wf_4yF.js";import"./useHighlightSelectionDescription-BO6JKO0f.js";import"./useUpdateEffect-BTNwkFMG.js";import"./useLocalizedStringFormatter-L9Wi1Mww.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D909QZpt.js";import"./useField-CYDhLsS5.js";import"./clsx-Ciqy0D92.js";import"./Button-CpOhuMOv.js";import"./Button.module-CcWMkJAG.js";import"./x-C1Xy0cyP.js";import"./createLucideIcon-DJMrtjwR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
