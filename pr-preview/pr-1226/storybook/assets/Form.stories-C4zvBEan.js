import{j as e}from"./iframe-CCfLQD4z.js";import{c}from"./Form-DhfgivJc.js";import{G as d}from"./Grid-B1XItg16.js";import{G as i}from"./GridItem-Bb6I132L.js";import{a as x,R as u}from"./Radio-BBNTr5TK.js";import{C as I}from"./CheckboxGroup-Br1V1KFc.js";import{C as G}from"./Checkbox-Dpkvt0xM.js";import{T as t}from"./TextField-CEIJllys.js";import{S as l}from"./Select-ChReg-lN.js";import{L as p}from"./ListBoxItem-CBjmct-u.js";import{B as a}from"./Button-DJVlOFkK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-EcVjUqlw.js";import"./utils-6cPY1nOj.js";import"./clsx-B-dksMZM.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./clsx-Ciqy0D92.js";import"./Group-DtvfQHam.js";import"./FieldError-DW0YkXyi.js";import"./Text-GlhP0ZNt.js";import"./Text-DZ79u1iH.js";import"./Button-CmCCWuSi.js";import"./Hidden-DWjl7TwO.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./SelectionIndicator-Dy5SxFYz.js";import"./useField-CFZKlJFB.js";import"./VisuallyHidden-BkMvzT9s.js";import"./useControlledState-Dk8QnFuU.js";import"./Label-CLlGL0ZY.js";import"./Dialog-DSLsGM2x.js";import"./RSPContexts-CsNweyO-.js";import"./OverlayArrow-D0J3kQcJ.js";import"./useResizeObserver-DH4vzh-U.js";import"./Collection-CEgiOuRD.js";import"./index-Hj45Acj7.js";import"./Separator-D-2HUCAD.js";import"./SelectionManager-MwGpS50M.js";import"./useEvent-BIylNxfJ.js";import"./scrollIntoView-B56Z4Qb3.js";import"./useDescription-DfOXojso.js";import"./ListKeyboardDelegate-B_7IHCzD.js";import"./PressResponder--0lj0NF9.js";import"./useLocalizedStringFormatter-BA4949mp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUDg1ogU.js";import"./getScrollParent-Cy4s0DF2.js";import"./ModalOverlay-D_f_Y5N7.js";import"./x-Bib5fKG4.js";import"./createLucideIcon-DWEKCqmg.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./Heading-BT23bQxk.js";import"./info-BjAtYUiZ.js";import"./Popover-CJ4AVohE.js";import"./check-apE2PygQ.js";import"./useToggleState-ZY_0pOba.js";import"./TextFieldBase-DE9GZmEi.js";import"./Input-Bqf6rAoJ.js";import"./useTextField-CuX06wNe.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-TLTpWXZd.js";import"./DragAndDrop-sahertdO.js";import"./inertValue-EpekjBRS.js";import"./useListState-BC7t-BmP.js";import"./TagGroup-ByQ0ODvw.js";import"./useHighlightSelectionDescription-DoDXhAhD.js";import"./useUpdateEffect-D2IQ1nTQ.js";import"./useHasTabbableChild-DmdnSJWy.js";import"./chevron-down-BMJfUFbJ.js";import"./Virtualizer-CiE-3qce.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
