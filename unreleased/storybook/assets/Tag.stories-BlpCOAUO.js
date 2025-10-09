import{j as a}from"./iframe-cV7iWBUq.js";import{T as o,a as i,s as D}from"./Tag-CEoYpGeH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BTIOZgVu.js";import"./utils-DmmWNkPl.js";import"./clsx-B-dksMZM.js";import"./Hidden-EeoTX1Xf.js";import"./useFocusRing-C9G08R9C.js";import"./index-Daq33_U0.js";import"./index-ObMiyiqn.js";import"./useLabels-Bc00YZJZ.js";import"./useButton-CIvSn0vN.js";import"./Collection-Crg7qUQG.js";import"./index-BLws_JGS.js";import"./ListBox-B_clIDiP.js";import"./DragAndDrop-DRGA-Xbq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BeUoo5-i.js";import"./SelectionManager-eQYaj-7g.js";import"./useEvent-B7u9jb4p.js";import"./FocusScope-Cgo8nggm.js";import"./useDescription-CVRXcI9v.js";import"./useControlledState-Bd6sxFHM.js";import"./context-CPq6wxib.js";import"./Text-Q62xu10P.js";import"./inertValue-SsQxQPS1.js";import"./useListState-evFMm54p.js";import"./useHighlightSelectionDescription-Bf3QrR-T.js";import"./useUpdateEffect-D7SULKDZ.js";import"./useLocalizedStringFormatter-C2enHCvo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BH0QHoyS.js";import"./useField-CRlsSJZ1.js";import"./clsx-Ciqy0D92.js";import"./Button-FmH6XQa6.js";import"./Button.module-CcWMkJAG.js";import"./x-DWsN-yq2.js";import"./createLucideIcon-DRQFedUA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
