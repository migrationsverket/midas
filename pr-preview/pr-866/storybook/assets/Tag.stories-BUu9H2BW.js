import{j as a}from"./iframe-iI286SVS.js";import{T as o,a as i,s as D}from"./Tag-4V5WoIPf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DS9zfnHk.js";import"./utils-DIsj5guN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BhNkmRDV.js";import"./useFocusRing-CkY4oXrl.js";import"./index-DVtWQV78.js";import"./index-DLZJ2YyP.js";import"./useLabels-BnotL2G0.js";import"./useButton-qynQARJy.js";import"./Collection-LICogLuh.js";import"./index-B_72AA5c.js";import"./ListBox-qI_RWjBK.js";import"./DragAndDrop-uz0Jn2-l.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BS4OAzbF.js";import"./SelectionManager-0GDUgfMo.js";import"./useEvent-CPhgnCZI.js";import"./FocusScope-C3axoWmL.js";import"./useDescription-CruCsUf0.js";import"./useControlledState-CIN4NgC8.js";import"./context-CFK84kdI.js";import"./Text-CpPkDz3R.js";import"./inertValue-SZNT_KW-.js";import"./useListState-DYELO2BA.js";import"./useHighlightSelectionDescription-BhfvXMUi.js";import"./useUpdateEffect-CbX1lTPU.js";import"./useLocalizedStringFormatter-Cw_H2mI3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BSuk-6pk.js";import"./useField-DDii3a21.js";import"./clsx-Ciqy0D92.js";import"./Button-Yzx6zM4f.js";import"./Button.module-CcWMkJAG.js";import"./x-0UFksOnX.js";import"./createLucideIcon-C-eLmYiC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
