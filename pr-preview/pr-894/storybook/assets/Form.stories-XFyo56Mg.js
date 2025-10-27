import{j as n}from"./iframe-BCv2rzr9.js";import{$ as j}from"./Form-c4zTSEFv.js";import{G}from"./Grid-B8tfxbA-.js";import{G as e}from"./GridItem-C5KN9eh7.js";import{T as r}from"./TextField-DcHzTgWx.js";import{S as I}from"./Select-C14fBkbX.js";import{B as a}from"./Button-D2vcUsmS.js";import{R as g,a as b}from"./Radio-DJ0QZldS.js";import{C as h}from"./CheckboxGroup-o71NvBxl.js";import{C as k}from"./Checkbox-4HIW8iOK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CDKvZeof.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BEgBjGvw.js";import"./useFocusRing-BNESqCRc.js";import"./index-Dx8nmKY4.js";import"./index-Bb_2lGIb.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-COPLWQnc.js";import"./TextField-Dvn6eTVA.js";import"./FieldError-Cn9fRNta.js";import"./Text-BDHSM18P.js";import"./Text-D1yQUYUA.js";import"./RSPContexts-BSw-ShGO.js";import"./Group-CZofheBH.js";import"./Input-BrwsCjpf.js";import"./Hidden-BenjnVYI.js";import"./Button-D5kuCja3.js";import"./useLabels-DxQXfiDI.js";import"./useButton-QTAKkxRm.js";import"./useTextField-G_pDH0qh.js";import"./useControlledState-DVm64QZU.js";import"./useField-JV8twEpD.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BYq5L3jU.js";import"./Dialog-DgZVwY4t.js";import"./OverlayArrow-BZPk2J45.js";import"./useResizeObserver-BjITNzUd.js";import"./Collection-CVdszb_7.js";import"./index-_A-oj774.js";import"./Separator-rsGARimM.js";import"./SelectionManager-DBgwQ_i0.js";import"./useEvent-CyeZcoaa.js";import"./scrollIntoView-GBiVTFAr.js";import"./SelectionIndicator-1jtXO3OL.js";import"./useDescription-h4aCqBHj.js";import"./ListKeyboardDelegate-CMSZQWEU.js";import"./PressResponder-UrROSdAv.js";import"./useLocalizedStringFormatter-B59lqAQj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DfKXlfx2.js";import"./VisuallyHidden-hKiY2s8z.js";import"./useLocalizedStringFormatter-4zqv8xOJ.js";import"./x-CN3kS_w8.js";import"./createLucideIcon-DWu9pD4R.js";import"./Heading-DVn6apyw.js";import"./info-CdsvYWX5.js";import"./Popover-DOjEVt3x.js";import"./Tag-B1D8UDmR.js";import"./ListBox-CH92jayw.js";import"./DragAndDrop-DVnKDWuA.js";import"./inertValue-bbNYVk1W.js";import"./useListState-BA_RuX6Z.js";import"./useHighlightSelectionDescription-DY4jW10X.js";import"./useUpdateEffect-CBWUYgSP.js";import"./useHasTabbableChild-BQood6Td.js";import"./check-DSnyNOce.js";import"./ListBoxSection-CYEJMfHq.js";import"./Virtualizer-B6h-4UhU.js";import"./chevron-down-BSCLs4i5.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BjgdQwxI.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
