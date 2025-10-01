import{j as a}from"./iframe-WGHWzm2L.js";import{T as o,a as i,s as D}from"./Tag-Dwmoc7ZF.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-obAhXA9q.js";import"./utils-BlzHN8Dy.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9wvVL_6.js";import"./useFocusRing-BE6gP33c.js";import"./index-BLb3sjry.js";import"./index-c1Q4JiMJ.js";import"./useLabels-DOoxGyWn.js";import"./useButton-MXVOBXgd.js";import"./Collection-D6mIClxe.js";import"./index-DZDO9XQW.js";import"./ListBox-D3gA-HN-.js";import"./DragAndDrop-m9TFhpxf.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bhf29fkJ.js";import"./SelectionManager-5SrfGaFu.js";import"./useEvent-sqreO1ov.js";import"./FocusScope-CZBA_cS1.js";import"./useDescription-Dq9ZSf5V.js";import"./useControlledState-DUjbUvff.js";import"./context-Dlenj6Mr.js";import"./Text-rsvJBBbG.js";import"./inertValue-HqSBWTT4.js";import"./useListState-BHqPMkYw.js";import"./useHighlightSelectionDescription-CvleUqAi.js";import"./useUpdateEffect-8m9S_8L8.js";import"./useLocalizedStringFormatter-DVwKy7Sk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-hI5TzDMM.js";import"./useField-VGCOphbh.js";import"./Button-8g6zPTEQ.js";import"./Button.module-DRhvPh0f.js";import"./x-BoRu6UUi.js";import"./createLucideIcon-R3L2mjzk.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
