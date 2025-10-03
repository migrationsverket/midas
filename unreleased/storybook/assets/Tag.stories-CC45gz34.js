import{j as a}from"./iframe-DJAtSOrl.js";import{T as o,a as i,s as D}from"./Tag-BKPOg9IN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ChKbmLCT.js";import"./utils-Bh3DoOXp.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRaiPwID.js";import"./useFocusRing-NRp7e_Vz.js";import"./index-7TeJxRNw.js";import"./index-C6jVk-uY.js";import"./useLabels-B3PCY7Pz.js";import"./useButton-DusDIBcA.js";import"./Collection-Dyr2zU0Z.js";import"./index-DT0cZQ2-.js";import"./ListBox-HpHRhjXg.js";import"./DragAndDrop-bowlhICl.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BgRZHHJy.js";import"./SelectionManager-Bh9L-l0m.js";import"./useEvent-4w1oSQmw.js";import"./FocusScope-C_lXvz8N.js";import"./useDescription-CrMUVUZu.js";import"./useControlledState-CN6KxcNi.js";import"./context-DxAlHtST.js";import"./Text-Bj_UNgNM.js";import"./inertValue-CbTu-siv.js";import"./useListState-DgbCy_n4.js";import"./useHighlightSelectionDescription-DPkuS6N0.js";import"./useUpdateEffect-CBp5Ld2c.js";import"./useLocalizedStringFormatter-DI0deIlQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-COYrKi9G.js";import"./useField-BsQnCuBK.js";import"./clsx-Ciqy0D92.js";import"./Button-DRf7HZi3.js";import"./Button.module-DRhvPh0f.js";import"./x-BaBGpQOs.js";import"./createLucideIcon-DlZGWzQL.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
