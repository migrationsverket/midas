import{j as a}from"./iframe-Bu0edkk1.js";import{T as o,a as i,s as D}from"./Tag-BUuXmE4j.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DZUD6JHM.js";import"./utils-P5pCrlkF.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cy-wnvsm.js";import"./useFocusRing-BvfuzQcK.js";import"./index-BzuokvEO.js";import"./index-C-OPl8mS.js";import"./useLabels-BVH2pEss.js";import"./useButton-J9sB-tIK.js";import"./Collection-VYkhUniX.js";import"./index-DxijOz2P.js";import"./ListBox-DX3PV9Tz.js";import"./DragAndDrop-Dd8A7D7m.js";import"./getScrollParent-CtnKt4it.js";import"./scrollIntoView-6xOV_8cn.js";import"./Separator-LcSqSfs8.js";import"./SelectionManager-Bb5B3ruw.js";import"./useEvent-CBb9z0De.js";import"./SelectionIndicator-D6YKmJjv.js";import"./useDescription-Daey6Dgg.js";import"./useControlledState-BFzpUBbZ.js";import"./ListKeyboardDelegate-DqVVvnWZ.js";import"./RSPContexts-c-rUX23v.js";import"./Text-Crn_9PDS.js";import"./inertValue-BCw8Qc-V.js";import"./useListState-BYB1kRsP.js";import"./useHighlightSelectionDescription-DQ9WOoRZ.js";import"./useUpdateEffect-Bs6c31wI.js";import"./useLocalizedStringFormatter-AgRY3FRk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dn2CqxHb.js";import"./useField-slHzRnCn.js";import"./clsx-Ciqy0D92.js";import"./Button-Cq56q0aR.js";import"./Button.module-CcWMkJAG.js";import"./x-CbFDtFfX.js";import"./createLucideIcon-XJOJXQAU.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
