import{j as n}from"./iframe-dLhn8haa.js";import{$ as j}from"./Form-D3ix5gty.js";import{G}from"./Grid-B8HXAXKq.js";import{G as e}from"./GridItem-D-1YEeh9.js";import{T as r}from"./TextField-BydhI0ah.js";import{S as I}from"./Select-CzoYZj-P.js";import{B as a}from"./Button-Cd_IHc8e.js";import{R as g,a as b}from"./Radio-DeYRSb63.js";import{C as h}from"./CheckboxGroup-Ba6uT1Uq.js";import{C as k}from"./Checkbox-Wo52G6uK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CdPDuU9h.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DhfkpOfq.js";import"./useFocusRing-DqHewW9h.js";import"./index-C5HyGUKx.js";import"./index-B4nifaJ-.js";import"./TextFieldBase-flmB69si.js";import"./TextField-D7MfJbtt.js";import"./FieldError-BbfcXHKw.js";import"./Text-BAT3NomV.js";import"./Text-CsBuM_kU.js";import"./ListKeyboardDelegate-D_qsLFJa.js";import"./SelectionManager-BxCJYLFV.js";import"./useEvent-z46_rxaY.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C5g0w296.js";import"./useDescription-BjGy5o0E.js";import"./useControlledState-D3aMUzl-.js";import"./Group-Ds7oRYmh.js";import"./Input-a11tOElc.js";import"./Hidden-DrNMbQrJ.js";import"./Button-R-W_TxSW.js";import"./useLabels-CougkJ5D.js";import"./useButton-CjQ1OPWT.js";import"./useTextField-Aw54IfjZ.js";import"./useField-DDVqU_56.js";import"./TextField.module-DjUItNl5.js";import"./Label-DZZIBjX_.js";import"./Dialog-DWxzBAUB.js";import"./RSPContexts-D73g5QNo.js";import"./OverlayArrow-C-GQGErd.js";import"./useResizeObserver-D2F05IRI.js";import"./Collection-EsEvJ3Ye.js";import"./index-WOFO2LH4.js";import"./Separator-cmnZNN2j.js";import"./PressResponder-rxyD-H1I.js";import"./useLocalizedStringFormatter-BLuZAhtX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BWgtWZIZ.js";import"./Dialog-BL6zlOMV.js";import"./useLocalizedStringFormatter-CCm72lt4.js";import"./x-Agr58GsP.js";import"./createLucideIcon-OeyHrksp.js";import"./Heading-BGU6cpGe.js";import"./info-UkYZG4BZ.js";import"./Tag-CAtx9KDe.js";import"./ListBox-D1SOV6g_.js";import"./DragAndDrop-CPwYnllE.js";import"./inertValue-D6x8QYtc.js";import"./useListState-CBgnMDu4.js";import"./useHighlightSelectionDescription-DVfFd7IH.js";import"./useUpdateEffect-DnMm6lEb.js";import"./useHasTabbableChild-BZdmPNAt.js";import"./check-B4kRup8q.js";import"./ListBoxSection-BV5OSVhx.js";import"./Virtualizer-hsEySgvL.js";import"./useObserveElement-DE56VLxO.js";import"./chevron-down-D3uLdW1H.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-7dh-yX4N.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
