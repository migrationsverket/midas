import{j as e}from"./iframe-Chekwr6M.js";import{$ as c}from"./Form-C1k2uELU.js";import{G as d}from"./Grid-C-vcwGlW.js";import{G as i}from"./GridItem-BYep3UR9.js";import{a as x,R as u}from"./Radio-B0KiL0J0.js";import{C as I}from"./CheckboxGroup-9DmneM7H.js";import{C as G}from"./Checkbox-DamWw9J5.js";import{T as t}from"./TextField-Ch_uiyuf.js";import{S as l}from"./Select-C5JpsaT5.js";import{L as p}from"./ListBoxItem-BlWAveMZ.js";import{B as a}from"./Button-D5FNdohA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj64B4Ck.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DohLj8tG.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./clsx-Ciqy0D92.js";import"./Group-BPxDsLqx.js";import"./FieldError-DCB-eHPb.js";import"./Text-d5-92hiR.js";import"./Text-CNbIZlGx.js";import"./Button-Z4awFVTj.js";import"./Hidden-Dy--Tx0W.js";import"./number-DfkVkf0F.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./SelectionIndicator-B5UMCGiW.js";import"./useField-CXgMMZV1.js";import"./VisuallyHidden-CfeHWJtp.js";import"./useControlledState-CLkXqHsM.js";import"./Label-CIhWk8XG.js";import"./Dialog-BkMCqRU4.js";import"./RSPContexts-B-5HPXFu.js";import"./OverlayArrow-C_kKr4TA.js";import"./useResizeObserver-Dp5qH922.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./Separator-BsKQl79r.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BaU05DyX.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./PressResponder-jE3E7TsH.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mznppo_U.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-B37h07YR.js";import"./x-DVt_hLRk.js";import"./createLucideIcon-CPHdlOig.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./Heading-CaO4mVhn.js";import"./info-DnwbVtMC.js";import"./Popover-BCPIG4gw.js";import"./check-DKw1rHLP.js";import"./useToggleState-BmQLkzXi.js";import"./TextFieldBase-ctjBT7tv.js";import"./TextField-DF3UR0qa.js";import"./Input-DBCMd8rL.js";import"./useTextField-BPdk6fHk.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CY3lNAF4.js";import"./DragAndDrop-DB_ZqrSz.js";import"./inertValue-Dw3EJLO2.js";import"./useListState-DTPrTi5B.js";import"./Tag-DFk_5e4p.js";import"./useHighlightSelectionDescription-Qg6eYY2Z.js";import"./useUpdateEffect-SuTRzneO.js";import"./useHasTabbableChild-C5Zh-Kem.js";import"./chevron-down-CfoiKegA.js";import"./Virtualizer-DngOq4EM.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
