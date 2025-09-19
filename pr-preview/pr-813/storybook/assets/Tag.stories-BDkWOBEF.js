import{j as a}from"./iframe-Or8otHCu.js";import{T as o,a as i,s as D}from"./Tag-DJKdaReg.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-JjSgEqCl.js";import"./utils-Cxq36VMi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRbYmBNp.js";import"./useFocusRing-BGb58ElY.js";import"./index-CIkzIznc.js";import"./index-C7pN8B2b.js";import"./useLabels-CdNXAesv.js";import"./useButton-Xl1Jtn8a.js";import"./Collection-DTaNw3SY.js";import"./index-VchGAk4l.js";import"./ListBox-t4m0WT0T.js";import"./DragAndDrop-BJAUTgc4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B-WA2lSn.js";import"./SelectionManager-CZRXDnM-.js";import"./useEvent-8sk1NiqP.js";import"./FocusScope-Ds5TFyKu.js";import"./useDescription-BgxNRiXJ.js";import"./useControlledState-CxIhWuaM.js";import"./ListKeyboardDelegate-DXL3uhXV.js";import"./Text-BJ-TJOIw.js";import"./inertValue-Dcn3dc6W.js";import"./useListState-DyCTvSRY.js";import"./useHighlightSelectionDescription-B8-JcqO_.js";import"./useUpdateEffect-ChLwBWNf.js";import"./useLocalizedStringFormatter-CjIU0By4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cyc2Cyl_.js";import"./useField-BkSHabvb.js";import"./Button-D2LolN9p.js";import"./Button.module-DRhvPh0f.js";import"./x-Dj_ik8rd.js";import"./createLucideIcon-BM7Zv95O.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
