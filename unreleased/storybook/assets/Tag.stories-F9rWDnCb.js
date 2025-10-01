import{j as a}from"./iframe-BS8k6GJT.js";import{T as o,a as i,s as D}from"./Tag-BUT-maWQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D1kQSpF4.js";import"./utils-Cjg4EhUW.js";import"./clsx-B-dksMZM.js";import"./Hidden-BRplMcK9.js";import"./useFocusRing-CLE6NKoQ.js";import"./index-BAGrBU-R.js";import"./index-DHV-9xE6.js";import"./useLabels-BfXhbUoh.js";import"./useButton-DNSxgy0Q.js";import"./Collection-Co5xEZk-.js";import"./index-Bi1ka4TO.js";import"./ListBox-B7RYQ1eb.js";import"./DragAndDrop-DH5zR4vw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-7Y92xqha.js";import"./SelectionManager-BWevWy6X.js";import"./useEvent--OBkwZ2e.js";import"./FocusScope-B-vJboU2.js";import"./useDescription-E5tbc17N.js";import"./useControlledState-DaaX2bZU.js";import"./context-BFcIpQPF.js";import"./Text-DIYgl6aV.js";import"./inertValue--J8jY3_T.js";import"./useListState-CwloI40m.js";import"./useHighlightSelectionDescription-rqJiCzuW.js";import"./useUpdateEffect-C00qUJYz.js";import"./useLocalizedStringFormatter-CLjxu96y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BVe2OaWa.js";import"./useField-99XM0jLU.js";import"./Button-Dyoq_HiH.js";import"./Button.module-DRhvPh0f.js";import"./x-BtCjRXdp.js";import"./createLucideIcon-BfOaotPg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
