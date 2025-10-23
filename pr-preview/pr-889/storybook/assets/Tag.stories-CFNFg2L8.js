import{j as a}from"./iframe-DCgk2n3e.js";import{T as o,a as i,s as D}from"./Tag-D53C0XHl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Igo_8sgR.js";import"./utils-BgepWSfX.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLsC-9zt.js";import"./useFocusRing-JcNxYSjR.js";import"./index-BelVOWl7.js";import"./index-DdMs7G1n.js";import"./useLabels-DpEvKIsW.js";import"./useButton-GAU2gu28.js";import"./Collection-4dmwBrCa.js";import"./index-B8YjlRe1.js";import"./ListBox-C2h6P_iP.js";import"./DragAndDrop-kxtAv2qZ.js";import"./getScrollParent-CSVt2OFZ.js";import"./scrollIntoView-AXaqx5N5.js";import"./Separator-B-duRIt_.js";import"./SelectionManager-Dkr-Ykny.js";import"./useEvent-BNjKvAU5.js";import"./SelectionIndicator-Bz6Z35EW.js";import"./useDescription-DtPUQbdF.js";import"./useControlledState-vTZXYnB5.js";import"./ListKeyboardDelegate-B3G15ezs.js";import"./RSPContexts-Bv0KnhJx.js";import"./Text-CEpcvsGp.js";import"./inertValue-BYURCGE0.js";import"./useListState-BrXHyb38.js";import"./useHighlightSelectionDescription-DNGVjKQ1.js";import"./useUpdateEffect-BccQQHJ3.js";import"./useLocalizedStringFormatter-DJAbfeft.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-COozSwF4.js";import"./useField-DdrS9c8x.js";import"./clsx-Ciqy0D92.js";import"./Button-KDoiKicv.js";import"./Button.module-CcWMkJAG.js";import"./x-BvMc6zuO.js";import"./createLucideIcon-BE-WrARe.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
