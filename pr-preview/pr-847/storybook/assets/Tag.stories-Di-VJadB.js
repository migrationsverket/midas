import{j as a}from"./iframe-CHUNJ5G6.js";import{T as o,a as i,s as D}from"./Tag-TZ0Xg6cB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CND9srj8.js";import"./utils-DBw3wEa4.js";import"./clsx-B-dksMZM.js";import"./Hidden-GhdwbKab.js";import"./useFocusRing-DDCsJdPR.js";import"./index-BBMgQbEY.js";import"./index-DqE2rBGY.js";import"./useLabels-DxU-4pSq.js";import"./useButton-B_NQSce2.js";import"./Collection-DWvWbUIL.js";import"./index-Bi0IaTPr.js";import"./ListBox-Bq2-vqe1.js";import"./DragAndDrop-BvxVMsC2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BUXdo_MJ.js";import"./SelectionManager-CziSaZVk.js";import"./useEvent-C4pd5AMA.js";import"./FocusScope-Dkl_GQSZ.js";import"./useDescription-05wiUxbM.js";import"./useControlledState-BnBOE_zx.js";import"./context-D7oQ4sSn.js";import"./Text-DiOZ8mYL.js";import"./inertValue-DJHjw4Lo.js";import"./useListState-D0NHYFUX.js";import"./useHighlightSelectionDescription-DIzXs1oo.js";import"./useUpdateEffect-C4Ausi7I.js";import"./useLocalizedStringFormatter-CtUNO0sa.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BbB1_3-M.js";import"./useField-cgQ3Z2MA.js";import"./Button-BxfYqFke.js";import"./Button.module-DRhvPh0f.js";import"./x-ByvaO2__.js";import"./createLucideIcon-GlWxCKpe.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
