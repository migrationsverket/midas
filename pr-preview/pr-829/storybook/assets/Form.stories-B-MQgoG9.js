import{j as n}from"./iframe-CDK8l1zz.js";import{$ as j}from"./Form-Bcp1cGFd.js";import{G}from"./Grid-DYFu5eB0.js";import{G as e}from"./GridItem-BqkwX9Yt.js";import{T as r}from"./TextField-BsBLswL6.js";import{S as I}from"./Select-DsPLOyHF.js";import{B as a}from"./Button-M8XHa1U7.js";import{R as g,a as b}from"./Radio-BvRI-428.js";import{C as h}from"./CheckboxGroup-D9bgo2rS.js";import{C as k}from"./Checkbox-CnBLSSzV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C9ibdbLH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-jKOQkg9H.js";import"./useFocusRing-BWm0-qj_.js";import"./index-DOHoX8bt.js";import"./index-BJuMnSMV.js";import"./TextFieldBase-Cd_zZ1KC.js";import"./TextField-COXGPk6i.js";import"./FieldError-DotE55vE.js";import"./Text-DS_sDe6V.js";import"./Text-D6J1iEVs.js";import"./ListKeyboardDelegate-Byvd6YLK.js";import"./SelectionManager-GdFec_g5.js";import"./useEvent-CM2hG3jx.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CZTfTuUz.js";import"./useDescription-B2YFDFQD.js";import"./useControlledState-DCTdsEUX.js";import"./Group-BEtyzgXB.js";import"./Input-t1PAI8lf.js";import"./Hidden-BPoo_4M4.js";import"./Button-CjjkuozD.js";import"./useLabels-dl8LXetB.js";import"./useButton-Cr4oYVc2.js";import"./useTextField-BUfNhWFQ.js";import"./useField-tj6IENer.js";import"./TextField.module-DjUItNl5.js";import"./Label-BlQhIAvr.js";import"./Dialog-C2xl7kxb.js";import"./RSPContexts-fASF8i04.js";import"./OverlayArrow-Dqe5x8UV.js";import"./useResizeObserver-BkoAMURO.js";import"./Collection-C5a33ZZ4.js";import"./index-C6r_5oJF.js";import"./Separator-CNFqP4Wh.js";import"./PressResponder-B9x6dx0L.js";import"./useLocalizedStringFormatter-DCMwGOlQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CCLt2shJ.js";import"./Dialog-f1KGN8_m.js";import"./useLocalizedStringFormatter-lZXNF5ZA.js";import"./x-i6iBAVa9.js";import"./createLucideIcon-BKMMjNOn.js";import"./Heading-HPABURvB.js";import"./info-ByANz2g0.js";import"./Tag-DKADqVwO.js";import"./ListBox-CYsLL7ku.js";import"./DragAndDrop-DWUSZ3FK.js";import"./inertValue-BlKEKUAB.js";import"./useListState-BiYsaaob.js";import"./useHighlightSelectionDescription-CTZexVar.js";import"./useUpdateEffect-CzfsGmM4.js";import"./useHasTabbableChild-BJ_B9XEe.js";import"./check-BiDs9W8l.js";import"./ListBoxSection-BTpZpuXI.js";import"./Virtualizer-FqaDQDLP.js";import"./useObserveElement-YxWOZt6b.js";import"./chevron-down-BINDO7vM.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DsCX7R7S.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
