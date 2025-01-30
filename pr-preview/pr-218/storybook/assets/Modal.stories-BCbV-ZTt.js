import{j as e}from"./jsx-runtime-DH9XN8A8.js";import{r as f,R as _}from"./index-v7USjxUg.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as l}from"./Button-ky_ey7R1.js";import{X as B}from"./x-EjRJSAKS.js";import{F as b}from"./Flex-BQBoSrq5.js";import{F as m}from"./FlexItem-a9usv6rk.js";import{S as H,I as S}from"./Select-Ctj5Rqxl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-cy0YQPBK.js";import"./useFocusable-CqyV9KfR.js";import"./Hidden-UyBzn3h3.js";import"./index-voQlCD4e.js";import"./createLucideIcon-CwPnNAnq.js";import"./ListBox-Dgd-qrsy.js";import"./Collection-8piRyjmC.js";import"./index-DrWyGVw-.js";import"./DragAndDrop-C6Riy_Nb.js";import"./Separator-Dtf2YJfv.js";import"./SelectionManager-BYD2QTVK.js";import"./FocusScope-G3ZLoSJ5.js";import"./context-DQYs1ISz.js";import"./useDescription-DUf1CfVo.js";import"./useControlledState-CKtJapZZ.js";import"./ListKeyboardDelegate-CXCmEo1-.js";import"./Text-DrJ9K20X.js";import"./useListState-DbBfC_EQ.js";import"./useField-B1pHB-Nx.js";import"./Dialog-CDeFJ-i8.js";import"./RSPContexts-DJmwAC-V.js";import"./PressResponder-ClJujesq.js";import"./useLocalizedStringFormatter-DLyzyrox.js";import"./VisuallyHidden-DuYW2rLE.js";import"./Form-6qhXXIxn.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BrZOWkl1.js";import"./chevron-down-BUsHYY-S.js";import"./TextField-C1ZJdY04.js";import"./TextField.module-BQ_LG1IS.js";const w='"../theme/tokens.css"',v='"Inter", sans-serif',q="#ffffff",P="#f2f2f2",R="_modal_1wq00_4",M="_modalHeader_1wq00_30",C="_modalBody_1wq00_39",N="_modalHeading_1wq00_45",a={tokens:w,display:v,white:q,gray10:P,modal:R,modalHeader:M,modalBody:C,modalHeading:N},p=({id:d,isOpen:r,onOpenChange:t,children:n,title:j,className:y,...I})=>{const s=f.useRef(null);f.useEffect(()=>{var o,u;r?(o=s.current)==null||o.showModal():(u=s.current)==null||u.close()},[r]);const O=()=>{var o;(o=s.current)==null||o.close(),t(!1)},c=d+"_heading";return e.jsxs("dialog",{id:d,ref:s,onCancel:()=>t(!1),className:F(a.modal,y),"aria-labelledby":c,...I,children:[e.jsx("div",{className:a.modalHeader,children:e.jsx(l,{onPress:()=>O(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:a.modalBody,children:[e.jsx("h2",{className:a.modalHeading,id:c,children:j}),n]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{id:{required:!0,tsType:{name:"string"},description:"Id for accessibility"},title:{required:!0,tsType:{name:"string"},description:"Heading for the modal window"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"State handler to toggle isOpen"}}};const Oe={component:p,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[r,t]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(p,{id:"modal",title:"Välj ärende",isOpen:r,onOpenChange:n=>t(n),children:e.jsxs(b,{fluid:!0,children:[e.jsx(m,{col:12,children:e.jsx(H,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(S,{children:n.name})})}),e.jsx(m,{col:12,children:e.jsx(l,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(m,{col:12,children:e.jsx(l,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const _e=["Default"];export{i as Default,_e as __namedExportsOrder,Oe as default};
