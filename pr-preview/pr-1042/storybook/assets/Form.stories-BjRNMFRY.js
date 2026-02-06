import{j as e}from"./iframe-C_0qThD6.js";import{$ as c}from"./Form-CP8dFFLN.js";import{G as d}from"./Grid-C1CroT18.js";import{G as i}from"./GridItem-CAXuzstK.js";import{a as x,R as u}from"./Radio-H2wVQi5F.js";import{C as I}from"./CheckboxGroup-BfKVuvLI.js";import{C as G}from"./Checkbox-Blc_OSni.js";import{T as t}from"./TextField-DV1LkItG.js";import{S as l}from"./Select-DoirJJ5c.js";import{L as p}from"./ListBoxItem-BUqD9B8I.js";import{B as a}from"./Button-DqbGeqrs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-bnb8b6bb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-_flSi_SL.js";import"./useFocusRing-DfupDaWX.js";import"./index-BSnKqic_.js";import"./index-CPoNMQTv.js";import"./clsx-Ciqy0D92.js";import"./Group-BnNblr-R.js";import"./FieldError-CqD9H87d.js";import"./Text-CKF9tCug.js";import"./Text-Due48UAx.js";import"./Button-B_Hp7nF_.js";import"./Hidden-Btf5vQwa.js";import"./useLabels-05vWhTwh.js";import"./useButton-DiIDLtaM.js";import"./SelectionIndicator-BD2rQtLe.js";import"./useField-NVSHVjO7.js";import"./VisuallyHidden-pXLJ5Ug_.js";import"./useControlledState-DErGdLYP.js";import"./Label-BI3kUMtC.js";import"./Dialog-iHPmYWfL.js";import"./RSPContexts-CF-RUooF.js";import"./OverlayArrow-ABGG2CIh.js";import"./useResizeObserver-DKRF4YVY.js";import"./Collection-8BQnlDdc.js";import"./index-LWMPJS4z.js";import"./Separator-DhQCajtR.js";import"./SelectionManager-DWtY7fd0.js";import"./useEvent-Bc3qbCgw.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCtBRw9v.js";import"./ListKeyboardDelegate-BTX2vjTk.js";import"./PressResponder-C18Hdy5P.js";import"./useLocalizedStringFormatter-C4FXgmdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTSrpk2C.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BsH9rdWs.js";import"./createLucideIcon-CC2FZLZA.js";import"./useLocalizedStringFormatter-BQjkICgF.js";import"./Heading-CJSVZ5WU.js";import"./info-DiLFh1-W.js";import"./Popover-BDj1u3qP.js";import"./check-C3APs3wq.js";import"./useToggleState-CXK8mjZu.js";import"./TextFieldBase-C_rw7FTk.js";import"./TextField-wEfT5Iqc.js";import"./Input-DuMhtm_a.js";import"./useTextField-bQA4fmUY.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-y6jmPWqP.js";import"./DragAndDrop-CK9UAJft.js";import"./inertValue-DhuLV4Jo.js";import"./useListState-D5J7RCTN.js";import"./Tag-0oKOLpcH.js";import"./useHighlightSelectionDescription-CxCjLjSX.js";import"./useUpdateEffect-Ccqp90AI.js";import"./useHasTabbableChild-CV4WHckA.js";import"./chevron-down-BIbLhQZn.js";import"./Virtualizer-BjgXSi9p.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
