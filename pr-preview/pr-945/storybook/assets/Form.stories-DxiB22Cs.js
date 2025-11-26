import{j as e}from"./iframe-IjzrHHNv.js";import{$ as c}from"./Form-BKcNnSFI.js";import{G as d}from"./Grid-BYvdmEzE.js";import{G as i}from"./GridItem-6ZXyTl1T.js";import{T as t}from"./TextField-BuRxsxPk.js";import{S as l}from"./Select-Dt-6NyPt.js";import{B as a}from"./Button-sMqW8jOV.js";import{R as x,a as u}from"./Radio-Gew-YSah.js";import{C as I}from"./CheckboxGroup-CeU3OZP1.js";import{C as G}from"./Checkbox-BihlFGSe.js";import{L as p}from"./ListBoxItem-B18Ubev-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CODsTHLU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dcu2uaUl.js";import"./useFocusRing-BZeMGEJ-.js";import"./index-D4Wmkx7i.js";import"./index-Bx7zkVbj.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CtWJSaO1.js";import"./TextField-D-JUdTQy.js";import"./FieldError-cOUBxcF_.js";import"./Text-Du-4Iq6e.js";import"./Text-CYvKHqQ5.js";import"./RSPContexts-Cog8PMMM.js";import"./Group-WThpLVGi.js";import"./Input-CImJ4dOB.js";import"./Hidden-3HVx6IyU.js";import"./Button-C3uIaOSh.js";import"./useLabels-BF_CgXn-.js";import"./useButton-BpNajOCa.js";import"./useTextField-xb8JptP9.js";import"./useControlledState-CNtbpmwP.js";import"./useField-Dlw4FN-O.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-6OAJxp8z.js";import"./Dialog-BQDQIEAJ.js";import"./OverlayArrow-BXELcGm0.js";import"./useResizeObserver-D9h0KmrS.js";import"./Collection-CNd-wEyr.js";import"./index-9SXr6gbX.js";import"./Separator-Czubewxg.js";import"./SelectionManager-D96o_RyB.js";import"./useEvent-Bi0O_rqd.js";import"./scrollIntoView-CpCWy20X.js";import"./SelectionIndicator-BLsNQ6Cy.js";import"./useDescription-C4YZ4ECy.js";import"./ListKeyboardDelegate-CPYpxplA.js";import"./PressResponder-4CKAgpgq.js";import"./useLocalizedStringFormatter-CXKVQPJR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BV9iHv67.js";import"./VisuallyHidden-QGHASBvs.js";import"./x-eAOmc7wb.js";import"./createLucideIcon-ILFWgvoA.js";import"./useLocalizedStringFormatter-Zy7JvKDD.js";import"./Heading-D-GWoLjA.js";import"./info-DQ4Y6xi8.js";import"./Popover-B9QS2LME.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CqTzGXEy.js";import"./DragAndDrop-B1Z4T1i7.js";import"./inertValue-Br2V8Aix.js";import"./useListState-CIlBdfoy.js";import"./Tag-DONnZFj7.js";import"./useHighlightSelectionDescription-De5MykWc.js";import"./useUpdateEffect-C_pp7Oh5.js";import"./useHasTabbableChild-DKHAJaEg.js";import"./chevron-down-DNNnT3yw.js";import"./Button.module-CtQ1deO8.js";import"./check-CjmoquIn.js";import"./useToggleState-BF9NPzYX.js";import"./Virtualizer-CHM4QCaU.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
