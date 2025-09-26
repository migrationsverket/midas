import{j as a}from"./iframe-BJVcPA_s.js";import{T as o,a as i,s as D}from"./Tag-wxEsgbbD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CrxaIQHr.js";import"./utils-Bunfn0tV.js";import"./clsx-B-dksMZM.js";import"./Hidden-IMPDPIgy.js";import"./useFocusRing-Wxkxjqut.js";import"./index-BYijIuPR.js";import"./index-D_uYC4ys.js";import"./useLabels-CIXekkOo.js";import"./useButton-BOT-mYKa.js";import"./Collection-CjhAMueu.js";import"./index-Csueesh4.js";import"./ListBox-3tBQkcL3.js";import"./DragAndDrop-DGBnO2jx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-J0f9SNR5.js";import"./SelectionManager-DpnP9IRj.js";import"./useEvent-YKPelCbB.js";import"./FocusScope-BZaXNKy2.js";import"./useDescription-Bn58eQ3q.js";import"./useControlledState-C13z05PR.js";import"./ListKeyboardDelegate-BsVP-wGH.js";import"./Text-RAx2kKy5.js";import"./inertValue-D1BKQ0LY.js";import"./useListState-CrYgXZd_.js";import"./useHighlightSelectionDescription-DUElxPC2.js";import"./useUpdateEffect-V6_eQBFC.js";import"./useLocalizedStringFormatter-BC9IP8iU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-TM22FkFB.js";import"./useField-CFaUlU9U.js";import"./Button-CLXoMrQg.js";import"./Button.module-DRhvPh0f.js";import"./x-BJs1gpL6.js";import"./createLucideIcon-7KXRseZf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
