import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{C as O,a as t,b as a,c as e,d as q,e as R}from"./Card-jpQucVO4.js";import{e as u,u as X}from"./index-DtSMq7G1.js";import{B as i}from"./Button-C4euTuaw.js";import{c as G}from"./createLucideIcon-8wDOqnHv.js";import{X as M}from"./x-Cu6J0Y2u.js";import{L as g}from"./Link-feTdMEgX.js";import{T as r}from"./Text-BO1MQlio.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Button-646fE-tP.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./Heading-DmTsGMz3.js";import"./RSPContexts-CeCCo7XS.js";import"./Button.module-kL9Mhzoi.js";import"./Link-D1ga7JLI.js";import"./Text-D0cNLqf0.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=G("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),vn={component:O,title:"Components/Card",tags:["autodocs"]},o={args:{children:n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(e,{children:n.jsx(i,{variant:"icon",icon:j,children:"Redigera"})})]})},play:async({canvas:x,step:C})=>{await C("It should be possible to focus the button",async()=>{const s=x.getByText("Redigera");u(s).not.toHaveFocus(),await X.tab(),u(s).toHaveFocus()})}},c={args:{...o.args,horizontal:!0}},d={args:{children:n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsxs(e,{children:[n.jsx(i,{variant:"icon",icon:j,children:"Ändra"}),n.jsx(i,{variant:"icon",icon:M,children:"Avbryt"})]})]})}},m={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(q,{onPress:()=>{},children:n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})}),n.jsx(t,{children:n.jsxs(e,{children:[n.jsx(i,{variant:"icon",icon:j,children:"Ändra"}),n.jsx(i,{variant:"icon",icon:M,children:"Avbryt"})]})})]})}},p={args:{children:n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(e,{children:n.jsx(g,{href:"#",standalone:!0,stretched:!0,children:"Läs mer om det här"})})]})},play:async({canvas:x,step:C})=>{await C("It should be possible to focus the link",async()=>{const s=x.getByText("Läs mer om det här");u(s).not.toHaveFocus(),await X.tab(),u(s).toHaveFocus()})}},l={args:{style:{maxWidth:300},children:n.jsxs(n.Fragment,{children:[n.jsx(R,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(e,{children:n.jsx(g,{href:"#",standalone:!0,stretched:!0,children:"Läs mer om detta här"})})]})]})}},h={args:{style:{maxWidth:300},children:n.jsxs(t,{children:[n.jsx(a,{children:"Dina uppgifter"}),n.jsx(R,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(e,{children:n.jsx(g,{href:"#",standalone:!0,stretched:!0,children:"Läs mer om detta här"})})]})}};var N,f,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the button', async () => {
      const link = canvas.getByText('Redigera');
      expect(link).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(link).toHaveFocus();
    });
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var T,k,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    horizontal: true
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var b,y,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  }
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var L,P,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardActionArea onPress={() => {
        return;
      }}>
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
  }
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,W,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Link href='#' standalone stretched>
            Läs mer om det här
          </Link>
        </CardActions>
      </CardContent>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the link', async () => {
      const link = canvas.getByText('Läs mer om det här');
      expect(link).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(link).toHaveFocus();
    });
  }
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,F,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 300
    },
    children: <>
        <CardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg' alt='Ananas' />
        <CardContent>
          <CardTitle>Dina uppgifter</CardTitle>
          <Text>Namn: Namn Namnsson</Text>
          <CardActions>
            <Link href='#' standalone stretched>
              Läs mer om detta här
            </Link>
          </CardActions>
        </CardContent>
      </>
  }
}`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var E,S,z;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 300
    },
    children: <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <CardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg' alt='Ananas' />
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Link href='#' standalone stretched>
            Läs mer om detta här
          </Link>
        </CardActions>
      </CardContent>
  }
}`,...(z=(S=h.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const bn=["Example","Horizontal","WithActions","WithPrimaryAction","WithLink","WithImage","WithContainedImage"];export{o as Example,c as Horizontal,d as WithActions,h as WithContainedImage,l as WithImage,p as WithLink,m as WithPrimaryAction,bn as __namedExportsOrder,vn as default};
