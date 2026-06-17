import{j as e}from"./iframe-GMyNOJOq.js";import{c}from"./Form-Bt1ZVAUN.js";import{G as d}from"./Grid-D8AGkXNJ.js";import{G as i}from"./GridItem-UvhxP-ZA.js";import{a as x,R as u}from"./Radio-DmUFs4-A.js";import{C as I}from"./CheckboxGroup-yHkwFmVy.js";import{C as G}from"./Checkbox-MM_H0Yc0.js";import{T as t}from"./TextField-CRaZ6S4g.js";import{S as l}from"./Select-5AS1HRpc.js";import{L as p}from"./ListBoxItem-C6irBukv.js";import{B as a}from"./Button-DiEAaUmX.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CY-YEC5f.js";import"./utils-BXbplvrq.js";import"./clsx-B-dksMZM.js";import"./index-DSCO44yP.js";import"./index-CiecEaAM.js";import"./clsx-Ciqy0D92.js";import"./Group-C5kGEOYT.js";import"./FieldError-C81FQqBO.js";import"./Text-DwP9uMRl.js";import"./Text-DPFOPtH6.js";import"./Button-BmFFiwR6.js";import"./Hidden-zTZMnLTK.js";import"./useLabel-CqPGMRzp.js";import"./useLabels-BBipD7g9.js";import"./useButton-HZCszyxF.js";import"./SelectionIndicator-C2IpaVjB.js";import"./useField-CA_QjZbA.js";import"./VisuallyHidden-DOm6YV-1.js";import"./useControlledState-yUAT-leZ.js";import"./Label-DkgZd0Gw.js";import"./Dialog-K1psAsFf.js";import"./RSPContexts-ALCmHzcd.js";import"./OverlayArrow-BKaPkWbW.js";import"./useResizeObserver-zWdOXMvT.js";import"./Collection-DVkjdMjT.js";import"./index-CJyCjhTy.js";import"./Separator-Bf8GRhF7.js";import"./SelectionManager-D943sEC2.js";import"./useEvent-CBo9AmGw.js";import"./scrollIntoView-CMEx-M2c.js";import"./useDescription-CTuGe5IW.js";import"./ListKeyboardDelegate-BFbJBipB.js";import"./PressResponder-BvdOkDwv.js";import"./useLocalizedStringFormatter-CslKPgSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjVJX3Fl.js";import"./getScrollParent-9kULsret.js";import"./ModalOverlay-BStbUUfg.js";import"./x-CqyquoJ7.js";import"./createLucideIcon-BTNAcQe3.js";import"./useLocalizedStringFormatter-DN9P_vz1.js";import"./Heading-Dvuki4_N.js";import"./info-BLF_5Qzs.js";import"./Popover-C0NXiew-.js";import"./check-Bl_f2_WN.js";import"./useToggleState-DJMKm7j2.js";import"./TextFieldBase-B3DzzNJh.js";import"./Input-ByVNz-Ba.js";import"./useTextField-CU-cWo7S.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dxstg9Vc.js";import"./DragAndDrop-CDKcbgBJ.js";import"./inertValue-DlgeyaKo.js";import"./useListState-D7KGqjmP.js";import"./TagGroup-0QaMNa4c.js";import"./useHighlightSelectionDescription-Dhr0atX-.js";import"./useUpdateEffect-C4qSBNTr.js";import"./useHasTabbableChild-D8naVHoo.js";import"./chevron-down-CenwFc1B.js";import"./Virtualizer-PzqXH4pX.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
