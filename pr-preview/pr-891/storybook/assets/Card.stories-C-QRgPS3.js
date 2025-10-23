import{j as n}from"./iframe-BvtnbEWO.js";import{b as e,c as C,d as b,e as y,f as j,a as t,C as T}from"./Card-DnWif4iR.js";import{c as f}from"./createLucideIcon-DLTmB58A.js";import{X as N}from"./x-B4WpRfld.js";import{T as r}from"./Text-B7oxr1RI.js";import{B as d}from"./Button-DciKK2iU.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button-BDKaMgDI.js";import"./utils-Dmj49lEG.js";import"./Hidden-B-AZDmCl.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./arrow-right-CDBtUO5K.js";import"./Heading-BExRDS79.js";import"./RSPContexts-BMp6jLpo.js";import"./Text-G_ihDvZJ.js";import"./Button.module-CtQ1deO8.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],v=f("pen",k),{expect:s,userEvent:g}=__STORYBOOK_MODULE_TEST__,G={component:T,subcomponents:{CardContent:t,CardImage:j,CardActionArea:y,CardActions:b,CardLink:C,CardTitle:e},title:"Components/Card",tags:["autodocs"]},c={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsx(b,{children:n.jsx(d,{variant:"icon",icon:v,children:"Redigera"})})]})}},p={args:{...c.args,horizontal:!0}},m={args:{children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"}),n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:N,children:"Avbryt"})]})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the button",async()=>{const a=o.getByText("Avbryt");s(a).not.toHaveFocus(),await g.tab(),await g.tab(),s(a).toHaveFocus()})}},l={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(y,{onPress:()=>{},"data-testid":"card-action-area",children:n.jsxs(t,{children:[n.jsx(e,{children:"Dina uppgifter"}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})}),n.jsx(t,{children:n.jsxs(b,{children:[n.jsx(d,{variant:"icon",icon:v,children:"Ändra"}),n.jsx(d,{variant:"icon",icon:N,children:"Avbryt"})]})})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the primary action area",async()=>{const a=o.getByTestId("card-action-area");s(a).not.toHaveFocus(),await g.tab(),s(a).toHaveFocus()})}},u={args:{children:n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})},play:async({canvas:o,step:i})=>{await i("It should be possible to focus the link",async()=>{const a=o.getByTestId("card-link");s(a).not.toHaveFocus(),await g.tab(),s(a).toHaveFocus()})}},h={tags:["!snapshot"],args:{style:{maxWidth:300},children:n.jsxs(n.Fragment,{children:[n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})]})}},x={tags:["!snapshot"],args:{style:{maxWidth:300},children:n.jsxs(t,{children:[n.jsx(C,{href:"#","data-testid":"card-link",children:n.jsx(e,{children:"Dina uppgifter"})})," ",n.jsx(j,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),n.jsx(r,{children:"Namn: Namn Namnsson"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    horizontal: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const J=["Example","Horizontal","WithActions","WithPrimaryAction","WithLink","WithImage","WithContainedImage"];export{c as Example,p as Horizontal,m as WithActions,x as WithContainedImage,h as WithImage,u as WithLink,l as WithPrimaryAction,J as __namedExportsOrder,G as default};
