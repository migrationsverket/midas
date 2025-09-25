import{j as n}from"./iframe-CDK8l1zz.js";import{b as e,c as g,d as b,e as X,f as j,a as t,C as K}from"./Card-Ds-3NLXj.js";import{B as d}from"./Button-M8XHa1U7.js";import{c as U}from"./createLucideIcon-BKMMjNOn.js";import{X as M}from"./x-i6iBAVa9.js";import{T as s}from"./Text-D6J1iEVs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Button-CjjkuozD.js";import"./utils-C9ibdbLH.js";import"./Hidden-BPoo_4M4.js";import"./useFocusRing-BWm0-qj_.js";import"./index-DOHoX8bt.js";import"./index-BJuMnSMV.js";import"./useLabels-dl8LXetB.js";import"./useButton-Cr4oYVc2.js";import"./arrow-right-BH2U-1B2.js";import"./Heading-HPABURvB.js";import"./RSPContexts-fASF8i04.js";import"./Button.module-DRhvPh0f.js";import"./Text-DS_sDe6V.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],v=U("pen",Y),{expect:r,userEvent:C}=__STORYBOOK_MODULE_TEST__,xn={component:K,subcomponents:{CardContent:t,CardImage:j,CardActionArea:X,CardActions:b,CardLink:g,CardTitle:e},title:"Components/Card",tags:["autodocs"]},c={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"}),n.jsx(b,{children:n.jsx(d,{variant:"icon",icon:v,children:"Redigera"})})]})}},p={args:{...c.args,horizontal:!0}},m={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"}),n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the button",async()=>{const a=o.getByText("Avbryt");r(a).not.toHaveFocus(),await C.tab(),await C.tab(),r(a).toHaveFocus()})}},l={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(X,{onPress:()=>{},"data-testid":"card-action-area",children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})}),n.jsx(t,{children:n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:M,children:"Avbryt"})]})})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the primary action area",async()=>{const a=o.getByTestId("card-action-area");r(a).not.toHaveFocus(),await C.tab(),r(a).toHaveFocus()})}},u={args:{children:n.jsxs(t,{children:[n.jsx(g,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the link",async()=>{const a=o.getByTestId("card-link");r(a).not.toHaveFocus(),await C.tab(),r(a).toHaveFocus()})}},h={args:{style:{maxWidth:300},children:n.jsxs(n.Fragment,{children:[n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsxs(t,{children:[n.jsx(g,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})]})}},x={args:{style:{maxWidth:300},children:n.jsxs(t,{children:[n.jsx(g,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})})," ",n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsx(s,{children:"Namn: Namn Namnsson"})]})}};var y,N,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(O=x.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Cn=["Example","Horizontal","WithActions","WithPrimaryAction","WithLink","WithImage","WithContainedImage"];export{c as Example,p as Horizontal,m as WithActions,x as WithContainedImage,h as WithImage,u as WithLink,l as WithPrimaryAction,Cn as __namedExportsOrder,xn as default};
