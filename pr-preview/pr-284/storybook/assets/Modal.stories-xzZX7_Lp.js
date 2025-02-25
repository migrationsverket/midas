import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as f,R as O}from"./index-BbAIUH2N.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as d}from"./Button-OalY2HqH.js";import{X as B}from"./x-Cu6J0Y2u.js";import{F as H}from"./Flex-BM7lDPc-.js";import{F as p}from"./FlexItem-Bx9rkH5V.js";import{S,I as b}from"./Select-BvJ9TdDY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Byufbxkw.js";import"./useFocusable-DvoOiisW.js";import"./Hidden-CwCDq9YD.js";import"./index-i7ZvCR4f.js";import"./createLucideIcon-8wDOqnHv.js";import"./ListBox-BRiObwYg.js";import"./Collection-ChKcjgL2.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dn2kyLST.js";import"./SelectionManager-CzRPRDMi.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./context-DFhOKXSg.js";import"./useDescription-Ct3UQeSC.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-D7ImecD0.js";import"./Text-EJwwmz-7.js";import"./useListState-BknR_olQ.js";import"./useField-BolKm6uG.js";import"./useLabels-CtxEn0bM.js";import"./Dialog-DPDS7TA5.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CrtAZkp7.js";import"./PressResponder-zWEAS-O-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./VisuallyHidden-DXoeczHE.js";import"./Form-Co3XUpyT.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CbLeL8Pk.js";import"./chevron-down-U1dNK9nR.js";import"./TextField-S3CNFpgh.js";import"./TextField.module-eTMcdoyU.js";const w='"../theme/tokens.css"',q='"Inter", sans-serif',v="#ffffff",P="#f2f2f2",V="_modal_1wq00_4",M="_modalHeader_1wq00_30",R="_modalBody_1wq00_39",C="_modalHeading_1wq00_45",i={tokens:w,display:q,white:v,gray10:P,modal:V,modalHeader:M,modalBody:R,modalHeading:C},m=({id:r,isOpen:s,onOpenChange:t,children:n,title:y,className:j,..._})=>{const a=f.useRef(null);f.useEffect(()=>{var o,u;s?(o=a.current)==null||o.showModal():(u=a.current)==null||u.close()},[s]);const I=()=>{var o;(o=a.current)==null||o.close(),t(!1)},c=r+"_heading";return e.jsxs("dialog",{id:r,ref:a,onCancel:()=>t(!1),className:F(i.modal,j),"aria-labelledby":c,..._,children:[e.jsx("div",{className:i.modalHeader,children:e.jsx(d,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:i.modalBody,children:[e.jsx("h2",{className:i.modalHeading,id:c,children:y}),n]})]})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"Id for accessibility",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Heading for the modal window",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the modal is open or not",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"State handler to toggle isOpen",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const Be={component:m,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},l={args:{},render:function(){const[s,t]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(m,{id:"modal",title:"Välj ärende",isOpen:s,onOpenChange:n=>t(n),children:e.jsxs(H,{fluid:!0,children:[e.jsx(p,{col:12,children:e.jsx(S,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(b,{children:n.name})})}),e.jsx(p,{col:12,children:e.jsx(d,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(p,{col:12,children:e.jsx(d,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const He=["Default"];export{l as Default,He as __namedExportsOrder,Be as default};
