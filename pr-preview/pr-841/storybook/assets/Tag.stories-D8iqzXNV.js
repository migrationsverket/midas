import{j as a}from"./iframe-Y_DjccHQ.js";import{T as o,a as i,s as D}from"./Tag-Bu52XGqs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CmQOXTbq.js";import"./utils-B69TGfDa.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlXiVsJJ.js";import"./useFocusRing-D__kEhyz.js";import"./index-6gxVwJD-.js";import"./index-B2_Vjczx.js";import"./useLabels-BBaxEgH7.js";import"./useButton-BvtzmwWD.js";import"./Collection-CUevtSwv.js";import"./index-CF6mX5IA.js";import"./ListBox-C9Opsycg.js";import"./DragAndDrop-DpwkM2cA.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CWWcsJAg.js";import"./SelectionManager-CC10FDEL.js";import"./useEvent-CBgE5-54.js";import"./FocusScope-DZnoS05a.js";import"./useDescription-MQLqtwMe.js";import"./useControlledState-DMs7rSlj.js";import"./context-biNfedgb.js";import"./Text-CVVxx-WX.js";import"./inertValue-bJk9Bkr7.js";import"./useListState-DWp4Wc03.js";import"./useHighlightSelectionDescription-DdpsX9JU.js";import"./useUpdateEffect-B3rAWdBz.js";import"./useLocalizedStringFormatter-NUX4zJn1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dx4se0jP.js";import"./useField-DjjJz5a2.js";import"./Button-JCaXUR34.js";import"./Button.module-DRhvPh0f.js";import"./x-DEz5k-Yf.js";import"./createLucideIcon-DbwO5t_G.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
