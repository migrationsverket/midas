import{j as a}from"./iframe-eYQXVo8G.js";import{T as o,a as i,s as D}from"./Tag-DXm5-bUg.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DkdZSf5J.js";import"./utils-BQ_RJUUG.js";import"./clsx-B-dksMZM.js";import"./Hidden-FcjDYLrl.js";import"./useFocusRing-CXnYE8ki.js";import"./index-hQBsYlWw.js";import"./index-BnQfmOPf.js";import"./useLabels-B74eSP3m.js";import"./useButton-BYBtb6yI.js";import"./Collection-C9ZH3_DI.js";import"./index-fWd1-fMW.js";import"./ListBox-DZPa7aFZ.js";import"./DragAndDrop-B5ZQVCjw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-1jgAMBlP.js";import"./SelectionManager-CihwnBKz.js";import"./useEvent-Di0sZ2cj.js";import"./FocusScope-D2DB1MGQ.js";import"./useDescription-COdb21vK.js";import"./useControlledState-B8FKZZAS.js";import"./ListKeyboardDelegate-BQIc8Yub.js";import"./Text-s_xia_vP.js";import"./inertValue-C2PcBdgR.js";import"./useListState-_aN02Y1u.js";import"./useHighlightSelectionDescription-4Uj4rNkU.js";import"./useUpdateEffect-CpArNmkx.js";import"./useLocalizedStringFormatter-DYdd3lYk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-4h1eXTwE.js";import"./useField-C6WU7R-Q.js";import"./Button-CNX9kZZQ.js";import"./Button.module-DRhvPh0f.js";import"./x-j7-DPmuL.js";import"./createLucideIcon-CEGHLgER.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
