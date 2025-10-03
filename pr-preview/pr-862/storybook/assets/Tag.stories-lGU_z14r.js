import{j as a}from"./iframe-_O8oiJiD.js";import{T as o,a as i,s as D}from"./Tag-DeJaGh5W.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DCp4HFhb.js";import"./utils-CzWtKkat.js";import"./clsx-B-dksMZM.js";import"./Hidden-CWqvGdpG.js";import"./useFocusRing-DEdFTipY.js";import"./index-4_qaYFwD.js";import"./index-DBk7Vx73.js";import"./useLabels-CaY4jUvJ.js";import"./useButton-CuMszk3P.js";import"./Collection-C3m3DTvK.js";import"./index-D6VUCHzq.js";import"./ListBox-T8s5f9m0.js";import"./DragAndDrop-BHejv5cI.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-9kRT4XPD.js";import"./SelectionManager-DG19oC-j.js";import"./useEvent-CJXuMYsa.js";import"./FocusScope-bHxBWsqQ.js";import"./useDescription-DVM4g0p0.js";import"./useControlledState-C1-3t15G.js";import"./context-iwRguaM2.js";import"./Text-B8GfKjlk.js";import"./inertValue-D0weVSNA.js";import"./useListState-BQ9rlW6U.js";import"./useHighlightSelectionDescription-8K-zs47z.js";import"./useUpdateEffect-CESmQ8Xs.js";import"./useLocalizedStringFormatter-BV83HhSv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Ceqb8Y5p.js";import"./useField-BhoWwSUh.js";import"./clsx-Ciqy0D92.js";import"./Button-GUZnuX5A.js";import"./Button.module-DRhvPh0f.js";import"./x-DxRutKVA.js";import"./createLucideIcon-B-8wiU5S.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
