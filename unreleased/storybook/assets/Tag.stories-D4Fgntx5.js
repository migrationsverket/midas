import{j as a}from"./iframe-OkBOcMPf.js";import{T as o,a as i,s as D}from"./Tag-BaAXvrje.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Djx-9JAP.js";import"./utils-D-ad6UcE.js";import"./clsx-B-dksMZM.js";import"./Hidden-B2-8jJat.js";import"./useFocusRing-C4TMc-Ee.js";import"./index-BLS7TgMi.js";import"./index-D0ACdGpR.js";import"./useLabels-fZsJP-db.js";import"./useButton-C-aHHepv.js";import"./Collection-DPhk3Ptr.js";import"./index-D804e3qw.js";import"./ListBox-BySViZXN.js";import"./DragAndDrop-DkMUV7Gd.js";import"./getScrollParent-DXC29U46.js";import"./scrollIntoView-4jd3PBSD.js";import"./Separator-1ft8HSAg.js";import"./SelectionManager-DWce3544.js";import"./useEvent-BoDyXoms.js";import"./SelectionIndicator-BUXckFAz.js";import"./useDescription-Dga9Z989.js";import"./useControlledState-CWG6nHrm.js";import"./ListKeyboardDelegate-BmCG56H8.js";import"./RSPContexts-C8f8WS5O.js";import"./Text-CXV2Uvnx.js";import"./inertValue-DmGU9GVR.js";import"./useListState-DFK3Aaos.js";import"./useHighlightSelectionDescription-CvukVUU3.js";import"./useUpdateEffect-ncEkz6BA.js";import"./useLocalizedStringFormatter-DLLcu3FT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DDyGRfOU.js";import"./useField-DcXQR_KJ.js";import"./clsx-Ciqy0D92.js";import"./Button-BhHl2AzB.js";import"./Button.module-CcWMkJAG.js";import"./x-BtJH-2NS.js";import"./createLucideIcon-COOZTzu9.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
