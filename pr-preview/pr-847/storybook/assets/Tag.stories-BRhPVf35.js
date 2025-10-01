import{j as a}from"./iframe-CDAZ34uy.js";import{T as o,a as i,s as D}from"./Tag-bVyHJo6V.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D4bAXa-X.js";import"./utils-BQDvJH32.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBlrqGKV.js";import"./useFocusRing-CHglryp9.js";import"./index-lSFwHyeb.js";import"./index-C9J6hktL.js";import"./useLabels-BaOaodb-.js";import"./useButton-DwiYAf8z.js";import"./Collection-0EENykbX.js";import"./index-CSZO48Wz.js";import"./ListBox-BZSD-4ne.js";import"./DragAndDrop-CvhnEufl.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-MJY3tWDF.js";import"./SelectionManager-BvX7e6rP.js";import"./useEvent-D15mWTNs.js";import"./FocusScope-B8Jd03Cn.js";import"./useDescription-OcAyeV9H.js";import"./useControlledState-WjJBc0Iz.js";import"./context-CQe-hW2q.js";import"./Text-BftVPc__.js";import"./inertValue-Ckzxed5g.js";import"./useListState-ClakhUDC.js";import"./useHighlightSelectionDescription-Cd5UB7Ry.js";import"./useUpdateEffect-D9q_12Td.js";import"./useLocalizedStringFormatter-C-Vu4aUR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C0pyLPTB.js";import"./useField-DzTPJ-fN.js";import"./Button-BYpefliX.js";import"./Button.module-DRhvPh0f.js";import"./x-B7KOGJVG.js";import"./createLucideIcon-BNRL6FEQ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
