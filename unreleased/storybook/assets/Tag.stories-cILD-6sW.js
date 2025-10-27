import{j as a}from"./iframe-DwOoIrkz.js";import{T as o,a as i,s as D}from"./Tag-CWCBGTSK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DWunpVFs.js";import"./utils-CElvAA5J.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6iTMwKP.js";import"./useFocusRing-B_Zn9aMj.js";import"./index-C4mNArTh.js";import"./index-BonVYpBO.js";import"./useLabels-DB5ZTPTm.js";import"./useButton-BQ80t2CT.js";import"./Collection-DucpfDaW.js";import"./index-BqZeZZu1.js";import"./ListBox-DPRcrbKt.js";import"./DragAndDrop-DxK5x37k.js";import"./getScrollParent-D2WY6g8s.js";import"./scrollIntoView-bNE7naCx.js";import"./Separator-DU3CQCq5.js";import"./SelectionManager-CiAqFsqe.js";import"./useEvent-DtqOZ8HG.js";import"./SelectionIndicator-BuFAEzDJ.js";import"./useDescription-jhyGc4K8.js";import"./useControlledState-Be3uombO.js";import"./ListKeyboardDelegate-9-hOLZFe.js";import"./RSPContexts-CLcaYVvw.js";import"./Text-BLHYYLVL.js";import"./inertValue-5mNlXAft.js";import"./useListState-7dA9Xs1Y.js";import"./useHighlightSelectionDescription-BS-M5qON.js";import"./useUpdateEffect-CgchB-Qs.js";import"./useLocalizedStringFormatter-sBv88FBO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CCNvz0mM.js";import"./useField-DbfNZ71g.js";import"./clsx-Ciqy0D92.js";import"./Button-82aB3QFe.js";import"./Button.module-CcWMkJAG.js";import"./x-B_S5oE0s.js";import"./createLucideIcon-IVpoXIt1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
