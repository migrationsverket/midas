import{j as a}from"./iframe-DgijPtEI.js";import{T as o,a as i,s as D}from"./Tag-CtDtAnl1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B95NdO-e.js";import"./utils-C5-8INr-.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bwzsay3-.js";import"./useFocusRing-B6PmAvW6.js";import"./index-CqkpYYeV.js";import"./index-UlmDt8OD.js";import"./useLabels-B4lrdRGX.js";import"./useButton-DBj2-ZSR.js";import"./Collection-BuXHV0m5.js";import"./index-Bi5ygGvw.js";import"./ListBox-C16UcQ3e.js";import"./DragAndDrop-BOlJ02Qa.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DkbBuPRL.js";import"./SelectionManager-DZNTlY9F.js";import"./useEvent-C-VYuJgw.js";import"./FocusScope-BzsVX6Aw.js";import"./useDescription-aAWaIQHU.js";import"./useControlledState-CZzf8Rfd.js";import"./context-DMjFEHMl.js";import"./Text-CGZNZY1A.js";import"./inertValue-Dvi9rbrn.js";import"./useListState-Cw-1JuJg.js";import"./useHighlightSelectionDescription-DuHZMdli.js";import"./useUpdateEffect-CT0TpHdB.js";import"./useLocalizedStringFormatter-B1Rj9uhw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bp6nfgLc.js";import"./useField-BOUZTfrx.js";import"./clsx-Ciqy0D92.js";import"./Button-DFyHJDJ5.js";import"./Button.module-CcWMkJAG.js";import"./x-BgF_4_ee.js";import"./createLucideIcon-CydkLz3Z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
