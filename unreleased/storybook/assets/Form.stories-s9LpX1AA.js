import{j as n}from"./iframe-C8bMXFlR.js";import{$ as j}from"./Form-CTOcO87g.js";import{G}from"./Grid-D0GEuDab.js";import{G as e}from"./GridItem-Da0PtNJL.js";import{T as r}from"./TextField-DMA-d0oP.js";import{S as I}from"./Select-BvVqV6M-.js";import{B as a}from"./Button-neHr3WcT.js";import{R as g,a as b}from"./Radio-A_c5a5x0.js";import{C as h}from"./CheckboxGroup-Bc55Pa5X.js";import{C as k}from"./Checkbox-BsL9viFw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B48jH5Wi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-iszgBi0X.js";import"./useFocusRing-vZdHyggg.js";import"./index-SMAI7IyX.js";import"./index-BjFwAF97.js";import"./TextFieldBase-BS_qyvh1.js";import"./TextField-CACSCJLz.js";import"./FieldError-7GZYy2VU.js";import"./Text-DRbuNIWw.js";import"./Text-DbA1IO_S.js";import"./ListKeyboardDelegate-Dr-Lbyjw.js";import"./SelectionManager-B-SZkH87.js";import"./useEvent-DPRgh361.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CXeChsrc.js";import"./useDescription-BxsRzYXT.js";import"./useControlledState-C0DEDXqo.js";import"./Group-BbgBLg7F.js";import"./Input-C3PZLcRb.js";import"./Hidden-DIPLLSrI.js";import"./Button-BQ34HGfx.js";import"./useLabels-le9OUEgt.js";import"./useButton-BDq6E-13.js";import"./useTextField-DWq49_-C.js";import"./useField-DOxa1fdF.js";import"./TextField.module-DjUItNl5.js";import"./Label-D-GMvjrl.js";import"./Dialog-DiKpC4vo.js";import"./RSPContexts-Ofj2inOa.js";import"./OverlayArrow-CdQ65a_5.js";import"./useResizeObserver-C1kZW3q1.js";import"./Collection-Dxo7gSrK.js";import"./index-LgX-1hlH.js";import"./Separator-CJFmLjrj.js";import"./PressResponder-DUzQ2mEk.js";import"./useLocalizedStringFormatter-Cdo_Mg4Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C5s0DJ3H.js";import"./Dialog-D5KRRw-V.js";import"./useLocalizedStringFormatter-CKJ2n7v2.js";import"./x-BXevkvuY.js";import"./createLucideIcon-CKDZTqyk.js";import"./Heading-DZ8HBrWp.js";import"./info-Bgync_8f.js";import"./Tag-DOxrPltw.js";import"./ListBox-BONsJt7x.js";import"./DragAndDrop-CEYD-cVL.js";import"./inertValue-B0E8SARS.js";import"./useListState-Zo8Bef2z.js";import"./useHighlightSelectionDescription-Dwk7UZCN.js";import"./useUpdateEffect-B_6DwuIm.js";import"./useHasTabbableChild-y6EsfJSl.js";import"./check-BbyrYo7A.js";import"./ListBoxSection-BNbPl4bg.js";import"./Virtualizer-Bw7TvR_F.js";import"./useObserveElement-BBraZzBE.js";import"./chevron-down-CGygIFcI.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Dm0bJ2AQ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
