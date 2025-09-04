import{j as n}from"./iframe-BgGSr3K9.js";import{$ as j}from"./Form-Cb8ALptW.js";import{G}from"./Grid-B0O_oPL_.js";import{G as e}from"./GridItem-DA-AFWX_.js";import{T as r}from"./TextField-C5VQefIw.js";import{S as I}from"./Select-CQZAKPm0.js";import{B as a}from"./Button-CH-hiM1s.js";import{R as g,a as b}from"./Radio-Buvcd33C.js";import{C as h}from"./CheckboxGroup-BCXrUqv0.js";import{C as k}from"./Checkbox-Bym78Z-u.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BglIC_rW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-4NKgqQuL.js";import"./useFocusRing-Di-sLADZ.js";import"./index-DAX2rtmX.js";import"./index-Dhrh99ow.js";import"./TextFieldBase-Dg-c59aX.js";import"./TextField-0zRyrD21.js";import"./FieldError-B5ZYl4n4.js";import"./Text-BPup9exC.js";import"./Text-DoDWS8R1.js";import"./ListKeyboardDelegate-BND_-O8S.js";import"./SelectionManager-B2G1LYeX.js";import"./useEvent-ByIkBMK7.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Bmg4IhV2.js";import"./useDescription-CLv110e1.js";import"./useControlledState-CVOTM-Ne.js";import"./Group-DDZ-OxQb.js";import"./Input-Bx_4nCOI.js";import"./Hidden-C5ULyG2X.js";import"./Button-DKTJJV9b.js";import"./useLabels-DFwzQpFb.js";import"./useButton-TGrZL-vQ.js";import"./useTextField-DOA_VezC.js";import"./useField-CpEwYLWP.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-jkH27PyX.js";import"./Dialog-BU4J01fU.js";import"./RSPContexts-CH51Gdgw.js";import"./OverlayArrow-C_u-w2FU.js";import"./useResizeObserver-DH8wnHu1.js";import"./Collection-CMTSYzh_.js";import"./index-DLHOcE1d.js";import"./Separator-zN3Co3BY.js";import"./PressResponder-CGtB31qy.js";import"./useLocalizedStringFormatter-Cp-CECAR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DncUQ7Vk.js";import"./Dialog-CcpI3Ag_.js";import"./useLocalizedStringFormatter-bLy02E6s.js";import"./x-CUEg6Eu5.js";import"./createLucideIcon-BZRWKq7f.js";import"./Heading-DRD1lwT4.js";import"./info-e_NWH67n.js";import"./Tag-M5DX0c_P.js";import"./ListBox-DRNA9H_X.js";import"./DragAndDrop-Dk7uJ4PP.js";import"./inertValue-DkocqsIs.js";import"./useListState-hUSEd7uf.js";import"./useHighlightSelectionDescription-DUmkI4f_.js";import"./useUpdateEffect-Cxa9XyIy.js";import"./useHasTabbableChild-B9UNn6VB.js";import"./check-CjPzmu73.js";import"./ListBoxSection-6wllNhuV.js";import"./Virtualizer-Dbdh9TBh.js";import"./useObserveElement-CsenAKTi.js";import"./chevron-down-DZJ4DjjG.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-ClEnLmSZ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
