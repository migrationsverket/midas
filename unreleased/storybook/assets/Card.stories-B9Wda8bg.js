import{j as n}from"./iframe-C0qjnZQt.js";import{b as e,c as C,d as b,e as X,f as j,a as t,C as K}from"./Card--bbuad6f.js";import{c as U}from"./createLucideIcon-DSmXQr3a.js";import{X as M}from"./x-C4PXQM4X.js";import{T as r}from"./Text-DXZ0_ztv.js";import{B as d}from"./Button-Bk2KIYy4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button-B6lg9fpk.js";import"./utils-CwN9tP57.js";import"./Hidden-B1A_RSgm.js";import"./useFocusRing-D9qTVe5c.js";import"./index-DMYP8ta3.js";import"./index-CsGtJukt.js";import"./useLabels-By6CRBN6.js";import"./useButton-BCPQp4KX.js";import"./arrow-right-DQZSRVJU.js";import"./Heading-C_lnnJnQ.js";import"./RSPContexts-BymLFMOL.js";import"./Text-DSWkEYs0.js";import"./Button.module-CcWMkJAG.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],v=U("pen",Y),{expect:s,userEvent:g}=__STORYBOOK_MODULE_TEST__,gn={component:K,subcomponents:{CardContent:t,CardImage:j,CardActionArea:X,CardActions:b,CardLink:C,CardTitle:e},title:"Components/Card",tags:["autodocs"]},c={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(b,{children:n.jsx(d,{variant:"icon",icon:v,children:"Redigera"})})]})}},p={args:{...c.args,horizontal:!0}},m={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the button",async()=>{const a=o.getByText("Avbryt");s(a).not.toHaveFocus(),await g.tab(),await g.tab(),s(a).toHaveFocus()})}},l={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(X,{onPress:()=>{},"data-testid":"card-action-area",children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})}),n.jsx(t,{children:n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the primary action area",async()=>{const a=o.getByTestId("card-action-area");s(a).not.toHaveFocus(),await g.tab(),s(a).toHaveFocus()})}},u={args:{children:n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the link",async()=>{const a=o.getByTestId("card-link");s(a).not.toHaveFocus(),await g.tab(),s(a).toHaveFocus()})}},h={tags:["!snapshot"],args:{style:{maxWidth:300},children:n.jsxs(n.Fragment,{children:[n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})]})}},x={tags:["!snapshot"],args:{style:{maxWidth:300},children:n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})})," ",n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})}};var y,N,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var f,k,_;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    horizontal: true
  }
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var A,w,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,P,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(P=l.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var H,W,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,L,S;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!snapshot'],
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
}`,...(S=(L=h.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var z,O,R;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!snapshot'],
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
}`,...(R=(O=x.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Cn=["Example","Horizontal","WithActions","WithPrimaryAction","WithLink","WithImage","WithContainedImage"];export{c as Example,p as Horizontal,m as WithActions,x as WithContainedImage,h as WithImage,u as WithLink,l as WithPrimaryAction,Cn as __namedExportsOrder,gn as default};
