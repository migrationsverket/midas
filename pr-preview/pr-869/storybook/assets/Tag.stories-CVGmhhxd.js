import{j as a}from"./iframe-CztrvGia.js";import{T as o,a as i,s as D}from"./Tag-CjJoZKPt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-1_WQ79uS.js";import"./utils-pIkrdXnq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNErzoi7.js";import"./useFocusRing-D-M7RDyy.js";import"./index-DKS3-DTq.js";import"./index-CJ5iuzcR.js";import"./useLabels-B3kx27ol.js";import"./useButton-DDJxqvvD.js";import"./Collection-RIi2HFqT.js";import"./index-BW1J6Lm3.js";import"./ListBox-7qg_fnVb.js";import"./DragAndDrop-DW-mQ7IS.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DL0v5F5V.js";import"./SelectionManager-BJCrdUvp.js";import"./useEvent-CHxrGubf.js";import"./FocusScope-DpE7-yKl.js";import"./useDescription-C2RVHy_C.js";import"./useControlledState-CTsRNJ-f.js";import"./context-Dum6_TiB.js";import"./Text-C8yZuQen.js";import"./inertValue-3UuwgJ_7.js";import"./useListState-CvwfM7-N.js";import"./useHighlightSelectionDescription-A1iUi3VG.js";import"./useUpdateEffect-D3bDezmQ.js";import"./useLocalizedStringFormatter-BMDtzVaw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Byf-bqMh.js";import"./useField-Bs9ZuBfC.js";import"./clsx-Ciqy0D92.js";import"./Button-D3a8jMSt.js";import"./Button.module-CcWMkJAG.js";import"./x-DgWgLpjP.js";import"./createLucideIcon-BYOPbRxc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
