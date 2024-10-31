import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{$ as z,a as L,b as k,c as V,d as b,e as U,f as K,g as W,h as v,i as X}from"./Dialog-Dq1NNyUA.js";import{a as P,c as E,$ as q,h as F,w as _,x as S,f as B,n as M,y as G,z as J}from"./useFocusable-VocBF6K7.js";import{r as o,R as c}from"./index-BwDkhjyp.js";import{B as g}from"./Button-CCh68vtV.js";import{X as Q}from"./x-BNls5wfR.js";import{F as y,a as $}from"./FlexItem-Cgct_4yi.js";import{T as Y}from"./TextArea-BU9SzzuO.js";import{$ as Z}from"./Heading-B_RXTI07.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-BFAFWwt3.js";import"./useControlledState-DEtK-NO6.js";import"./FocusScope-5QBoAiD_.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hidden-C_TSN0PF.js";import"./context-Cc6IY3a2.js";import"./getScrollParent-yMl4gzwT.js";import"./isScrollable-Bts8_1NI.js";import"./useLocalizedStringFormatter-BTb93L0a.js";import"./VisuallyHidden-DkAe6xi1.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-WuqQdmgs.js";import"./TextField-BMAcxfOS.js";import"./Form-CM4H1VDM.js";import"./triangle-alert-BkMwT_kE.js";let l=typeof document<"u"&&window.visualViewport;function ee(){let t=P(),[e,r]=o.useState(()=>t?{width:0,height:0}:w());return o.useEffect(()=>{let n=()=>{r(i=>{let s=w();return s.width===i.width&&s.height===i.height?i:s})};return l?l.addEventListener("resize",n):window.addEventListener("resize",n),()=>{l?l.removeEventListener("resize",n):window.removeEventListener("resize",n)}},[]),e}function w(){return{width:l&&(l==null?void 0:l.width)||window.innerWidth,height:l&&(l==null?void 0:l.height)||window.innerHeight}}function te(t,e,r){let{overlayProps:n,underlayProps:i}=z({...t,isOpen:e.isOpen,onClose:e.close},r);return L({isDisabled:!e.isOpen}),k(),o.useEffect(()=>{if(e.isOpen)return V([r.current])},[e.isOpen,r]),{modalProps:E(n),underlayProps:i}}const ae=o.createContext(null),O=o.createContext(null);function ne(t,e){if(o.useContext(O))return c.createElement(D,{...t,modalRef:e},t.children);let{isDismissable:n,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,children:x,isEntering:m,isExiting:h,UNSTABLE_portalContainer:T,shouldCloseOnInteractOutside:A,...H}=t;return c.createElement(I,{isDismissable:n,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,isEntering:m,isExiting:h,UNSTABLE_portalContainer:T,shouldCloseOnInteractOutside:A},c.createElement(D,{...H,modalRef:e},x))}const ie=o.forwardRef(ne);function re(t,e){[t,e]=q(t,e,ae);let r=o.useContext(b),n=U(t),i=t.isOpen!=null||t.defaultOpen!=null||!r?n:r,s=F(e),f=o.useRef(null),d=_(s,i.isOpen),x=_(f,i.isOpen),m=d||x||t.isExiting||!1,h=P();return!i.isOpen&&!m||h?null:c.createElement(se,{...t,state:i,isExiting:m,overlayRef:s,modalRef:f})}const I=o.forwardRef(re);function se({UNSTABLE_portalContainer:t,...e}){let r=e.modalRef,{state:n}=e,{modalProps:i,underlayProps:s}=te(e,n,r),f=S(e.overlayRef)||e.isEntering||!1,d=B({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:f,isExiting:e.isExiting,state:n}}),x=ee(),m={...d.style,"--visual-viewport-height":x.height+"px"};return c.createElement(K,{isExiting:e.isExiting,portalContainer:t},c.createElement("div",{...E(M(e),s),...d,style:m,ref:e.overlayRef,"data-entering":f||void 0,"data-exiting":e.isExiting||void 0},c.createElement(G,{values:[[O,{modalProps:i,modalRef:r,isExiting:e.isExiting,isDismissable:e.isDismissable}],[b,n]]},d.children)))}function D(t){let{modalProps:e,modalRef:r,isExiting:n,isDismissable:i}=o.useContext(O),s=o.useContext(b),f=o.useMemo(()=>J(t.modalRef,r),[t.modalRef,r]),d=F(f),x=S(d),m=B({...t,defaultClassName:"react-aria-Modal",values:{isEntering:x,isExiting:n,state:s}});return c.createElement("div",{...E(M(t),e),...m,ref:d,"data-entering":x||void 0,"data-exiting":n||void 0},i&&c.createElement(W,{onDismiss:s.close}),m.children)}const oe='"../../../theme/src/lib/tokens.css"',le='"Inter", sans-serif',de="#ffffff",ce="#f2f2f2",fe="_overlay_3n8f1_4",me="_modal_3n8f1_11",xe="_modalDialog_3n8f1_20",ue="_modalHeader_3n8f1_24",$e="_modalBody_3n8f1_30",u={tokens:oe,display:le,white:de,gray10:ce,overlay:fe,modal:me,modalDialog:xe,modalHeader:ue,modalBody:$e},pe=()=>{const t=c.useContext(b);return a.jsx("div",{className:u.modalHeader,children:a.jsx(g,{onPress:t.close,variant:"tertiary",icon:Q,iconPlacement:"right",children:"Stäng"})})},ge=({children:t,...e})=>a.jsx("div",{className:u.modalBody,...e,children:t}),N=({children:t,...e})=>a.jsx(I,{className:u.overlay,children:a.jsx(ie,{className:u.modal,children:a.jsx(X,{className:u.modalDialog,...e,children:t})})});try{v.displayName="DialogTrigger",v.__docgenInfo={description:"A DialogTrigger opens a dialog when a trigger element is pressed.",displayName:"DialogTrigger",props:{}}}catch{}const Ue={component:N,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},p={args:{},render:()=>a.jsxs(v,{children:[a.jsx(g,{children:"Öppna modal"}),a.jsx(N,{children:({close:t})=>a.jsxs(a.Fragment,{children:[a.jsx(pe,{}),a.jsxs(ge,{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a.jsx(y,{children:a.jsx($,{children:a.jsx(Z,{slot:"title",style:{margin:0},children:"Vill du avsluta uppdraget?"})})}),a.jsx(y,{children:a.jsx($,{children:a.jsx(Y,{autoFocus:!0,label:"Ange anledning",description:"Skriv anledning",maxCharacters:100})})}),a.jsxs(y,{children:[a.jsx($,{col:"auto",children:a.jsx(g,{onPress:t,children:"Spara korrespondens"})}),a.jsx($,{children:a.jsx(g,{onPress:t,variant:"secondary",children:"Avbryt"})})]})]})]})})]})};var j,C,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
                <Flex>
                  <FlexItem>
                    <Heading slot='title' style={{
                  margin: 0
                }}>
                      Vill du avsluta uppdraget?
                    </Heading>
                  </FlexItem>
                </Flex>
                <Flex>
                  <FlexItem>
                    <TextArea autoFocus label='Ange anledning' description='Skriv anledning' maxCharacters={100} />
                  </FlexItem>
                </Flex>
                <Flex>
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
