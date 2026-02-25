import{j as e}from"./iframe-BMRKkr6e.js";import{$ as c}from"./Form-BSq0XxHe.js";import{G as d}from"./Grid-nInCg7zP.js";import{G as i}from"./GridItem-A7NCIxdo.js";import{a as x,R as u}from"./Radio-Cu_YXJWl.js";import{C as I}from"./CheckboxGroup-DZLKlvrw.js";import{C as G}from"./Checkbox-DiTIK0Of.js";import{T as t}from"./TextField-C7w9plfe.js";import{S as l}from"./Select-DNFL0JsH.js";import{L as p}from"./ListBoxItem-BbG2Kn4Z.js";import{B as a}from"./Button-8LMnIdeM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-Wd4T21.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D3ipRiab.js";import"./useFocusRing-CUJDhn4b.js";import"./index-DC2q9WHS.js";import"./index-DM5nM3xE.js";import"./clsx-Ciqy0D92.js";import"./Group-gn_UrHcc.js";import"./FieldError-CYoJn7Ex.js";import"./Text-Dwlww6gP.js";import"./Text-yRvyJMt7.js";import"./Button-Dhgmb7a4.js";import"./Hidden-l6G7bJI-.js";import"./useLabels-LcBHp2R_.js";import"./useButton-Dx2DQTbk.js";import"./SelectionIndicator-DdxuIDlF.js";import"./useField-BYylXV7g.js";import"./VisuallyHidden-ul3GEQ14.js";import"./useControlledState-CtWZRpAk.js";import"./Label-_wBKyD_e.js";import"./Dialog-CwJI87Uj.js";import"./RSPContexts-BnN2F5J4.js";import"./OverlayArrow-C3WhtyZT.js";import"./useResizeObserver-38Wtw_EX.js";import"./Collection-CrtYSmGP.js";import"./index-gixeR2_9.js";import"./Separator-C44O_kW2.js";import"./SelectionManager-DiVceX2c.js";import"./useEvent-bPhGLQHX.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C304Q647.js";import"./ListKeyboardDelegate-CR7uIuuR.js";import"./PressResponder-C3rlrrkb.js";import"./useLocalizedStringFormatter-DHdUL6pM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKvv7o_3.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D17aNKNC.js";import"./createLucideIcon-DZqSyMAm.js";import"./useLocalizedStringFormatter-DwRrqd4W.js";import"./Heading-BEILCOej.js";import"./info-Saq-iQ1I.js";import"./Popover-CPI7ch0m.js";import"./check-0spXETxS.js";import"./useToggleState-CwM9nHpJ.js";import"./TextFieldBase-BaiFRGkU.js";import"./Input-Bm6PWXPk.js";import"./useTextField-9U_j3L1E.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BE0U6o8z.js";import"./DragAndDrop-BUe_RVRB.js";import"./inertValue-B1R2Gie8.js";import"./useListState-DlC3P2DV.js";import"./TagGroup-BYozdPbn.js";import"./useHighlightSelectionDescription-oGGS4xUT.js";import"./useUpdateEffect-DELzf25t.js";import"./useHasTabbableChild-Cy0w8C3x.js";import"./chevron-down-BVnwhvxx.js";import"./Virtualizer-Bvec2vjr.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
