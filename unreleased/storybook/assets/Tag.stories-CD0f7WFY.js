import{j as a}from"./iframe-sAjp3CAf.js";import{T as o,a as i,s as D}from"./Tag-pCxXhlOF.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DkCmupU1.js";import"./utils-Dgy0B8z7.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7wYv5Ug.js";import"./useFocusRing-lQeypK0z.js";import"./index-DukhzYLr.js";import"./index-DI8BO7vv.js";import"./useLabels-DBgQvP7v.js";import"./useButton-Cv-bLbSa.js";import"./Collection-B195l5vC.js";import"./index-DmIPswjV.js";import"./ListBox-C7l-o5r8.js";import"./DragAndDrop-Dx24I-_2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-8UruE0hn.js";import"./SelectionManager-TLjw_M8T.js";import"./useEvent-B_0bIgry.js";import"./FocusScope-D_pKF77n.js";import"./useDescription-CVC3mpZR.js";import"./useControlledState-DWMDEww7.js";import"./context-KRGxDjrD.js";import"./Text-C31ORTqS.js";import"./inertValue-CSli_NrU.js";import"./useListState-BHpogo29.js";import"./useHighlightSelectionDescription-B-1rch21.js";import"./useUpdateEffect-BNzG7nkX.js";import"./useLocalizedStringFormatter-B771Hxk8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BKdarzOs.js";import"./useField-CCWpU9mL.js";import"./Button-BckGIegi.js";import"./Button.module-DRhvPh0f.js";import"./x-ZiU-uo2R.js";import"./createLucideIcon-blaAuS61.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
