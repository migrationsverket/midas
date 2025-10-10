import{j as a}from"./iframe-B-ofqC-h.js";import{T as o,a as i,s as D}from"./Tag-BDm7Hk7i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-T9Nsr4gi.js";import"./utils-DxoKKY_-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CHhsn0-d.js";import"./useFocusRing-DET1TN2G.js";import"./index-DYBrUDZy.js";import"./index-DCWZB9oG.js";import"./useLabels-B_gXjHmx.js";import"./useButton-DU-sAn6v.js";import"./Collection-CN50Bts9.js";import"./index-Ch99QrGv.js";import"./ListBox-Cpyt5uPi.js";import"./DragAndDrop-Cos10cSp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-GOX4RZwQ.js";import"./SelectionManager-BolOecg_.js";import"./useEvent-Ii72zYm_.js";import"./FocusScope-BjM4Zfr5.js";import"./useDescription-Cr0kq0kE.js";import"./useControlledState-Nh3wwjvr.js";import"./context-Bt7Z3zbF.js";import"./Text-BdEPqTmC.js";import"./inertValue-Bf_591-a.js";import"./useListState-l0bMNxv2.js";import"./useHighlightSelectionDescription-D4sqCBB2.js";import"./useUpdateEffect-BNox3Qow.js";import"./useLocalizedStringFormatter-Dsiu3vq1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BeCUmEc5.js";import"./useField-a3Sy4JrS.js";import"./clsx-Ciqy0D92.js";import"./Button-mp68B1gs.js";import"./Button.module-CcWMkJAG.js";import"./x-Bn7--wxB.js";import"./createLucideIcon-BhFnu3TI.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
