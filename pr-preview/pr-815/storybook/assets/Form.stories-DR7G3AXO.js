import{j as n}from"./iframe-Ba2AHCAf.js";import{$ as j}from"./Form-poRaDLfg.js";import{G}from"./Grid-x2XGEWOy.js";import{G as e}from"./GridItem-DuzT1fBJ.js";import{T as r}from"./TextField-_WNnSBux.js";import{S as I}from"./Select-DPPXDR8h.js";import{B as a}from"./Button-tVXAECK4.js";import{R as g,a as b}from"./Radio-NjJzfXAW.js";import{C as h}from"./CheckboxGroup-Do-mrgjH.js";import{C as k}from"./Checkbox-DR0FT9mt.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cjp0rXN1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-c4T1REIP.js";import"./useFocusRing-BW4cXMIM.js";import"./index-B978xzy-.js";import"./index-CHbRQDg1.js";import"./TextFieldBase-bAB4yb6T.js";import"./TextField-RHTqkESM.js";import"./FieldError-DraTu7vw.js";import"./Text-Dz3oB0mS.js";import"./Text-CPckjQaa.js";import"./ListKeyboardDelegate-B1NOFWdr.js";import"./SelectionManager-lbRS88ls.js";import"./useEvent-Cg2Hmp9V.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-nQi8lFY9.js";import"./useDescription-CeGR2v0Y.js";import"./useControlledState-DbJ7O0kY.js";import"./Group-QY3RVPQb.js";import"./Input-Dnc1OInD.js";import"./Hidden-7IdgeXON.js";import"./Button-CHuI6MKq.js";import"./useLabels-q25e3khg.js";import"./useButton-5Q3CXo4w.js";import"./useTextField-BfHT1oDg.js";import"./useField-ljsrIMX3.js";import"./TextField.module-DjUItNl5.js";import"./Label-CFEsSPFJ.js";import"./Dialog-CP4gS4xH.js";import"./RSPContexts-iUZ0PUAP.js";import"./OverlayArrow-DvrCZI4W.js";import"./useResizeObserver-BIt8lGgp.js";import"./Collection-CBny9IQJ.js";import"./index-DdX-gx9y.js";import"./Separator-Dkzyq6ly.js";import"./PressResponder-CSV2UZe5.js";import"./useLocalizedStringFormatter-By5yw_kx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ZKyGFhfZ.js";import"./Dialog-DMOl3M9Z.js";import"./useLocalizedStringFormatter-DpG0tTFj.js";import"./x-C6_8VLRf.js";import"./createLucideIcon-D-t71Eto.js";import"./Heading-NfCR_P0N.js";import"./info-DoBjxUSp.js";import"./Tag-CVx1J9OR.js";import"./ListBox-CeCyHAXH.js";import"./DragAndDrop-b-lxgzy-.js";import"./inertValue-_1KGAA7E.js";import"./useListState-aLFR9r-I.js";import"./useHighlightSelectionDescription-CQFrQBLG.js";import"./useUpdateEffect-gjNA06pU.js";import"./useHasTabbableChild-DXQp-V9e.js";import"./check-CBXurp6K.js";import"./ListBoxSection-6mAptR_K.js";import"./Virtualizer-L2kSvMCi.js";import"./useObserveElement-uqvXGWUB.js";import"./chevron-down-DJsaNtsB.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BKf46HHi.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
