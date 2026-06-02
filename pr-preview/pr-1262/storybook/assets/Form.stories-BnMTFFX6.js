import{j as e}from"./iframe-C8wbd0xw.js";import{c}from"./Form-BSu3vikM.js";import{G as d}from"./Grid-DpVmsADF.js";import{G as i}from"./GridItem-ITS8RKB9.js";import{a as x,R as u}from"./Radio-Bsw10jb_.js";import{C as I}from"./CheckboxGroup-COP8kTaN.js";import{C as G}from"./Checkbox-VsiDfPyW.js";import{T as t}from"./TextField-BwShjMjZ.js";import{S as l}from"./Select-DVwR0oKX.js";import{L as p}from"./ListBoxItem-tcIPGjGd.js";import{B as a}from"./Button-CYDl1rDD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bg15NFQh.js";import"./utils-BvSYGh_U.js";import"./clsx-B-dksMZM.js";import"./index-620_CD08.js";import"./index-Db09nDsC.js";import"./clsx-Ciqy0D92.js";import"./Group-DXxlE4I0.js";import"./FieldError-BgH3yzjq.js";import"./Text-CNrdh4nj.js";import"./Text-DfltvgM6.js";import"./Button-CshDR4Sg.js";import"./Hidden-C80CkRC2.js";import"./useLabel-VczPGpuz.js";import"./useLabels-DNgQ3t5h.js";import"./useButton-J8srJfI2.js";import"./SelectionIndicator-DmrAqqdr.js";import"./useField-C7yQkaFy.js";import"./VisuallyHidden-Br2qyVeY.js";import"./useControlledState-Ctd2zKcE.js";import"./Label-kVgb5yE3.js";import"./Dialog-CS7-kOIr.js";import"./RSPContexts-CJjr_xEH.js";import"./OverlayArrow-BVV2KLUK.js";import"./useResizeObserver-iHhzz845.js";import"./Collection-KTfy2LV8.js";import"./index-CoPqZ-2G.js";import"./Separator-BNTE2zLq.js";import"./SelectionManager-CRnawsor.js";import"./useEvent-pYuuJSlJ.js";import"./scrollIntoView-BHLgP0Bo.js";import"./useDescription-Cy_FD0MX.js";import"./ListKeyboardDelegate-CKOowGuK.js";import"./PressResponder-DlflJfyZ.js";import"./useLocalizedStringFormatter-CzJGuAX0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CVdBnzH-.js";import"./getScrollParent-upgEqPZt.js";import"./ModalOverlay-CzuFwIlx.js";import"./x-BZlVtVMn.js";import"./createLucideIcon-DuCqgbBp.js";import"./useLocalizedStringFormatter-Cn7XrlA9.js";import"./Heading-yVu3W5Is.js";import"./info-40etmgys.js";import"./Popover-BP18h3f6.js";import"./check-DGZrK19e.js";import"./useToggleState-EH1QGHG9.js";import"./TextFieldBase-h5ezAgbv.js";import"./Input-Bd26tLqj.js";import"./useTextField-DOnZLDFN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DKIXMztf.js";import"./DragAndDrop-D0BJcLyl.js";import"./inertValue-t6VPIf_k.js";import"./useListState-DLb4Dfbp.js";import"./TagGroup-CsX3O-zz.js";import"./useHighlightSelectionDescription-NUrpS7WU.js";import"./useUpdateEffect-ZIiICdHp.js";import"./useHasTabbableChild-JAT42ZKN.js";import"./chevron-down-CMkarMUr.js";import"./Virtualizer-BVUfvvse.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
