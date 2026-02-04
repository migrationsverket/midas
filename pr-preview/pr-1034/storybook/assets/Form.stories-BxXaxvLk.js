import{j as e}from"./iframe-KIBzDUfV.js";import{$ as c}from"./Form-DwKNPYWJ.js";import{G as d}from"./Grid-DxUx7tC6.js";import{G as i}from"./GridItem-BtqAa1LZ.js";import{a as x,R as u}from"./Radio-CRMyWnU5.js";import{C as I}from"./CheckboxGroup-C4oEnKex.js";import{C as G}from"./Checkbox-BSdZBiOO.js";import{T as t}from"./TextField-Cuypn8q6.js";import{S as l}from"./Select-D5-0SAMT.js";import{L as p}from"./ListBoxItem-Df19ptH4.js";import{B as a}from"./Button-D_6pE22y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B3s11CxX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-2ZDFF5_3.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./clsx-Ciqy0D92.js";import"./Group-lnf1-D8B.js";import"./FieldError-CQia8U4U.js";import"./Text-BcfqcDG4.js";import"./Text-D2dj_Y_G.js";import"./Button-B74IQIIY.js";import"./Hidden-_s5Kzwns.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./SelectionIndicator-D-2tbCkj.js";import"./useField-ttnFMQCX.js";import"./VisuallyHidden-BM7AOnhj.js";import"./useControlledState-gvhGp19W.js";import"./Label-C8zDX718.js";import"./Dialog-w_4ICCSl.js";import"./RSPContexts-BKpto4kw.js";import"./OverlayArrow-BKZa25OL.js";import"./useResizeObserver-Cno1zDdz.js";import"./Collection-DoIqkMu3.js";import"./index-Bm9XISKF.js";import"./Separator-X9dAFN0X.js";import"./SelectionManager-BOhA1hAm.js";import"./useEvent-DlPvFlnY.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cc1bnlw8.js";import"./ListKeyboardDelegate-uR_8vA3x.js";import"./PressResponder-DBvYC6yD.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZGwHcL3.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CdrWRsxx.js";import"./createLucideIcon-DYfbqy8w.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./Heading-DAzo48yH.js";import"./info-D9i0MW6u.js";import"./Popover-CtEjwxEi.js";import"./check-R8312xx5.js";import"./useToggleState-Di-HErA6.js";import"./TextFieldBase-CW_H8NqU.js";import"./TextField-D4jNg4Oq.js";import"./Input-CDsDVhQo.js";import"./useTextField-Zlf3Ks9e.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ub8F3aoF.js";import"./DragAndDrop-CwA-Nlcm.js";import"./inertValue-Befu1L7n.js";import"./useListState-C0fdsHPF.js";import"./Tag-CEN7AslV.js";import"./useHighlightSelectionDescription-BO8rApP0.js";import"./useUpdateEffect-BB4T27K-.js";import"./useHasTabbableChild-B4dFDtuF.js";import"./chevron-down-BRSVjfBR.js";import"./Virtualizer-C11XLYoK.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
