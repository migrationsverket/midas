import{j as a}from"./iframe-CAJmKs3V.js";import{T as o,a as i,s as D}from"./Tag-B0u3XqRG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-FM25fIbA.js";import"./utils-3EJAlCWl.js";import"./clsx-B-dksMZM.js";import"./Hidden-BkNW_0Wy.js";import"./useFocusRing-D87Pun_L.js";import"./index-xPQ4mf9A.js";import"./index-CXkaHWWR.js";import"./useLabels--5UQ6pvu.js";import"./useButton-0YiKXlvF.js";import"./Collection-CUQXLpkZ.js";import"./index-Dv6wHXbi.js";import"./ListBox-DyWBWAAA.js";import"./DragAndDrop-DExtelm2.js";import"./getScrollParent-Bm-Z1ND7.js";import"./scrollIntoView-Dobvy4hP.js";import"./Separator-C7UHOn1B.js";import"./SelectionManager-C95AVMOi.js";import"./useEvent-12femKQ2.js";import"./SelectionIndicator-DkhrFKUS.js";import"./useDescription-Dl9t34EO.js";import"./useControlledState-UPnyjPAI.js";import"./ListKeyboardDelegate-QHVXFpwE.js";import"./RSPContexts-Byt3VTZ8.js";import"./Text-yDbSXUon.js";import"./inertValue-BwfotRTK.js";import"./useListState-CEi132wV.js";import"./useHighlightSelectionDescription-DMvtx1Gb.js";import"./useUpdateEffect-zdOUgAkc.js";import"./useLocalizedStringFormatter-gdZEuedA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-3wjulMCP.js";import"./useField-nY_WXMeY.js";import"./clsx-Ciqy0D92.js";import"./Button-w830SpP-.js";import"./Button.module-CcWMkJAG.js";import"./x-DqeBaAn8.js";import"./createLucideIcon-C2v2DPOU.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
