import{j as a}from"./iframe-a0FS4QyU.js";import{T as o,a as i,s as D}from"./Tag-BgfhjVFS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BOIdl3po.js";import"./utils-DPKa5B9T.js";import"./clsx-B-dksMZM.js";import"./Hidden-qd8aZ3ni.js";import"./useFocusRing-Bn1878ea.js";import"./index-Bqg6kbeB.js";import"./index-ChTgn-zT.js";import"./useLabels-vZJ2ec_3.js";import"./useButton-DMijhjZZ.js";import"./Collection-BNz0Fcax.js";import"./index-g8VWKr2i.js";import"./ListBox-Bx-i-1yx.js";import"./DragAndDrop-C3y4TM63.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BmFPpPnO.js";import"./SelectionManager-B7LYIAvY.js";import"./useEvent-CkRcqrnP.js";import"./FocusScope-q8rfgQ3h.js";import"./useDescription-DssS2vQT.js";import"./useControlledState-DEY0JUld.js";import"./ListKeyboardDelegate-BZwDcczz.js";import"./Text-DkJof6Gw.js";import"./inertValue-BiR_Owba.js";import"./useListState-vEFkgBP5.js";import"./useHighlightSelectionDescription-DqocHr3y.js";import"./useUpdateEffect-DryX-TI9.js";import"./useLocalizedStringFormatter-BD6qmHn1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CnSR3JR8.js";import"./useField-DfEkNzm3.js";import"./Button-D1jVPiTh.js";import"./Button.module-DRhvPh0f.js";import"./x-D6O-oakx.js";import"./createLucideIcon-CHo26Fg-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
