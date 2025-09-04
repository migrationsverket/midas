import{j as a}from"./iframe-Cvnzvodd.js";import{T as o,a as i,s as D}from"./Tag-gAeu1dqO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CkHFmjcG.js";import"./utils-BCcKEs0G.js";import"./clsx-B-dksMZM.js";import"./Hidden-D_Odxks3.js";import"./useFocusRing-C6XS7cSf.js";import"./index-DquUEUZr.js";import"./index-1n4Uju3l.js";import"./useLabels-DiNfhAws.js";import"./useButton-D2B7BZv9.js";import"./Collection-CGlomrSb.js";import"./index-C-tBSr03.js";import"./ListBox-CX0qMGVe.js";import"./DragAndDrop-0dBOJ3wp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BXDEHoUM.js";import"./SelectionManager-BrQGeSPc.js";import"./useEvent-R2-oA1yM.js";import"./FocusScope-vSx4NMAH.js";import"./useDescription-B_eihw9Z.js";import"./useControlledState-loRcvmvH.js";import"./ListKeyboardDelegate-CVQvJkuZ.js";import"./Text-DRZm250z.js";import"./inertValue-CEm880vw.js";import"./useListState-Bfh8rZs0.js";import"./useHighlightSelectionDescription-DOaNeJZA.js";import"./useUpdateEffect-BLi70A_M.js";import"./useLocalizedStringFormatter-DRr1rpMT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DHDape3U.js";import"./useField-vELYm1H9.js";import"./Button-BZVHYJvQ.js";import"./Button.module-CF2bVDCq.js";import"./x-BI8d9ogK.js";import"./createLucideIcon-hFdpAqKf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
