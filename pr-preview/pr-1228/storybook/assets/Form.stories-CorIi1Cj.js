import{j as e}from"./iframe-Bv6YAP-H.js";import{c}from"./Form-Ch32kDXo.js";import{G as d}from"./Grid-FG2ZN8lG.js";import{G as i}from"./GridItem-BWfVuOsO.js";import{a as x,R as u}from"./Radio-Bkar3QSV.js";import{C as I}from"./CheckboxGroup-eWxrmEpi.js";import{C as G}from"./Checkbox-BujbONta.js";import{T as t}from"./TextField-DwzlTW6x.js";import{S as l}from"./Select-CvYeNym7.js";import{L as p}from"./ListBoxItem-Da9FjUqv.js";import{B as a}from"./Button-BH5A087H.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-vLQdNIKu.js";import"./utils-aKxnkjqL.js";import"./clsx-B-dksMZM.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./clsx-Ciqy0D92.js";import"./Group-BxiqzYT5.js";import"./FieldError-aQet2mym.js";import"./Text-CrHwImJG.js";import"./Text-DPW0E3tR.js";import"./Button-1f9Yc7Mz.js";import"./Hidden-DhnPUChE.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./SelectionIndicator-BxOQVkwD.js";import"./useField-BF1xuw3-.js";import"./VisuallyHidden-DEiD2GQe.js";import"./useControlledState-CcT1w6-I.js";import"./Label-Vbhk7I9y.js";import"./Dialog-DF3beP_F.js";import"./RSPContexts-Cmel4BHs.js";import"./OverlayArrow-CwvX6o9-.js";import"./useResizeObserver-R4IL46zg.js";import"./Collection-B4VcNlct.js";import"./index-K7IduVvo.js";import"./Separator-CKQgzynH.js";import"./SelectionManager-BHNfLphX.js";import"./useEvent-BaPHHBlD.js";import"./scrollIntoView-CfOu5aQk.js";import"./useDescription-y5DJBmVT.js";import"./ListKeyboardDelegate-BCkVVRiL.js";import"./PressResponder-izydr2CK.js";import"./useLocalizedStringFormatter-BTXjr0WF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGnHuomg.js";import"./getScrollParent-CmM-5YOM.js";import"./ModalOverlay-CVZkVZIz.js";import"./x-BdrId5d4.js";import"./createLucideIcon-DlyUrHS2.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./Heading-oW__33Cy.js";import"./info-BaL1Nyrh.js";import"./Popover-C_tDEwHr.js";import"./check-CfnZqAf7.js";import"./useToggleState-B31EMyL7.js";import"./TextFieldBase-BcXpfXkp.js";import"./Input-Dda4_dBe.js";import"./useTextField-DdZE-cM7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BdyoAwp9.js";import"./DragAndDrop-BzCXDd9h.js";import"./inertValue-DlgxfoDw.js";import"./useListState-DKF-WTTU.js";import"./TagGroup-BOmSSQnl.js";import"./useHighlightSelectionDescription-CLRtk1C5.js";import"./useUpdateEffect-BWfLRk6t.js";import"./useHasTabbableChild-3VW_viXC.js";import"./chevron-down-BbvYj_RB.js";import"./Virtualizer-DAPyYIOf.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
