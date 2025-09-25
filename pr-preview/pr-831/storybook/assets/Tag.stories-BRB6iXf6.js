import{j as a}from"./iframe-DW_CkBZz.js";import{T as o,a as i,s as D}from"./Tag-CftvQi2F.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CzUoLe9j.js";import"./utils-C6qXboJG.js";import"./clsx-B-dksMZM.js";import"./Hidden-alpoAHDf.js";import"./useFocusRing-BqgvACUp.js";import"./index-BQzIfPhr.js";import"./index-BiuWtp_q.js";import"./useLabels-CK5hJrqE.js";import"./useButton-B4RGy-eY.js";import"./Collection-Db7kuJaK.js";import"./index-Ch8xwKDW.js";import"./ListBox-B5UAyIhT.js";import"./DragAndDrop-Bz3asWGK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bh0ycqnF.js";import"./SelectionManager-DCy-_d0k.js";import"./useEvent-3cFIOO2d.js";import"./FocusScope-DHhHqlE_.js";import"./useDescription-YalU6O0b.js";import"./useControlledState-BIfeXPFC.js";import"./context-CV7wLdlQ.js";import"./Text-W-Pgs0fE.js";import"./inertValue-D0BixVB2.js";import"./useListState-D7xxC2Yf.js";import"./useHighlightSelectionDescription-3Gt-CZsw.js";import"./useUpdateEffect-j5CBJ0Np.js";import"./useLocalizedStringFormatter-CUp2U0s4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DgDYxhcS.js";import"./useField-Bog9kk3B.js";import"./Button-CsCii_za.js";import"./Button.module-DRhvPh0f.js";import"./x-BnfGXi6j.js";import"./createLucideIcon-DPxzewqu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
