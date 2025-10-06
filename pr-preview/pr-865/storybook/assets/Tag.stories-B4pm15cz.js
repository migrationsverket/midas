import{j as a}from"./iframe-tQBIE4j8.js";import{T as o,a as i,s as D}from"./Tag-BEqU0eiv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-cTHOqBQw.js";import"./utils-DfJsa_vu.js";import"./clsx-B-dksMZM.js";import"./Hidden-B51IOYEp.js";import"./useFocusRing-Dv7qLLyF.js";import"./index-B2OgTjXa.js";import"./index-DTJYKAu6.js";import"./useLabels-Cu18zm15.js";import"./useButton-CghGmRUM.js";import"./Collection-CFHLNueh.js";import"./index-EBN9d1DQ.js";import"./ListBox-DpVzUv21.js";import"./DragAndDrop-3-YbvzZk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CkiS8dNR.js";import"./SelectionManager-CuRwS0nw.js";import"./useEvent-DH_Qu5Wc.js";import"./FocusScope-BBlbp848.js";import"./useDescription-DiN8muji.js";import"./useControlledState-DDkQYukV.js";import"./context-B6MKm9CW.js";import"./Text-BFf4c0dE.js";import"./inertValue-hzxbOPwf.js";import"./useListState-DK09oin8.js";import"./useHighlightSelectionDescription-CIwWUk4Q.js";import"./useUpdateEffect-DZxcEp3P.js";import"./useLocalizedStringFormatter-BdwDnnXz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D2p0gAFH.js";import"./useField-BC-ImWJz.js";import"./clsx-Ciqy0D92.js";import"./Button-1WDoLpNC.js";import"./Button.module-DRhvPh0f.js";import"./x-BBbU-ciE.js";import"./createLucideIcon-sFL0Vqco.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
