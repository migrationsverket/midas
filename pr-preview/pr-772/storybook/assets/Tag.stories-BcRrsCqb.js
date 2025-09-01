import{j as a}from"./iframe-B1Ln_6BK.js";import{T as o,a as i,s as D}from"./Tag-BuMPk86i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B5rSqXAI.js";import"./utils-BaCDDhvB.js";import"./clsx-B-dksMZM.js";import"./Hidden-x1sVAfDf.js";import"./useFocusRing-DPzPWGkm.js";import"./index-BBjK1mW0.js";import"./index-CiSljkbK.js";import"./useLabels-Byb-0e50.js";import"./useButton-IgbbXmnU.js";import"./Collection-GWAYTJrQ.js";import"./index-CIWF-vhY.js";import"./ListBox-q9KkDHjq.js";import"./DragAndDrop-DxeVIfwL.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DEym9c6S.js";import"./SelectionManager-Czr6YsDJ.js";import"./useEvent-Cl28tybm.js";import"./FocusScope-CNrafrSU.js";import"./useDescription-BnyrTuIO.js";import"./useControlledState-Chec2RE4.js";import"./ListKeyboardDelegate-DpQ7VTfX.js";import"./Text-Bg5zvPq8.js";import"./inertValue-k6PcVWkz.js";import"./useListState-VKPJakCw.js";import"./useHighlightSelectionDescription-oNl_TEBN.js";import"./useUpdateEffect-Ck5ApEHk.js";import"./useLocalizedStringFormatter-CFzF5SCS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CCK6lfI6.js";import"./useField-DMioO8QD.js";import"./Button-XOySptwn.js";import"./Button.module-CF2bVDCq.js";import"./x-__lri6CU.js";import"./createLucideIcon-Dju8plin.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
