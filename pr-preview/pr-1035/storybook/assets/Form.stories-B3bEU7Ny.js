import{j as e}from"./iframe-BQBOUe4L.js";import{$ as c}from"./Form-mxlt6ylo.js";import{G as d}from"./Grid-hwSM6LEj.js";import{G as i}from"./GridItem-DfZfn2Ti.js";import{a as x,R as u}from"./Radio-BzvcYM58.js";import{C as I}from"./CheckboxGroup-B2-WJEPk.js";import{C as G}from"./Checkbox-Chcysf29.js";import{T as t}from"./TextField-CYFrFE1F.js";import{S as l}from"./Select-BQtrEbQj.js";import{L as p}from"./ListBoxItem-DAR8kCcY.js";import{B as a}from"./Button-Cim8R03s.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CRMkcUEf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DspKaQyW.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./clsx-Ciqy0D92.js";import"./Group-B5seBaae.js";import"./FieldError-U_WPsfks.js";import"./Text-4aw7o7le.js";import"./Text-B_t0zTpM.js";import"./Button-CvEjFmDh.js";import"./Hidden-DlSKSdAn.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./SelectionIndicator-DTndX8cd.js";import"./useField-CPvbugzP.js";import"./VisuallyHidden-DljAyihR.js";import"./useControlledState-DM-5-Rrt.js";import"./Label-BMUQz-h6.js";import"./Dialog-BVqK9tm3.js";import"./RSPContexts-CvjO9LUS.js";import"./OverlayArrow-C1PBVSGx.js";import"./useResizeObserver-BAcHADGr.js";import"./Collection-DA9nos4X.js";import"./index-DPtY_q6d.js";import"./Separator-CvqEesBD.js";import"./SelectionManager-CnZFBJPA.js";import"./useEvent-5ECDfKWj.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C0HCyUwc.js";import"./ListKeyboardDelegate-CLrR3jmQ.js";import"./PressResponder-qNABUEhU.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BWDp05La.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cp8v8-j6.js";import"./createLucideIcon-DCYizV4H.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./Heading-DYmoF48W.js";import"./info-CTeb1YdU.js";import"./Popover-DUiRFiBj.js";import"./check-DznLR02y.js";import"./useToggleState-BUiXNMTm.js";import"./TextFieldBase-Bd6mhx1o.js";import"./TextField-BvA2zY8A.js";import"./Input-DSdcwYaA.js";import"./useTextField-Vk17g3pG.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DKgUgFHb.js";import"./DragAndDrop-Czj9AWTD.js";import"./inertValue-DR94txFM.js";import"./useListState-iylnvIvL.js";import"./Tag-Ekb7g8vn.js";import"./useHighlightSelectionDescription-C0T0eAFj.js";import"./useUpdateEffect-of8x0zcV.js";import"./useHasTabbableChild-BIio-tgx.js";import"./chevron-down-DEQ_K8n4.js";import"./Virtualizer-COq7e_36.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
