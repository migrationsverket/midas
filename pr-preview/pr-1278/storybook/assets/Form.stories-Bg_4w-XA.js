import{j as e}from"./iframe-CN8uU3WK.js";import{c}from"./Form-CYOLK2lS.js";import{G as d}from"./Grid-CRbU3Q7u.js";import{G as i}from"./GridItem-CdlvTI3_.js";import{a as x,R as u}from"./Radio-3Q11gvae.js";import{C as I}from"./CheckboxGroup-jFm13QKA.js";import{C as G}from"./Checkbox-CalyXtT4.js";import{T as t}from"./TextField-dCM_xcei.js";import{S as l}from"./Select-kASeIzLV.js";import{L as p}from"./ListBoxItem-fLoqhtVj.js";import{B as a}from"./Button-BVfd33cu.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CUcvtRrG.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./clsx-Ciqy0D92.js";import"./Group-ya_6Tkk0.js";import"./FieldError-CQyQ10Lj.js";import"./Text-DntZGJ-I.js";import"./Text-DvVr5DU7.js";import"./Button-BnmvhNcQ.js";import"./Hidden-i_4Qa2VQ.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./SelectionIndicator-CK6GDs9o.js";import"./useField-BPezoI5_.js";import"./VisuallyHidden-D1gwq_r2.js";import"./useControlledState-n2go4XxZ.js";import"./Label-DH_a-MIE.js";import"./Dialog-Y4sieQzC.js";import"./RSPContexts-FWWfLY0V.js";import"./OverlayArrow-DY03tKAK.js";import"./useResizeObserver-PMRAu2PC.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./Separator-aXVDjkAu.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./scrollIntoView-dW3ZURKy.js";import"./useDescription-DVfq5zSO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./PressResponder-DKwZi8Z6.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoqKfwmY.js";import"./getScrollParent-g_sxJttE.js";import"./ModalOverlay-CHz0Hb7j.js";import"./x-3fndBwRx.js";import"./createLucideIcon-D_RMlAle.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Heading-uOARh3Em.js";import"./info-BrWWqy7C.js";import"./Popover-BiyZzAmm.js";import"./check-TK2Q9all.js";import"./useToggleState-XSN1NGZc.js";import"./TextFieldBase-BSh_FmbF.js";import"./Input-CjR0E-XM.js";import"./useTextField-BjRoFdzK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CY1gm9lD.js";import"./DragAndDrop-D--2A-on.js";import"./inertValue-NegR2VUX.js";import"./useListState-Br1sIi9I.js";import"./TagGroup-j_tT1xw8.js";import"./useHighlightSelectionDescription-Bad3NclU.js";import"./useUpdateEffect-CqJQgMrO.js";import"./useHasTabbableChild-D1DhiJRH.js";import"./chevron-down-BtiWFzZm.js";import"./Virtualizer-DkqDgyu1.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
