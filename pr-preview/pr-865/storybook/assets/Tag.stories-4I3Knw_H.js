import{j as a}from"./iframe-Bp8MQt0U.js";import{T as o,a as i,s as D}from"./Tag-l8mIKVDh.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CgsZ0VQr.js";import"./utils-gPMZxvHA.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-9AO8hU.js";import"./useFocusRing-B6d5ngx_.js";import"./index-96O8qLnn.js";import"./index-DSjF_NsC.js";import"./useLabels-Dqu6dTr_.js";import"./useButton-BZp3RqP-.js";import"./Collection-DThxq9yL.js";import"./index-JIjaOMxW.js";import"./ListBox-Yi3b5ChY.js";import"./DragAndDrop-LvPV74P4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BUTHYKMY.js";import"./SelectionManager-Brz4OQ71.js";import"./useEvent-DQnzYU65.js";import"./FocusScope-DiVpc3RN.js";import"./useDescription-D-qm7B0P.js";import"./useControlledState-DzmpGveb.js";import"./context-BXRNuldB.js";import"./Text-eY686aw6.js";import"./inertValue-vBYcxoeB.js";import"./useListState-D-ThsrO9.js";import"./useHighlightSelectionDescription-BhaoK2YT.js";import"./useUpdateEffect-D3m1mXTc.js";import"./useLocalizedStringFormatter-XPVhQsFY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CrcnPofx.js";import"./useField-nnAyb7M2.js";import"./clsx-Ciqy0D92.js";import"./Button-DHbAsOfH.js";import"./Button.module-CcWMkJAG.js";import"./x-eyQZI8nH.js";import"./createLucideIcon-X-iIvxIf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
