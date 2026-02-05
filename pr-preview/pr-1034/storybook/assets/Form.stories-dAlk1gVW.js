import{j as e}from"./iframe-D0l--c6C.js";import{$ as c}from"./Form-D7_1EBwv.js";import{G as d}from"./Grid-C6wT_AVx.js";import{G as i}from"./GridItem-Droum0YV.js";import{a as x,R as u}from"./Radio-CKRPVL06.js";import{C as I}from"./CheckboxGroup-mvb1064T.js";import{C as G}from"./Checkbox-Co0s2Za5.js";import{T as t}from"./TextField-D2vE_GYC.js";import{S as l}from"./Select-OpMkcHGR.js";import{L as p}from"./ListBoxItem-Cnhpe-l-.js";import{B as a}from"./Button-D47vYwiU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VeCz3m0s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DKycCepU.js";import"./useFocusRing-TJh2D1Hm.js";import"./index-DoExQatV.js";import"./index-RphitS5C.js";import"./clsx-Ciqy0D92.js";import"./Group-BKqtSSTY.js";import"./FieldError-Bk0AsuFn.js";import"./Text-BpMUK5iu.js";import"./Text-evSykvIm.js";import"./Button-BerIw-Lw.js";import"./Hidden-BF6VB1MU.js";import"./useLabels-CSsYCRJ9.js";import"./useButton-Dk6hNhi1.js";import"./SelectionIndicator-D_FwF8a6.js";import"./useField-CkNB1FqH.js";import"./VisuallyHidden-EuNheofa.js";import"./useControlledState-DG9hXw45.js";import"./Label-8LkrEHlL.js";import"./Dialog-lxRiuV_L.js";import"./RSPContexts-OtAouDzC.js";import"./OverlayArrow-CG4zEYYh.js";import"./useResizeObserver-DCvhUmSc.js";import"./Collection-Fbt71xYE.js";import"./index-CAkoeHbW.js";import"./Separator-CSB41d5-.js";import"./SelectionManager-DneqIR5T.js";import"./useEvent-G9uvljhU.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dv4NgNk6.js";import"./ListKeyboardDelegate-VEziE7E2.js";import"./PressResponder-f5Z6KAl0.js";import"./useLocalizedStringFormatter-DPchQlap.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeLJJodF.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CMJI3hQn.js";import"./createLucideIcon-DBbK9uba.js";import"./useLocalizedStringFormatter-BVxlra1v.js";import"./Heading-h-TUqqkF.js";import"./info-EOV5rQvt.js";import"./Popover-CRr_QX5c.js";import"./check-BiT50775.js";import"./useToggleState-DVw3E8e2.js";import"./TextFieldBase-B9YcW49i.js";import"./TextField-D-TXcZgg.js";import"./Input-9sUm-UmF.js";import"./useTextField-D1yyU7Zd.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DZFrYF-k.js";import"./DragAndDrop-Cbds776s.js";import"./inertValue-CwIGvIHB.js";import"./useListState-CAO9FDOO.js";import"./Tag-CQ_UynZy.js";import"./useHighlightSelectionDescription-B2V1igzi.js";import"./useUpdateEffect-BOa_4-hC.js";import"./useHasTabbableChild-HSgvgMj4.js";import"./chevron-down-nL9NgIXd.js";import"./Virtualizer-J5ZV2pE9.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
