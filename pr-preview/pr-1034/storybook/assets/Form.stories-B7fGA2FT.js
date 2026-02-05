import{j as e}from"./iframe-JaJw4f7V.js";import{$ as c}from"./Form-C2RsKPnO.js";import{G as d}from"./Grid-Bb4sWc1o.js";import{G as i}from"./GridItem-DVMnD2ea.js";import{a as x,R as u}from"./Radio-BNrj5T6T.js";import{C as I}from"./CheckboxGroup-BrpCnIpa.js";import{C as G}from"./Checkbox-fH2Sr-ln.js";import{T as t}from"./TextField-CHJSTlOH.js";import{S as l}from"./Select-CFlbOnLy.js";import{L as p}from"./ListBoxItem-BOJewc-h.js";import{B as a}from"./Button-CEh1IEm-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CiBzJ336.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUCZo95t.js";import"./useFocusRing-UFPGKc_I.js";import"./index-Cz39_mtL.js";import"./index-B3G3P3vm.js";import"./clsx-Ciqy0D92.js";import"./Group-2uJJXykK.js";import"./FieldError-LdU8dMtl.js";import"./Text-BS3Ivz4K.js";import"./Text-DKa2NLkX.js";import"./Button-BNgll4Za.js";import"./Hidden-D0Dtcxd_.js";import"./useLabels-K8RTE3y-.js";import"./useButton-C_Iz2y8G.js";import"./SelectionIndicator-B9K3UV_S.js";import"./useField-CxzyvlHo.js";import"./VisuallyHidden-C0JdxdWR.js";import"./useControlledState-C32RUdaE.js";import"./Label-DTup1mfH.js";import"./Dialog-C2heK__L.js";import"./RSPContexts-L3Du4l0W.js";import"./OverlayArrow-DDtQ5meo.js";import"./useResizeObserver-B5E3Xlh9.js";import"./Collection-CiQe6VOS.js";import"./index-gOh7a-g6.js";import"./Separator-Cvq30Dpj.js";import"./SelectionManager-DUjG5DsX.js";import"./useEvent-DlS508sr.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DImf0UX5.js";import"./ListKeyboardDelegate-DiKlfXRL.js";import"./PressResponder-CPnHHEUa.js";import"./useLocalizedStringFormatter-Brc7ObIZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fJE5O-Tw.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CYOQLw97.js";import"./createLucideIcon-Ct39Qqpq.js";import"./useLocalizedStringFormatter-CGp_mLDv.js";import"./Heading-CVAPxIf9.js";import"./info-mw4rprEj.js";import"./Popover-oGE609at.js";import"./check-Dd7Zfm8U.js";import"./useToggleState-hNMg8iN5.js";import"./TextFieldBase-_umHOOs7.js";import"./TextField-ZCFTsT6v.js";import"./Input-BnLYlNF1.js";import"./useTextField-FQoj7CiH.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D5K2v7-V.js";import"./DragAndDrop-bRQf8eyt.js";import"./inertValue-BYU27VvX.js";import"./useListState-BfupoXbo.js";import"./Tag-BXQsoZ1d.js";import"./useHighlightSelectionDescription-nQ7k1lZr.js";import"./useUpdateEffect-BLC0Lz13.js";import"./useHasTabbableChild-C4hNjGph.js";import"./chevron-down-1O32c8tR.js";import"./Virtualizer-BAFVjHrF.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
