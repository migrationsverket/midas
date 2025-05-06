import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{C as O,a as t,b as r,c as g,d as q,e as b,f as X}from"./Card-DGvS_VFa.js";import{e,u as C}from"./index-DtSMq7G1.js";import{B as d}from"./Button-BNGWilCe.js";import{c as G}from"./createLucideIcon-8wDOqnHv.js";import{X as M}from"./x-Cu6J0Y2u.js";import{T as s}from"./Text-BO1MQlio.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Button-C6eeUJZ7.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BH_mgHDo.js";import"./usePress-COtC8Zcb.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./Link-slNGPAHu.js";import"./arrow-right-DnGf4Axc.js";import"./Heading-DmTsGMz3.js";import"./RSPContexts-CeCCo7XS.js";import"./Button.module-kL9Mhzoi.js";import"./Text-D0cNLqf0.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=G("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),kn={component:O,title:"Components/Card",tags:["autodocs"]},c={args:{children:n.jsxs(t,{children:[n.jsx(r,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"}),n.jsx(g,{children:n.jsx(d,{variant:"icon",icon:j,children:"Redigera"})})]})}},p={args:{...c.args,horizontal:!0}},m={args:{children:n.jsxs(t,{children:[n.jsx(r,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"}),n.jsxs(g,{children:[n.jsx(d,{variant:"icon",icon:j,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the button",async()=>{const a=o.getByText("Avbryt");e(a).not.toHaveFocus(),await C.tab(),await C.tab(),e(a).toHaveFocus()})}},l={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(q,{onPress:()=>{},"data-testid":"card-action-area",children:n.jsxs(t,{children:[n.jsx(r,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})}),n.jsx(t,{children:n.jsxs(g,{children:[n.jsx(d,{variant:"icon",icon:j,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the primary action area",async()=>{const a=o.getByTestId("card-action-area");e(a).not.toHaveFocus(),await C.tab(),e(a).toHaveFocus()})}},u={args:{children:n.jsxs(t,{children:[n.jsx(b,{href:"#","data-testid":"card-link",children:n.jsx(r,{children:"Dina uppgifter"})}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the link",async()=>{const a=o.getByTestId("card-link");e(a).not.toHaveFocus(),await C.tab(),e(a).toHaveFocus()})}},h={args:{style:{maxWidth:300},children:n.jsxs(n.Fragment,{children:[n.jsx(X,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsxs(t,{children:[n.jsx(b,{href:"#","data-testid":"card-link",children:n.jsx(r,{children:"Dina uppgifter"})}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})]})}},x={args:{style:{maxWidth:300},children:n.jsxs(t,{children:[n.jsx(b,{href:"#","data-testid":"card-link",children:n.jsx(r,{children:"Dina uppgifter"})})," ",n.jsx(X,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})}};var v,y,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Button variant='icon' icon={Pen}>
            Redigera
          </Button>
        </CardActions>
      </CardContent>
  }
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var N,k,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    horizontal: true
  }
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var A,_,w;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Button variant='icon' icon={Pen}>
            Ändra
          </Button>
          <Button variant='icon' icon={X}>
            Avbryt
          </Button>
        </CardActions>
      </CardContent>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the button', async () => {
      const button = canvas.getByText('Avbryt');
      expect(button).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      await userEvent.tab();
      expect(button).toHaveFocus();
    });
  }
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var B,I,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardActionArea onPress={() => {
        return;
      }} data-testid='card-action-area'>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <CardActions>
            <Button variant='icon' icon={Pen}>
              Ändra
            </Button>
            <Button variant='icon' icon={X}>
              Avbryt
            </Button>
          </CardActions>
        </CardContent>
      </>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the primary action area', async () => {
      const button = canvas.getByTestId('card-action-area');
      expect(button).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(button).toHaveFocus();
    });
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var F,H,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: <CardContent>
        <CardLink href='#' data-testid='card-link'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the link', async () => {
      const link = canvas.getByTestId('card-link');
      expect(link).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(link).toHaveFocus();
    });
  }
}`,...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var D,L,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 300
    },
    children: <>
        <CardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg' alt='Ananas' />
        <CardContent>
          <CardLink href='#' data-testid='card-link'>
            <CardTitle>Dina uppgifter</CardTitle>
          </CardLink>
          <Text>Namn: Namn Namnsson</Text>
        </CardContent>
      </>
  }
}`,...(E=(L=h.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var S,z,R;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 300
    },
    children: <CardContent>
        <CardLink href='#' data-testid='card-link'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>{' '}
        <CardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg' alt='Ananas' />
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
  }
}`,...(R=(z=x.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const Tn=["Example","Horizontal","WithActions","WithPrimaryAction","WithLink","WithImage","WithContainedImage"];export{c as Example,p as Horizontal,m as WithActions,x as WithContainedImage,h as WithImage,u as WithLink,l as WithPrimaryAction,Tn as __namedExportsOrder,kn as default};
