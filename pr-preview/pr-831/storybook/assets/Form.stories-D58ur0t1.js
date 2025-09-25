import{j as n}from"./iframe-CokMJona.js";import{$ as j}from"./Form-BZwy5JL1.js";import{G}from"./Grid-BHqxiGJ9.js";import{G as e}from"./GridItem-COeIVJyP.js";import{T as r}from"./TextField-CTSxPM3L.js";import{S as I}from"./Select-bay3zOxr.js";import{B as a}from"./Button-HRu5sXQF.js";import{R as g,a as b}from"./Radio-DgHQRC-0.js";import{C as h}from"./CheckboxGroup-uutrz5QR.js";import{C as k}from"./Checkbox-ggnHg8Hl.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DpFMpFTQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BhFZpFuQ.js";import"./useFocusRing-D6CsESPl.js";import"./index-6oLJa15F.js";import"./index-NJxJDO49.js";import"./TextFieldBase-BHGUdPqw.js";import"./TextField-tYqDEWiD.js";import"./FieldError-DAIHBjVH.js";import"./Text-CKpu0dM-.js";import"./Text-D__YyLzN.js";import"./context-BZNsGYFo.js";import"./SelectionManager-DzC0Swx0.js";import"./useEvent-tyZJaR02.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BNKuxd3x.js";import"./useDescription-CdMCiXOR.js";import"./useControlledState-BDXieBI7.js";import"./Group-CIhgE0fS.js";import"./Input-D4NYOPRF.js";import"./Hidden-CgwiBzlW.js";import"./Button-SHBrHbVQ.js";import"./useLabels-fwQFmwcx.js";import"./useButton-BDpHuFdP.js";import"./useTextField-BUSfUU1I.js";import"./useField-D_UAeNX9.js";import"./TextField.module-DjUItNl5.js";import"./Label-QETJuz2U.js";import"./Dialog-tBlN4yYQ.js";import"./RSPContexts-qNY9l_0a.js";import"./OverlayArrow-OwEwL7NX.js";import"./useResizeObserver-BbsbwfP9.js";import"./Collection-CKG3k0YO.js";import"./index-DOS9xYt4.js";import"./Separator-LMZCOn_0.js";import"./PressResponder-D-_q7S86.js";import"./useLocalizedStringFormatter-zEA-gUlm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BteF49eM.js";import"./useLocalizedStringFormatter-v0Ds6Pl_.js";import"./x-BNeJygIV.js";import"./createLucideIcon-fVNoeR4C.js";import"./Heading-BZmtw_o9.js";import"./info-DQwgD2Iz.js";import"./Popover-IyzSiiSE.js";import"./Tag-hpEe24Qb.js";import"./ListBox-BKUJ7tWV.js";import"./DragAndDrop-pOkY2Mam.js";import"./inertValue-8MXuh8f0.js";import"./useListState-CSRnLMVU.js";import"./useHighlightSelectionDescription-BSm9rGTE.js";import"./useUpdateEffect-LwBjRu-w.js";import"./useHasTabbableChild-GBv2YyD4.js";import"./check-DaP_c6q9.js";import"./ListBoxSection-CNuzebNe.js";import"./Virtualizer-QM4aGC45.js";import"./useObserveElement-Cox49Mjt.js";import"./chevron-down-Bd82fEGQ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BnMS8PJF.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
