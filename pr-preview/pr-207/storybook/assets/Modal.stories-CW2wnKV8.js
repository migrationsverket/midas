import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as f,R as O}from"./index-ClcD9ViR.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as d}from"./Button-BB3MClES.js";import{X as B}from"./x-BaIpobvV.js";import{F as H}from"./Flex-Bl0Sqnwo.js";import{F as p}from"./FlexItem-yQJAfyjp.js";import{S,I as b}from"./Select-PhckAau2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-2KCD5_KE.js";import"./useFocusable-D_XT9yGL.js";import"./index-ZuzByk-F.js";import"./Hidden-BAsLqWFN.js";import"./createLucideIcon-DQK9Z80p.js";import"./ListBox-DGh8ahDr.js";import"./Collection-B-efTaNC.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-DA-Ld4HW.js";import"./Separator-0tySCNVb.js";import"./SelectionManager-DnXZ6a4a.js";import"./FocusScope-DET1Ddde.js";import"./context-dgBkp4xb.js";import"./useDescription-h6ucxGnb.js";import"./useControlledState-D4tkfNix.js";import"./ListKeyboardDelegate-D1r6xHoY.js";import"./Text-BU-eztOh.js";import"./Label-C8twjpZa.js";import"./useListState-D-u_TPDy.js";import"./Dialog-0tKFQKsB.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-kwyxQayG.js";import"./useLocalizedStringFormatter-HXVaNQBz.js";import"./VisuallyHidden-Q_EkBmK7.js";import"./Form-Co9Hp48n.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BP8IYww0.js";import"./chevron-down-CVNiYbvV.js";import"./TextField-DMtjTUXl.js";import"./TextField.module-B0Qpd840.js";const w='"../theme/tokens.css"',q='"Inter", sans-serif',v="#ffffff",P="#f2f2f2",V="_modal_1wq00_4",M="_modalHeader_1wq00_30",R="_modalBody_1wq00_39",C="_modalHeading_1wq00_45",l={tokens:w,display:q,white:v,gray10:P,modal:V,modalHeader:M,modalBody:R,modalHeading:C},m=({id:r,isOpen:s,onOpenChange:t,children:n,title:y,className:j,..._})=>{const a=f.useRef(null);f.useEffect(()=>{var o,u;s?(o=a.current)==null||o.showModal():(u=a.current)==null||u.close()},[s]);const I=()=>{var o;(o=a.current)==null||o.close(),t(!1)},c=r+"_heading";return e.jsxs("dialog",{id:r,ref:a,onCancel:()=>t(!1),className:F(l.modal,j),"aria-labelledby":c,..._,children:[e.jsx("div",{className:l.modalHeader,children:e.jsx(d,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:l.modalBody,children:[e.jsx("h2",{className:l.modalHeading,id:c,children:y}),n]})]})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"Id for accessibility",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Heading for the modal window",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the modal is open or not",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"State handler to toggle isOpen",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const Ie={component:m,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[s,t]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(m,{id:"modal",title:"Välj ärende",isOpen:s,onOpenChange:n=>t(n),children:e.jsxs(H,{fluid:!0,children:[e.jsx(p,{col:12,children:e.jsx(S,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(b,{children:n.name})})}),e.jsx(p,{col:12,children:e.jsx(d,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(p,{col:12,children:e.jsx(d,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal id='modal' title='Välj ärende' isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select label='Ärenden' placeholder='Hej' description='Välj ärende' items={[{
              id: 1,
              name: 'test'
            }]}>
                {item => <Item>{item.name}</Item>}
              </Select>
            </FlexItem>
            <FlexItem col={12}>
              <Button onPress={() => setIsOpen(false)}>Spara</Button>
            </FlexItem>
            <FlexItem col={12}>
              <Button variant='secondary' onPress={() => setIsOpen(false)}>
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </Modal>
      </>;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Oe=["Default"];export{i as Default,Oe as __namedExportsOrder,Ie as default};
