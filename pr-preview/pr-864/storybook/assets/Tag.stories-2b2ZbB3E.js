import{j as a}from"./iframe-CTCvLAHN.js";import{T as o,a as i,s as D}from"./Tag-De53BdHQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Va1LJXm9.js";import"./utils-BNspE_6v.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMnIYPvO.js";import"./useFocusRing-CkBCnc9a.js";import"./index-dY9rVSd3.js";import"./index-BwXGGGQc.js";import"./useLabels-D7s4i3H0.js";import"./useButton-kiH6VW9G.js";import"./Collection-CRTkmiwJ.js";import"./index-D-pXMd4Z.js";import"./ListBox-fFGslkwu.js";import"./DragAndDrop-CisCRJls.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-tDKe46Q_.js";import"./SelectionManager-6VIRsWhc.js";import"./useEvent-iojyJ_lh.js";import"./FocusScope-D4fvPA0_.js";import"./useDescription-DvyU4D-t.js";import"./useControlledState-Co84JHnA.js";import"./context-BkLCn_mN.js";import"./Text-prlolOBJ.js";import"./inertValue-7V85qjxL.js";import"./useListState-CG7Q2D77.js";import"./useHighlightSelectionDescription-DUJd8H9F.js";import"./useUpdateEffect-ZceHavU7.js";import"./useLocalizedStringFormatter-BvfcSP5K.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B0Q344T6.js";import"./useField-BLCoksn0.js";import"./clsx-Ciqy0D92.js";import"./Button-4907tBE5.js";import"./Button.module-DRhvPh0f.js";import"./x-DFzTriGC.js";import"./createLucideIcon-DjrEwtZZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
