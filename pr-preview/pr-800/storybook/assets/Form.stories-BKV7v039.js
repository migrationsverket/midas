import{j as n}from"./iframe-BcRjsBlL.js";import{$ as j}from"./Form-CRrECeDL.js";import{G}from"./Grid-DYLwultj.js";import{G as e}from"./GridItem-DJHxUiqy.js";import{T as r}from"./TextField-KJp7Bgnh.js";import{S as I}from"./Select-6Cye2ZCO.js";import{B as a}from"./Button-CvA77UWP.js";import{R as g,a as b}from"./Radio-CZv5DyMs.js";import{C as h}from"./CheckboxGroup-D5i4Wge0.js";import{C as k}from"./Checkbox-BA34gJgg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DBFhbAZR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cl_8V6mM.js";import"./useFocusRing-CNb6kCwu.js";import"./index-BD8fCA-B.js";import"./index-C98P7_uM.js";import"./TextFieldBase-bAU8O_b0.js";import"./TextField-ZP-jwGNW.js";import"./FieldError-Dhfii9aX.js";import"./Text-BETQP1HR.js";import"./Text-Byldrmep.js";import"./ListKeyboardDelegate-6x2rcmyX.js";import"./SelectionManager-DzpD-NYc.js";import"./useEvent-Szn15d31.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D30imlTl.js";import"./useDescription-DkAEfwYv.js";import"./useControlledState-uBGqkdsA.js";import"./Group-C4tqZetm.js";import"./Input-DF7j6o-T.js";import"./Hidden-BWTK3vTO.js";import"./Button-BsIkJpJK.js";import"./useLabels-C7Wpftx3.js";import"./useButton-CgJqOxul.js";import"./useTextField-BFU6PaxE.js";import"./useField-DV_DII8_.js";import"./TextField.module-DjUItNl5.js";import"./Label-CTlWZE7R.js";import"./Dialog-5IXRpjng.js";import"./RSPContexts-BCaOpCfD.js";import"./OverlayArrow-C8lfgG5_.js";import"./useResizeObserver-BrFdL-ot.js";import"./Collection-Ha7aPl6P.js";import"./index-Bh5VsV9I.js";import"./Separator-DtTxTgku.js";import"./PressResponder-Bo0stzcI.js";import"./useLocalizedStringFormatter-DujSnSBF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-4NIPqRU7.js";import"./Dialog-BLjg_RtS.js";import"./useLocalizedStringFormatter-DzpkP9mK.js";import"./x-CTvzoHxg.js";import"./createLucideIcon-CRHJwuW7.js";import"./Heading-D6VHZo9W.js";import"./info-iP2mEcmA.js";import"./Tag-BIQ_cUvS.js";import"./ListBox-Jiqkwz7s.js";import"./DragAndDrop-BnW8nTIV.js";import"./inertValue-De7JxbK0.js";import"./useListState-zYr1ycDa.js";import"./useHighlightSelectionDescription-B6rVjzw3.js";import"./useUpdateEffect-BXlLKzF4.js";import"./useHasTabbableChild-DYD48PQ5.js";import"./check-B99-A4VN.js";import"./ListBoxSection-BZKFWt_x.js";import"./Virtualizer-BB9KKG9K.js";import"./useObserveElement-Bih_8FLx.js";import"./chevron-down-CVO8VsLI.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CaViAGGI.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
