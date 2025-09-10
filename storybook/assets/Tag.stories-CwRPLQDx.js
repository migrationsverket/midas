import{j as a}from"./iframe-Bdqu9UMr.js";import{T as o,a as i,s as D}from"./Tag-BO-psAx9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DYBTZaOc.js";import"./utils-DayZYmnU.js";import"./clsx-B-dksMZM.js";import"./Hidden-EA5FVCUF.js";import"./useFocusRing-CeP4urbj.js";import"./index-Dz9ewm1I.js";import"./index-bX8HjCLa.js";import"./useLabels-B0SMKdRg.js";import"./useButton-CHniXGgb.js";import"./Collection-DAvYrOBZ.js";import"./index-BchuxNxG.js";import"./ListBox-CQftPHik.js";import"./DragAndDrop-CHDSfqq-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CHPHGSCz.js";import"./SelectionManager-BPNTSnr9.js";import"./useEvent-Bp7HlmXv.js";import"./FocusScope-1VMD3Xw2.js";import"./useDescription-CcgBP6fW.js";import"./useControlledState-Ebn1sWlW.js";import"./ListKeyboardDelegate-DF250x5Z.js";import"./Text-DZnGrw0C.js";import"./inertValue-BO-thFgw.js";import"./useListState-BG3TsYkt.js";import"./useHighlightSelectionDescription-CwkhRNZn.js";import"./useUpdateEffect-j5cnkVPd.js";import"./useLocalizedStringFormatter-C2BIwcwa.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-fpMoBT1h.js";import"./useField-BGlqVa_B.js";import"./Button-LeSFOBTO.js";import"./Button.module-GuOSDIYz.js";import"./x-DRfrQVMf.js";import"./createLucideIcon-DTfLWIJy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
