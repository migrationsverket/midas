import{j as a}from"./iframe-Bh-PPmGS.js";import{T as o,a as i,s as D}from"./Tag-D4EsTxLT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BonBGpVe.js";import"./utils-D7iVN16N.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFsrWfCY.js";import"./useFocusRing-arFH3Y1y.js";import"./index-D8CbSUoF.js";import"./index-C21N3f_K.js";import"./useLabels-CJhV026d.js";import"./useButton-BuWcdLm4.js";import"./Collection-B2YKZi2H.js";import"./index-BEkQnNnt.js";import"./ListBox-BYA20sH0.js";import"./DragAndDrop-BVgaM_bB.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CkGd4g7-.js";import"./SelectionManager-DGCoVqWE.js";import"./useEvent-D76uBe7f.js";import"./FocusScope-Bbspc2VZ.js";import"./useDescription-D8Qj675j.js";import"./useControlledState-UtmDGbt0.js";import"./ListKeyboardDelegate-C_3WlB9C.js";import"./Text-BSVwjOOE.js";import"./inertValue-QLVqN_GP.js";import"./useListState-DddBsay-.js";import"./useHighlightSelectionDescription-DIXWEvje.js";import"./useUpdateEffect-D5JSCAKU.js";import"./useLocalizedStringFormatter-7sGSn2Uj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D5ZEVAC5.js";import"./useField-CEe5PqX5.js";import"./Button-D3qQQocw.js";import"./Button.module-DRhvPh0f.js";import"./x-BzuPRbwG.js";import"./createLucideIcon-DT-29iCp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
