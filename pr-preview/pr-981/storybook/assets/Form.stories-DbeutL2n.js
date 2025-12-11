import{j as e}from"./iframe-CKrxTJqk.js";import{$ as c}from"./Form-8CW9ryOU.js";import{G as d}from"./Grid-BGmABzXz.js";import{G as i}from"./GridItem-BnxjDets.js";import{T as t}from"./TextField-CpTVtzZZ.js";import{S as l}from"./Select-C8SzRP10.js";import{B as a}from"./Button-DkUXR3sV.js";import{R as x,a as u}from"./Radio-Cn0ZgS6_.js";import{C as I}from"./CheckboxGroup-Du7EpCBO.js";import{C as G}from"./Checkbox-Cjp_Tdec.js";import{L as p}from"./ListBoxItem-Dn7F1huW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTp3wZxS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Drlp9Ls6.js";import"./useFocusRing-DRsukC58.js";import"./index-gQIqyNrY.js";import"./index-C-w1hNWf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DRdZ_VbZ.js";import"./TextField-7R4KL6gR.js";import"./FieldError-B2UvJ45R.js";import"./Text-DxGoKI9p.js";import"./Text-Ci3fUjCZ.js";import"./RSPContexts-uVMYOfO4.js";import"./Group-CFpzGYy5.js";import"./Input-B99NZbeJ.js";import"./Hidden-Bbcauoo1.js";import"./Button-DigNz_6t.js";import"./useLabels-FN4mMJOV.js";import"./useButton-B9vJGxui.js";import"./useTextField-D6547NmK.js";import"./useControlledState-DaVWaM2P.js";import"./useField-D6Gx9W1M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cqQE4xr_.js";import"./Dialog-bY3-AyaQ.js";import"./OverlayArrow-D10FCSGe.js";import"./useResizeObserver-DhOgD2oT.js";import"./Collection-mzSYiwho.js";import"./index-BwxB3nHP.js";import"./Separator-CHBDTMW7.js";import"./SelectionManager-CybRNFvT.js";import"./useEvent-DOM6ytFV.js";import"./scrollIntoView-fAHEVyF_.js";import"./SelectionIndicator-wQCjbn2j.js";import"./useDescription-epMjwWcy.js";import"./ListKeyboardDelegate-DuXJOj-k.js";import"./PressResponder-50-epSN9.js";import"./useLocalizedStringFormatter-a3l9aGqu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-qWpmxnYs.js";import"./VisuallyHidden-Lpl0yh2S.js";import"./x-Cgxi5PyF.js";import"./createLucideIcon-BNr4CCY-.js";import"./useLocalizedStringFormatter-CbUcgQXm.js";import"./Heading-Dd2GEWYO.js";import"./info-DjgBQLVF.js";import"./Popover-QHWmYIS1.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DSflC1Bb.js";import"./DragAndDrop-CEeo0p5f.js";import"./inertValue-BnGYVv7q.js";import"./useListState-CBDyxojK.js";import"./Tag-9tQGKp0v.js";import"./useHighlightSelectionDescription-DOiYmgwq.js";import"./useUpdateEffect-BZG3Kl8j.js";import"./useHasTabbableChild-i40NhK4H.js";import"./chevron-down-B7s-PAmB.js";import"./Button.module-Co5e5YHp.js";import"./check-Cd9jSumr.js";import"./useToggleState-D8Gzb2Rv.js";import"./Virtualizer-tvgLcMaE.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
