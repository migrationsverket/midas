import{j as a}from"./iframe-j2Dx5Y-4.js";import{T as o,a as i,s as D}from"./Tag-BuXxdie3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CUyngJAg.js";import"./utils-B0nzNvVJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-b03d5gYU.js";import"./useFocusRing-PcupjTzU.js";import"./index-CCGVMPzG.js";import"./index-BIVv3bnj.js";import"./useLabels-CF2XNNk4.js";import"./useButton-BbysI9wS.js";import"./Collection-BbeZ8NYx.js";import"./index-CsQSz0DR.js";import"./ListBox-4_Mv-PRC.js";import"./DragAndDrop-BNdaRMtx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-fbQyXxHh.js";import"./SelectionManager-Bpw_6JRk.js";import"./useEvent-49HBqs5R.js";import"./FocusScope-nfrS-S4O.js";import"./useDescription-Cu2eG6Z_.js";import"./useControlledState-StBIZokn.js";import"./ListKeyboardDelegate-BlYGuF5L.js";import"./Text-BxSpdCwn.js";import"./inertValue-D2TP7Dss.js";import"./useListState-Bgm_3ACX.js";import"./useHighlightSelectionDescription-Dc7Oy0Zp.js";import"./useUpdateEffect-XplJPIln.js";import"./useLocalizedStringFormatter-DjjjWSji.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-It-itWiZ.js";import"./useField-DxXF3O-C.js";import"./Button-C_WAZy9A.js";import"./Button.module-DRhvPh0f.js";import"./x-mE1eLeIe.js";import"./createLucideIcon-1jcyqG0W.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
