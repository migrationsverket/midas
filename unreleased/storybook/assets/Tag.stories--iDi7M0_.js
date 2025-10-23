import{j as a}from"./iframe-0bTpPCGM.js";import{T as o,a as i,s as D}from"./Tag-HmkKCYEw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bd1Oe3I5.js";import"./utils-Da2NJRp3.js";import"./clsx-B-dksMZM.js";import"./Hidden-B12c-jHH.js";import"./useFocusRing-DXDYPE9I.js";import"./index-AGBSBIXB.js";import"./index-9aMKxSS9.js";import"./useLabels-CHdnNeEI.js";import"./useButton-CajSWL3f.js";import"./Collection-CMCc6tws.js";import"./index-poxWsy5L.js";import"./ListBox-UA94tVJl.js";import"./DragAndDrop-B5SEmos-.js";import"./getScrollParent-S4oXaH1q.js";import"./scrollIntoView-B-lToV_F.js";import"./Separator-Bi8y4i6c.js";import"./SelectionManager-DXfw7gpo.js";import"./useEvent-BJPfXi3S.js";import"./SelectionIndicator-YIpuCKJ-.js";import"./useDescription-Crl658Pc.js";import"./useControlledState-DTAv4OcK.js";import"./ListKeyboardDelegate-X3iduYCb.js";import"./RSPContexts-DbANyuWC.js";import"./Text-Bj_dIOrj.js";import"./inertValue-CpazA7Xm.js";import"./useListState-CCyHbFf5.js";import"./useHighlightSelectionDescription-C8dYU7eG.js";import"./useUpdateEffect-B2aEHTo9.js";import"./useLocalizedStringFormatter-DjmlPkcX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-wep6hjRn.js";import"./useField-To5pyPWJ.js";import"./clsx-Ciqy0D92.js";import"./Button-DmMS8iu3.js";import"./Button.module-CcWMkJAG.js";import"./x-CX3yvpLv.js";import"./createLucideIcon-BTHHFIdb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
