import{j as e}from"./iframe-BBLpafwf.js";import{$ as c}from"./Form-yQ_OW8mU.js";import{G as d}from"./Grid-B0Ra1c9c.js";import{G as i}from"./GridItem-DfF5_Qil.js";import{T as t}from"./TextField-B9_kmqaj.js";import{S as l}from"./Select-BpvDthx5.js";import{B as a}from"./Button-BN6Xx9p1.js";import{R as x,a as u}from"./Radio-DkCzOznx.js";import{C as I}from"./CheckboxGroup-BqkGkHuz.js";import{C as G}from"./Checkbox-lfXlDdhN.js";import{L as p}from"./ListBoxItem-C-CUx5Tr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRp6xYAP.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-5FNa8kHq.js";import"./useFocusRing-BBkgX1wP.js";import"./index-e8OPjBDY.js";import"./index-DI-_kXwT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C7ShCGJL.js";import"./TextField-C3K1nKHL.js";import"./FieldError-D1_ZzpXP.js";import"./Text-BYn86eAe.js";import"./Text-BnZA8JI4.js";import"./RSPContexts-D3LkOCyV.js";import"./Group-Csgs3sLF.js";import"./Input-CIa-gJPF.js";import"./Hidden-DOfZA5Lu.js";import"./Button-Dw_yAd9_.js";import"./useLabels-Qhz8Dm5U.js";import"./useButton-DPuerBPE.js";import"./useTextField-DJsAUwHM.js";import"./useControlledState-CsxbOKlZ.js";import"./useField-CjE2cDRc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-flO3u-dF.js";import"./Dialog-DFWrA9LR.js";import"./OverlayArrow-mqJEzkN3.js";import"./useResizeObserver-CdAyETvE.js";import"./Collection-B093dmnl.js";import"./index-BADtiS-W.js";import"./Separator-CnkSVuVF.js";import"./SelectionManager-DcemNVOz.js";import"./useEvent-yqTNqBe0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKAjyGv9.js";import"./useDescription-DYWxkH0Q.js";import"./ListKeyboardDelegate-gZx99BPY.js";import"./PressResponder-C0bADhVL.js";import"./useLocalizedStringFormatter-B9BHTFqE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DV-9S-lF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DuPFMQS_.js";import"./x-DuCwogba.js";import"./createLucideIcon-_MMWm-eO.js";import"./useLocalizedStringFormatter-6NC92a7V.js";import"./Heading-B2r7xaTF.js";import"./info-CyajlpHb.js";import"./Popover-Yimf-Fr0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BJa5PtDK.js";import"./DragAndDrop-BI5pm_DF.js";import"./inertValue-DDQ26U8a.js";import"./useListState-DmhvYDNA.js";import"./Tag-Ct7AxFLZ.js";import"./useHighlightSelectionDescription-BfJlTPDi.js";import"./useUpdateEffect-BuzJ6oQP.js";import"./useHasTabbableChild-DOE1eQs0.js";import"./chevron-down-Cb3YFSjw.js";import"./Button.module-Co5e5YHp.js";import"./check-BsM42v1t.js";import"./useToggleState-R6ANs8Ob.js";import"./Virtualizer-v8Ipx-7F.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
