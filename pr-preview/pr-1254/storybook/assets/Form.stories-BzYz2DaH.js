import{j as e}from"./iframe-BJvdaX8k.js";import{c}from"./Form-BV7WK4aN.js";import{G as d}from"./Grid-DbjlMaGk.js";import{G as i}from"./GridItem-CisQF1aL.js";import{a as x,R as u}from"./Radio-B1HPIdiJ.js";import{C as I}from"./CheckboxGroup-DddTi-rK.js";import{C as G}from"./Checkbox-B16OVHH9.js";import{T as t}from"./TextField-DyGeZ0D6.js";import{S as l}from"./Select-CZPEOjSe.js";import{L as p}from"./ListBoxItem-CKeiXMqj.js";import{B as a}from"./Button-Bns6iq4v.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DK9g2iem.js";import"./utils-ZkRQ_pis.js";import"./clsx-B-dksMZM.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./clsx-Ciqy0D92.js";import"./Group-cyVCmGVY.js";import"./FieldError-Dsj3zxX_.js";import"./Text-BNMtUmCk.js";import"./Text-C0JJvFIL.js";import"./Button-2rxKwo5b.js";import"./Hidden-1TQ91tjS.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./SelectionIndicator-R-DvunUm.js";import"./useField-Bt0bpF0c.js";import"./VisuallyHidden-PAT-EUPY.js";import"./useControlledState-CFLNrtf2.js";import"./Label-BNy-7g9N.js";import"./Dialog-BBCV9lvL.js";import"./RSPContexts-CoTdr7hf.js";import"./OverlayArrow-IEf8n93h.js";import"./useResizeObserver-CBFsdDoH.js";import"./Collection-61HWRNq1.js";import"./index-Cr3DY1hz.js";import"./Separator-CyKiX4fv.js";import"./SelectionManager-Dspabaik.js";import"./useEvent-CFX03mzz.js";import"./scrollIntoView-B05vA7IT.js";import"./useDescription-BybqaC--.js";import"./ListKeyboardDelegate-COto3r9Q.js";import"./PressResponder-CitJZjU6.js";import"./useLocalizedStringFormatter-DTwaBSs6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B67iHdv-.js";import"./getScrollParent-DAFKwCNH.js";import"./ModalOverlay-CsOU3q1M.js";import"./x-DbFWgsIq.js";import"./createLucideIcon-CeO-jkh6.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./Heading-U99AeCxa.js";import"./info-DBh1-lZ5.js";import"./Popover-r-3xr7us.js";import"./check-B8Rr2EWy.js";import"./useToggleState-CgWasKa8.js";import"./TextFieldBase-B4uZZuye.js";import"./Input-Cu4qY4tm.js";import"./useTextField-CrwnAK80.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CeobUusC.js";import"./DragAndDrop-CVBkubFA.js";import"./inertValue-Bxaz8vt3.js";import"./useListState-CRFRmguz.js";import"./TagGroup-C-KQMwQ4.js";import"./useHighlightSelectionDescription-Cy9z7gSe.js";import"./useUpdateEffect-DCNcPDXB.js";import"./useHasTabbableChild-CjUnmMCD.js";import"./chevron-down-BF0-u_Yf.js";import"./Virtualizer-C7Q7yYx3.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
