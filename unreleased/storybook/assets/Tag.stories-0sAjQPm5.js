import{j as a}from"./iframe-LmtyvVxW.js";import{T as o,a as i,s as D}from"./Tag-COkLVh07.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DWgJTq8v.js";import"./utils-BM2MYLln.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0nkbJWz.js";import"./useFocusRing-mCS4avcZ.js";import"./index-lUogjaLo.js";import"./index-DziwUmlz.js";import"./useLabels-O7W2F-cZ.js";import"./useButton-pg_MM66x.js";import"./Collection-BYb0xKHw.js";import"./index-DaJpiOgH.js";import"./ListBox-CgfxMJM6.js";import"./DragAndDrop-7_UVMkqh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CbqL5i0i.js";import"./SelectionManager-DUK-hnKO.js";import"./useEvent-BK_Pud7O.js";import"./FocusScope-Dj8n5FoC.js";import"./useDescription-iGPMGeje.js";import"./useControlledState-24ogAR4t.js";import"./context-CoRegpw-.js";import"./Text-Dc6Jy17-.js";import"./inertValue-DbMCe7wf.js";import"./useListState-CTOn7WGx.js";import"./useHighlightSelectionDescription-DZ2SDxLb.js";import"./useUpdateEffect-BImKTk7n.js";import"./useLocalizedStringFormatter-CAKM-uXA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D9_9CgM7.js";import"./useField-Dnyp5JqK.js";import"./clsx-Ciqy0D92.js";import"./Button-TLzp0gOG.js";import"./Button.module-CcWMkJAG.js";import"./x-37Zys_Lj.js";import"./createLucideIcon-CYD91O0M.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
