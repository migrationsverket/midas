import{j as e}from"./iframe-e7dVJZ80.js";import{$ as c}from"./Form-IYjIxsTE.js";import{G as d}from"./Grid-Bt__A-DJ.js";import{G as i}from"./GridItem-0YVhqRJz.js";import{T as t}from"./TextField-cLs0ia0n.js";import{S as l}from"./Select-BRuc4xj0.js";import{B as a}from"./Button-B2F6YuiM.js";import{R as x,a as u}from"./Radio-BwtaWfjX.js";import{C as I}from"./CheckboxGroup-DxT_GtYT.js";import{C as G}from"./Checkbox-G5Htfr-v.js";import{L as p}from"./ListBoxItem-BQufmusF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CEQ_Va0c.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BY_IYQMh.js";import"./useFocusRing-B9Rn1B2s.js";import"./index-5fHP5ATJ.js";import"./index-CaEVLjia.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bj6IeSZE.js";import"./TextField-ZT8KrAqw.js";import"./FieldError-9Gg6ZPlh.js";import"./Text-CPsvfpaa.js";import"./Text-CQWMXX5Z.js";import"./RSPContexts-CYNFOXtI.js";import"./Group-nMV4aCPD.js";import"./Input-6WO6L4_6.js";import"./Hidden-DUO5PkD4.js";import"./Button-HeijaR4V.js";import"./useLabels-DJlzxkkZ.js";import"./useButton-DzyK9NH4.js";import"./useTextField-BdD3utws.js";import"./useControlledState-CbdyQTTS.js";import"./useField-BJBsJOF5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D4gVihti.js";import"./Dialog-DD3oYIkL.js";import"./OverlayArrow-C9B0vpMn.js";import"./useResizeObserver-VmwogLqB.js";import"./Collection-CUCHkADT.js";import"./index-BDQNA3nl.js";import"./Separator-UJFGSXNG.js";import"./SelectionManager-Bh3IPHon.js";import"./useEvent-gTSMTyTm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc_8RdsI.js";import"./useDescription-DcKo4w2-.js";import"./ListKeyboardDelegate-LtZO_R9S.js";import"./PressResponder-BWvtNBff.js";import"./useLocalizedStringFormatter-Dy8GwP1X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-TB_kawwb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-VT-zoUNe.js";import"./x-CxyJyYcT.js";import"./createLucideIcon-tRzhitig.js";import"./useLocalizedStringFormatter-Di1nCEID.js";import"./Heading-Bq0ZTA9f.js";import"./info-bXNc76H8.js";import"./Popover-DJnFnc6B.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B9sLax5K.js";import"./DragAndDrop-DmYGyVfE.js";import"./inertValue-Dt_dHvov.js";import"./useListState-BxSJ_aET.js";import"./Tag-D1ZmoTCq.js";import"./useHighlightSelectionDescription-DKc8x3r4.js";import"./useUpdateEffect-Bui7edpS.js";import"./useHasTabbableChild-CS3xigXy.js";import"./chevron-down-DgornBlB.js";import"./Button.module-Co5e5YHp.js";import"./check-CTxG8rOo.js";import"./useToggleState-Bsdk-zaB.js";import"./Virtualizer-DYJ7mSwF.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
