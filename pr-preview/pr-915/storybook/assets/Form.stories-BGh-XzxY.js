import{j as e}from"./iframe-DzJ58csS.js";import{$ as c}from"./Form-D7Y8lqvg.js";import{G as d}from"./Grid-DVIXKKRN.js";import{G as i}from"./GridItem-BRKBPmHM.js";import{T as t}from"./TextField-4D0upl_l.js";import{S as l}from"./Select-rM0oZ5sv.js";import{B as a}from"./Button-DBLrduIN.js";import{R as x,a as u}from"./Radio-BrIG1bq6.js";import{C as I}from"./CheckboxGroup-lG7oIw4p.js";import{C as G}from"./Checkbox-C8jE1Dxu.js";import{L as p}from"./ListBoxItem-BGXpp05r.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-kFG7V26A.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B29-zsDb.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DSq9krSI.js";import"./FieldError-F5XRq1hW.js";import"./Text-CcO9WK_c.js";import"./Text-CF12HrJc.js";import"./RSPContexts-Bw7A04gx.js";import"./Group-B6tPL0Qj.js";import"./Input-D8501TXN.js";import"./Hidden-DixvikVn.js";import"./Button-XpnQOI7L.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./useTextField-D8UGdEv0.js";import"./useControlledState-BddBMCaY.js";import"./useField-BE4CK7tW.js";import"./TextField.module-DGUQcbB9.js";import"./Label-O0r8Nmxn.js";import"./Dialog-BwvwdNwE.js";import"./OverlayArrow-BpzZqzT2.js";import"./useResizeObserver-DOZ5a32s.js";import"./Collection-BqTlgEej.js";import"./index-CXWhLhHy.js";import"./Separator-DSaNaPFI.js";import"./SelectionManager-D0Fz5nNs.js";import"./useEvent-Bp2Ufb0u.js";import"./scrollIntoView-y1tmZMLC.js";import"./SelectionIndicator-Chf0WN9P.js";import"./useDescription-CFNj517p.js";import"./ListKeyboardDelegate-BN17OQSZ.js";import"./PressResponder-napPBZaN.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DyLAwff4.js";import"./VisuallyHidden-bMdwBiLV.js";import"./useLocalizedStringFormatter-B8TFtJTY.js";import"./x-DG_jh2y7.js";import"./createLucideIcon-DY2CvNkn.js";import"./Heading-Cp-haDdt.js";import"./info-UhZ3BMBW.js";import"./Popover-CiIQfHyY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BrfkKD4v.js";import"./DragAndDrop-1--bB24E.js";import"./inertValue-B_8W-qG4.js";import"./useListState-gT9EIty9.js";import"./Tag-B31Z8puh.js";import"./useHighlightSelectionDescription-Ip1V35UY.js";import"./useUpdateEffect-96u3K8Yv.js";import"./useHasTabbableChild-B8EPlbcj.js";import"./chevron-down-sgLusXq3.js";import"./Button.module-CtQ1deO8.js";import"./check-BcqZtP3C.js";import"./useToggleState-CaLWxpC_.js";import"./Virtualizer-CjeyR_As.js";const Ve={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Xe as __namedExportsOrder,Ve as default};
