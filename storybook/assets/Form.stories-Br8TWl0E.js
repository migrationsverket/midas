import{j as e}from"./iframe-COikYHdP.js";import{$ as c}from"./Form-DAtbnfCi.js";import{G as d}from"./Grid-C8yFcr9N.js";import{G as i}from"./GridItem-CAaS3eiC.js";import{a as x,R as u}from"./Radio-BZZUBhN3.js";import{C as I}from"./CheckboxGroup-5yxfKFVD.js";import{C as G}from"./Checkbox-CDPf7pnG.js";import{T as t}from"./TextField-DdeAq7Vo.js";import{S as l}from"./Select-DScUW0ny.js";import{L as p}from"./ListBoxItem-yLZcwN8D.js";import{B as a}from"./Button-jvTkoE8j.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BMDm-KrN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9TCmMh5.js";import"./useFocusRing-BWhmDfF8.js";import"./index-DaHyXhuy.js";import"./index-E3BpGcaE.js";import"./clsx-Ciqy0D92.js";import"./Group-DZHSABcu.js";import"./FieldError-DV7LrvHp.js";import"./Text-NJjQXwoJ.js";import"./Text-B3B9omX-.js";import"./Button-AP7Y4Mno.js";import"./Hidden-BkpCwkk8.js";import"./useLabels-M7dy5Zja.js";import"./useButton-CCmPBSSV.js";import"./SelectionIndicator-BEa7QTXJ.js";import"./useField-Cj2sp65a.js";import"./VisuallyHidden-PvYD6Ub5.js";import"./useControlledState-Cl3D1B3q.js";import"./Label-BZ7S-urD.js";import"./Dialog-CLFuv6eo.js";import"./RSPContexts-BYXms5mf.js";import"./OverlayArrow-CuE0bO4i.js";import"./useResizeObserver-BBtOrrfN.js";import"./Collection-9SssQ7g7.js";import"./index-C6l6_kf4.js";import"./Separator-72pt8j9u.js";import"./SelectionManager-BpR3qSNY.js";import"./useEvent-DLghMCOA.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHrfYc6I.js";import"./ListKeyboardDelegate-D1f7Mx4w.js";import"./PressResponder-DT9HIJbT.js";import"./useLocalizedStringFormatter-Dt-u1m1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_I41jya.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DsF834kI.js";import"./createLucideIcon-Cfor4pko.js";import"./useLocalizedStringFormatter-fXUv9IGD.js";import"./Heading-D5tI5UT-.js";import"./info--z7ZDhbZ.js";import"./Popover-BAgex6g3.js";import"./check-BjeCz2Me.js";import"./useToggleState-CVocR7-M.js";import"./TextFieldBase-mT90SM5U.js";import"./Input-CQH7djhz.js";import"./useTextField-RLOY_8_i.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Ioa3bAQU.js";import"./DragAndDrop-DZWJKb7f.js";import"./inertValue-D5fuOLGc.js";import"./useListState-Db6u5koX.js";import"./TagGroup-CqDD5Bfy.js";import"./useHighlightSelectionDescription-DsaBHmmc.js";import"./useUpdateEffect-C7ITgazV.js";import"./useHasTabbableChild-DNa8XJj7.js";import"./chevron-down-CDC1yw6j.js";import"./Virtualizer-BrmK4GDm.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
