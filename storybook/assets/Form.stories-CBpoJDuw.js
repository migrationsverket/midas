import{j as e}from"./iframe-DXDVea5_.js";import{$ as c}from"./Form-B5273415.js";import{G as d}from"./Grid-2qULs4Mt.js";import{G as i}from"./GridItem-DSasHBei.js";import{a as x,R as u}from"./Radio-56u4evZM.js";import{C as I}from"./CheckboxGroup-DO6R1EHx.js";import{C as G}from"./Checkbox-DTfbiXJr.js";import{T as t}from"./TextField-pX8mjF8p.js";import{S as l}from"./Select-fXJh8IUe.js";import{L as p}from"./ListBoxItem-CYbkDk6W.js";import{B as a}from"./Button-gdOhQx8I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DmTgTNnL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CD1pPQHY.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./clsx-Ciqy0D92.js";import"./Group-BIgewlh5.js";import"./FieldError-D7SZhjyZ.js";import"./Text-0AXlCnaa.js";import"./Text-gvZnrrW0.js";import"./Button-B96QzwM1.js";import"./Hidden-Fdu7osLZ.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./SelectionIndicator-CUHlcaIO.js";import"./useField-Dfhs4VTn.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./useControlledState-CbOkSAeB.js";import"./Label-DBFtbpIU.js";import"./Dialog-nINmKPJf.js";import"./RSPContexts-BS0M9Uv7.js";import"./OverlayArrow-CRP3dZdS.js";import"./useResizeObserver-BNZgHg0J.js";import"./Collection-DngwyB9A.js";import"./index-mTCCUShB.js";import"./Separator-D6T5eon5.js";import"./SelectionManager-D_4gDcnl.js";import"./useEvent-JQpqaSX3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cg7YGuRz.js";import"./ListKeyboardDelegate-80wPV2vO.js";import"./PressResponder-CQUrdmzO.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-UV0FKMox.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Dn2vW3HL.js";import"./createLucideIcon-De5c0UOR.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./Heading-C9UszV_P.js";import"./info--WkdfYOi.js";import"./Popover-C8U0P2YZ.js";import"./check-Cq2Fi8Q5.js";import"./useToggleState-Dh93-PiU.js";import"./TextFieldBase-DwN9Ov1c.js";import"./Input-CVHptXoC.js";import"./useTextField-DozbA8P4.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dcc6Xzm6.js";import"./DragAndDrop-BtrIPRyO.js";import"./inertValue-BGqfuOEh.js";import"./useListState-CRIw7FJA.js";import"./Tag-CLuLzX-6.js";import"./useHighlightSelectionDescription-sY9qjLKl.js";import"./useUpdateEffect-Dd9sKSLJ.js";import"./useHasTabbableChild-DB3FJQ8l.js";import"./chevron-down-XD_oYPmv.js";import"./Virtualizer-Dl1L4U9S.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
