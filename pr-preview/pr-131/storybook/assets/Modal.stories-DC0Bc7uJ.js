import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{$ as z,a as L,b as k,c as V,d as b,e as U,f as K,g as W,h as v,i as X}from"./Dialog-V38XWmyV.js";import{a as P,c as E,$ as q,h as F,w as _,x as S,f as B,m as M,y as G,z as J}from"./useFocusable-C6jNUHDg.js";import{r as o,R as c}from"./index-BwDkhjyp.js";import{B as g}from"./Button-CnUdlKT0.js";import{X as Q}from"./x-BNls5wfR.js";import{F as y,a as $}from"./FlexItem-DJyBMUzl.js";import{T as Y}from"./TextArea-DepHYOSL.js";import{$ as Z}from"./Heading-BUu5Jmst.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-DzwvMiQH.js";import"./useControlledState-DdsvHRJJ.js";import"./FocusScope-BobShdvL.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hidden-BdIcpH7f.js";import"./context-CkJ-GuNh.js";import"./getScrollParent-yMl4gzwT.js";import"./isScrollable-Bts8_1NI.js";import"./useLocalizedStringFormatter-B6EHV5sq.js";import"./VisuallyHidden-tzU1VrE-.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-WuqQdmgs.js";import"./TextField-B5IzZwet.js";import"./Form-CCYym-J0.js";import"./triangle-alert-BkMwT_kE.js";let l=typeof document<"u"&&window.visualViewport;function ee(){let t=P(),[e,r]=o.useState(()=>t?{width:0,height:0}:w());return o.useEffect(()=>{let a=()=>{r(i=>{let s=w();return s.width===i.width&&s.height===i.height?i:s})};return l?l.addEventListener("resize",a):window.addEventListener("resize",a),()=>{l?l.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function w(){return{width:l&&(l==null?void 0:l.width)||window.innerWidth,height:l&&(l==null?void 0:l.height)||window.innerHeight}}function te(t,e,r){let{overlayProps:a,underlayProps:i}=z({...t,isOpen:e.isOpen,onClose:e.close},r);return L({isDisabled:!e.isOpen}),k(),o.useEffect(()=>{if(e.isOpen)return V([r.current])},[e.isOpen,r]),{modalProps:E(a),underlayProps:i}}const ne=o.createContext(null),O=o.createContext(null);function ae(t,e){if(o.useContext(O))return c.createElement(D,{...t,modalRef:e},t.children);let{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,children:u,isEntering:m,isExiting:h,UNSTABLE_portalContainer:T,shouldCloseOnInteractOutside:A,...H}=t;return c.createElement(I,{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,isEntering:m,isExiting:h,UNSTABLE_portalContainer:T,shouldCloseOnInteractOutside:A},c.createElement(D,{...H,modalRef:e},u))}const ie=o.forwardRef(ae);function re(t,e){[t,e]=q(t,e,ne);let r=o.useContext(b),a=U(t),i=t.isOpen!=null||t.defaultOpen!=null||!r?a:r,s=F(e),f=o.useRef(null),d=_(s,i.isOpen),u=_(f,i.isOpen),m=d||u||t.isExiting||!1,h=P();return!i.isOpen&&!m||h?null:c.createElement(se,{...t,state:i,isExiting:m,overlayRef:s,modalRef:f})}const I=o.forwardRef(re);function se({UNSTABLE_portalContainer:t,...e}){let r=e.modalRef,{state:a}=e,{modalProps:i,underlayProps:s}=te(e,a,r),f=S(e.overlayRef)||e.isEntering||!1,d=B({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:f,isExiting:e.isExiting,state:a}}),u=ee(),m={...d.style,"--visual-viewport-height":u.height+"px"};return c.createElement(K,{isExiting:e.isExiting,portalContainer:t},c.createElement("div",{...E(M(e),s),...d,style:m,ref:e.overlayRef,"data-entering":f||void 0,"data-exiting":e.isExiting||void 0},c.createElement(G,{values:[[O,{modalProps:i,modalRef:r,isExiting:e.isExiting,isDismissable:e.isDismissable}],[b,a]]},d.children)))}function D(t){let{modalProps:e,modalRef:r,isExiting:a,isDismissable:i}=o.useContext(O),s=o.useContext(b),f=o.useMemo(()=>J(t.modalRef,r),[t.modalRef,r]),d=F(f),u=S(d),m=B({...t,defaultClassName:"react-aria-Modal",values:{isEntering:u,isExiting:a,state:s}});return c.createElement("div",{...E(M(t),e),...m,ref:d,"data-entering":u||void 0,"data-exiting":a||void 0},i&&c.createElement(W,{onDismiss:s.close}),m.children)}const oe='"../../../theme/src/lib/tokens.css"',le='"Inter", sans-serif',de="#ffffff",ce="#f2f2f2",fe="_overlay_3n8f1_4",me="_modal_3n8f1_11",ue="_modalDialog_3n8f1_20",xe="_modalHeader_3n8f1_24",$e="_modalBody_3n8f1_30",x={tokens:oe,display:le,white:de,gray10:ce,overlay:fe,modal:me,modalDialog:ue,modalHeader:xe,modalBody:$e},pe=()=>{const t=c.useContext(b);return n.jsx("div",{className:x.modalHeader,children:n.jsx(g,{onPress:t.close,variant:"tertiary",icon:Q,iconPlacement:"right",children:"Stäng"})})},ge=({children:t,...e})=>n.jsx("div",{className:x.modalBody,...e,children:t}),N=({children:t,...e})=>n.jsx(I,{className:x.overlay,children:n.jsx(ie,{className:x.modal,children:n.jsx(X,{className:x.modalDialog,...e,children:t})})});try{v.displayName="DialogTrigger",v.__docgenInfo={description:"A DialogTrigger opens a dialog when a trigger element is pressed.",displayName:"DialogTrigger",props:{}}}catch{}const Ue={component:N,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},p={args:{},render:()=>n.jsxs(v,{children:[n.jsx(g,{children:"Öppna modal"}),n.jsx(N,{children:({close:t})=>n.jsxs(n.Fragment,{children:[n.jsx(pe,{}),n.jsxs(ge,{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n.jsx(y,{fluid:!0,children:n.jsx($,{children:n.jsx(Z,{slot:"title",style:{margin:0},children:"Vill du avsluta uppdraget?"})})}),n.jsx(y,{fluid:!0,children:n.jsx($,{children:n.jsx(Y,{autoFocus:!0,label:"Ange anledning",description:"Skriv anledning",maxCharacters:100})})}),n.jsxs(y,{fluid:!0,children:[n.jsx($,{col:"auto",children:n.jsx(g,{onPress:t,children:"Spara korrespondens"})}),n.jsx($,{children:n.jsx(g,{onPress:t,variant:"secondary",children:"Avbryt"})})]})]})]})})]})};var j,C,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <DialogTrigger>
        <Button>Öppna modal</Button>
        <Modal>
          {({
          close
        }) => <>
              <ModalHeader />
              <ModalBody style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
                <Flex fluid={true}>
                  <FlexItem>
                    <Heading slot='title' style={{
                  margin: 0
                }}>
                      Vill du avsluta uppdraget?
                    </Heading>
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem>
                    <TextArea
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus label='Ange anledning' description='Skriv anledning' maxCharacters={100} />
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem col='auto'>
                    <Button onPress={close}>Spara korrespondens</Button>
                  </FlexItem>
                  <FlexItem>
                    <Button onPress={close} variant='secondary'>
                      Avbryt
                    </Button>
                  </FlexItem>
                </Flex>
              </ModalBody>
            </>}
        </Modal>
      </DialogTrigger>;
  }
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const Ke=["Default"];export{p as Default,Ke as __namedExportsOrder,Ue as default};
