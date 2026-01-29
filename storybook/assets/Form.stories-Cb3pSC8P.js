import{j as e}from"./iframe-_gH3GU_Z.js";import{$ as c}from"./Form-BOENKVbc.js";import{G as d}from"./Grid-Baii62Jq.js";import{G as i}from"./GridItem-BtO34MqL.js";import{T as t}from"./TextField-DLCfEsQA.js";import{S as l}from"./Select-B75qg33M.js";import{B as a}from"./Button-DXF4_9k-.js";import{R as x,a as u}from"./Radio-B6KniAbE.js";import{C as I}from"./CheckboxGroup-DAV3OQ9_.js";import{C as G}from"./Checkbox-ByylVEMr.js";import{L as p}from"./ListBoxItem-CjJaBnZy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CfJDu102.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-oTP1bryq.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BBAe3u_D.js";import"./TextField-Blx-Sch_.js";import"./FieldError-DpcLG2Fx.js";import"./Text-BRHHCRG8.js";import"./Text-DjGT25-P.js";import"./RSPContexts-FS6mevKY.js";import"./Group-CAJ1002a.js";import"./Input-dBy5dk4r.js";import"./Hidden-D04Pc1_R.js";import"./Button-B0GHbiBt.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./useTextField--d7LR7vK.js";import"./useControlledState-D8rfmS1g.js";import"./useField-ByUbZnyG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-8HLPMpvk.js";import"./Dialog-BtuTLPLx.js";import"./OverlayArrow-BEIjUFBk.js";import"./useResizeObserver-BDJqeTBY.js";import"./Collection-CiCTCt3v.js";import"./index-CTMRyEef.js";import"./Separator-OXKMMQ8u.js";import"./SelectionManager-94IQVh0z.js";import"./useEvent-DDt3427d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ata1nNeT.js";import"./useDescription-DCw1B2k2.js";import"./ListKeyboardDelegate-BbjP68Pi.js";import"./PressResponder-D2R8re7P.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNQkECp5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./x-BwSPrVqf.js";import"./createLucideIcon-CfuZJf8D.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./Heading-BWcf_paK.js";import"./info-DxFAs9sc.js";import"./Popover-t_dPh4fH.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CHyWroAa.js";import"./DragAndDrop-D9mJ8oTf.js";import"./inertValue-DsYza5oI.js";import"./useListState-BIWMM0lC.js";import"./Tag-ev3Agk7H.js";import"./useHighlightSelectionDescription-D85MASo9.js";import"./useUpdateEffect-CTeb7m0H.js";import"./useHasTabbableChild-Cdlz6fqN.js";import"./chevron-down-C3H4XzTE.js";import"./Button.module-Co5e5YHp.js";import"./check-3JajyrTA.js";import"./useToggleState-CSsAH9oD.js";import"./Virtualizer-Z1yjo2Rg.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
