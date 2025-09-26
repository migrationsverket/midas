import{j as a}from"./iframe-Ctlnl2U4.js";import{T as o,a as i,s as D}from"./Tag-CN8I48J7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OSHpO4G0.js";import"./utils-Df_uxVPo.js";import"./clsx-B-dksMZM.js";import"./Hidden-xe784bgM.js";import"./useFocusRing-CkS0CgUq.js";import"./index-CQ6owihx.js";import"./index-CuW6jeY2.js";import"./useLabels-Cs890SJ1.js";import"./useButton-DKFyYeyo.js";import"./Collection-DKjVpu_T.js";import"./index-CBaB2MnM.js";import"./ListBox-7BLooPEp.js";import"./DragAndDrop-DRGx73mb.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-56VnvZlf.js";import"./SelectionManager-CCMVQ8bK.js";import"./useEvent-okXs_g17.js";import"./FocusScope-vM3OiYou.js";import"./useDescription-CXIWcgpk.js";import"./useControlledState-D2WHtDz6.js";import"./ListKeyboardDelegate-CappHKFK.js";import"./Text-BXw3PgyD.js";import"./inertValue-Cdpq28ZY.js";import"./useListState-CbDNMZ0A.js";import"./useHighlightSelectionDescription-DcMBZpNN.js";import"./useUpdateEffect-DkyC61Cg.js";import"./useLocalizedStringFormatter-D81Fj72G.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bq7yHSuE.js";import"./useField-B1WHteUm.js";import"./Button-_LeWbovD.js";import"./Button.module-DRhvPh0f.js";import"./x-D-IR22X-.js";import"./createLucideIcon-DxOaowFd.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
