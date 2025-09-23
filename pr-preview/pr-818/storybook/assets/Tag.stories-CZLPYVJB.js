import{j as a}from"./iframe-DJ64flfV.js";import{T as o,a as i,s as D}from"./Tag-ZKgekyj-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BhotcUhA.js";import"./utils-jw-beISP.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxhFTz5r.js";import"./useFocusRing-Btu0c31g.js";import"./index-1l3j33Br.js";import"./index-BM8wob-n.js";import"./useLabels-CF6EDmg1.js";import"./useButton-BgxwXlzu.js";import"./Collection-CG2o_XNZ.js";import"./index-D9rHGgFG.js";import"./ListBox-BUjbvb5W.js";import"./DragAndDrop-BTxtVkxL.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CQ6Vydlj.js";import"./SelectionManager-DTeWKo73.js";import"./useEvent-BcIvIoZx.js";import"./FocusScope-Bnxv3Jo8.js";import"./useDescription-66yl3X_7.js";import"./useControlledState-DalP8lVo.js";import"./ListKeyboardDelegate-DXcMx3i4.js";import"./Text-CFnJulNz.js";import"./inertValue-CEnbZqIu.js";import"./useListState-kYqqH7MI.js";import"./useHighlightSelectionDescription-3dRJl0Lq.js";import"./useUpdateEffect-B1J0SLJ3.js";import"./useLocalizedStringFormatter-eVgEIyVJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BjtUuhYJ.js";import"./useField-CT-S3PE0.js";import"./Button-9poKZzuU.js";import"./Button.module-DRhvPh0f.js";import"./x-B1Vj0fwa.js";import"./createLucideIcon-BVEGUXvP.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
